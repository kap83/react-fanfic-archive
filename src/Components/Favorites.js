import React from 'react'
import '../index.css'



export default function Favorites({userData}) {

  return (
    <>
      <h1 style={{display: "flex", marginLeft: "45%"}}>FAVORITE AUTHORS</h1>
      {userData.map((user) => user.favorite === "yes" ?  
        <div key={user.id} className= 'card-container' style={{marginTop:"3%", marginLeft: "25%", marginRight: "-20%"}}>
        <div className='image-container'><img src={user.icon} alt="icon" /></div>
          <h2 style={{borderStyle: "solid", color: "blue"}}>{user.username} ❤️</h2>
            <h3 style={{borderStyle: "solid", marginBottom: "1%", padding: "0px"}}>Fandoms:</h3>
            {user.fandoms.map((fandom) => <ul key={crypto.randomUUID()} style={{borderStyle: "solid", display: "inline-block", marginTop: "0" , marginBottom:"1%", padding: "0%", listStyleType: "none", color: "red"}}><li>{fandom}</li></ul>)}
            <h3 style={{borderStyle: "solid", color: "green", marginTop: "0"}}>titles:</h3> {user.titles.map((title) => <ul key={crypto.randomUUID()}><li style={{listStyleType: "none", borderStyle: "solid", color: "pink" }}>{title}</li></ul>)}
        </div>: null)}
    </>
  )
}
