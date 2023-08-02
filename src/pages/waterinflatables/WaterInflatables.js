import "./WaterInflatables.css";
import React from "react";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";
import ItemDisplay from "../../components/itemdisplay/ItemDisplay";

import WIData from "../../dataHandler/staticdata/widata/WIData";

function WaterInflatables() {


  return (
    <div >
        <ItemDisplay itemData={WIData()}/>
        <BackgroundFade />
    </div>
  );
}

export default WaterInflatables;