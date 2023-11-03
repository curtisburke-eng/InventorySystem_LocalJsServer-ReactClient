import { useState, useEffect } from 'react'
import axios from 'axios'

// Get assets & CSS
import '../css/main.css'
import ItemCard from './ItemCard'

// Create Tab_ShippingByCard Component
export default function Tab_PackageItemsByCard(tabClick) {
  // console.log("Cards rendered");

  // ----- Declare vars -----
  const [items,setItems] = useState([])
  const [error,setError] = useState(false)
  
  // ----- Setup & Run Functions for queries -----

  // Get all items from server (on Startup & Refresh)
  useEffect(() => {
    // Send a GET request to access the items info
    axios
      .get("http://localhost:8080/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [tabClick]);

  // Handle Local updating of items quantities
  const handleDecreaseOnHand = (id) => {
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
  const handleIncreaseOnHand = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return {...item, count_onHand: item.count_onHand +1, isSaved: 0}
      } else {
        return item
      }
    }))
  }
  const handleDecreaseOnOrder = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        if(item.count_onOrder == 0){
          return {...item, count_onOrder: item.count_onOrder, isSaved: 0}
        }else {
          return {...item, count_onOrder: item.count_onOrder -1, isSaved: 0}
        }
      } else {
        return item
      }
    }))
  }
  const handleIncreaseOnOrder = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return {...item, count_onOrder: item.count_onOrder +1, isSaved: 0}
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
      <div className="row">
        
          {/* If there is an error display this message*/ }
          { error ? 
            <p>Something went wrong fetching the Data!</p>
          : // Else load items
            items.map((item) => (
                <ItemCard 
                onDecreaseOnHand={handleDecreaseOnHand}
                onIncreaseOnHand={handleIncreaseOnHand}
                onDecreaseOnOrder={handleDecreaseOnOrder}
                onIncreaseOnOrder={handleIncreaseOnOrder}
                onSave={handleSave}
                key={item.id}
                {...item} />
            ))
          }
        
      </div>
    </>
  )
}