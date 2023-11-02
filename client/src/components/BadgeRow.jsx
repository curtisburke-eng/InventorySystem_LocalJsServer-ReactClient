// Get assets & CSS
import { useState } from 'react'
import axios from 'axios'
import '../css/main.css'

export default function BadgeRow({id, size_mm, model,color,count_onHand,count_onOrder,isSaved, onSave}) {
    const [newOHCount, setNewOHCount] = useState(count_onHand)
    const [newOOCount, setNewOOCount] = useState(count_onOrder)
    const [localisSaved, setLocalIsSaved] = useState(isSaved)

    const handleSave = async (e) => {
        e.preventDefault()
        let req = {'id':id, 'count_onHand':newOHCount,'count_onOrder':newOOCount, 'isSaved':localisSaved}
        onSave(req)
        setLocalIsSaved(isSaved) // I think this comes from the database (passed into this as a param) - CHECK
        
    }
    
    // Display Saved button if not saved
    let saveButton = null
    if(localisSaved == 0) {
        saveButton = <button className="waves-effect waves-light btn grey" onClick={handleSave}>
                    Save</button>
     } else {
        saveButton = <button className="waves-effect waves-light btn brand">
                    Saved</button>
     }

    return (
        <tr>
            <td>{size_mm}</td>
            <td>{model}</td>
            <td>{color}</td>
            <td>{count_onHand}</td>
            <td>{count_onOrder}</td>
            <td><input className="brand-text" type="number" defaultValue={count_onHand} onChange={e => {setNewOHCount(e.target.value) 
                setLocalIsSaved(0)}} /></td>
            <td><input className="brand-text" type="number" defaultValue={count_onOrder} onChange={e => {setNewOOCount(e.target.value)
                setLocalIsSaved(0)}} /></td>
            <td>{saveButton}</td>
        </tr>
        
    )
}