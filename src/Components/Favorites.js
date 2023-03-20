import React from 'react'
import '../index.css'



export default function Favorites({userData, handleClick}) {

  return (
    <>
      <h1 style={{display: "flex", marginLeft: "45%"}}>FAVORITE AUTHORS</h1>
      {userData.map((user) => user.favorite === "yes" ?  
        <div key={user.id} className= 'card-container' style={{marginTop:"3%", marginLeft: "25%", marginRight: "-20%"}}>
        <div className='image-container'><img src={user.icon} alt="icon" /></div>
          <h2 style={{float: "left", marginLeft: "2%"}}>{user.username} </h2>
            <button style={{float: "left", marginTop:"5%", marginLeft: "1%"}} onClick={handleClick}>❤️</button>
            <h3 style={{display: "flex", justifyContent: "center", marginTop: "20%", marginBottom: "1%", padding: "0px"}}>Fandoms:</h3>
            {user.fandoms.map((fandom) => <ul key={crypto.randomUUID()} style={{ display: "inline-block",  marginTop: "0" , justifyContent: "center", marginBottom:"1%", padding: "0px 3px", listStyleType: "none"}}><li>{fandom},</li></ul>)}
            <h3 style={{borderStyle: "solid", color: "green", marginTop: "0"}}>Titles:</h3> {user.titles.map((title) => <ul key={crypto.randomUUID()}><li style={{listStyleType: "none", marginTop: "0px", display: "flex", justifyContent: "center", borderStyle: "solid", color: "pink" }}>{title}</li></ul>)}
        </div>: null)}
    </>
  )
}
