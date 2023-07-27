import "./DrySlides.css";
import React from "react";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";
import BouncerDisplay from "../../components/bouncerdisplay/BouncerDisplay";


import tempCarousel1 from "../../images/tempcarousel/image1.png";
import tempCarousel2 from "../../images/tempcarousel/image2.png";
import tempCarousel3 from "../../images/tempcarousel/image 3.png";

function DrySlides() {

  const slideData = [
    {
      id: 1,
      image: tempCarousel1,
      title: "DrySlides",
      price: 500
    },
    {
      id: 2,
      image: tempCarousel2,
      title: "DrySlides",
      price: 450
    },
    {
      id: 3,
      image: tempCarousel3,
      title: "DrySlides",
      price: 300
    },
  ];


  return (
    <div >
        <BouncerDisplay bouncerData={slideData}/>
        <BackgroundFade />
    </div>
  );
}

export default DrySlides;