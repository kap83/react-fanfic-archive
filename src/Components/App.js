// eslint-disable-next-line
import React, {useState, useEffect} from 'react'
import {Route, Switch} from "react-router-dom"
import Header from './Header'
import NavBar from './NavBar'
import Home from './Home'
import Fandom from './Fandom'
import Author from './Author'


//when website loads user's profile pops up with their icon and fics listed. 
  //when app component renders, make a GET request to db.json
  //user info is set in state. 
  //render user dragonwitch's data

export default function App() {
  // eslint-disable-next-line
  const [userData, setUserData] = useState(null)
  // console.log(userData)


  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => setUserData(data))
  }, [])

  return (
    <>
      <Header />
      {userData && <NavBar userData={userData} />}
      <Route>
      <Switch>
        <Route path="/fandom">
          <Fandom />
        </Route>
        <Route path="/author">
          {userData && <Author userData={userData} />}
        </Route>
        <Route exact path="/">
          {userData && <Home userData={userData} />}
        </Route>
      </Switch>
      </Route>
    </>
  )
}

