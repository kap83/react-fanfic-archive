import React from 'react'

//Todo
  //create card
  //[]create text box
 

export default function Fandom({userData}) {
  return (
    <div>
        <h1>Fandom List</h1>
        {userData.filter((user) => user.username === "cosmictrain" ? console.log(user.name) : null)}

    </div>
  )
}
