import { useState, useEffect } from 'react'
import axios from 'axios'

// Get assets & CSS
import '../css/main.css'
import BadgeRow from './BadgeRow'

// Create Tab_BadgesByTable Component
export default function Tab_BadgesByTable() {
    // ----- Declare vars -----
    const [badges,setBadges] = useState([])
    const [error,setError] = useState(false)
    
    // ----- Setup & Run Functions for queries -----
  
    // Get all badges from server (on Startup & Refresh)
    useEffect(()=>{
      ;(async () => {
        setError(false) // Reset error to false
        try{
          const result = await axios.get('/api/badges') // Query all badges
          setBadges(result.data)
          // console.log(result.data)
  
        } catch(error) {
          setError(true) 
        }
      })()
    },[])
  
    // Handle Local updating of Badges quantities
    
    const handleUpdate = (updatedBadge) => {
        setBadges(badges.map(badge => {
                  if (badge.id === updatedBadge.id) {
                    return updatedBadge // IDK if this is right
                  } else {
                    return badge
                  }
                }))
    }
  
    // ----- Return Markup with loaded data -----
    return (
        <div className='container'>
            <table className='highlight brand-blue brand-text'>
                <thead>
                <tr>
                    <th>Size (MM)</th>
                    <th>Model</th>
                    <th>Color</th>
                    <th>Current On Hand</th>
                    <th>Current On Order</th>
                    <th>New On Hand</th>
                    <th>New On Order</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {/* ----- Display Fetched data for Badges ----- */}
        
                    {/* If there is an error display this message*/ }
                    { error ? 
                    <tr>Something went wrong fetching the Data!</tr>
                    : // Else load badges
                    badges.map((badge) => (
                        
                        <BadgeRow 
                        onUpdate={handleUpdate}
                        key={badge.id}
                        {...badge} />
                        
                    ))
                    }
      
    
                </tbody>
            </table>
        </div>
    )
}