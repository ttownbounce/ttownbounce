function CheckAndSaveItems(newItemData) {
  const existingDataJSON = localStorage.getItem("itemData");

  if (existingDataJSON) {
    const existingData = JSON.parse(existingDataJSON);
    //console.log(existingData + " is the existingData");

    newItemData.forEach((newItem) => {
      const itemExists = existingData.find(
        (item) => item.id?.toString() === newItem.id?.toString()
      );
      //console.log(itemExists + " is the item that was found");

      if (itemExists === undefined) {
        //console.log(existingData + " before the push");
        //Array.prototype.push.apply(existingData,newItemData);
        existingData.push(newItem);
        //console.log(existingData + " after the push");
      } 
      else {
        //console.log(newItem.id + " ID already exists in local storage!");
      }
    });

    const updatedDataJSON = JSON.stringify(existingData);
    localStorage.setItem("itemData", updatedDataJSON);
    //console.log("Items saved!!");
  } 
  else {
    const updatedDataJSON = JSON.stringify(newItemData);
    localStorage.setItem("itemData", updatedDataJSON);
  }
}
export default CheckAndSaveItems;
