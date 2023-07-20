import "./pagecss/ContactUs.css";
import "../../App.css";
import React from "react";
import Fadebackground from "./Fadebackground";

function HomePage() {
  return (
    <div className="page">
      <div className="bodyContainer">
        <h1 className="headerText center">Contact Us By Phone</h1>
      </div>
      <div className="bodyContainer">
        <h1 className="bodyText bubbleWhite ">205-454-5120</h1>
      </div>
      <div className="bodyContainer">
        <h1 className="headerText center">Contact Us By Email</h1>
      </div>
      <div className="bodyContainer">
        <h1 className="bodyText emailtext">TTownBounce@gmail.com</h1>
      </div>
      <Fadebackground />
    </div>
  );
}

export default HomePage;
