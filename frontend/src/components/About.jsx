import React from "react";
import Benoit from "@assets/Benoit.jpg";
import Flo from "@assets/Flo.jpg";
import Adrien from "@assets/Adrien.jpg";
import Camille from "@assets/Camille.jpg";
import Nico from "@assets/Nico.jpg";
import "@components/About.css";

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">A propos de notre équipe...</h2>
      <h3 className="about-blabla"> </h3>
      <div className="about-description">
        <div className="item">
          <img src={Benoit} alt="tong et chaussette Benoit" />
          <p>Benoît</p>
        </div>
        <div className="item">
          <img src={Flo} alt="tong et chaussette Flo" />
          <p>Floriane</p>
        </div>
        <div className="item">
          <img src={Adrien} alt="tong et chaussette Adrien" />
          <p>Adrien</p>
        </div>
        <div className="item">
          <img src={Camille} alt="tong et chaussette Camille" />
          <p>Camille</p>
        </div>
        <div className="item">
          <img src={Nico} alt="tongue et chaussette Nico" />
          <p>Nicolas</p>
        </div>
      </div>
    </div>
  );
}

export default About;
