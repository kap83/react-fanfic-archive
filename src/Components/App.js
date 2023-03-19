// eslint-disable-next-line
import React, {useState, useEffect} from 'react'
import {Route, Switch} from "react-router-dom"
import Header from './Header'
import NavBar from './NavBar'
import Home from './Home'
import Fandom from './Fandom'
import Author from './Author'
import Filter from './Filter'


//when website loads user's profile pops up with their icon and fics listed. 
  //when app component renders, make a GET request to db.json
  //user info is set in state. 
  //render user dragonwitch's data

export default function App() {
  // eslint-disable-next-line
  const [userData, setUserData] = useState(null)
  // console.log(userData)
  // eslint-disable-next-line
  const [page, setPage] = useState("/")


  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => setUserData(data))
  }, [])

  return (
    <div>
      <Header />
      {userData && <NavBar userData={userData} onChangePage={setPage}/>}
        <Switch>
          <Route path="/author">
            {userData && <Author userData={userData} />}
          </Route>
          <Route path="/fandom">
            <Fandom />
          </Route>
          <Route exact path="/">
            {userData && <Home userData={userData} />}
          </Route>
        </Switch>
    </div>
  )
}

