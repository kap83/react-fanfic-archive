//will include titles, authors. one of the users should be u. cause you want to be able to star another favorite author

//https://www.youtube.com/watch?v=SLfhMt5OUPI


// eslint-disable-next-line
import React from 'react'
import '../index.css'


// eslint-disable-next-line
export default function NavBar({userData}) {
  // console.log(userData)
  
 
  return (
    <>
    <nav className='navBar'>
      <form className='form'>
        <label>SEARCH:</label>
        <select>
          <option>AUTHOR</option>
          <option>FANDOM</option>
        </select>
      </form>
      {/* either the icon makes the username disappear, the conditional syntax is wrong for the first result, or it's the CSS --look it up */}
      <span className='username'> {userData.map((user) => user.username === "dragonwitch" ? user.username  : null)}</span>
      <span className='btn'>
        <button>Profile</button>
        <button>Post</button>
      </span>
    </nav>
    </>
  )
}
