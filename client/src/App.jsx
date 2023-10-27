import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import keelLogo from './assets/KEEL-logo_white_140x.png'

function App() {

  const [badges,setBadges] = useState([])
  const [error,setError] = useState(false)

  // Get all badges from server (on Startup & Refresh)
  useEffect(()=>{
    ;(async () => {
      setError(false) // Reset error to false
      try{
        const result = await axios.get('/api/badges')
        setBadges(result.data)

      } catch(error) {
        setError(true) 
      }
    })()
  },[])




  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://shopkeel.us" target="_blank">
          <img src={keelLogo} className="logo" alt="KEEL Logo" />
        </a>
      </div>
      <h1>KEEL Inventory</h1>

      
      { error ? // If there is an error display this message
      <p>Something went wrong fetching the Data!</p>

      : // Else load badges
      badges.map((badge) => (
        <div className="card" key={badge.id}>
          <h3>Size: {badge.size_mm}</h3>
          <h3>Model: {badge.model}</h3>
          <h3>Color: {badge.color}</h3>
        </div>

      ))}


      <h1>Card</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
    </>
  )
}

export default App
