"use client";

import React, { useEffect } from "react";

import "venobox/dist/venobox.min.css";
import sal from "sal.js";

import VideoGeneratorData from "../../data/dashboard.json";
import Image from "next/image";
import Link from "next/link";
import Reaction from "../Common/Reaction";

const VedioGenerator = () => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
        maxWidth: window.innerWidth >= 992 ? "50%" : "100%",
      });
    });

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
      {VideoGeneratorData &&
        VideoGeneratorData.videoGenerator.map((data, index) => (
          <div className="chat-box-list pt--30" id="chatContainer" key={index}>
            {data.author ? (
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
                      <p className="mb--10">{data.desc}</p>
                      <p className="mb--20">{data.desc2}</p>

                      <div className="img-box">
                        <Image
                          className="w-50 radius"
                          src={data.img}
                          width={575}
                          height={396}
                          alt="Image Generation"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {data.content &&
              data.content.map((innerData, innerIndex) => (
                <div
                  className="chat-box ai-speech bg-flashlight"
                  key={innerIndex}
                >
                  <div className="inner top-flashlight leftside light-xl">
                    <div className="chat-section generate-section">
                      <div className="author">
                        <i className="feather-check-circle"></i>
                      </div>
                      <div className="chat-content">
                        <h6 className="title color-text-off mb--0">
                          {innerData.scan}
                        </h6>
                      </div>
                    </div>
                    <div className="chat-section generate-section">
                      <div className="author">
                        <Image
                          src={innerData.img}
                          width={40}
                          height={40}
                          alt="Loader Animated Icon"
                        />
                      </div>
                      <div className="chat-content">
                        <h6 className="title color-text-off mb--0">
                          {innerData.text}
                        </h6>
                      </div>
                    </div>
                    <div className="chat-section generate-details-section">
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
                        <h6 className="title mb--20">{innerData.desc}</h6>

                        <div className="image-caption mb--20">
                          <h5 className="caption-title theme-gradient">
                            {innerData.caption}
                          </h5>
                        </div>
                        <div className="video-popup icon-center frame-image gradient-secondary frame-image-author mb--20">
                          <Image
                            className="radius-small"
                            src={innerData.videoImg}
                            width={1920}
                            height={1080}
                            alt="Banner Images"
                          />
                          <div className="video-icon">
                            <Link
                              className="btn-default rounded-player popup-video border bg-white-dropshadow"
                              href="https://youtu.be/ThRYF96HIzA?si=Yz-Yc5HSf8uLPv-G"
                              data-vbtype="video"
                            >
                              <span>
                                <i className="feather-play"></i>
                              </span>
                            </Link>
                          </div>
                          <button className="download-btn btn-default btn-small bg-solid-primary">
                            <i className="feather-download"></i>
                            <span>Download</span>
                          </button>
                        </div>
                        <Reaction />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
    </>
  );
};

export default VedioGenerator;
