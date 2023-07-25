import React from "react";
import { useLocation } from "react-router-dom";

function RentalDetails() {
  const location = useLocation();
  const rentalData = location.state.rentalData;

  return (
    <div>
      <h2>{rentalData.title}</h2>
      <img src={rentalData.image} alt={rentalData.title} />
      <p>{rentalData.description}</p>
      <p>Price: ${rentalData.price}</p>
      <p>Location: {rentalData.location}</p>
    </div>
  );
}

export default RentalDetails;