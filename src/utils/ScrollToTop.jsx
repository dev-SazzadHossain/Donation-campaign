import React, { useEffect } from "react";

const ScrollToTop = ({ pathname }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
};

export default ScrollToTop;
