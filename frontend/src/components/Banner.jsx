import React from "react";
import header from "@assets/header.png";
import "@components/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img className="header-img" src={header} alt="logo de hackatong" />
    </div>
  );
}

export default Banner;
