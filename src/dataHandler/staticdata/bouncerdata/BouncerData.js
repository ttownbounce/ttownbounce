import MPB1 from "../../../images/rentals/bouncerimages/MPB/MPB1.jpg"
import CCB1 from "../../../images/rentals/bouncerimages/CCB/CCB1.jpg"
import FHB1 from "../../../images/rentals/bouncerimages/FHB/FHB1.jpg"
import FCB1 from "../../../images/rentals/bouncerimages/FCB/FCB1.jpg"
import CFB1 from "../../../images/rentals/bouncerimages/CFB/CFB1.jpg"
import DPB1 from "../../../images/rentals/bouncerimages/DPB/DPB1.jpg";
import PCB1 from "../../../images/rentals/bouncerimages/PCB/PCB1.jpg";
import PB1 from "../../../images/rentals/bouncerimages/PB/PB1.jpg";
import SB1 from "../../../images/rentals/bouncerimages/SB/SB1.jpg";



function BouncerData() {

    const bouncersData = [
        {
          id: 1,
          images: [MPB1],
          title: "MICKEY PARK BOUNCER",
          price: 165
        },
        {
          id: 2,
          images: [CCB1],
          title: "COLORFUL CASTLE BOUNCER",
          price: 175
        },
        {
          id: 3,
          images: [FHB1],
          title: "FUNHOUSE BOUNCER",
          price: 175
        },{
          id: 4,
          images: [FCB1],
          title: "FUNHOUSE CASTLE BOUNCER",
          price: 175
        },
        {
          id: 5,
          images: [CFB1],
          title: "CLOWN FACE BOUNCER",
          price: 175
        },
        {
          id: 6,
          images: [DPB1],
          title: "DISNEY PRINCESS BOUNCER",
          price: 175
        },{
          id: 7,
          images: [PCB1],
          title: "PINK CASTLE BOUNCER",
          price: 175
        },
        {
          id: 8,
          images: [PB1],
          title: "PIRATE BOUNCER",
          price: 175
        },
        {
          id: 9,
          images: [SB1],
          title: "SPORTS BOUNCER",
          price: 175
        }
      ];

      return bouncersData;


}

export default BouncerData;