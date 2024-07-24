"use client";

import Context from "@/context/Context";
import HeaderTop from "@/components/Header/HeaderTop/Header-Top";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import PricingTwo from "@/components/Pricing/PricingTwo";

const PricingPage = () => {
  return (
    <>
      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />

          <div>
            <div className="rainbow-gradient-circle"></div>
            <div className="rainbow-gradient-circle theme-pink"></div>
          </div>
          <PricingTwo
            parentClass="col-xl-3 col-lg-6 col-md-6 col-12"
            childClass="tab-content p-0 bg-transparent border-0 border bg-light"
            start={0}
            end={4}
            isHeading={true}
            gap={true}
          />

          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default PricingPage;
