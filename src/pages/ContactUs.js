import "./pagecss/ContactUs.css";
import "../App.css";
import React from "react";
import BackgroundFade from "../components/BackgroundFade";

function HomePage() {
  return (
    <div className="page">
      <div className="cubodyContainer">
        <h1 className="cuheaderText center">Contact Us By Phone</h1>
      </div>
      <div className="cubodyContainer">
        <h1 className="infoText cububbleWhite ">205-454-5120</h1>
      </div>
      <div className="cubodyContainer">
        <h1 className="cuheaderText center">Contact Us By Email</h1>
      </div>
      <div className="cubodyContainer">
        <h1 className="infoText cububbleWhite">TTownBounce@gmail.com</h1>
      </div>
      <BackgroundFade />
    </div>
  );
}

export default HomePage;
