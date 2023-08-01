import "./Bouncers.css";
import React from "react";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";
import ItemDisplay from "../../components/itemdisplay/ItemDisplay";

import BouncerData from "../../dataHandler/staticdata/bouncerdata/BouncerData";
import CheckAndSaveItems from "../../dataHandler/checkandsaveitems/CheckAndSaveItems";


function Bouncers() {
  

  CheckAndSaveItems(BouncerData());



  return (
    <div >
        <ItemDisplay itemData={BouncerData()}/>
        <BackgroundFade />
    </div>
  );
}

export default Bouncers;