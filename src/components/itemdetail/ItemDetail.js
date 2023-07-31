import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import GetItemById from "../../dataHandler/getitem/GetItemById"
import BackgroundFade from "../backgroundfade/BackgroundFade";
// import RotatingCarouselImages from "../carouselfolder/RotatingCarouselImages";
import Gallery from "./gallery/Gallery";
import "./ItemDetail.css"

function ItemDetail() {
  
  const { id } = useParams();
  const navigate = useNavigate();

  //console.log("ID from URL:", id);

  const item = GetItemById(id);
  //console.log("Item from GetItemById:", item);

  if (!item) {
    console.log("Item not found!");
    return <div>Item not found!</div>;
  }

  const handleGoBack = () => {
    
    navigate(-1);
  };

  return ( 
    <div>
      <div className="page">
      <div className="buttonRow">
        <button onClick={handleGoBack} className="btn btn-primary IDbackbutton">
          <div className="iconAndTextWrapper">
            <i className="fas fa-arrow-left mr-2"></i>
            <span class="backText">Back</span>
          </div>
        </button>
      </div>
      <div className="IDbodyContainer">
      <h1 className="IDheaderText IDbubbleWhite">{item.title}</h1>
      </div>
        <Gallery imageData = {item} />
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
