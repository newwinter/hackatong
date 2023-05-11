import React, { useState, useEffect } from "react";
import header from "@assets/header.png";
import "@components/Header.css";

function Header() {
  const [firstname, setFirstName] = useState("toi");

  useEffect(() => {
    const name = window.prompt("Quel est votre prénom ?");
    setFirstName(name);
  }, []);
  return (
    <div className="header-container">
      <img className="header-img" src={header} alt="logo de hackatong" />
      <h1>{`Bonjour ${firstname}`}</h1>
      <h3 className="description">
        Tu trouveras ici les plus beaux monuments du monde... Nous savons que tu
        es un tong-trotter, aussi nous te proposons de parcourir ces lieux et,
        lorsque tu les auras visités, une surprise t'attendra !
      </h3>
    </div>
  );
}

export default Header;
