function CheckAndSaveItems(newItemData) {
  const existingDataJSON = localStorage.getItem("itemData");

  if (existingDataJSON) {
    const existingData = JSON.parse(existingDataJSON);
    
    // Check if any existing data has expired and remove it
    const now = new Date().getTime();
    const updatedData = existingData.filter(item => item.expiry > now);
    
    let itemAdded = false; // Flag to track if an item has been added


    for (const newItem of newItemData) {
      const itemExists = updatedData.find(
        (item) => item.id?.toString() === newItem.id?.toString()
      );

      if (itemExists === undefined) {
        // Add a new item with an expiration time of 10 minutes
        const newItemWithExpiry = {
          ...newItem,
          expiry: now + (720 * 60 * 1000), // 10 minutes in milliseconds
        };
        updatedData.push(newItemWithExpiry);
        itemAdded = true; // Set the flag to true as an item has been added
      } else {
          console.log("*")
          console.log("An item has been found in the array before an item was added")
          console.log("This means that the first item in the array has already been saved")
          console.log("By default, there is no need to check the data anymore. It is already present")
          console.log("*")
          break;
        
      }
    }

    // If an item has been added, you can do something after the loop
    if (itemAdded) {
      const updatedDataJSON = JSON.stringify(updatedData);
      localStorage.setItem("itemData", updatedDataJSON);
      console.log("An array of items has been added after the check")
    }

  
  } else {
    // Add new items with expiration time to local storage
    const now = new Date().getTime();
    const itemsWithExpiry = newItemData.map(item => ({
      ...item,
      expiry: now + (720 * 60 * 1000), // 12 hour in milliseconds
    }));
    const updatedDataJSON = JSON.stringify(itemsWithExpiry);
    localStorage.setItem("itemData", updatedDataJSON);
    console.log("No data was in LS, so the data was added")
  }
}

export default CheckAndSaveItems;
