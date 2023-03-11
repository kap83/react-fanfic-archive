//will include titles, authors. one of the users should be u. cause you want to be able to star another favorite author

import React, {useState} from 'react'
import '../index.css'

export default function NavBar() {

  const [user, setUser] = useState(users)
  
  console.log(user)

  return (
    <nav className='navBar'>
      <form className='form'>
        <label>SEARCH:</label>
        <select>
          <option><a href='/Author'>AUTHOR</a></option>
          <option><a href='/Fandom'>FANDOM</a></option>
        </select>
      </form>
      <span className='btn'>
        <a href='/username'>username</a>
        <button>Profile</button>
        <button>Post</button>
      </span>
    </nav>

  
  )
}
