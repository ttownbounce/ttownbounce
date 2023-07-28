import "./DrySlides.css";
import React from "react";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";
import ItemDisplay from "../../components/itemdisplay/ItemDisplay";
import CheckAndSaveItems from "../../dataHandler/checkandsaveitems/CheckAndSaveItems";


import tempCarousel1 from "../../images/tempcarousel/image1.png";
import tempCarousel2 from "../../images/tempcarousel/image2.png";
import tempCarousel3 from "../../images/tempcarousel/image 3.png";

function DrySlides() {

  const slideData = [
    {
      id: 19,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "DrySlides1",
      price: 500
    },
    {
      id: 20,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "DrySlides2",
      price: 450
    },
    {
      id: 21,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "DrySlides3",
      price: 300
    },
  ];

  CheckAndSaveItems(slideData);


  return (
    <div >
        <ItemDisplay itemData={slideData}/>
        <BackgroundFade />
    </div>
  );
}

export default DrySlides;