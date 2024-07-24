"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import sal from "sal.js";

import ToolData from "../../data/header.json";

const CallToAction = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <div className="rainbow-callto-action-area">
        <div className="wrapper">
          <div className="rainbow-callto-action clltoaction-style-default rainbow-section-gap">
            <div className="container">
              <div className="row row--0">
                <div className="col-lg-12">
                  <div className="align-items-center content-wrapper">
                    <div className="inner">
                      <div className="content text-center">
                        <span className="theme-gradient b2 mb--30 d-inline-block">
                          Boost your writing productivity
                        </span>
                        <h2
                          className="title"
                          data-sal="slide-up"
                          data-sal-duration="400"
                          data-sal-delay="200"
                        >
                          Overcome Writer&apos;s Block Today
                        </h2>
                        <p
                          className="description"
                          data-sal="slide-up"
                          data-sal-duration="400"
                          data-sal-delay="300"
                        >
                          Gain Access to a Team of Copywriting Experts.
                        </p>
                        <div
                          className="call-to-btn"
                          data-sal="slide-up"
                          data-sal-duration="400"
                          data-sal-delay="350"
                        >
                          <Link
                            className="btn-default bg-light-gradient btn-large"
                            href="/text-generator"
                          >
                            <div className="has-bg-light"></div>
                            <span>Start writing for free</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fancy-genearate-section">
            <div className="container">
              <div className="genarator-section">
                <ul className="genarator-card-group full-width-list">
                  {ToolData &&
                    ToolData.toolsItem.slice(0, 5).map((data, index) => (
                      <li key={index}>
                        <Link
                          href={data.link}
                          className="genarator-card bg-flashlight-static center-align"
                        >
                          <div className="inner">
                            <div className="left-align">
                              <div className="img-bar">
                                <Image
                                  src={data.img}
                                  width={data.wdt ? data.wdt : 40}
                                  height={40}
                                  alt="AI Generator"
                                />
                              </div>
                              <h5 className="title">{data.title}</h5>
                              <span className="rainbow-demo-btn">
                                Try It Now Free
                              </span>
                            </div>
                          </div>
                          {data.badge !== "" ? (
                            <span className="rainbow-badge-card">
                              {data.badge}
                            </span>
                          ) : (
                            ""
                          )}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
