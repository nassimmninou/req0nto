"use client";

import React, { useEffect } from "react";

import "bootstrap/scss/bootstrap.scss";

// ========= Plugins CSS START =========
import "../public/css/plugins/feature.css";
import "../public/css/plugins/animation.css";
import "../node_modules/sal.js/dist/sal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-tooltip/dist/react-tooltip.css";
// ========= Plugins CSS END =========

import "../public/scss/style.scss";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <body className="" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
