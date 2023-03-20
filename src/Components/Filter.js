import React from 'react'

//Todo:
  //[]filter author by fandom
  //[] filter by fandom 
  //[] filter by author


export default function Filter() {


  return (
    <div>
      <form style={{marginTop: "10px", marginLeft: "5px"}}>
    <label style={{paddingLeft: "3px", paddingRight: "4px"}}>
        Search:
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
</form>
    </div>
  )
}
