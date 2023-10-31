// Get Library Functions
import { useState, useEffect } from 'react'
import axios from 'axios'

// Get assets & CSS
import './App.css'
import keelLogo from '../assets/KEEL-logo_white_140x.png'
import BadgeCard from './BadgeCard'

// Create Main App Component
function App() {
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

      } catch(error) {
        setError(true) 
      }
    })()
  },[])

  // ----- Return Markup with loaded data -----
  return (
    <>
      {/* ----- Display Logo & Title ----- */}
      <div>
        <a href="https://shopkeel.us" target="_blank">
          <img src={keelLogo} className="logo" alt="KEEL Logo" />
        </a>
      </div>
      <h1>KEEL Inventory</h1>
      
      {/* ----- Display Fetched data for Badges ----- */}

      { error ? // If there is an error display this message
      <p>Something went wrong fetching the Data!</p>

      : // Else load badges
      badges.map((badge) => (
        <BadgeCard {...badge}/>
      ))}

      
    </>
  )
}

export default App
