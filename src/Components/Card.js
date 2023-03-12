import React from 'react'
import './Card.css'

//card displays go here 


export default function Card({userData}) {
    // console.log(userData)

    userData.map((user) => {
        return(
            console.log(user.username)
            // username={user.username},
            // icon={user.icon},
            // fandom = {user.fandom},
            // titles = {user.titles}
        )
    })

  return (
    <div className='card-container'>
        <div className='image-container'>
            {/* <img src={} alt = "icon"></img> */}
            <h2>picture</h2>
        </div>
        <div className='card-author'>
            <h3>Author Name</h3>
        </div>
        <div className='card-body'>
            <p>Fandoms</p>
            <p>Titles</p>
        </div>
    </div>
  )
}
