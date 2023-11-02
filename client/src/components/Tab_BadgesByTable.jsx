// Tab_BadgesByTable
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/main.css'
import BadgeRow from "./BadgeRow";

function Tab_BadgesByTable() {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/badges") // Replace with your API endpoint
      .then((response) => {
        setBadges(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleSaveData = (id) => (event) => {
    event.preventDefault();
    const updatedValue1 = parseInt(event.target.elements.value1.value, 10);
    const updatedValue2 = parseInt(event.target.elements.value2.value, 10);

    const updatedBadges = badges.map((badge) => {
      if (badge.id === id) {
        return { ...badge, count_onHand: updatedValue1, count_onOrder: updatedValue2 };
      }
      return badge;
    });

    setBadges(updatedBadges);

    axios
      .put(`http://localhost:8080/badge`, {
        id: id,
        count_onHand: updatedValue1,
        count_onOrder: updatedValue2,
      })
      .then((response) => {
        console.log("Badge updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating badge: ", error);
      });
  };

  return (
    <div className="App">
      <table className="highlight brand-blue brand-text">
        <thead>
          <tr>
            <th>Size (MM)</th>
            <th>Model</th>
            <th>Color</th>
            <th>Current On Hand</th>
            <th>Current On Order</th>
            {/* <th>New On Hand</th>
            <th>New On Order</th>
            <th></th> */}
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
                <BadgeRow handleSaveData={handleSaveData} badge={badge} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tab_BadgesByTable;
