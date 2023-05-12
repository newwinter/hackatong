import React from "react";
import { Link } from "react-router-dom";
import "@components/NavBar.css";

function NavBar() {
  return (
    <div className="Navbar">
      <div className="element">
        <Link to="/">Accueil</Link>
      </div>
      <div className="element">
        <Link to="/Page1">Monuments </Link>
      </div>
      <div className="element">
        <Link to="/About">A Propos </Link>
      </div>
      <div className="element">
        <Link to="/Passport">Passeport </Link>
      </div>
    </div>
  );
}

export default NavBar;
