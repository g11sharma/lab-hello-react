import React from "react";
import icon1logo from "../images/icon1logo.png";
import icon2logo from "../images/icon2logo.png";
import icon3logo from "../images/icon3logo.png";
import icon4logo from "../images/icon4logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="cardOne">
        <img src={icon1logo} className="footer-icon1" width="100px" />
        <h4>Declarative</h4>
        <p>React makes it painless to create interative UIs </p>
      </div>
      <div className="cardTwo">
        <img src={icon2logo} className="footer-icon2" width="100px" />
        <h4>Components</h4>
        <p>Build encapsulated components that manage their state </p>
      </div>
      <div className="cardThree">
        <img src={icon3logo} className="footer-icon3" width="100px" />
        <h4>Single-Way</h4>
        <p>A set of immutable values are passed to the component's </p>
      </div>
      <div className="cardFour">
        <img src={icon4logo} className="footer-icon4" width="100px" />
        <h4>JSX</h4>
        <p>Statically-typed design to run on morden browers</p>
      </div>
    </div>
  );
};

export default Footer;
