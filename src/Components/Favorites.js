import React from 'react'
import '../index.css'

//To do
    //[] create cards
    //[]create text box

export default function Favorites({userData}) {
  console.log(userData)
  return (
    <>
      <h1 style={{display: "flex", marginLeft: "45%"}}>FAVORITE AUTHORS</h1>
      {userData.map((user) => user.favorite === "yes" ?  
        <div key={user.id} className= 'card-container' style={{marginTop:"3%", marginLeft: "25%", marginRight: "-20%"}}>
        <div className='image-container'><img src={user.icon} alt="icon" /></div>
          <h2>{user.username} ❤️</h2>
          {/* <span>{user.fandom.map((media) => console.log(media) )}</span> */}
          {/* <span>{user.title.map((media) => console.log(media) )}</span> */}
        </div>: null)}
    </>
  )
}
