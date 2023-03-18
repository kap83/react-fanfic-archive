//will include titles, authors. one of the users should be u. cause you want to be able to star another favorite author

//https://www.youtube.com/watch?v=SLfhMt5OUPI



import React from 'react'
import '../index.css'
import {Link} from "react-router-dom"


// eslint-disable-next-line
export default function NavBar({userData}) {
  // console.log(userData)

  return (
    <>
    <nav className='navBar'>
      <Link exact to="/">HOME</Link>
      <Link exact to="/">AUTHORS</Link>
      <Link exact to="/">FANDOMS</Link>
      <Link exact to="/">FAVORITES</Link>
   
      {/* either the icon makes the username disappear, the conditional syntax is wrong for the first result, or it's the CSS --look it up */}
      <span className='username'> {userData.map((user) => user.username === "dragonwitch" ? user.username  : null)}</span>
      {/* <span className='btn'>
        <button>Profile</button>
        <button>Post</button>
      </span> */}
    </nav>
    </>
  )
}
