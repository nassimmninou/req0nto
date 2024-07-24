import Image from "next/image";
import Link from "next/link";

import ToolsData from "../../data/header.json";

const Items = () => {
  return (
    <>
      {ToolsData &&
        ToolsData.leftPanel.map((data, index) => (
          <li key={index}>
            <Link
              href={data.link}
              className={`genarator-card ${
                data.badge === "Coming" ? "disabled" : ""
              }`}
            >
              <div className="inner" data-bs-dismiss="modal">
                <div className="left-align">
                  <div className="img-bar">
                    <Image
                      src={data.img}
                      width={50}
                      height={50}
                      alt="AI Generator"
                    />
                  </div>
                  <h5 className="title">{data.title}</h5>
                </div>
                <div className="right-align">
                  {data.badge !== "" ? (
                    <span className="rainbow-badge-card">{data.badge}</span>
                  ) : (
                    <div className="icon-bar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-arrow-right __web-inspector-hide-shortcut__"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </li>
        ))}
    </>
  );
};

export default Items;
