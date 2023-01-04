import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <>
      <h1>Sorry, we couldn't find the page you were looking for.</h1>
      <Link to="/home">Ir al inicio</Link>
    </>
  );
};

export default NotFound;
