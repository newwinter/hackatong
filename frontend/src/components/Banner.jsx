import React from "react";
import header from "@assets/header.png";
import "@components/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img className="header-img" src={header} alt="logo de hackatong" />
      <h3 className="description">
        Tu trouveras ici les plus beaux monuments du monde... Nous savons que tu
        es un tong-trotter, aussi nous te proposons de parcourir ces lieux et,
        lorsque tu les auras visités, une surprise t'attendra !
      </h3>
    </div>
  );
}

export default Banner;
