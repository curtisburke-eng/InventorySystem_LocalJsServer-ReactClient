
// Get assets & CSS
import '../css/main.css'

// Create Tab_ShippingByCard Component
export default function Workflows_Home(tabClick) {
 

  // ----- Return Markup with loaded data -----
  return (
    < div className="container">
      {/* ----- Display Fetched data for items ----- */}
      <h2 className="brand-text">Workflows</h2>
      <ul className="collapsible">
        <li>
        <div className="collapsible-header">Order Inventory Items</div>
        <div className="collapsible-body"><span>Under Development. Coming soon...</span></div>
        </li>
        <li>
        <div className="collapsible-header">Recieve Inventory Items</div>
        <div className="collapsible-body"><span>Under Development. Coming soon...</span></div>
        </li>
        <li>
        <div className="collapsible-header">Create "Ready-to-Go" Packages</div>
        <div className="collapsible-body"><span>Under Development. Coming soon...</span></div>
        </li>
        <li>
        <div className="collapsible-header">Create "Ready-to-Go" Tins</div>
        <div className="collapsible-body"><span>Under Development. Coming soon...</span></div>
        </li>
        <li>
        <div className="collapsible-header">Fulfill Customer Orders</div>
        <div className="collapsible-body"><span>Under Development. Coming soon...</span></div>
        </li>
    </ul>
    </div>
  )
}