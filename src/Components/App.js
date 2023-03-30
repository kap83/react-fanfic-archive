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


  return (
    <div>
      <Header />
      <NavBar/>
      <Switch>
        <Route path="/fandoms">
          {userData && <Fandoms 
            userData={userData} setUserData={setUserData} />}
        </Route>
        <Route path="/favorites">
          {userData && <Favorites userData={userData} setUserData={setUserData} />}
        </Route>
        <Route exact path="/">
          {userData && <Home userData={userData} setUserData={setUserData}/>}
        </Route>
      </Switch>
    </div>
  )
}

