import "./Home.css";
import "../../App.css";
import React from "react";
import RotatingCarouselLink from "../../components/carouselfolder/RotatingCarouselLink";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";
import homeImage from "../../images/ttb/FTTBD.png"



import BouncerData from "../../dataHandler/staticdata/bouncerdata/BouncerData";
import COData from "../../dataHandler/staticdata/codata/COData";
import ISData from "../../dataHandler/staticdata/isdata/ISData";
import SlideData from "../../dataHandler/staticdata/slidedata/SlideData";
import WIData from "../../dataHandler/staticdata/widata/WIData";

import ItemDisplay from "../../components/itemdisplay/ItemDisplay";
import CheckAndSaveItems from "../../dataHandler/checkandsaveitems/CheckAndSaveItems";
import GetItemByID from "../../dataHandler/getitem/GetItemById"



function Home() {

  CheckAndSaveItems(BouncerData());
  CheckAndSaveItems(COData());
  CheckAndSaveItems(ISData());
  CheckAndSaveItems(SlideData());
  CheckAndSaveItems(WIData());



  var carouselData = []
  var mostPopularData = []


  const carouselIDS = [404,405,406,407,408]
  const mostPopularIDS = [999,402,410]

  carouselIDS.forEach((number) => {
    const item = GetItemByID(number.toString());
    carouselData.push(item);
  });

  mostPopularIDS.forEach((number) => {
    const item = GetItemByID(number.toString());
    mostPopularData.push(item);
  });






  return (
    <div className="page">
      <div className="center">
        <div className="imageContainer">
          <img src={homeImage} alt="T-Town Bounce Logo" />
        </div>
      </div>
      <div className="bodyContainer">
        <h1 className="bodyText bubbleWhite">New Arrivals</h1>
      </div>
      <RotatingCarouselLink carouselData={carouselData} />
      <div></div>
      <div className="bodyContainer">
      <h1 className="bodyText bubbleWhite">Most Popular</h1>
      </div>
      <ItemDisplay itemData={mostPopularData}/>
      <BackgroundFade />
    </div>
  );
}

export default Home;
