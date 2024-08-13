"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import RightpanelDashboard from "@/components/Common/RightpanelDashboard";
import LeftpanelDashboard from "@/components/Common/LeftpanelDashboard";
import Modal from "@/components/Common/Modal";
import TextGenerator from "@/components/TextGenerator/TextGenerator";
import StaticbarDashboard from "@/components/Common/StaticbarDashboard";
import { Message as MessageProps, useChat } from "ai/react";
import Image from "next/image";
import Reaction from "@/components/Common/Reaction";
import { Tooltip } from "react-tooltip";
import sal from "sal.js";
import Link from "next/link";


const userimg = "/images/team/team-01.jpg"
const aiimg = "/images/team/avater.png"

const TextGeneratorPage = () => {
  const [generating, setGenerating] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/guru",
    initialMessages: [
      {
        id: "0",
        role: "system",
        content: `Welcome to Finanziara Section
    
    Let's compare the Vendors quotes
        `,
      },

    ],
    onResponse: () => {
      setGenerating(false);
    },
  });
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter(file => file.type === "application/pdf");

    if (validFiles.length !== files.length) {
      alert("Only PDF files are allowed.");
      return;
    }

    setUploadedFiles(validFiles);
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleSubmit(e);
      setGenerating(true);
    },
    [handleSubmit],
  );
  useEffect(() => {
    sal();
    const cards = document.querySelectorAll(".bg-flashlight");
    cards.forEach((bgflashlight) => {
      bgflashlight.onmousemove = function (e) {
        let x = e.pageX - bgflashlight.offsetLeft;
        let y = e.pageY - bgflashlight.offsetTop;

        bgflashlight.style.setProperty("--x", x + "px");
        bgflashlight.style.setProperty("--y", y + "px");
      };
    });
  }, []);
  return (
    <>
      <main className="page-wrapper rbt-dashboard-page">
        <Context>
          <div className="rbt-panel-wrapper">
            <HeaderDashboard display="" />
            <PopupMobileMenu />
            <LeftpanelDashboard />
            <RightpanelDashboard />
            <Modal />
            <div className="rbt-main-content">
              <div className="rbt-daynamic-page-content">
                <div className="rbt-dashboard-content">
                  <div className="content-page">
                    <div
                      className="chat-box-list pt--30"
                      id="chatContainer"
                      data-sal-duration="700"
                      data-sal-delay="100"
                    >
                      {messages &&
                        messages.map((data, index) => (
                          <>
                            {
                              data.role == "user" ?
                                <div className="chat-box author-speech bg-flashlight">
                                  <div className="inner">
                                    <div className="chat-section">
                                      <div className="author">
                                        <Image
                                          className="w-100"
                                          width={40}
                                          height={40}
                                          src={userimg}
                                          alt="Author"
                                        />
                                      </div>
                                      <div className="chat-content">
                                        <h6 className="title">You</h6>
                                        <p>{data.content}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                :
                                <div className="chat-box ai-speech bg-flashlight">
                                  <div
                                    className="inner top-flashlight leftside light-xl"
                                  >
                                    <div className="chat-section generate-section">
                                    </div>
                                    <div className="chat-section">
                                      <div className="author">
                                        <Image
                                          className="w-100"
                                          src={aiimg}
                                          width={40}
                                          height={40}
                                          alt="ChatenAI"
                                        />
                                      </div>
                                      <div className="chat-content">
                                        <h6 className="title">
                                          Finanziara bot
                                          <span className="rainbow-badge-card">
                                            Bot
                                          </span>
                                        </h6>
                                        <p className="mb--20">{data.content}</p>
                                        <Reaction />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            }
                          </>
                        ))}
                      {
                        generating &&
                        <div className="chat-box ai-speech bg-flashlight">
                          <div
                            className="inner top-flashlight leftside light-xl"
                          >
                            <div className="chat-section generate-section">
                              <div className="author">
                                <Image
                                  src="/images/icons/loader-one.gif"
                                  width={40}
                                  height={40}
                                  alt="Loader Images"
                                />
                              </div>
                              <div className="chat-content">
                                <h6 className="title color-text-off mb--0">
                                  Generating your response ....
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                  <div className="rbt-static-bar">
                    <Tooltip id="my-tooltip" className="custom-tooltip tooltip-inner" />
                    <div className="d-flex overflow-auto scroll-container">
                      {uploadedFiles.map((file, index) => (

                          <div
                        className="genarator-card disabled"
                      >
                        <div className="inner " data-bs-dismiss="modal">
                          <div className="left-align">
                            <div className="img-bar">
                              <Image
                                src="/images/PDF-image.png"
                                width={50}
                                height={50}
                                alt="AI Generator"
                              />
                            </div>
                            <h5 className="title">{file.name}</h5>
                          </div>
                        </div>
                      </div>
                      ))}
                    </div>
                    <form className="new-chat-form border-gradient" onSubmit={onSubmit}>
                      <textarea
                        rows="1"
                        placeholder="Send a message..."
                        value={input}
                        onChange={handleInputChange}
                      ></textarea>
                      <div className="left-icons">
                        <div title="ChatenAI" className="form-icon icon-gpt">
                          <i className="feather-aperture"></i>
                        </div>
                      </div>
                      <div className="right-icons">
                        <div
                          className="form-icon icon-plus"
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Choose File"
                        >
                          <input
                            type="file"
                            className="input-file"
                            name="myfile"
                            multiple
                            accept="application/pdf"
                            onChange={handleFileChange}
                          />
                          <i className="feather-plus-circle"></i>

                        </div>
                        <a
                          className="form-icon icon-mic"
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Voice Search"
                        >
                          <i className="feather-mic"></i>
                        </a>
                        <button className="form-icon icon-send"
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Send message">
                          <i className="feather-send"></i>
                        </button>
                      </div>
                    </form>
                    <p className="b3 small-text">
                      ChatenAi can make mistakes. Consider checking important information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Context>
      </main>
    </>
  );
};

export default TextGeneratorPage;
