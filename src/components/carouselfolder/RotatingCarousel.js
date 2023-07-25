import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CaroselImage from "./CarouselImage";

function RotatingCarousel({ carouselData, onCardClick }) {
  return (
    <div className="FullWidthCC">
      <div className="Carousel-Container">
        <Carousel>
          {carouselData.map((item, index) => (
            <Carousel.Item key={index} interval={2000} onClick={() => onCardClick(item.id)}>
              <div className="Carousel-Image">
                <CaroselImage image={item.image} />
              </div>
              <div className="Carousel-Caption">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default RotatingCarousel;