// Get Library Functions
import { useState, useEffect } from 'react'
import axios from 'axios'

// Get assets & CSS
import '../css/main.css'
import keelLogo from '../css/KEEL-logo_white_140x.png'
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
        {/* ----- Navbar with Logo & Title ----- */}

      <nav class="nav-extended brand">
        <div class="nav-wrapper">
          <a href="https://shopkeel.us" className="brand-logo">
            <img src={keelLogo} className="brand-logo brand-img brand" alt="KEEL" />
          </a>
          
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          
          <ul id="nav-mobile" class="center">
            <h3 className='brand-text'>KEEL Inventory</h3>
          </ul>
        </div>

        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab">
              <a href="#test1">Badges (Card View)</a>
            </li>

            <li class="tab disabled">
              <a href="#test2">Badges (Table View)</a>
            </li>

            <li class="tab disabled">
              <a href="#test4">Shipping Mats. (Card View)</a>
            </li>

            <li class="tab disabled">
              <a href="#test4">Shipping Mats. (Table View)</a>
            </li>
          </ul>
        </div>

      </nav>

      
        
      {/* ----- Display Fetched data for Badges ----- */}
      <div className="row">
        <div className="col s12 m6">
          {/* If there is an error display this message*/ }
          { error ? 
            <p>Something went wrong fetching the Data!</p>
          : // Else load badges
            badges.map((badge) => (
              <BadgeCard {...badge}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
