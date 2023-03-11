//will include titles, authors. one of the users should be u. cause you want to be able to star another favorite author

import React from 'react'
import '../index.css'

export default function NavBar() {
  return (
    <nav className='navBar'>
      <form className='form'>
      <label>SEARCH:</label>
      <select>
        <option><a href='/Author'>AUTHOR</a></option>
        <option><a href='/Fandom'>FANDOM</a></option>
      </select>
      <span className='btn'>
        <button>Profile</button>
        <button>Post</button>
      </span>
      </form>
    </nav>

  
  )
}


// username
//         userimage 
    //     <button style={{float: "right"}}>Profile</button>
    //     <button style={{float: "right"}}>Post</button>
    //  <form>
    //    <label>
    //      Search: 
    //      <select>
    //        <option value="Fandom">Fandom</option>
    //        <option value="Author">Author</option>
    //      </select> 
    //    </label>
    //  </form>