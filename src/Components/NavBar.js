//will include titles, authors. one of the users should be u. cause you want to be able to star another favorite author

import React, {useState} from 'react'
import '../index.css'

export default function NavBar() {


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
      <span className='btn'>
        <a href='/username'>username</a>
        <button>Profile</button>
        <button>Post</button>
      </span>
    </nav>
    </>
  )
}
