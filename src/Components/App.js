import React, {useState, useEffect} from 'react'
import {Route, Switch} from "react-router-dom"
import Header from './Header'
import NavBar from './NavBar'
import Home from './Home'
import Fandoms from './Fandoms'
import Favorites from "./Favorites"


export default function App() {
  const [userData, setUserData] = useState(null)


  useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => setUserData(data)
    )
  },[])

  const handleNewUser = (newUser) => {
      setUserData([...userData], newUser)
  }

  const handleFavoriteUpdate = (favoriteUpdate) => {
      setUserData([...userData], favoriteUpdate)
  }

  return (
    <div>
      <Header />
      <NavBar/>
      <Switch>
        <Route path="/fandoms">
          {userData && <Fandoms userData={userData} />}
        </Route>
        <Route path="/favorites">
          {userData && <Favorites handleFavoriteUpdate={handleFavoriteUpdate} userData={userData} />}
        </Route>
        <Route exact path="/">
          {userData && <Home userData={userData} handleNewUser={handleNewUser}/>}
        </Route>
      </Switch>
    </div>
  )
}

