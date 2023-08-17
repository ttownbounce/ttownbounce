import tempCarousel1 from "../../../images/tempcarousel/image1.png";
import tempCarousel2 from "../../../images/tempcarousel/image2.png";
import tempCarousel3 from "../../../images/tempcarousel/image3.png";
import tempCarousel4 from "../../../images/tempcarousel/image4.png";
import tempCarousel5 from "../../../images/tempcarousel/image5.png";
import tempCarousel6 from "../../../images/tempcarousel/image6.png";

import BB1 from "../../../images/rentals/isimages/BouncyBoxing/BB1.jpg"

import WB1 from "../../../images/rentals/isimages/WreckingBall/WB1.jpg"
import WB2 from "../../../images/rentals/isimages/WreckingBall/WB2.jpg"
import WB3 from "../../../images/rentals/isimages/WreckingBall/WB3.jpg"
import WB4 from "../../../images/rentals/isimages/WreckingBall/WB4.jpg"

import JA1 from "../../../images/rentals/isimages/JoustingArena/JA1.jpg"
import JA2 from "../../../images/rentals/isimages/JoustingArena/JA2.jpg"

import IT3D1 from "../../../images/rentals/isimages/InflatableTwister/IT3D1.jpg"
import IT3D2 from "../../../images/rentals/isimages/InflatableTwister/IT3D2.jpg"






function ISData() {

    const isData = [
        {
          id: 400,
          images: [BB1],
          title: "BOUNCY BOXING",
          price: 250
        },
        {
          id: 401,
          images: [WB1,WB2,WB3,WB4],
          title: "WRECKING BALL",
          price: 350
        },
        {
          id: 402,
          images: [JA1,JA2],
          title: "JOUSTING ARENA",
          price: 250
        },
        {
          id: 403,
          images: [IT3D1,IT3D2],
          title: "3D INFLATABLE TWISTER",
          price: 250
        },
        {
          id: 404,
          images: [tempCarousel1, tempCarousel2, tempCarousel3,tempCarousel4,tempCarousel5,tempCarousel6],
          title: "CARNIVAL: FOOTBALL",
          price: 200
        },
        {
          id: 405,
          images: [tempCarousel1, tempCarousel2, tempCarousel3,tempCarousel4,tempCarousel5,tempCarousel6],
          title: "CARNIVAL: BASKETBALL",
          price: 200
        },
        {
          id: 406,
          images: [tempCarousel1, tempCarousel2, tempCarousel3,tempCarousel4,tempCarousel5,tempCarousel6],
          title: "CARNIVAL: BASEBALL",
          price: 200
        },
        {
          id: 407,
          images: [tempCarousel1, tempCarousel2, tempCarousel3,tempCarousel4,tempCarousel5,tempCarousel6],
          title: "CARNIVAL: KNOCK DOWN",
          price: 200
        },
        {
          id: 408,
          images: [tempCarousel1, tempCarousel2, tempCarousel3,tempCarousel4,tempCarousel5,tempCarousel6],
          title: "BUZZER BEATER",
          price: 250
        },
        {
          id: 409,
          images: [tempCarousel1, tempCarousel2, tempCarousel3,tempCarousel4,tempCarousel5,tempCarousel6],
          title: "BUNGEE BASKETBALL CHALLENGE",
          price: 225
        },
        {
          id: 410,
          images: [tempCarousel1, tempCarousel2, tempCarousel3,tempCarousel4,tempCarousel5,tempCarousel6],
          title: "HOME RUN CHALLENGE",
          price: 175
        },
      ];

      return isData;


}

export default ISData;






