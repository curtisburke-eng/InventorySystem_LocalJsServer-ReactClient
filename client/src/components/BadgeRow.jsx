// Get assets & CSS
import '../css/main.css'

export default function BadgeRow({id, size_mm, model,color,count_onHand,count_onOrder,isSaved, onSave}) {
    const handleSave = (e) => {
        e.preventDefault()
        onSave(id)
    }
    
    return (
        <tr>
            <td>{size_mm}</td>
            <td>{model}</td>
            <td>{color}</td>
            <td>{count_onHand}</td>
            <td>{count_onOrder}</td>
            <td>#</td>
            <td>#</td>
            <td>btn</td>
        </tr>
    )
}