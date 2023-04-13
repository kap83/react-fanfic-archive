
import React from 'react'
import './Card.css'


export default function Card({profile, handleFavoriteStatus}) {
 
  const handleClick = () => {
 
    fetch(`http://localhost:3000/profiles/${profile.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({favorite: !profile.favorite})
    })
    .then(res => res.json())
    
    .then(updatedProfile => handleFavoriteStatus(updatedProfile))
  }


  const defaultIcon = "https://picsum.photos/id/0/100/100"
  
  return (
      <div className= 'author-card-container'>
              <div className='image-container' >
                <img src={profile.icon || defaultIcon} alt="icon" />
              </div>
                <h1 className='usernameStyle'>{profile.username}</h1>
                <button className= 'btnStyle' onClick={handleClick}>{profile.favorite ? "❤️" : "♡" }</button>
                <h3 className='fandomLableStyle'>Fandoms:</h3>
              {profile.fandoms?.map((fandom) => 
                <ul key={crypto.randomUUID()} className='fandomListStyle'>
                  <li>{fandom}</li>
                </ul>)}
                <h3 className='titleLabelStyle'>Titles:</h3>
              {profile.titles?.map((title)=>
                <ul key={crypto.randomUUID()} className='titleListStyle'>
                  <li>{title}</li>
                </ul>
              )}
            </div>
  )
}




