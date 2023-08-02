import BouncerData from "../../dataHandler/staticdata/bouncerdata/BouncerData";
import COData from "../../dataHandler/staticdata/codata/COData";
import ISData from "../../dataHandler/staticdata/isdata/ISData";
import SlideData from "../../dataHandler/staticdata/slidedata/SlideData";
import WIData from "../../dataHandler/staticdata/widata/WIData";



  function GetItemById(id) {


    var existingData = [];

    existingData = existingData.concat(BouncerData());
    existingData = existingData.concat(COData());
    existingData = existingData.concat(ISData());
    existingData = existingData.concat(SlideData());
    existingData = existingData.concat(WIData());
    
    // Find the item in the array based on the provided ID
    




    // console.log(existingData[0] + " is the object[0]")
    // console.log("ED Item ID:", existingData[0].id);
    // console.log("ED Item Title:", existingData[0].title);
    // console.log("ED Item Price:", existingData[0].price);





    var item = []

    if (Array.isArray(existingData)) {
      item = existingData.find((item) => item.id.toString() === id.toString());
    } else {
      console.log("existingData is not an array.");
    }

  

    //console.log(item + " Is the item")
    return item || null;
  }
  
  export default GetItemById;