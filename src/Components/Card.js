import React from 'react'
import './Card.css'

//card displays go here 
//To do
  //[] styling for hearts
  //[] map out fandom and titles
  //[] font for username
  //[] styling icons 

export default function Card({userData}) {
  return (
    <> 
    {userData.map((user)=> user.username !== "dragonwitch" ?
        <div className = 'card-container' key={user.id}>
        <div className='image-container'><img src={user.icon} alt="icon" /></div>
        {user.favorite === "yes" ? "❤️" : "🤍" }
        <h2>{user.username}</h2>
        <span style={{wordSpacing: "1px"}}><p>FANDOM: {user.fandom}</p></span>
        <span style={{wordSpacing: "1px"}}><p>TITLES: {user.titles}</p></span>
      </div> : null
    
  )}
    </>
  )
}


