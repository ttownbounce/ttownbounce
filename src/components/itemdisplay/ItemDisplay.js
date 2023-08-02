import React from "react";
import "./ItemDisplay.css";
import { useNavigate } from "react-router-dom";

function ItemDisplay({ itemData }) {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    // Programmatically navigate to the ItemDetail page with the selected item
    navigate(`/Item/${item.id}`, { state: { item: item } });
  };
  
  return (
    <div className="card-display page">
      {itemData.map((item) => (
        <div key={item.id} className="card-item" onClick={() => handleItemClick(item)}>
          <div className="card-image">
            <img src={item.images[0]} alt={item.title + " image"} />
          </div>
          <div className="card-caption">
            <p className="card-title">{item.title}</p>
            <p className="card-price">${item.price}</p>
            <p className="card-clickme">Click Me!</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemDisplay;
