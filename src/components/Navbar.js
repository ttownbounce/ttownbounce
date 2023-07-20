import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import logosvg from "../Images/ttb/Logo.svg";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    if (click) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [click]);

  return (
    <nav className="Navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <div className="nav-logo">
            <img src={logosvg} alt="TTB Icon" className="nav-logoicon" />
          </div>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={handleClick}>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/RI" className="nav-links" onClick={handleClick}>
              Rentals/Inflatables
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact" className="nav-links" onClick={handleClick}>
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}

//{button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

export default Navbar;
