// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import BadgeComponent from "./BadgeComponent";

function App() {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.example.com/badges") // Replace with your API endpoint
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
        return { ...badge, value1: updatedValue1, value2: updatedValue2 };
      }
      return badge;
    });

    setBadges(updatedBadges);

    axios
      .put(`https://api.example.com/badges/${id}`, {
        value1: updatedValue1,
        value2: updatedValue2,
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
      <h1>Badges</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value 1</th>
            <th>Value 2</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {badges.map((badge) => (
            <tr key={badge.id}>
              <td>{badge.name}</td>
              <td>{badge.value1}</td>
              <td>{badge.value2}</td>
              <td>
                <BadgeComponent handleSaveData={handleSaveData} badge={badge} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
