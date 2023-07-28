import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./RotatingCarouselLink.css";



function RotatingCarouselLink({ carouselData }) {
  return (
            <div className="FullWidthCC">
              <div className="Carousel-Container">
                <Carousel>
                  {carouselData.map((item, index) => (
                    <Carousel.Item key={index} interval={2000}>
                      <div className="Carousel-Image">
                            <Link to={`/Item/${item.id}`}>
                              <img src={item.images[0]} alt="Carousel pic" />
                            </Link>
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

export default RotatingCarouselLink;