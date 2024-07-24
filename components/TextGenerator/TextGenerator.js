"use client";

import React, { useEffect } from "react";

import sal from "sal.js";
import Image from "next/image";

import TextGeneratorData from "../../data/dashboard.json";
import Reaction from "../Common/Reaction";

const TextGenerator = () => {
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
      {TextGeneratorData &&
        TextGeneratorData.textGenerator.map((data, index) => (
          <div
            className="chat-box-list pt--30"
            id="chatContainer"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="100"
            key={index}
          >
            <div className="chat-box author-speech bg-flashlight">
              <div className="inner">
                <div className="chat-section">
                  <div className="author">
                    <Image
                      className="w-100"
                      width={40}
                      height={40}
                      src={data.author}
                      alt="Author"
                    />
                  </div>
                  <div className="chat-content">
                    <h6 className="title">{data.title}</h6>
                    <p>{data.desc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="chat-box ai-speech bg-flashlight">
              {data.content.map((innerData, innerIndex) => (
                <div
                  className="inner top-flashlight leftside light-xl"
                  key={innerIndex}
                >
                  <div className="chat-section generate-section">
                    <div className="author">
                      <Image
                        src={innerData.img}
                        width={40}
                        height={40}
                        alt="Loader Images"
                      />
                    </div>
                    <div className="chat-content">
                      <h6 className="title color-text-off mb--0">
                        {innerData.text}
                      </h6>
                    </div>
                  </div>
                  <div className="chat-section">
                    <div className="author">
                      <Image
                        className="w-100"
                        src={innerData.aiImg}
                        width={40}
                        height={40}
                        alt="ChatenAI"
                      />
                    </div>
                    <div className="chat-content">
                      <h6 className="title">
                        {innerData.title}
                        <span className="rainbow-badge-card">
                          {innerData?.badge}
                        </span>
                      </h6>
                      {innerData.desc2 ? (
                        <p className="">{innerData.desc2}</p>
                      ) : (
                        ""
                      )}
                      <p className="mb--20">{innerData.desc}</p>
                      <Reaction />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default TextGenerator;
