import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Carousel from "react-bootstrap/Carousel";

import "./RotatingCarouselLink.css";

function RotatingCarouselLink({ carouselData }) {
  const navigate = useNavigate(); // Move useNavigate inside the functional component

  const handleItemClick = (item) => {
    navigate(`/Item/${item.id}`, { state: { item: item } });
  };


  return (
    <div className="FullWidthCC">
      <div className="Carousel-Container">
        <Carousel interval={2000}>
          {carouselData.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="Carousel-Image">
                <img src={item.images[0]} alt="Carousel pic" onClick={() => handleItemClick(item)} />
              </div>
              <div className="Carousel-Caption">
                <p className="Carousel-title">{item.title}</p>
                <p className="Carousel-price">${item.price}</p>
                <p className="Carousel-clickme">Click The Image!</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default RotatingCarouselLink;
