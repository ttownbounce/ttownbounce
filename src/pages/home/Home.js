import "./Home.css";
import "../../App.css";
import React from "react";
import RotatingCarouselLink from "../../components/carouselfolder/RotatingCarouselLink";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";
import homeImage from "../../images/ttb/FTTBD.png"


import ItemDisplay from "../../components/itemdisplay/ItemDisplay";
import GetItemById from "../../dataHandler/getitem/GetItemById"

function Home() {




  var carouselData = []
  var mostPopularData = []


  const carouselIDS = [404,408,604,814,820,822,999]
  const mostPopularIDS = [200,207,822]

  carouselIDS.forEach((number) => {
    const item = GetItemById(number.toString());
    carouselData.push(item);
  });

  mostPopularIDS.forEach((number) => {
    const item = GetItemById(number.toString());
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
