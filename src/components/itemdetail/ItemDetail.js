// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import GetItemById from "../../dataHandler/getitem/GetItemById"
// import BackgroundFade from "../backgroundfade/BackgroundFade";
// // import RotatingCarouselImages from "../carouselfolder/RotatingCarouselImages";

// import React from "react";
// import Gallery from "./gallery/Gallery";
// import "./ItemDetail.css"

import React from "react";
import BackgroundFade from "../backgroundfade/BackgroundFade";
import Gallery from "./gallery/Gallery";
import "./ItemDetail.css";
import { useNavigate, useLocation } from "react-router-dom";

function ItemDetail() {
  // const { id } = useParams();
  const navigate = useNavigate();
  const { item } = useLocation().state;

  // //console.log("ID from URL:", id);

  // const item = GetItemById(id);
  // //console.log("Item from GetItemById:", item);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="page">
        <div className="buttonRow">
          <button
            onClick={handleGoBack}
            className="btn btn-primary IDbackbutton"
          >
            <div className="iconAndTextWrapper">
              <i className="fas fa-arrow-left mr-2"></i>
              <span className="backText">Back</span>
            </div>
          </button>
        </div>
        <div className="IDbodyContainer">
          <h1 className="IDheaderText IDbubbleWhite">{item.title}</h1>
        </div>
        <Gallery imageData={item} />
        <div className="IDbodyContainer">
          <h1 className="IDinfoText IDbubbleWhite ">${item.price}</h1>
        </div>
      </div>
      <BackgroundFade />
    </div>
  );
}

// <RotatingCarouselImages imageData = {item} />
export default ItemDetail;
