// Get Library Functions
import { useState, useEffect } from 'react'
import axios from 'axios'

// Get assets & CSS
import '../css/main.css'
import BadgeCard from './BadgeCard'

// Create Tab_BadgesByCard Component
export default function Tab_BadgesByCard(tabClick) {
  // console.log("Cards rendered");

  // ----- Declare vars -----
  const [badges,setBadges] = useState([])
  const [error,setError] = useState(false)
  
  // ----- Setup & Run Functions for queries -----

  // Get all badges from server (on Startup & Refresh)
  useEffect(() => {
    // Send a GET request to access the badges info
    axios
      .get("http://localhost:8080/badges")
      .then((response) => {
        setBadges(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [tabClick]);

  // Handle Local updating of Badges quantities
  const handleDecreaseOnHand = (id) => {
    setBadges(badges.map(badge => {
      if (badge.id === id) {
        if(badge.count_onHand == 0){
          return {...badge, count_onHand: badge.count_onHand, isSaved: 0}
        } else{
          return {...badge, count_onHand: badge.count_onHand -1, isSaved: 0}
        }
      } else {
        return badge
      }
    }))
  }
  const handleIncreaseOnHand = (id) => {
    setBadges(badges.map(badge => {
      if (badge.id === id) {
        return {...badge, count_onHand: badge.count_onHand +1, isSaved: 0}
      } else {
        return badge
      }
    }))
  }
  const handleDecreaseOnOrder = (id) => {
    setBadges(badges.map(badge => {
      if (badge.id === id) {
        if(badge.count_onOrder == 0){
          return {...badge, count_onOrder: badge.count_onOrder, isSaved: 0}
        }else {
          return {...badge, count_onOrder: badge.count_onOrder -1, isSaved: 0}
        }
      } else {
        return badge
      }
    }))
  }
  const handleIncreaseOnOrder = (id) => {
    setBadges(badges.map(badge => {
      if (badge.id === id) {
        return {...badge, count_onOrder: badge.count_onOrder +1, isSaved: 0}
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
      // console.log(result.status)
      setBadges(badges.map(badge => {
        if (badge.id === id) {
          return {...badge, isSaved: 1}
        } else {
          return badge
        }
      }))

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
                <BadgeCard 
                onDecreaseOnHand={handleDecreaseOnHand}
                onIncreaseOnHand={handleIncreaseOnHand}
                onDecreaseOnOrder={handleDecreaseOnOrder}
                onIncreaseOnOrder={handleIncreaseOnOrder}
                onSave={handleSave}
                key={badge.id}
                {...badge} />
            ))
          }
        
      </div>
    </>
  )
}
