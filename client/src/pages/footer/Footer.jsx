import React from "react";
import logo from "../../assets/logoSquareImg.png";
import ghub from "../../assets/ghub.gif";
import lin from "../../assets/Lin.gif";
import yt from "../../assets/yt.gif";
import "./footer.css";

const Footer = () => {
  return (
    <div className="ff__footer">
      <div className="ff__footer-container">
        <div className="ff__footer-links">
          <ul>
            <li>
              <a href="https://github.com/clarkos" target="_blank" rel="noreferrer" >
                <img src={ghub} alt="GitHub" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lucianoschmarsow/" target="_blank" rel="noreferrer" >
                <img src={lin} alt="linkedIn" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@schsys" target="_blank" rel="noreferrer" >
                <img src={yt} alt="YouTube" />
              </a>
            </li>
          </ul>
        </div>
        <div className="ff__footer-middle">
          <p>Luciano Schmarsow</p>
          <span>&copy; 2023 - FoodFinder | All rights reserved</span>
        </div>
        <div className="ff__footer-logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
