function CheckAndSaveItems(newItemData) {
  const existingDataJSON = localStorage.getItem("itemData");

  if (existingDataJSON) {
    const existingData = JSON.parse(existingDataJSON);
    
    // Check if any existing data has expired and remove it
    const now = new Date().getTime();
    const updatedData = existingData.filter(item => item.expiry > now);
    
    newItemData.forEach((newItem) => {
      const itemExists = updatedData.find(
        (item) => item.id?.toString() === newItem.id?.toString()
      );

      if (itemExists === undefined) {
        // Add a new item with an expiration time of 10 minutes
        const newItemWithExpiry = {
          ...newItem,
          expiry: now + (10 * 60 * 1000), // 10 minutes in milliseconds
        };
        updatedData.push(newItemWithExpiry);
      } else {
        // Item exists, do nothing or update as needed
      }
    });

    const updatedDataJSON = JSON.stringify(updatedData);
    localStorage.setItem("itemData", updatedDataJSON);
  } else {
    // Add new items with expiration time to local storage
    const now = new Date().getTime();
    const itemsWithExpiry = newItemData.map(item => ({
      ...item,
      expiry: now + (720 * 60 * 1000), // 12 hour in milliseconds
    }));
    const updatedDataJSON = JSON.stringify(itemsWithExpiry);
    localStorage.setItem("itemData", updatedDataJSON);
  }
}

export default CheckAndSaveItems;