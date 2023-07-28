import "./Bouncers.css";
import React, {useEffect, useMemo} from "react";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";
import ItemDisplay from "../../components/itemdisplay/ItemDisplay";

import CheckAndSaveItems from "../../dataHandler/checkandsaveitems/CheckAndSaveItems";


import tempCarousel1 from "../../images/tempcarousel/image1.png";
import tempCarousel2 from "../../images/tempcarousel/image2.png";
import tempCarousel3 from "../../images/tempcarousel/image 3.png";

function Bouncers() {
  

  const bouncersData = useMemo(() => [
    {
      id: 1,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers1",
      price: 500
    },
    {
      id: 2,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers2",
      price: 450
    },
    {
      id: 3,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers3",
      price: 300
    },{
      id: 4,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers4",
      price: 500
    },
    {
      id: 5,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers5",
      price: 450
    },
    {
      id: 6,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers6",
      price: 300
    },{
      id: 7,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers7",
      price: 500
    },
    {
      id: 8,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers8",
      price: 450
    },
    {
      id: 9,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers9",
      price: 300
    },{
      id: 10,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers10",
      price: 500
    },
    {
      id: 11,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers11",
      price: 450
    },
    {
      id: 12,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers12",
      price: 300
    },{
      id: 13,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers13",
      price: 500
    },
    {
      id: 14,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers14",
      price: 450
    },
    {
      id: 15,
      images: [tempCarousel1, tempCarousel2, tempCarousel3],
      title: "Bouncers15",
      price: 300
    },
  ], []);

  
  useEffect(() => {
    // This code will run only once, during the initial mount
    console.log("Component has mounted!");
    CheckAndSaveItems(bouncersData);
    console.log("in bouncers");
  }, [bouncersData]); 



  return (
    <div >
        <ItemDisplay itemData={bouncersData}/>
        <BackgroundFade />
    </div>
  );
}

export default Bouncers;