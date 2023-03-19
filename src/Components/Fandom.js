import React from 'react'

//Todo
  //create card
  //[]create text box
 

export default function Fandom() {

  return (
  <form style={{marginTop: "10px", marginLeft: "5px"}}>
    <label style={{paddingLeft: "3px", paddingRight: "4px"}}>
        Search:
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
</form>
  )
}
