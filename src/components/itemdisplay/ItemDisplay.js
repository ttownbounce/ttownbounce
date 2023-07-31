import React from "react";
import "./ItemDisplay.css"
import { Link } from "react-router-dom";

function ItemDisplay({ itemData }) {

  return (
    <div className="card-display page">
      {itemData.map((item) => (
        <div key={item.id} className="card-item">
        <Link style={{ textDecoration: "none" }} to={`/Item/${item.id}`}> {/* Pass item.id as URL parameter */}
            <div className="card-image">
              <img src={item.images[0]} alt={item.title + " image"} />
            </div>
          <div className="card-caption">
            <p className="card-title">{item.title}</p>
            <p className="card-price">${item.price}</p>
            <p className="card-clickme">Click Me!</p>
          </div>
        </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemDisplay;


// return (
//     <div>
//         {bouncerData.map((item) => (
//             <div className="card-display">
//                 <div className="card-container">
//           <div key={item.id} className="card-item"> {/* Use a unique key */}
//             <div className="card-image">
//               <img src={item.image} alt= {item.title + " image"} /> {/* Use the correct component name */}
//             </div>
//             <div className="card-caption">
//               <h3>{item.title}</h3>
//               <p>${item.price}</p>
//             </div>
//           </div>
//           </div>
//             </div>
//         ))}
//     </div>
//   );




//   return (
//     <div className="card-display">
//       <div className="card-container">
//         {bouncerData.map((item) => (
//           <div key={item.id} className="card-item"> {/* Use a unique key */}
//             <div className="card-image">
//               <img src={item.image} alt= {item.title + " image"} /> {/* Use the correct component name */}
//             </div>
//             <div className="card-caption">
//               <h3>{item.title}</h3>
//               <p>${item.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
