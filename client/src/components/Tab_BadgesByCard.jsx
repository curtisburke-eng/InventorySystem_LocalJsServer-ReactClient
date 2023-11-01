// Get Library Functions
import { useState, useEffect } from 'react'
import axios from 'axios'

// Get assets & CSS
import '../css/main.css'
import BadgeCard from './BadgeCard'

// Create Tab_BadgesByCard Component
export default function Tab_BadgesByCard() {
  // ----- Declare vars -----
  const [badges,setBadges] = useState([])
  const [error,setError] = useState(false)
  const [putReq, setPutReq] = useState()

  // ----- Setup & Run Functions for queries -----

  // Get all badges from server (on Startup & Refresh)
  useEffect(()=>{
    ;(async () => {
      setError(false) // Reset error to false
      try{
        const result = await axios.get('/api/badges') // Query all badges
        setBadges(result.data)
        console.log(result.data)

      } catch(error) {
        setError(true) 
      }
    })()
  },[])

  // Handle Local updating of Badges quantities
  // TODO: could set the state of an isSaved array in each of these using the id as an index
  // that isSaved index could be used for hiding Save btn
  const handleDecreaseOnHand = (id) => {
    setBadges(badges.map(badge => {
      if (badge.id === id) {
        return {...badge, count_onHand: badge.count_onHand -1}
      } else {
        return badge
      }
    }))
  }
  const handleIncreaseOnHand = (id) => {
    setBadges(badges.map(badge => {
      if (badge.id === id) {
        return {...badge, count_onHand: badge.count_onHand +1}
      } else {
        return badge
      }
    }))
  }
  const handleDecreaseOnOrder = (id) => {
    setBadges(badges.map(badge => {
      if (badge.id === id) {
        return {...badge, count_onOrder: badge.count_onOrder -1}
      } else {
        return badge
      }
    }))
  }
  const handleIncreaseOnOrder = (id) => {
    setBadges(badges.map(badge => {
      if (badge.id === id) {
        return {...badge, count_onOrder: badge.count_onOrder +1}
      } else {
        return badge
      }
    }))
  }

  // Save the updated Data to Database
  const handleSave = async (id) => {
    setError(false)
    try{
      const result = await axios.put('http://localhost:8080/badge', badges.find((badge) => badge.id === id))
      console.log(result.status)

    } catch(error) {
      setError(true) 
    }
  }

  // ----- Return Markup with loaded data -----
  return (
    <>
      {/* ----- Display Fetched data for Badges ----- */}
      <div className="row">
        
          {/* If there is an error display this message*/ }
          { error ? 
            <p>Something went wrong fetching the Data!</p>
          : // Else load badges
            badges.map((badge) => (
              <div className="col s3 m3 l3">
                <BadgeCard 
                onDecreaseOnHand={handleDecreaseOnHand}
                onIncreaseOnHand={handleIncreaseOnHand}
                onDecreaseOnOrder={handleDecreaseOnOrder}
                onIncreaseOnOrder={handleIncreaseOnOrder}
                onSave={handleSave}
                key={badge.id}
                {...badge} />
              </div>
            ))
          }
        
      </div>
    </>
  )
}
