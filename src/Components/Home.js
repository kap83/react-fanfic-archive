import React from 'react'
import '../index.css'

//card favorite authors 
//card your fics
//card your fandoms

export default function Home({userData}) {
  return (
    <div style={{marginTop:"3%", marginLeft:"20%" }}>
      <h1 style={{display: "flex", marginLeft: "30%"}}>dragonwitch</h1> 
      {userData.map((user) => user.username === "dragonwitch" ? 
      <>
      <div className = 'card-container'>
        <p>Number of Works: {user.titles.length}</p> 
        <p>Number of Fandoms: {user.fandom.length}</p>
        <p>Drafts:</p>
      </div>
      <div className = 'card-container'>
        <span style={{wordSpacing: "1px"}}><p>FANDOM: {user.fandom}</p></span>
        <span style={{wordSpacing: "1px"}}><p>TITLES: {user.titles}</p></span>
      </div> </>
      : null )}
    </div>
  )
}
