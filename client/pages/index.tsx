import React, {use, useEffect, useState} from 'react'



function index() {

  const [badges, setBadges] = useState([])

  useEffect(() =>{
    fetch("http://localhost:8080/badges").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setBadges(data)
        console.log(badges)
      }

    )
  },[])

  return (
    <div id="root">
      
      {/* {
        // for (i = 0; i < badges.length; i++) {
        //   for (j = 0; j < badges[j].length; j++) {
        //       document.write(badges[i][j]);
        //   }
        // }
        
        badges.forEach(item => {
            console.log(item)
        })
      } */}

    </div>
  )
}

export default index