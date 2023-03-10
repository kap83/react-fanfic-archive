//will include titles, authors. one of the users should be u. cause you want to be able to star another favorite author

import React from 'react'

export default function NavBar() {
  return (
    <>
     {/* username
        userimage */}
         <button style={{float: "right"}}>Profile</button>
         <button style={{float: "right"}}>Post</button>
      <form>
        <label>
          Search: 
          <select>
            <option value="Fandom">Fandom</option>
            <option value="Author">Author</option>
          </select> 
        </label>
      </form>
    </>

  
  )
}
