import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound02.jpg";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="ff__notFound">
      <img src={notFound} alt="Page not Found" />
      <div className="ff__notFound-text">
          <div className="ff__notFound-emp">We're Sorry...</div>
        <h1>
          we couldn't find that <br /> you were looking for.
        </h1>
        <span>
          this is the infamous <br />
          <strong>404 - page not found</strong>
        </span>
        <p>
          <Link to="/home">do you wanna go back?</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
