// BadgeRow.js
import React from "react";

const BadgeRow = ({ handleSaveData, badge }) => {
  return (
    <div key={badge.id}>
      <form onSubmit={handleSaveData(badge.id)}>
        <label>
          Value 1:
          <input type="number" name="value1" />
        </label>
        <br />
        <label>
          Value 2:
          <input type="number" name="value2" />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default BadgeRow;
