import "./CO.css";
import React from "react";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";
import ItemDisplay from "../../components/itemdisplay/ItemDisplay";
import CheckAndSaveItems from "../../dataHandler/checkandsaveitems/CheckAndSaveItems";


import tempCarousel1 from "../../images/tempcarousel/image1.png";
import tempCarousel2 from "../../images/tempcarousel/image2.png";
import tempCarousel3 from "../../images/tempcarousel/image 3.png";

function CO() {

  const coData = [
    {
      id: 16,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "CO1",
      price: 500
    },
    {
      id: 17,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "CO2",
      price: 450
    },
    {
      id: 18,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "CO3",
      price: 300
    },
  ];

  CheckAndSaveItems(coData);


  return (
    <div >
        <ItemDisplay itemData={coData}/>
        <BackgroundFade />
    </div>
  );
}

export default CO;