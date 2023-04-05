import React from 'react'
import '../index.css'
import Card from './Card'



export default function Favorites({userData, handleFavoriteUpdate}) {


  // eslint-disable-next-line
  const yes = <span roll="img" aria-label='Red Heart'>♥️</span>
  // eslint-disable-next-line
  const no = <span roll="img" aria-label='White Heart'>♡</span>

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
