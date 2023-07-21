import "./pagecss/ContactUs.css";
import "../../App.css";
import React from "react";
import Fadebackground from "./FadeBackground";

function HomePage() {
  return (
    <div className="page">
      <div className="cubodyContainer">
        <h1 className="cuheaderText center">Contact Us By Phone</h1>
      </div>
      <div className="cubodyContainer">
        <h1 className="cubodyText cububbleWhite ">205-454-5120</h1>
      </div>
      <div className="cubodyContainer">
        <h1 className="cuheaderText center">Contact Us By Email</h1>
      </div>
      <div className="cubodyContainer">
        <h1 className="cubodyText emailtext">TTownBounce@gmail.com</h1>
      </div>
      <Fadebackground />
    </div>
  );
}

export default HomePage;
