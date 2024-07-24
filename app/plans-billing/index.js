"use client";

import React from "react";
import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import LeftpanelDashboard from "@/components/Common/LeftpanelDashboard";
import PlansBilling from "@/components/PlansBilling/PlansBilling";

const PlansBillingPage = () => {
  return (
    <>
      <main className="page-wrapper rbt-dashboard-page">
        <Context>
          <div className="rbt-panel-wrapper">
            <HeaderDashboard display="d-none" />
            <PopupMobileMenu />
            <LeftpanelDashboard />

            <PlansBilling />
          </div>
        </Context>
      </main>
    </>
  );
};

export default PlansBillingPage;
