
// Get assets & CSS
import '../css/main.css'

import Tab_BadgesByTable from './Tab_BadgesByTable'
import Tab_PackageItemsByTable from './Tab_PackageItemsByTable'

// Create Tab_ShippingByCard Component
export default function Bulk_Inventory(click) {
 

  // ----- Return Markup with loaded data -----
  return (
    < div className="container">
      {/* ----- Display Fetched data for items ----- */}
      <h2 className="brand-text">Bulk Inventory</h2>
      <div className="row">
      <ul className="tabs tabs-transparent">
            <li className="tab">
              <a className="brand-text" href="#Tab_BadgesByTable">Bulk Badges (Table)</a>
            </li>
            <li className="tab">
              <a className="brand-text" href="#Tab_PackageItemsByTable">Bulk Packaging Items (Table)</a>
            </li>
      </ul>
    </div>
    <div id="Tab_BadgesByTable" class="col s12"><Tab_BadgesByTable tabClick={click}/></div>
    <div id="Tab_PackageItemsByTable" class="col s12"><Tab_PackageItemsByTable tabClick={click}/></div>
        
    </div>
  )
}