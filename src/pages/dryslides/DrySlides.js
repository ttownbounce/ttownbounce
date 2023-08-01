import "./DrySlides.css";
import React from "react";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";
import ItemDisplay from "../../components/itemdisplay/ItemDisplay";

import SlideData from "../../dataHandler/staticdata/slidedata/SlideData";
import CheckAndSaveItems from "../../dataHandler/checkandsaveitems/CheckAndSaveItems";


function DrySlides() {

  
  CheckAndSaveItems(SlideData());


  return (
    <div >
        <ItemDisplay itemData={SlideData()}/>
        <BackgroundFade />
    </div>
  );
}

export default DrySlides;