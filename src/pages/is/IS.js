import "./IS.css";
import React from "react";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";
import ItemDisplay from "../../components/itemdisplay/ItemDisplay";

import ISData from "../../dataHandler/staticdata/isdata/ISData";
import CheckAndSaveItems from "../../dataHandler/checkandsaveitems/CheckAndSaveItems";


function IS() {



  CheckAndSaveItems(ISData());


  return (
    <div >
        <ItemDisplay itemData={ISData()}/>
        <BackgroundFade />
    </div>
  );
}

export default IS;