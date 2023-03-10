// arhive logo, user picture, post and see fic list buttons

import React from 'react'
// eslint-disable-next-line
import logo from "../images/logo.jpeg"
import '../index.css';


export default function Header() {
  return (

    <header>
      <img src={logo} alt ="logo" />
      <h2>Archive</h2>
        {/* username
        userimage */}
        <button style={{float: "right"}}>Profile</button>
        <button style={{float: "right"}}>Post</button>
    </header>
  )
}
