import "./ContactUs.css";
import "../../App.css";
import React from "react";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";

function HomePage() {
  return (
    <div className="page">
      <div className="cubodyContainer">
        <h1 className="cuheaderText cububbleWhite">Contact Us By Phone</h1>
        <h1 className="infoText cububbleWhite ">205-454-5120</h1>
      </div>
      <div className="cubodyContainer">
        <h1 className="cuheaderText cububbleWhite">Contact Us By Email</h1>
        <h1 className="infoText cububbleWhite">TTownBounce@gmail.com</h1>
      </div>
      <BackgroundFade />
    </div>
  );
}

export default HomePage;
