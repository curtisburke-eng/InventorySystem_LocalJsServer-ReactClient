// Get assets & CSS
import '../css/main.css'

export default function PackageCard({id, type, size, color, isProcessed, count_onHand,count_onOrder, isSaved, onDecreaseOnHand,onIncreaseOnHand,onDecreaseOnOrder,onIncreaseOnOrder, onSave}) {
    const handleDecreaseOnHand = () => {
        onDecreaseOnHand(id)
    }
    const handleIncreaseOnHand = () => {
        onIncreaseOnHand(id)
    }
    const handleDecreaseOnOrder = () => {
        onDecreaseOnOrder(id)
    }
    const handleIncreaseOnOrder = () => {
        onIncreaseOnOrder(id)
    }
    const handleSave = (e) => {
        e.preventDefault()
        onSave(id)
    }

    // Display Saved button if not saved
    let saveButton = null
    if(isSaved == 0) {
        saveButton = <button className="waves-effect waves-light btn brand brand-text" onClick={handleSave}>
                    Save</button>
     } else {
        saveButton = <button className="waves-effect waves-light btn brand-blue white-text">
                    Saved</button>
     }

     // Display isProcessed Information
     let processedInfo = null
     if(isProcessed) {
        switch(type) {
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

    return (
        <div className="col s3 m3 l3" >
            <div className="card brand-blue">

                <div className="card-content white-text" key={id}>
                    <h3 className="center"> {type}</h3>
                    <h4 className="center">{size} {processedInfo} </h4>
                    <h5 className="center">{color}</h5>
                    

                    <div className='row'>
                        {/* <h4 className="center">Inventory</h4> */}
                        <div className="col s6 m6 l6">
                            <h5 className="center">On Hand:</h5>
                            <h5 className="center"> {count_onHand} </h5>
                            
                            {/* Create + - buttons for ON HAND counts */}
                            <div className="row">
                                <div className="col s2 m2 l2"></div>
                                <div className="col center s8 m8 l8">
                                    <button className="left waves-effect waves-light btn-floating brand brand-text"
                                    onClick={handleDecreaseOnHand}>-</button>
                                    <button className="right waves-effect waves-light btn-floating brand brand-text"
                                    onClick={handleIncreaseOnHand}>+</button>
                                </div>
                                <div className="col s2 m2 l2"></div>
                            </div>
                            
                        </div>
                        <div className="col s6 m6 l6">
                            <h5 className="center">On Order:</h5>
                            <h5 className="center"> {count_onOrder} </h5>
                            
                            {/* Create + - buttons for ON ORDER counts */}
                            <div className="row">
                                <div className="col s2 m2 l2"></div>
                                <div className="col center s8 m8 l8">
                                <button className="left waves-effect waves-light btn-floating brand brand-text"
                                    onClick={handleDecreaseOnOrder}>-</button>
                                    <button className="right waves-effect waves-light btn-floating brand brand-text"
                                    onClick={handleIncreaseOnOrder}>+</button>
                                </div>
                                <div className="col s2 m2 l2"></div>
                            </div>

                        </div>
                    </div>
                    
                    <div className="row center">
                            {saveButton}
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
        
    )
}