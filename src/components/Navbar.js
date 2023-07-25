import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import logopng from "../images/ttb/TTB.png";
import logopng2 from "../images/ttb/FTTB.png";

import frog from "../images/ttb/F.png";

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
            <img src={logopng} alt="TTB Icon" className="nav-logopng" />
            <img src={logopng2} alt="TTB Icon" className="nav-logopng" />
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
            <img src={frog} alt="Frog img" style={{ height: "1em" }} />Rentals/Inflatables<img src={frog} alt="Frog img" style={{ height: "1em" }} />
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
