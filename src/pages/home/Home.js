import "./Home.css";
import "../../App.css";
import React from "react";
import RotatingCarouselLink from "../../components/carouselfolder/RotatingCarouselLink";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";

import ItemDisplay from "../../components/itemdisplay/ItemDisplay";
import CheckAndSaveItems from "../../dataHandler/checkandsaveitems/CheckAndSaveItems";

import homeImage from "../../images/ttb/FTTBD.png"
import frog from "../../images/ttb/F.png";

import tempCarousel1 from "../../images/tempcarousel/image1.png";
import tempCarousel2 from "../../images/tempcarousel/image2.png";
import tempCarousel3 from "../../images/tempcarousel/image 3.png";

function Home() {
  const carouselData = [
    {
      id: 2,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers2",
      price: 450
    },
    {
      id: 17,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "CO2",
      price: 450
    },
    {
      id: 24,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "IS3",
      price: 300
    }
  ];

  const mostPopularData = [
    {
      id: 4,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers4",
      price: 500
    },
    {
      id: 20,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "DrySlides2",
      price: 450
    },
    {
      id: 26,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
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
        <h1 className="bodyText bubbleWhite"><img src={frog} alt="Frog img" style={{ height: "1em" }} />New Arrivals<img src={frog} alt="Frog img" style={{ height: "1em" }} /></h1>
      </div>
      <RotatingCarouselLink carouselData={carouselData} />
      <div></div>
      <div className="bodyContainer">
      <h1 className="bodyText bubbleWhite"><img src={frog} alt="Frog img" style={{ height: "1em" }} />Most Popular<img src={frog} alt="Frog img" style={{ height: "1em" }} /></h1>
      </div>
      <ItemDisplay itemData={mostPopularData}/>
      <BackgroundFade />
    </div>
  );
}

export default Home;
