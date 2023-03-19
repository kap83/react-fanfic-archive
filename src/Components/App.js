// eslint-disable-next-line
import React, {useState, useEffect} from 'react'
import {Route, Switch} from "react-router-dom"
import Header from './Header'
import NavBar from './NavBar'
import Home from './Home'
import Fandom from './Fandom'
import Favorites from "./Favorites"


export default function App() {
  // eslint-disable-next-line
  const [userData, setUserData] = useState(null)
  

  useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => setUserData(data)
    )
  },[])


  return (
    <div>
      <Header />
      <NavBar/>
      <Switch>
      <Route path="/fandom">
        <Fandom />
      </Route>
      <Route path="/favorites">
        {userData && <Favorites userData={userData}/>}
      </Route>
      <Route exact path="/">
       <Home />
      </Route>
    </Switch>
  
    </div>
  )
}

