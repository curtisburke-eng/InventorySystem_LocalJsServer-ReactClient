
// Get assets & CSS
import '../css/main.css'

import Workflow_CreatePackages from './Workflow_CreatePackages'

// Import icons
import HomeIcon from '@mui/icons-material/Home';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import InventoryIcon from '@mui/icons-material/Inventory';
import CropFreeIcon from '@mui/icons-material/CropFree';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

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
    < div className="container">
      {/* ----- Display Fetched data for items ----- */}
      <h2 className="brand-text">Workflows</h2>

      <div className="row">
      <ul id="Workflow-tabs" className="tabs tabs-transparent">
            <li className="tab">
              <a className="active brand-text" href="#Workflow_Options"><HomeIcon /></a>
            </li>
            <li className="tab">
              <a className="brand-text" href="#Workflow_OrderInventory"><ArrowOutwardIcon /></a>
            </li>
            <li className="tab">
              <a className="brand-text" href="#Workflow_RecieveInventory"><CallReceivedIcon /></a>
            </li>
            <li className="tab">
              <a className="brand-text" href="#Workflow_CreatePackages"><InventoryIcon /></a>
            </li>
            <li className="tab">
              <a className="brand-text" href="#Workflow_CreateTins"><CropFreeIcon /></a>
            </li>
            <li className="tab">
              <a className="brand-text" href="#Workflow_FulfillOrders"><LocalShippingIcon /></a>
            </li>
      </ul>
    </div>

    < div id="Workflow_Options" > {/* This could become its own component, but the buttons would need to pass back to Workflows_home like they do in the Tabs_byCard files */}
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

    </div> {/* End of Tab Workflow_Options */}

    <div id="Workflow_CreatePackages" className="col s12"><Workflow_CreatePackages tabClick={tabClick}/></div>


    </div>{/* end of container  */}

    </>
  )
}