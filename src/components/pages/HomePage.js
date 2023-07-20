import "./Page.css/HomePage.css";
import "../../App.css";
import React from "react";
import RotatingCarousel from "../carousel/carousel";
import Fadingbackground from "./Fadingbackground";

import tempCarousel1 from "../../images/tempcarousel/image1.png";
import tempCarousel2 from "../../images/tempcarousel/image2.png";
import tempCarousel3 from "../../images/tempcarousel/image 3.png";

function HomePage() {
  return (
    <div className="page">
      <div className="headerTextContainer">
        <h1 className="headerText bubbleWhite jumbotron jumbotron-fluid">
          Welcome to Ttown Bounce!
        </h1>
        <h1 className="headerText center bubbleWhite jumbotron jumbotron-fluid">
          Where laughter and excitement collide
        </h1>
      </div>
      <div className="bodyContainer">
        <h1 className="bodyText bubbleWhite">New Arivals</h1>
      </div>
      <RotatingCarousel></RotatingCarousel>
      <div></div>
      <div className="bodyContainer">
        <h1 className="bodyText bubbleWhite">Most Popular</h1>
      </div>
      <div className="mostPopular">
        <img src={tempCarousel1} alt="1" className="numberImages" />
        <img src={tempCarousel2} alt="2" className="numberImages" />
        <img src={tempCarousel3} alt="3" className="numberImages" />
      </div>
      <Fadingbackground />
      <footer className="center">
        <button>Employee Portal</button>
      </footer>
    </div>
  );
}

export default HomePage;
