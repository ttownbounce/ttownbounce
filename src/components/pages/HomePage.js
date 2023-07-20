import "./pagecss/HomePage.css";
import "../../App.css";
import React from "react";
import NRCarousel from "../carouselfolder/NRCarousel";
import Fadebackground from "./Fadebackground";

import tempCarousel1 from "../../imageicons/tempcarousel/image1.png";
import tempCarousel2 from "../../imageicons/tempcarousel/image2.png";
import tempCarousel3 from "../../imageicons/tempcarousel/image 3.png";

function HomePage() {
  return (
    <div className="page">
      <div className="center">
        <div className="headerTextContainer">
          <h1 className="headerText center">
            Welcome to T-Town Bounce
          </h1>
          <h1 className="headerText center">
            Where laughter and excitement collide!
          </h1>
        </div>
      </div>
      <div className="bodyContainer">
        <h1 className="bodyText bubbleWhite">New Arivals</h1>
      </div>
      <NRCarousel/>
      <div></div>
      <div className="bodyContainer">
        <h1 className="bodyText bubbleWhite">Most Popular</h1>
      </div>
      <div className="mostPopular">
        <img src={tempCarousel1} alt="1" className="numberImages" />
        <img src={tempCarousel2} alt="2" className="numberImages" />
        <img src={tempCarousel3} alt="3" className="numberImages" />
      </div>
      <Fadebackground />
    </div>
  );
}

export default HomePage;
