import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import CarouselTempImage from "./CarouselTempImage";
import tempCarousel1 from "../../Images/TempCarousel/image1.png";
import tempCarousel2 from "../../Images/TempCarousel/image2.png";
import tempCarousel3 from "../../Images/TempCarousel/image 3.png";

function RotatingCarousel() {
  return (
    <div className="FullWidthCC">
      <div className="Carousel-Container">
        <Carousel>
          <Carousel.Item interval={2000}>
            <div className="Carousel-Image">
              <CarouselTempImage image={tempCarousel1} />
            </div>
            <div className="Carousel-Caption">
              <h3>27ft Slide</h3>
              <p>$500</p>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="Carousel-Image">
              <CarouselTempImage image={tempCarousel2} />
            </div>
            <div className="Carousel-Caption">
              <h3>Basketball</h3>
              <p>$450</p>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="Carousel-Image">
              <CarouselTempImage image={tempCarousel3} />
            </div>
            <div className="Carousel-Caption">
              <h3>Carnival</h3>
              <p>$300</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default RotatingCarousel;
