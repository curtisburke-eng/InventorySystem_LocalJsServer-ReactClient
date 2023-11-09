import { useState, useEffect } from 'react'
import axios from 'axios'

// Get assets & CSS
import '../css/main.css'
import PackageCard from './PackageCard'

// Create Tab_ShippingByCard Component
export default function Workflow_CreatePackages(tabClick) {
  // console.log("Cards rendered");

  // ----- Declare vars -----
  const [items,setItems] = useState([])
  const [packages, setPackages] = useState([])

  const [error,setError] = useState(false)
  
  // ----- Setup & Run Functions for queries -----

    // Get all bulk Package item quanitities from server (on Startup & Refresh)
    useEffect(() => {
        // Send a GET request to access the items info
        axios
        .get("http://localhost:8080/bulkPackageItems")
        .then((response) => {
            setItems(response.data);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
    }, [tabClick]);

    // Get all pre-made Package quantities from server (on Startup & Refresh)
    useEffect(() => {
        // Send a GET request to access the items info
        axios
            .get("http://localhost:8080/packages")
            .then((response) => {
            setPackages(response.data);
            })
            .catch((error) => {
            console.error("Error fetching data: ", error);
            });
        }, [tabClick]);

    // TODO: BELOW-- Change Handlers & Save to reflect the corrrect tables and the math deducted from bulk
    // Do we want to be able to remove (decrease) Premade packages here - I dont think so

  // Handle Local updating of items quantities
  const handleIncreasePackages = (id) => {
    setPackages(packages.map(pack => {
      if (pack.id === id) {
        return {...pack, count_onHand: pack.count_onHand +1, isSaved: 0}
      } else {
        return pack
      }
    }))
  }
  const handleDecreaseBulk = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        if(item.count_onHand == 0){
          return {...item, count_onHand: item.count_onHand, isSaved: 0}
        } else{
          return {...item, count_onHand: item.count_onHand -1, isSaved: 0}
        }
      } else {
        return item
      }
    }))
  }

  // Save the updated Data to Database
  const handleSave = async (id) => {
    setError(false)
    try{
      const result = await axios.put('http://localhost:8080/item', items.find((item) => item.id === id))
      // console.log(result.data)
      setItems(items.map(item => {
        if (item.id === id) {
          return {...item, isSaved: 1}
        } else {
          return item
        }
      }))

    } catch(error) {
      setError(true) 
    }
  }

  // ----- Return Markup with loaded data -----
  return (
    <>
      {/* ----- Display Fetched data for items ----- */}
      <h2 className="center brand-text">Premade Packages</h2>
      <div className="row">
        
          {/* If there is an error display this message*/ }
          { error ? 
            <p>Something went wrong fetching the Data!</p>
          : // Else load items
            packages.map((pack) => (
                <PackageCard 
                onIncreaseOnHand={handleIncreasePackages}
                onSave={handleSave}
                key={pack.id}
                {...pack} />
            ))
          }
        
      </div>
    </>
  )
}