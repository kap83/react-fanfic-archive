

import React from 'react'
import '../index.css'
import {NavLink} from "react-router-dom"



export default function NavBar() {
  const linkStyles = {
    color: "white",
    textDecoration: "none"
  }


  return (
    <div className='navBar'>
      <NavLink to="/" exact style={linkStyles} activeStyle={{background: "grey"}}>HOME</NavLink>
      <NavLink to="/fandoms" exact style={linkStyles} activeStyle={{background: "grey"}}>FANDOMS</NavLink>
      <NavLink to="/favorites" exact style={linkStyles} activeStyle={{background: "grey"}}>FAVORITES</NavLink>
    </div>
    
  )
}
