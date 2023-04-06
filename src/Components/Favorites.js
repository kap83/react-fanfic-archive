import React from 'react'
import '../index.css'
import Card from './Card'



export default function Favorites({userData, handleFavoriteUpdate}) {
  console.log(userData)
  return (
    <>
      {userData.map((user) => user.favorite === true ? 
        <Card 
          handleFavoriteUpdate={handleFavoriteUpdate} 
          key={user.id} 
          user={user}/> 
          : null)} 
    </>
  )
}
