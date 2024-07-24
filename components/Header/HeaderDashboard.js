import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/Context";

import logo from "../../public/images/logo/logo.png";
import logoDark from "../../public/images/logo/logo-dark.png";
import avatar from "../../public/images/team/team-01.jpg";

import Nav from "./Nav";
import GridMenu from "./GridMenu";

import ToolsData from "../../data/header.json";
import UserMenu from "./UserMenu";

const HeaderDashboard = ({ display }) => {
  const {
    mobile,
    setMobile,
    rightBar,
    setRightBar,
    activeMobileMenu,
    setActiveMobileMenu,
  } = useAppContext();
  return (
    <>
      <header className="rbt-dashboard-header rainbow-header header-default header-left-align rbt-fluid-header">
        <div className="container-fluid position-relative">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-6 col-7">
              <div className="header-left d-flex">
                <div className="expand-btn-grp">
                  <button
                    className={`bg-solid-primary popup-dashboardleft-btn ${
                      !mobile ? "collapsed" : ""
                    }`}
                    onClick={() => setMobile(!mobile)}
                  >
                    <i className="feather-sidebar left"></i>
                  </button>
                </div>
                <div className="logo">
                  <Link href="/">
                    <Image
                      className="logo-light"
                      src={logo}
                      width={201}
                      height={35}
                      alt="Corporate Logo"
                    />
                    <Image
                      className="logo-dark"
                      src={logoDark}
                      width={201}
                      height={35}
                      alt="Corporate Logo"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-10 col-md-6 col-5">
              <div className="header-right">
                <nav className="mainmenu-nav d-none d-lg-block text-center">
                  <Nav />
                </nav>

                <div className="header-btn d-none d-md-block">
                  <Link
                    className="btn-default btn-small round"
                    href="/plans-billing"
                  >
                    Upgrade <i className="feather-zap"></i>
                  </Link>
                </div>

                <div className="mobile-menu-bar mr--10 ml--10 d-block d-lg-none">
                  <div className="hamberger">
                    <button
                      className="hamberger-button"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <i className="feather-menu"></i>
                    </button>
                  </div>
                </div>

                <GridMenu ToolsData={ToolsData} />

                <div className="account-access rbt-user-wrapper right-align-dropdown">
                  <div className="rbt-user ml--0">
                    <a className="admin-img" href="#">
                      <Image src={avatar} alt="Admin" />
                    </a>
                  </div>
                  <div className="rbt-user-menu-list-wrapper">
                    <UserMenu />
                  </div>
                </div>

                <div className={`expand-btn-grp ${display}`}>
                  <button
                    className={`bg-solid-primary popup-dashboardright-btn ${
                      !rightBar ? "collapsed" : ""
                    }`}
                    onClick={() => setRightBar(!rightBar)}
                  >
                    <i className="feather-sidebar right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderDashboard;
