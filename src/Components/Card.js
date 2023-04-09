// eslint-disable-next-line
import React from 'react'
import './Card.css'


export default function Card({user, handleFavoriteUpdate}) {
 
  const handleClick = () => {


    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({favorite: !user.favorite})
    })
    .then(res => res.json())
    .then(data => handleFavoriteUpdate(data))
  }


  const defaultIcon = "https://picsum.photos/id/0/100/100"
  
  return (
      <div className= 'author-card-container'>
              <div className='image-container' >
                <img src={user.icon || defaultIcon} alt="icon" />
              </div>
                <h1 className='usernameStyle'>{user.username}</h1>
                <button className= 'btnStyle' onClick={handleClick}>{user.favorite ? "❤️" : "♡" }</button>
                <h3 className='fandomLableStyle'>Fandoms:</h3>
              {user.fandoms?.map((fandom) => 
                <ul key={crypto.randomUUID()} className='fandomListStyle'>
                  <li>{fandom}</li>
                </ul>)}
                <h3 className='titleLabelStyle'>Titles:</h3>
              {user.titles?.map((title)=>
                <ul key={crypto.randomUUID()} className='titleListStyle'>
                  <li>{title}</li>
                </ul>
              )}
            </div>
  )
}




