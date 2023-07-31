import React from "react";
import "./Footer.css";
import frog from "../../images/ttb/F.png";

const TTBFooter = () => (
  <div className="paddingfortop">
    <footer className="page-footer font-small FooterColor pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3 ">
            <h5 className="text-uppercase redfortext titleFontSize">
              <img src={frog} alt="Frog img" style={{ height: "1em" }} />
              T-Town Bounce
              <img src={frog} alt="Frog img" style={{ height: "1em" }} />
            </h5>
            <p className="bluefortext bodyFontSize">
              All of our rentals are "for the day", so you can bounce and slide
              from morning 'til night. The prices listed with each item include
              delivery and setup to most areas in Northport and Tuscaloosa, an
              additional delivery fee may be added in some cases depending on
              your distance from us. Please give us a call with any questions
              205-454-5120
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3 ">
            <h5 className="text-uppercase redfortext titleFontSize">
              <img src={frog} alt="Frog img" style={{ height: "1em" }} />
              Links
              <img src={frog} alt="Frog img" style={{ height: "1em" }} />
            </h5>
            <ul className="list-unstyled linksFontSize">
              <li>
                <a href="/" className="bluefortext">
                  Home
                </a>
              </li>

              <li>
                <a href="/Contact" className="bluefortext">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3 ">
            <h5 className="text-uppercase redfortext titleFontSize">
              <img src={frog} alt="Frog img" style={{ height: "1em" }} />
              Rentals
              <img src={frog} alt="Frog img" style={{ height: "1em" }} />
            </h5>
            <ul className="list-unstyled linksFontSize">
              <li>
                <a href="/Bouncers" className="bluefortext">
                  Bouncers
                </a>
              </li>
              <li>
                <a href="/CO" className="bluefortext">
                  Combo/Obstacle
                </a>
              </li>
              <li>
                <a href="/IS" className="bluefortext">
                  Interactive/Sports
                </a>
              </li>
              <li>
                <a href="/DrySlides" className="bluefortext">
                  Dry Slides
                </a>
              </li>
              <li>
                <a href="/WaterInflatables" className="bluefortext">
                  Water Inflatables
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3 redfortext">
        <img src={frog} alt="Frog img" style={{ height: "1em" }} />
        2023 AMG©
        <img src={frog} alt="Frog img" style={{ height: "1em" }} />
      </div>
    </footer>
  </div>
);

export default TTBFooter;
