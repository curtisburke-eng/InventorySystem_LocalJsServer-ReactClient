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
                    return {...badge, count_onHand: updatedBadge.count_onHand, count_onOrder: updatedBadge.count_onOrder }
                  } else {
                    return badge
                  }
                }))
        // console.log(updatedBadge.id,updatedBadge.count_onHand, updatedBadge.count_onOrder)
    }

      // Save the updated Data to Database
    const handleSave = async (updatedCounts) => {
        // Update the local state of the badges object
        console.log(updatedCounts.count_onHand)
        console.log('Pre map:', badges.find((badge) => badge.id === updatedCounts.id))

        // This kinda works... maybe do a for each?
        // maybe set map result equal to a var then use setBadges
        setBadges(badges.map((badge) => {
           if (badge.id === updatedCounts.id) {
              badge.count_onHand = Number(updatedCounts.count_onHand)
              badge.count_onOrder = Number(updatedCounts.count_onOrder)
            
              return badge
            }
          }))
        // setBadges(badges.map(badge => {
        //         if (badge.id === updatedCounts.id) {
        //           return {...badge, 'count_onHand': Number(updatedCounts.count_onHand), 'count_onOrder': Number(updatedCounts.count_onOrder)}
        //         }
        //         else {
        //             return badge
        //         }
        //       }))
        
        console.log('Post map:', badges.find((badge) => badge.id === updatedCounts.id))

        setError(false)
        try{
        const result = await axios.put('http://localhost:8080/badge', badges.find((badge) => badge.id === updatedCounts.id))
        console.log(result.data)
        } catch(error) {
        setError(true) 
        }
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
                        onSave={handleSave}
                        key={badge.id}
                        {...badge} />
                        
                    ))
                    }
      
    
                </tbody>
            </table>
        </div>
    )
}