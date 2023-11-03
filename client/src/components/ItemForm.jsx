// BadgeForm.js
import React from "react";
import { useState } from "react";
import '../css/main.css'

const ItemForm = ({ onSaveData, item }) => {
  // Create local var for tracking submission status
  const [formSubmitted, setFormSubmitted] = useState(true);

  // Handler function for dynamically setting state based on an onChange event within the form inputs
  const handleInputChange = () => {
    if (formSubmitted) {
      setFormSubmitted(false);
    }
  };

  // Handler function for submitting the form and resetting the local state
  const handleSubmit = (id) => (event) => {
    // Save the data to the database
    onSaveData(id)(event);

    // Set the local state for submission tracking
    setFormSubmitted(true);
    
    // Reset the form using the id for that line (item)
    var name = 'itemForm' + id
    var frm = document.getElementsByName(name)[0];
    frm.reset();  // Reset all form data
    
  };

  // Display different Saved button based on form submission state
  let saveButton = null
  if (formSubmitted){
      saveButton = <button className="waves-effect waves-light btn brand">Saved</button>
   } else {
      saveButton = <button className="waves-effect waves-light btn grey" type="submit" >Save</button>
   }

  // Return markup for the form enrty for each row
  return (
    
      <form onSubmit={handleSubmit(item.id)} name={'itemForm'+item.id} >
        <div className="row valign-wrapper" style={{marginBottom: "auto"}} key={item.id}>
          
          <div className="col s4 m4 l4">
            <label style={{marginLeft: "10px"}}>
              On Hand:
              <input className='brand-text' type="number" style={{marginLeft: "15px", width: "100px"}} name="newCount_onHand" 
              min='0' onChange={handleInputChange}/>
            </label>
          </div>
          
          <div className="col s4 m4 l4">
            <label style={{marginLeft: "10px"}}>
              On Order:
              <input className='brand-text' type="number" style={{marginLeft: "15px", width: "100px"}} name="newCount_onOrder" 
              min='0' onChange={handleInputChange}/>
            </label>
          </div>
          
          <div className="col s3 m3 l3" style={{marginLeft: "10px"}}>
            {saveButton}
          </div>

        </div>
      </form>
    
  );
};

export default ItemForm;
