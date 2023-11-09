// Get Library Functions
import React, { useState, useEffect } from "react";
import axios from "axios";

// Get assets & CSS
import '../css/main.css'
import BadgeForm from "./BadgeForm";

// Create Tab_BadgesByTable Component
function Tab_BadgesByTable(tabClick) {
  // console.log("Table rendered");

  // ----- Declare vars -----
  const [badges, setBadges] = useState([]);
  
  // ----- Setup & Run Functions for queries -----
  // Get all badges from server (on Startup & Refresh)
  useEffect(() => {
    // Send a GET request to access the badges info
    axios
      .get("http://localhost:8080/badges")
      .then((response) => {
        setBadges(response.data);
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
    // Update the state of the badges array (with the new counts) - this is used for keeping the UI up to date
    const updatedBadges = badges.map((badge) => {
      if (badge.id === id) {
        if (Number.isNaN(updatedOnHand)) {
          updatedOnHand = badge.count_onHand
        }
        if (Number.isNaN(updatedOnOrder)) {
          updatedOnOrder = badge.count_onOrder
        }

        return { ...badge, count_onHand: updatedOnHand, count_onOrder: updatedOnOrder };
      }
      return badge;
    });
    setBadges(updatedBadges);

    // Send a PUT request with the new data
    axios
      .put(`http://localhost:8080/badge`, {
        id: id,
        count_onHand: updatedOnHand,
        count_onOrder: updatedOnOrder,
      })
      .then((response) => {
        console.log("Badge updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating badge: ", error);
      });
  };

  // Return the markup for the table with badge data
  return (
    <div className="container">
      <h2 className="center brand-text">Badges</h2>
      <table className="highlight centered brand-blue white-text">

        <thead>
          <tr>
            <th>Size (MM)</th>
            <th>Model</th>
            <th>Color</th>
            <th>Current On Hand</th>
            <th>Current On Order</th>
            <th>New Counts</th>
          </tr>
        </thead>

        <tbody>
          {badges.map((badge) => (
            <tr key={badge.id}>
            <td>{badge.size_mm}</td>
            <td>{badge.model}</td>
            <td>{badge.color}</td>
            <td>{badge.count_onHand}</td>
            <td>{badge.count_onOrder}</td>
            <td>
                <BadgeForm 
                onSaveData={handleSaveData}
                badge={badge}
                />
            </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Tab_BadgesByTable;
