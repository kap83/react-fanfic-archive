import React from 'react'
import '../index.css'



export default function Favorites({userData}) {
  return (
    <>
      <h1 style={{display: "flex", marginLeft: "45%"}}>FAVORITE AUTHORS</h1>
      {userData.map((user) => user.favorite === "yes" ?  
        <div key={user.id} className= 'card-container' style={{marginTop:"3%", marginLeft: "25%", marginRight: "-20%"}}>
        <div className='image-container'><img src={user.icon} alt="icon" /></div>
          <h2>{user.username} ❤️</h2>
            <h3 style={{marginBottom: "none", padding: "0px"}}>Fandoms:</h3>
            {user.fandoms.map((fandom, index) => <ul key={index} style={{borderStyle: "solid", justifyContent: "space-between", display: "inline-block", padding: "0%",  gap: "10rem", listStyleType: "none", color: "red"}}><li>{fandom}</li></ul>)}
            <h3>titles:</h3> {user.titles.map((title, index) => <div key={index}><p>{title}</p></div>)}
        </div>: null)}
    </>
  )
}
