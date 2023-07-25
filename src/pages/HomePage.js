import "./pagecss/HomePage.css";
import "../App.css";
import React from "react";
import RotatingCarousel from "../components/carouselfolder/RotatingCarousel";
import BackgroundFade from "../components/BackgroundFade";

import homeImage from "../images/ttb/FTTBD.png"
import frog from "../images/ttb/F.png";

import tempCarousel1 from "../images/tempcarousel/image1.png";
import tempCarousel2 from "../images/tempcarousel/image2.png";
import tempCarousel3 from "../images/tempcarousel/image 3.png";

function HomePage() {
  const carouselData = [
    {
      image: tempCarousel1,
      title: "27ft Slide",
      price: 500,
    },
    {
      image: tempCarousel2,
      title: "Basketball",
      price: 450,
    },
    {
      image: tempCarousel3,
      title: "Carnival",
      price: 300,
    },
    // Add more carousel items as needed...
  ];

  return (
    <div className="page">
      <div className="center">
        <div className="imageContainer">
          <img src={homeImage} alt="T-Town Bounce" />
        </div>
      </div>
      <div className="bodyContainer">
        <h1 className="bodyText bubbleWhite">New Arivals</h1>
      </div>
      <RotatingCarousel carouselData={carouselData} />
      <div></div>
      <div className="bodyContainer">
      <h1 className="bodyText bubbleWhite"><img src={frog} alt="Frog img" style={{ height: "1em" }} />Most Popular<img src={frog} alt="Frog img" style={{ height: "1em" }} /></h1>
      </div>
      <div className="mostPopular">
        <img src={tempCarousel1} alt="1" className="numberImages" />
        <img src={tempCarousel2} alt="2" className="numberImages" />
        <img src={tempCarousel3} alt="3" className="numberImages" />
      </div>
      <BackgroundFade />
    </div>
  );
}

export default HomePage;
