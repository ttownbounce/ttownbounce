import "./CO.css";
import React from "react";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";
import ItemDisplay from "../../components/itemdisplay/ItemDisplay";

import COData from "../../dataHandler/staticdata/codata/COData";
import CheckAndSaveItems from "../../dataHandler/checkandsaveitems/CheckAndSaveItems";


function CO() {

  CheckAndSaveItems(COData());


  return (
    <div >
        <ItemDisplay itemData={COData()}/>
        <BackgroundFade />
    </div>
  );
}

export default CO;