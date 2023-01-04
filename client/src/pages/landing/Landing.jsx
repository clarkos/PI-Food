import React from "react";
import { Link } from "react-router-dom";
import logoSquare from "../../assets/logoSquare.png";
import "./landing.css";

const Landing = () => {
  return (
    <div className="ff__landing">
      <div className="ff__landing-container">
        <Link to="/home">
          <div className="ff__landing-container_logo">
            <img src={logoSquare} alt="Logo" />
          </div>
          <div className="ff__landing-cta_btn">
            <h4>Get Started</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
