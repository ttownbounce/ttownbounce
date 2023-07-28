import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./RotatingCarouselImages.css";



function RotatingCarouselImages({ imageData }) {

  return (
            <div className="FullWidthCCI">
              <div className="Carousel-ContainerI">
                <Carousel>
                    {imageData.images.map((image, imageIndex) => (
                        <Carousel.Item key={imageIndex} interval={2000}>
                        <div >
                            <img className="Carousel-ImageI" src={image} alt={`Carousel pic ${imageIndex}`} />
                        </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
              </div>
            </div>
  );
}

export default RotatingCarouselImages;