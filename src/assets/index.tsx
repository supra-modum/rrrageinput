/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * it's a mess for now
 */

export const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const palette = [
  "#e85c61",
  "#e9628a",
  "#dd71ae",
  "#c783cb",
  "#ab94de",
  "#95a3ed",
  "#7eb2f5",
  "#69bff8",
  "#52cffe",
  "#41dfff",
  "#46eefa",
];

const transitionWhite = (
  <div
    style={{
      transition: "all .3s",
      backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.0001),#fff)",
      height: "175px",
      position: "absolute",
      bottom: "0",
      top: "175",
      left: "0",
      right: "0",
    }}
  />
);
