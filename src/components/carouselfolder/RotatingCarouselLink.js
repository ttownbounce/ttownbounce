import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./RotatingCarouselLink.css";



function RotatingCarouselLink({ carouselData }) {
  return (
            <div className="FullWidthCC">
              <div className="Carousel-Container">
                <Carousel  interval={2000}>
                  {carouselData.map((item, index) => (
                    <Carousel.Item key={index}>
                      <div className="Carousel-Image">
                            <Link to={`/Item/${item.id}`}>
                              <img src={item.images[0]} alt="Carousel pic" />
                            </Link>
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