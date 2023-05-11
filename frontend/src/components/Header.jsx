import React, { useState, useEffect } from "react";
import Banner from "@components/Banner.jsx";
import "@components/Header.css";

function Header() {
  const [firstname, setFirstName] = useState("toi");

  useEffect(() => {
    const name = window.prompt("Quel est votre prénom ?");
    setFirstName(name);
  }, []);
  return (
    <div className="header-container">
      <Banner />
      <h1>{`Bonjour ${firstname} !`}</h1>
    </div>
  );
}

export default Header;
