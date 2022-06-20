import React from "react";
import ironhacklogo from "../images/ironhacklogo.png";
import menulogo from "../images/menulogo.png";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo-top">
        <img src={ironhacklogo} className=" ironhack-logo" alt="logo" />
        <img src={menulogo} className=" menu-top" alt="menu" />
      </div>
    </nav>
  );
};

export default Navbar;
