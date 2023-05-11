import React from "react";
import header from "@assets/header.png";
import "@components/Header.css";

function Header() {
  // let firstname = prompt("Quel est votre prénom ?")
  return (
    <div className="header-container">
      <img className="header-img" src={header} alt="logo de hackatong" />
    </div>
  );
}

export default Header;
