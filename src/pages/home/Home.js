import "./Home.css";
import "../../App.css";
import React from "react";
import RotatingCarouselLink from "../../components/carouselfolder/RotatingCarouselLink";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";

import ItemDisplay from "../../components/itemdisplay/ItemDisplay";
import CheckAndSaveItems from "../../dataHandler/checkandsaveitems/CheckAndSaveItems";

import homeImage from "../../images/ttb/FTTBD.png"
//import frog from "../../images/ttb/F.png";

import tempCarousel1 from "../../images/tempcarousel/image1.png";
import tempCarousel2 from "../../images/tempcarousel/image2.png";
import tempCarousel3 from "../../images/tempcarousel/image3.png";
import tempCarousel4 from "../../images/tempcarousel/image4.png";
import tempCarousel5 from "../../images/tempcarousel/image5.png";
import tempCarousel6 from "../../images/tempcarousel/image6.png";

function Home() {
  const carouselData = [
    {
      id: 2,
      images: [tempCarousel1, tempCarousel2, tempCarousel3,tempCarousel4,tempCarousel5,tempCarousel6],
      title: "Bouncers2",
      price: 450
    },
    {
      id: 17,
      images: [tempCarousel1, tempCarousel2, tempCarousel3,tempCarousel4,tempCarousel5,tempCarousel6],
      title: "CO2",
      price: 450
    },
    {
      id: 24,
      images: [tempCarousel1, tempCarousel2, tempCarousel3,tempCarousel4,tempCarousel5,tempCarousel6],
      title: "IS3",
      price: 300
    }
  ];

  const mostPopularData = [
    {
      id: 4,
      images: [tempCarousel1, tempCarousel2, tempCarousel3,tempCarousel4,tempCarousel5,tempCarousel6],
      title: "Bouncers4",
      price: 500
    },
    {
      id: 20,
      images: [tempCarousel1, tempCarousel2, tempCarousel3,tempCarousel4,tempCarousel5,tempCarousel6],
      title: "DrySlides2",
      price: 450
    },
    {
      id: 26,
      images: [tempCarousel1, tempCarousel2, tempCarousel3,tempCarousel4,tempCarousel5,tempCarousel6],
      title: "WaterInflatables2",
      price: 450
    }
  ];

  CheckAndSaveItems(carouselData);
  CheckAndSaveItems(mostPopularData);

  return (
    <div className="page">
      <div className="center">
        <div className="imageContainer">
          <img src={homeImage} alt="T-Town Bounce Logo" />
        </div>
      </div>
      <div className="bodyContainer">
        <h1 className="bodyText bubbleWhite">New Arrivals</h1>
      </div>
      <RotatingCarouselLink carouselData={carouselData} />
      <div></div>
      <div className="bodyContainer">
      <h1 className="bodyText bubbleWhite">Most Popular</h1>
      </div>
      <ItemDisplay itemData={mostPopularData}/>
      <BackgroundFade />
    </div>
  );
}

export default Home;
