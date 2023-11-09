
// Get assets & CSS
import '../css/main.css'
import $ from "jquery"

import Workflow_CreatePackages from './Workflow_CreatePackages'

// Create Tab_ShippingByCard Component
export default function Workflows_Home(tabClick) {
        
    const goTo_CreatePackages = () => {
        var el = document.getElementById("Workflow-tabs")
        var instance = M.Tabs.init(el)
        instance.select("Workflow_CreatePackages")
    }
  // ----- Return Markup with loaded data -----
  return (
    <>
    <div className="row">
      <ul id="Workflow-tabs" className="tabs tabs-transparent">
            <li className="tab">
              <a className="active brand-text" href="#Workflow_Options">H</a>
            </li>
            <li className="tab">
              <a className="brand-text" href="#Workflow_OrderInventory">1</a>
            </li>
            <li className="tab">
              <a className="brand-text" href="#Workflow_RecieveInventory">2</a>
            </li>
            <li className="tab">
              <a className="brand-text" href="#Workflow_CreatePackages">3</a>
            </li>
            <li className="tab">
              <a className="brand-text" href="#Workflow_CreateTins">4</a>
            </li>
            <li className="tab">
              <a className="brand-text" href="#Workflow_FulfillOrders">5</a>
            </li>
      </ul>
    </div>
    

    < div id="Workflow_Options" className="container">
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
            <div className="collapsible-body">
                <div className="row valign-wrapper">
                <div className="col s10">
                    <p className="brand-text">"Ready-to-Go" Packages include:</p>
                    <p>1 Stamped Box</p>
                    <p>1 Insert</p>
                    <p>1 or more Bubble stand-offs</p>
                </div>
                <div className="col s2">
                    <button className="waves-effect waves-light btn brand-blue white-text" onClick={goTo_CreatePackages}>CRUSH IT</button>
                </div>
                </div> 
            </div>
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

    <div id="Workflow_CreatePackages" className="col s12"><Workflow_CreatePackages tabClick={tabClick}/></div>
   
    </>
  )
}