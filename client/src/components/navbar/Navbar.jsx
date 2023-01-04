import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo04.png";

const Menu = () => {
  return (
    <>
      <p>
        <Link to="/home">Home</Link>
      </p>
      <p>
        <Link to="/create">Create Your Recipe</Link>
      </p>
      <p>
        <Link to="/about">Why Food<strong>Finder</strong>?</Link>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ff__navbar">
      <div className="ff__navbar-links">
        <div className="ff__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="ff__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="ff__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="ff__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="ff__navbar-menu_container scale-up-center">
            <div className="ff__navbar-menu_container-links">
              <Menu />
              <div className="ff__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
