
import React from "react";
import { useNavigate } from "react-router-dom";
import RotatingCarousel from "../components/carouselfolder/RotatingCarousel";
import "./pagecss/RI.css";

import Image1 from "../images/tempcarousel/image1.png"
import Image2 from "../images/tempcarousel/image2.png"


function RI() {
    const bouncersData = [
        {
          id: 1,
          image: Image1,
          title: "Bouncer 1",
          price: 500,
        },
        {
            id: 2,
          image: Image2,
          title: "Bouncer 2",
          price: 550,
        }
      ];
      
      const drySlidesData = [
        {
            id: 3,
          image: Image1,
          title: "Dry Slide 1",
          price: 600,
        },
        {
            id: 4,
          image: Image2,
          title: "Dry Slide 2",
          price: 650,
        }
      ];
      
      const wetSlidesData = [
        {
            id: 5,
          image: Image1,
          title: "Wet Slide 1",
          price: 700,
        },
        {
            id: 6,
          image: Image2,
          title: "Wet Slide 2",
          price: 750,
        }
      ];

        const navigate = useNavigate();

        const handleCardClick = (rentalData) => {
            // Use the rental data to navigate to the RentalDetails page with the data as URL parameters
            navigate(`/rental/${rentalData.id}`, { state: { rentalData } });
          };
        
          return (
            <div className="RI-container">
              <div className="RI-category">
                <h1>Bouncers</h1>
                <RotatingCarousel carouselData={bouncersData} onCardClick={handleCardClick} />
              </div>
        
              <div className="RI-category">
                <h1>Dry Slides</h1>
                <RotatingCarousel carouselData={drySlidesData} onCardClick={handleCardClick} />
              </div>
        
              <div className="RI-category">
                <h1>Wet Slides</h1>
                <RotatingCarousel carouselData={wetSlidesData} onCardClick={handleCardClick} />
              </div>
            </div>
          );
        }
        
        export default RI;
