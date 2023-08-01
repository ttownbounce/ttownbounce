
  function GetItemById(id) {


    
    // Find the item in the array based on the provided ID
    

    const existingDataJSON = localStorage.getItem("itemData");
    const existingData = JSON.parse(existingDataJSON)



    // console.log(existingData[0] + " is the object[0]")
    // console.log("ED Item ID:", existingData[0].id);
    // console.log("ED Item Title:", existingData[0].title);
    // console.log("ED Item Price:", existingData[0].price);






    var item = []

    if (Array.isArray(existingData)) {
      item = existingData.find((item) => item.id.toString() === id);
    } else {
      console.log("existingData is not an array.");
    }

  

    //console.log(item + " Is the item")
    return item || null;
  }
  
  export default GetItemById;