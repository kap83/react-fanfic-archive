import React, {useState} from 'react'
import '../index.css'
import Card from './Card'

const h1Style = {
  display: "flex", 
  marginLeft: "45%"
}

 // eslint-disable-next-line
export default function Favorites({userData, setUserData}) {
   // eslint-disable-next-line
  const [click, setClick] = useState("no") //or "yes" b/c this is favorites component


 // eslint-disable-next-line
  const handleClick = (e) => {
    e.preventDefault(e)
    setClick(!click)
  }
// eslint-disable-next-line 
const handleChange = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      // body: JSON.stringify({"favorite": value})
    })
    .then(res=> console.log(res))
    // .then(data => console.log(data))
}

  // eslint-disable-next-line
  const yes = <span roll="img" aria-label='Red Heart'>♥️</span>
  // eslint-disable-next-line
  const no = <span roll="img" aria-label='White Heart'>♡</span>


  return (
    <>
        <h1 style={h1Style}>FAVORITE AUTHORS</h1>
      {userData.map((user) => user.favorite === "yes" ? <Card key={user.id} user={user}/> : null)} 
    </>
  )
}
