// Get assets & CSS
import { useState } from 'react'
import axios from 'axios'
import '../css/main.css'

export default function BadgeRow({id, size_mm, model,color,count_onHand,count_onOrder,isSaved, onUpdate, onSave}) {
    const [newOHCount, setNewOHCount] = useState(count_onHand)
    const [newOOCount, setNewOOCount] = useState(count_onOrder)

    const handleSave = async (e) => {
        e.preventDefault()
        let req = {'id':id, 'count_onHand':newOHCount,'count_onOrder':newOOCount}
        onSave(req)
        
    }

    return (
        <tr>
            <td>{size_mm}</td>
            <td>{model}</td>
            <td>{color}</td>
            <td>{count_onHand}</td>
            <td>{count_onOrder}</td>
            <td><input className="brand-text" type="number" defaultValue={count_onHand} onChange={e => setNewOHCount(e.target.value)} /></td>
            <td><input className="brand-text" type="number" defaultValue={count_onOrder} onChange={e => setNewOOCount(e.target.value)} /></td>
            <td><button className="waves-effect waves-light btn grey" onClick={handleSave}>Save</button></td>
        </tr>
        
    )
}