import "./DrySlides.css";
import React from "react";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";
import ItemDisplay from "../../components/itemdisplay/ItemDisplay";

import SlideData from "../../dataHandler/staticdata/slidedata/SlideData";


function DrySlides() {

  

  return (
    <div >
        <ItemDisplay itemData={SlideData()}/>
        <BackgroundFade />
    </div>
  );
}

export default DrySlides;