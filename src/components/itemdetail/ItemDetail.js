import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import GetItemById from "../../dataHandler/getitem/GetItemById"
import BackgroundFade from "../backgroundfade/BackgroundFade";
import RotatingCarouselImages from "../carouselfolder/RotatingCarouselImages";

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
        <h1>{item.id} Is the Item ID</h1>
        <h2>{item.title}</h2>
        <RotatingCarouselImages imageData = {item} />
        <h1 style={{ color: "white" }}>${item.price}</h1>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
      <BackgroundFade />
    </div>
  );
}

export default ItemDetail;
