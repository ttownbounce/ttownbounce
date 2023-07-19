import "./Page.css/Home.css";
import "../../App.css";
import React from "react";
import RotatingCarousel from "../Carousel/Carousel";
import FadingBackground from "./FadingBackground";

import tempCarousel1 from "../../Images/TempCarousel/image1.png";
import tempCarousel2 from "../../Images/TempCarousel/image2.png";
import tempCarousel3 from "../../Images/TempCarousel/image 3.png";

function Home() {
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
      <FadingBackground />
      <footer className="center">
        <button>Employee Portal</button>
      </footer>
    </div>
  );
}

export default Home;
