// BadgeForm.js
import React from "react";
import { useState } from "react";
import '../css/main.css'

const BadgeForm = ({ onSaveData, badge }) => {
  const [formSubmitted, setFormSubmitted] = useState(true);

  const handleInputChange = () => {
    if (formSubmitted) {
      setFormSubmitted(false);
    }
  };

  const handleSubmit = (id) => (event) => {
    setFormSubmitted(true);
    onSaveData(id)(event);
  };

  // Display Saved button if not saved
  let saveButton = null
  if (formSubmitted){
      saveButton = <button className="waves-effect waves-light btn brand">Saved</button>
   } else {
      saveButton = <button type="submit" className="waves-effect waves-light btn grey">Save</button>
   }

  return (
    <div key={badge.id}>
      <form onSubmit={handleSubmit(badge.id)}>
        <label>
          On Hand:
          <input className='brand-text' type="number" name="newCount_onHand" 
          defaultValue={badge.count_onHand} onChange={handleInputChange}/>
        </label>
        
        <label>
          On Order:
          <input className='brand-text' type="number" name="newCount_onOrder" 
          defaultValue={badge.count_onOrder} onChange={handleInputChange}/>
        </label>
        <br />
        {saveButton}
      </form>
    </div>
  );
};

export default BadgeForm;
