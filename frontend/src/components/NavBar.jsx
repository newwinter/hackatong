import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/">Page1 </Link>
      <Link to="/Page2">Page2 </Link>
      <Link to="/Page3">Page3 </Link>
    </div>
  );
}

export default NavBar;
