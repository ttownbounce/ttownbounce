import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import logopng from "../../images/ttb/TTB.png";

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
          </div>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={handleClick}>
            Home
            </NavLink>
          </li>



          <li className="nav-item">
            <NavLink to="/bouncers" className="nav-links" onClick={handleClick}>
            Bouncers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/combo-obstacle" className="nav-links" onClick={handleClick}>
            Combo/Obstacle
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/interactive-sports" className="nav-links" onClick={handleClick}>
            Interactive/Sports
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dry-slides" className="nav-links" onClick={handleClick}>
            Dry Slides
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/water-inflatables" className="nav-links" onClick={handleClick}>
            Water Inflatables
            </NavLink>
          </li>




          <li className="nav-item">
            <NavLink to="/contact-us" className="nav-links" onClick={handleClick}>
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
