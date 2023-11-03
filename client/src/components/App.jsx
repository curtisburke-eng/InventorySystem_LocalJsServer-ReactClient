// Get Library Functions
import { useState, useEffect } from 'react'
import axios from 'axios'

// Get assets & CSS
import '../css/main.css'
import keelLogo from '../css/KEEL-logo_white_140x.png'
import Tab_BadgesByCard from './Tab_BadgesByCard'
import Tab_BadgesByTable from './Tab_BadgesByTable'
import Tab_PackageItemsByCard from './Tab_PackageItemsByCard'
import Tab_PackageItemsByTable from './Tab_PackageItemsByTable'


// Create Main App Component
function App() {
  
  // Setting a use state var forces a rerender. Passing this to the other components and using 
  // as a dependancy within useEffect forces recall of useEffect. Thus sends a GET request.
  // SetClick is called from an onClick event within each tab and sets the value to the not of the 
  // current value (thus always updating onClick and always getting the data on a tab click)
  const [click, setClick] = useState(false);


  // ----- Return Markup with loaded data -----
  return (
    <>
        {/* ----- Navbar with Logo & Title ----- */}

      <nav className="nav-extended brand">
        <div className="nav-wrapper">
          <a href="https://shopkeel.us" className="brand-logo">
            <img src={keelLogo} className="brand-logo brand-img brand" alt="KEEL" style={{marginBottom: "20px", marginLeft: "20px"}}/>
          </a>
          
          <ul id="nav-mobile" className="center">
            <h3 className='brand-text'>KEEL Inventory</h3>
          </ul>
        </div>

        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab active">
              <a href="#Tab_BadgesByCard" onClick={() => setClick(!click)}>
                Badges (Card View)
              </a>
            </li>

            <li className="tab">
              <a href="#Tab_BadgesByTable" onClick={() => setClick(!click)}>
                Badges (Table View)
              </a>
            </li>

            <li className="tab">
              <a href="#Tab_PackageItemsByCard" onClick={() => setClick(!click)}>
                Package Items (Card View)
              </a>
            </li>

            <li className="tab">
              <a href="#Tab_PackageItemsByTable" onClick={() => setClick(!click)}>
                Package Items (Table View)
              </a>
            </li>
          </ul>
        </div>

      </nav>

      <section id="Tab_BadgesByCard">
        <Tab_BadgesByCard tabClick={click}/>
      </section>
      <section id="Tab_BadgesByTable">
        <Tab_BadgesByTable tabClick={click}/>
      </section>
      <section id="Tab_PackageItemsByCard">
        <Tab_PackageItemsByCard />
      </section>
      <section id="Tab_PackageItemsByTable">
        <Tab_PackageItemsByTable />
      </section>

    </>
  )
}

export default App
