import React from 'react'
import '../index.css'
import Card from './Card'


export default function Favorites({profiles, handleFavoriteStatus}) {

  return (
    <>
      {profiles.map((profile) => profile.favorite === true ? 
        <Card 
        handleFavoriteStatus={handleFavoriteStatus} 
          key={profile.id} 
          profile={profile}/> 
          : null)} 
    </>
  )
}
