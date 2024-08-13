"use client";

import Items from "@/components/Dashboard/items";
import ToolsData from "../../data/header.json";
import Link from "next/link";
import Image from "next/image";
import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import LeftpanelDashboard from "@/components/Common/LeftpanelDashboard";
import Modal from "@/components/Common/Modal";
const Bandi = () => {
    return (
        <main className="page-wrapper rbt-dashboard-page">
            <Context>
                <div className="rbt-panel-wrapper">
                    <HeaderDashboard display="d-none" />
                    <PopupMobileMenu />
                    <LeftpanelDashboard />
                    <Modal />
                    <div className="rbt-main-content mr--0">
                        <div className="rbt-daynamic-page-content">
                            <div className="rbt-dashboard-content">
                                <div className="content-page">
                                    <div className="genarator-section">
                                        <ul className="genarator-card-group">
                                            {ToolsData &&
                                                ToolsData.leftPanel.map((data, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            href={data.link}
                                                            className={`genarator-card ${data.badge === "Coming" ? "disabled" : ""
                                                                }`}
                                                        >
                                                            <div className="" data-bs-dismiss="modal">
                                                                <div className="">
                                                                    <div className="img-bar">
                                                                        <Image
                                                                            className="mx-auto w-25 d-block"
                                                                            src={data.img}
                                                                            width={50}
                                                                            height={50}
                                                                            alt="AI Generator"
                                                                        />
                                                                    </div>
                                                                    <h5 className="">{data.title}</h5>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Context>
        </main>
    )

}
export default Bandi;
