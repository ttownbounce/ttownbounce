import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./NRCarousel.css";
import Carouseltempimage from "../carouself/Carouseltempimage";
import tempCarousel1 from "../../imageicons/tempcarousel/image1.png";
import tempCarousel2 from "../../imageicons/tempcarousel/image2.png";
import tempCarousel3 from "../../imageicons/tempcarousel/image 3.png";

function NRCarousel() {
  //for each in an array!!
  return (
    <div className="FullWidthCC">
      <div className="Carousel-Container">
        <Carousel>
          <Carousel.Item interval={2000}>
            <div className="Carousel-Image">
              <Carouseltempimage image={tempCarousel1} />
            </div>
            <div className="Carousel-Caption">
              <h3>27ft Slide</h3>
              <p>$500</p>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="Carousel-Image">
              <Carouseltempimage image={tempCarousel2} />
            </div>
            <div className="Carousel-Caption">
              <h3>Basketball</h3>
              <p>$450</p>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div className="Carousel-Image">
              <Carouseltempimage image={tempCarousel3} />
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

export default NRCarousel;
