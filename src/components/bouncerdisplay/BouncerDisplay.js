import React from "react";
import "./BouncerDisplay.css"

function BouncerDisplay({ bouncerData }) {

  return (
    <div className="card-display page">
        {bouncerData.map((item) => (
          <div key={item.id} className="card-item"> {/* Use a unique key */}
            <div className="card-image">
              <img src={item.image} alt= {item.title + " image"} /> {/* Use the correct component name */}
            </div>
            <div className="card-caption">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BouncerDisplay;


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
