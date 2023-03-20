import React, {useState, useEffect} from 'react'
import {Route, Switch} from "react-router-dom"
import Header from './Header'
import NavBar from './NavBar'
import Home from './Home'
import Fandoms from './Fandoms'
import Favorites from "./Favorites"
import Filter from './Filter'

//ToDo:
  //[] onClick of a heart, the user is either added to favorites or removed from favorites
    // heart should go from full to empty depending on the state 
  //[] type in a fandom in search should produce every writer who has written for that fandom
      //[] bonus: "no fandom found, start a fic!" or something if the a fandom no one has written for is typed


export default function App() {
  const [userData, setUserData] = useState(null)
  const [click, setClick] = useState(userData)

  

  useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => setUserData(data)
    )
  },[])

  // eslint-disable-next-line
  const yes = <span roll="img" aria-label='Red Heart'>♥️</span>
  // eslint-disable-next-line
  const no = <span roll="img" aria-label='White Heart'>♡</span>

  const handleClick = () => {
      setClick(!click)
    
  }



  return (
    <div>
      <Header />
      <NavBar/>
      <Filter />
      <Switch>
        <Route path="/fandoms">
          <Fandoms />
        </Route>
        <Route path="/favorites">
          {userData && <Favorites userData={userData} handleClick={handleClick}/>}
        </Route>
        <Route exact path="/">
          {userData && <Home userData={userData}/>}
        </Route>
      </Switch>
  
    </div>
  )
}

