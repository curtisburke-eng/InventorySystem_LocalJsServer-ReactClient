// Get Library Functions
import { useState, useEffect } from 'react'
import axios from 'axios'

// Get assets & CSS
import '../css/main.css'
import keelLogo from '../css/KEEL-logo_white_140x.png'
import Tab_BadgesByCard from './Tab_BadgesByCard'
import Tab_BadgesByTable from './Tab_BadgesByTable'
import Tab_ShippingByCard from './Tab_ShippingByCard'
import Tab_ShippingByTable from './Tab_ShippingByTable'

// Create Main App Component
function App() {

  // ----- Return Markup with loaded data -----
  return (
    <>
        {/* ----- Navbar with Logo & Title ----- */}

      <nav className="nav-extended brand">
        <div className="nav-wrapper">
          <a href="https://shopkeel.us" className="brand-logo">
            <img src={keelLogo} className="brand-logo brand-img brand" alt="KEEL" />
          </a>
          
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          
          <ul id="nav-mobile" className="center">
            <h3 className='brand-text'>KEEL Inventory</h3>
          </ul>
        </div>
        <div className="containter">
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab">
                <a href="#Tab_BadgesByCard">Badges (Card View)</a>
              </li>

              <li className="tab">
                <a href="#Tab_BadgesByTable">Badges (Table View)</a>
              </li>

              <li className="tab">
                <a href="#Tab_ShippingByCard">Shipping Mats. (Card View)</a>
              </li>

              <li className="tab">
                <a href="#Tab_ShippingByTable">Shipping Mats. (Table View)</a>
              </li>
            </ul>
          </div>
        </div>

      </nav>

      <section id="Tab_BadgesByCard">
        <Tab_BadgesByCard />
      </section>
      <section id="Tab_BadgesByTable">
        <Tab_BadgesByTable />
      </section>
      <section id="Tab_ShippingByCard">
        <Tab_ShippingByCard />
      </section>
      <section id="Tab_ShippingByTable">
        <Tab_ShippingByTable />
      </section>

    </>
  )
}

export default App
