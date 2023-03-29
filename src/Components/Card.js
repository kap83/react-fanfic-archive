import React from 'react'
import Comments from './Comments'

const cardStyle = {
    marginTop:"3%",
    marginLeft: "25%", 
    marginRight: "-20%"
  }
  
  const usernameStyle = {
    float: "left", 
    marginLeft: "2%"
  }
  
  const fandomLableStyle ={
    display: "flex", 
    justifyContent: "center", 
    marginTop: "20%", 
    marginBottom: "1%", 
    padding: "0px"
  }
  
  const btnStyle = {
    float: "left", 
    marginTop:"5%", 
    marginLeft: "1%"
  }
  
  const fandomListStyle = {
    display: "inline-block", 
    marginTop: "0" , 
    justifyContent: "center", 
    marginBottom:"1%", 
    padding: "0px 3px", 
    listStyleType: "none"
  }
  
  const titleLabelStyle = {
    borderStyle: "solid", 
    color: "green", 
    marginTop: "0"
  }
  
  const titleListStyle = {
    listStyleType: "none", 
    marginTop: "0px", 
    display: "flex", 
    justifyContent: "center", 
    borderStyle: "solid", 
    color: "pink"
  }
  


 export default function Card({user}) {
  
  return (
      <div className= 'card-container'>
            <button style={btnStyle}>♥️</button>
              <div className='image-container' style={cardStyle}>
                <img src={user.icon} alt="icon" />
              </div>
                <h2 style={usernameStyle}>{user.username}</h2>
                <h3 style={fandomLableStyle}>Fandoms:</h3>
              {user.fandoms?.map((fandom) => 
                <ul key={crypto.randomUUID()} style={fandomListStyle}>
                  <li style={{listStyleType: "none"}}>{fandom}</li>
                </ul>)}
              {user.titles?.map((title)=>
                <ul key={crypto.randomUUID()} style={titleListStyle}>
                  <li>{title}</li>
                </ul>
              )}
              <Comments />
            </div>
  )
}




