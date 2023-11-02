// Tab_BadgesByTable
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/main.css'
import BadgeForm from "./BadgeForm";

function Tab_BadgesByTable() {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/badges")
      .then((response) => {
        setBadges(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleSaveData = (id) => (event) => {
    event.preventDefault();
    const updatedOnHand = parseInt(event.target.elements.newCount_onHand.value, 10);
    const updatedOnOrder = parseInt(event.target.elements.newCount_onOrder.value, 10);

    const updatedBadges = badges.map((badge) => {
      if (badge.id === id) {
        return { ...badge, count_onHand: updatedOnHand, count_onOrder: updatedOnOrder };
      }
      return badge;
    });

    setBadges(updatedBadges);

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

  return (
    <div className="container">
      <table className="highlight brand-blue brand-text">
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
