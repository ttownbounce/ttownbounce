import "./IS.css";
import React from "react";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";
import ItemDisplay from "../../components/itemdisplay/ItemDisplay";

import CheckAndSaveItems from "../../dataHandler/checkandsaveitems/CheckAndSaveItems";


import tempCarousel1 from "../../images/tempcarousel/image1.png";
import tempCarousel2 from "../../images/tempcarousel/image2.png";
import tempCarousel3 from "../../images/tempcarousel/image3.png";
import tempCarousel4 from "../../images/tempcarousel/image4.png";
import tempCarousel5 from "../../images/tempcarousel/image5.png";
import tempCarousel6 from "../../images/tempcarousel/image6.png";

function IS() {

  const isData = [
    {
      id: 22,
      images: [tempCarousel1, tempCarousel2, tempCarousel3,tempCarousel4,tempCarousel5,tempCarousel6],
      title: "IS1",
      price: 500
    },
    {
      id: 23,
      images: [tempCarousel1, tempCarousel2, tempCarousel3,tempCarousel4,tempCarousel5,tempCarousel6],
      title: "IS2",
      price: 450
    },
    {
      id: 24,
      images: [tempCarousel1, tempCarousel2, tempCarousel3,tempCarousel4,tempCarousel5,tempCarousel6],
      title: "IS3",
      price: 300
    },
  ];


  CheckAndSaveItems(isData);


  return (
    <div >
        <ItemDisplay itemData={isData}/>
        <BackgroundFade />
    </div>
  );
}

export default IS;