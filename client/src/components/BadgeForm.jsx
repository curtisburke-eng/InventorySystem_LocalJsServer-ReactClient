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
      saveButton = <button className="waves-effect waves-light btn grey" type="submit" >Save</button>
   }

  return (
    
      <form onSubmit={handleSubmit(badge.id)}>
        <div className="row valign-wrapper" style={{marginBottom: "auto"}} key={badge.id}>
          
          <div className="col s4 m4 l4">
            <label style={{marginLeft: "10px"}}>
              On Hand:
              <input className='brand-text' type="number" style={{marginLeft: "15px", width: "100px"}} name="newCount_onHand" 
              defaultValue={badge.count_onHand} onChange={handleInputChange}/>
            </label>
          </div>
          
          <div className="col s4 m4 l4">
            <label style={{marginLeft: "10px"}}>
              On Order:
              <input className='brand-text' type="number" style={{marginLeft: "15px", width: "100px"}} name="newCount_onOrder" 
              defaultValue={badge.count_onOrder} onChange={handleInputChange}/>
            </label>
          </div>
          
          <div className="col s3 m3 l3" style={{marginLeft: "10px"}}>
            {saveButton}
          </div>
        </div>
      </form>
    
  );
};

export default BadgeForm;
