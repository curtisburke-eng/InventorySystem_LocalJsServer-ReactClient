// Get Library Functions
import React, { useState, useEffect } from "react";
import axios from "axios";

// Get assets & CSS
import '../css/main.css'
import ItemForm from "./ItemForm";

// Create Tab_BadgesByTable Component
function Tab_PackageItemsByTable(tabClick) {
  // console.log("Table rendered");

  // ----- Declare vars -----
  const [items, setItems] = useState([]);
  
  // ----- Setup & Run Functions for queries -----
  // Get all items from server (on Startup & Refresh)
  useEffect(() => {
    // Send a GET request to access the items info
    axios
      .get("http://localhost:8080/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [tabClick]);

  // Handle Saving form data to the database
  const handleSaveData = (id) => (event) => {
    event.preventDefault();

    // Create temp vars for the new counts
    let updatedOnHand = parseInt(event.target.elements.newCount_onHand.value, 10);
    let updatedOnOrder = parseInt(event.target.elements.newCount_onOrder.value, 10);
    console.log('updatedOnOrder:', updatedOnOrder, 'type',typeof(updatedOnOrder))
    // Update the state of the items array (with the new counts) - this is used for keeping the UI up to date
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        if (Number.isNaN(updatedOnHand)) {
          updatedOnHand = item.count_onHand
        }
        if (Number.isNaN(updatedOnOrder)) {
          updatedOnOrder = item.count_onOrder
        }

        return { ...item, count_onHand: updatedOnHand, count_onOrder: updatedOnOrder };
      }
      return item;
    });
    setItems(updatedItems);

    // Send a PUT request with the new data
    axios
      .put(`http://localhost:8080/item`, {
        id: id,
        count_onHand: updatedOnHand,
        count_onOrder: updatedOnOrder,
      })
      .then((response) => {
        console.log("item updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating item: ", error);
      });
  };

  // Display isProcessed Information
  const getProcessedInfo = (item) => {
    let processedInfo = null
    if(item.isProcessed) {
        switch(item.type) {
            case "Box":
            case "Tin":
                // processedInfo = <h4 className="center">Branded</h4>
                processedInfo = "Branded"
                break; 
            case "Insert":
            case "Foam":  
                // processedInfo = <h4 className="center">Cut</h4>
                processedInfo = "Cut"
                break; 
            case "Card: Thank You":
                processedInfo = "Written/Signed"
                break;
        }
        
    } else {
        // processedInfo = <h4 className="center">Blank</h4>
        processedInfo = "Blank"
    }
    return processedInfo
}


  // Return the markup for the table with item data
  return (
    <div className="container">
        <h2 className="center brand-text">Package Items</h2>
      <table className="highlight centered brand-blue white-text">

        <thead>
          <tr>
            <th>Item</th>
            <th>Size</th>
            <th>Process Level</th>
            <th>Color</th>
            <th>Current On Hand</th>
            <th>Current On Order</th>
            <th>New Counts</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.size}</td>
            <td>{getProcessedInfo(item)}</td>
            <td>{item.color}</td>
            <td>{item.count_onHand}</td>
            <td>{item.count_onOrder}</td>
            <td>
                <ItemForm 
                onSaveData={handleSaveData}
                item={item}
                />
            </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Tab_PackageItemsByTable;
