// Get assets & CSS
import './App.css'

export default function BadgeCard(badge) {

    return (

        <div className="card" key={badge.id}>
            <h3>Size: {badge.size_mm}</h3>
            <h3>Model: {badge.model}</h3>
            <h3>Color: {badge.color}</h3>
        </div>
    )
}