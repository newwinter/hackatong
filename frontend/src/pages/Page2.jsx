import React, from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "@pages/Page2.css";
import monuments from "@assets/data";

function Page2() {
  const monument = monuments[5];

  return (
    <div className="mainPage2">
      <div>
        <h1 className="titlePage2">{monument.name} </h1>
      </div>
      <div className="imgPage2">
        <img
          src={monument.image_url}
          alt={monument.name}
          className="img-fluid containImgPage2"
        />
      </div>
      <div className="card cardPage2">{monument.description}</div>
      <Link to="/PassPort">

        <button type="button" className="css-button-retro">

          Valide ta Quête
        </button>
      </Link>
    </div>
  );
}

export default Page2;
