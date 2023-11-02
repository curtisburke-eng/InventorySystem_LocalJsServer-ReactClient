// BadgeForm.js
import React from "react";
import '../css/main.css'

const BadgeForm = ({ handleSaveData, badge }) => {

  // Display Saved button if not saved
  let saveButton = null
  if(badge.isSaved == 0) {
      saveButton = <button type="submit" className="waves-effect waves-light btn grey">
                  Save</button>
    } else {
      saveButton = <button className="waves-effect waves-light btn brand">
                  Saved</button>
    }

  return (
    <div key={badge.id}>
      <form onSubmit={handleSaveData(badge.id)}>
        <label>
          On Hand:
          <input className='brand-text' type="number" name="newCount_onHand" defaultValue={badge.count_onHand}/>
        </label>
        
        <label>
          On Order:
          <input className='brand-text' type="number" name="newCount_onOrder" defaultValue={badge.count_onOrder}/>
        </label>
        <br />
        {saveButton}
      </form>
    </div>
  );
};

export default BadgeForm;
