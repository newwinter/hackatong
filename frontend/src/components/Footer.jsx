import React from "react";
import insta from "@assets/instagram.png";
import facebook from "@assets/facebook.png";
import "@components/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="icone">
        <img className="insta" src={insta} alt="insta" />
        <img className="facebook" src={facebook} alt="facebook" />
      </div>
      <div className="mentions">
        <p> Hackathon 2023</p>
      </div>
    </div>
  );
}

export default Footer;
