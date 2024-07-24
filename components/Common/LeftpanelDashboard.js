"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import avatar from "../../public/images/team/team-01.jpg";

import UserMenuItems from "../Header/HeaderProps/UserMenuItems";

import HeaderData from "../../data/header.json";
import { useAppContext } from "@/context/Context";

const LeftpanelDashboard = () => {
  const pathname = usePathname();
  const { shouldCollapseLeftbar } = useAppContext();

  const isActive = (href) => pathname.startsWith(href);

  return (
    <>
      <div
        className={`rbt-left-panel popup-dashboardleft-section ${
          shouldCollapseLeftbar ? "collapsed" : ""
        }`}
      >
        <div className="rbt-default-sidebar">
          <div className="inner">
            <div className="content-item-content">
              <div className="rbt-default-sidebar-wrapper">
                <nav className="mainmenu-nav">
                  <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                    <li>
                      <Link
                        className={isActive("/dashboard") ? "active" : ""}
                        href="/dashboard"
                      >
                        <i className="feather-monitor"></i>
                        <span>Welcome</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={isActive("/plans-billing") ? "active" : ""}
                        href="/plans-billing"
                      >
                        <i className="feather-briefcase"></i>
                        <span>Manage Subsription</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="rbt-sm-separator"></div>
                  <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                    {HeaderData &&
                      HeaderData.leftPanel.slice(0, 7).map((data, index) => (
                        <li key={index}>
                          <Link
                            href={data.link}
                            className={
                              isActive(data.link)
                                ? "active"
                                : `${data.isDisable ? "disabled" : ""}`
                            }
                          >
                            <Image
                              src={data.img}
                              width={35}
                              height={35}
                              alt="AI Generator"
                            />
                            <span>{data.title}</span>
                            {data.badge !== "" ? (
                              <div className="rainbow-badge-card badge-sm ml--10">
                                {data.badge}
                              </div>
                            ) : (
                              ""
                            )}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </nav>

                <div className="rbt-sm-separator"></div>

                <nav className="mainmenu-nav">
                  <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                    <li className="has-submenu">
                      <a
                        className="collapse-btn collapsed"
                        data-bs-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <i className="feather-plus-circle"></i>
                        <span>Setting</span>
                      </a>
                      <div className="collapse" id="collapseExample">
                        <UserMenuItems parentClass="submenu rbt-default-sidebar-list" />
                      </div>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="feather-award"></i>
                        <span>Help & FAQ</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="rbt-sm-separator"></div>
                  <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                    <li>
                      <Link
                        className={isActive("/release-notes") ? "active" : ""}
                        href="/release-notes"
                      >
                        <i className="feather-bell"></i>
                        <span>Release notes</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={isActive("/terms-policy") ? "active" : ""}
                        href="/terms-policy"
                      >
                        <i className="feather-briefcase"></i>
                        <span>Terms & Policy</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="subscription-box">
            <div className="inner">
              <Link href="/profile-details" className="autor-info">
                <div className="author-img active">
                  <Image
                    className="w-100"
                    width={40}
                    height={40}
                    src={avatar}
                    alt="Author"
                  />
                </div>
                <div className="author-desc">
                  <h6>Rafi Dev</h6>
                  <p>trentadam@net</p>
                </div>
                <div className="author-badge">Free</div>
              </Link>
              <div className="btn-part">
                <Link href="/pricing" className="btn-default btn-border">
                  Upgrade To Pro
                </Link>
              </div>
            </div>
          </div>
          <p className="subscription-copyright copyright-text text-center b4  small-text">
            © 2024
            <Link
              className="ps-2"
              href="https://themeforest.net/user/rainbow-themes/portfolio"
            >
              Rainbow Themes
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default LeftpanelDashboard;
