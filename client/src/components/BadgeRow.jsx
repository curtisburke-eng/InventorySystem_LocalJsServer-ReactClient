// Get assets & CSS
import { useState } from 'react'
import axios from 'axios'
import '../css/main.css'

export default function BadgeRow({id, size_mm, model,color,count_onHand,count_onOrder,isSaved, onUpdate, onSave}) {
    const [newOHCount, setNewOHCount] = useState(count_onHand)
    const [newOOCount, setNewOOCount] = useState(count_onOrder)

    const handleSave = async (e) => {

        //TODO SHould add try cathc and error things like in the by Card jsx
        e.preventDefault()
        // onSave(id, newOHCount, newOOCount)
        console.log(newOHCount,newOOCount)
        const result = await axios.put('http://localhost:8080/badge', {'id':id, 'count_onHand':newOHCount,'count_onOrder':newOOCount})
        console.log(result.data)
        onUpdate(result.data)
        
    }

    return (
        <tr>
            <td>{size_mm}</td>
            <td>{model}</td>
            <td>{color}</td>
            <td>{count_onHand}</td>
            <td>{count_onOrder}</td>
            <td><input type="number" defaultValue={count_onHand} onChange={e => setNewOHCount(e.target.value)} /></td>
            <td><input type="number" defaultValue={count_onOrder} onChange={e => setNewOOCount(e.target.value)} /></td>
            <td><button className="waves-effect waves-light btn grey" onClick={handleSave}>Save</button></td>
        </tr>
        
    )
}