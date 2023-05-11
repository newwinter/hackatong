import React from "react";
import { Link } from "react-router-dom";
import "@components/NavBar.css";

function NavBar() {
  return (
    <div className="Navbar">
      <div className="element">
        <Link to="/">Home </Link>
      </div>
      <div className="element">
        <Link to="/Page2">Monuments </Link>
      </div>
      <div className="element">
        <Link to="/About">About </Link>
      </div>
      <div className="element">
        <Link to="/Contact">Contact </Link>
      </div>
      <div className="element">
        <Link to="/Passport">Passport </Link>
      </div>
    </div>
  );
}

export default NavBar;
