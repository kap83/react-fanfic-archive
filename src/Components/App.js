import React, {useState, useEffect} from 'react'
import {Route, Switch} from "react-router-dom"
import Header from './Header'
import NavBar from './NavBar'
import Home from './Home'
import Fandoms from './Fandoms'
import Favorites from "./Favorites"

export default function App() {
  const [profiles, setProfiles] = useState([])


  useEffect(()=>{
    fetch("http://localhost:3000/profiles")
    .then(res => res.json())
    .then(profilesData => {
      setProfiles(profilesData)
    })
  },[])

  const handleAddProfile = (newProfile) => {
    setProfiles([...profiles, newProfile])
  }
      

  const handleFavoriteStatus = (favoriteStatus) => {
       const favoriteProfileIndex = profiles.findIndex((profile) => profile.id === favoriteStatus.id)
       const copyProfiles = [...profiles]
       copyProfiles[favoriteProfileIndex] = favoriteStatus
       setProfiles(copyProfiles)
  }

  return (
    <div>
      <Header />
      <NavBar/>
      <Switch>
        <Route path="/fandoms">
          {
            <Fandoms 
            profiles={profiles} 
            handleFavoriteStatus={handleFavoriteStatus}
            />}
        </Route>
        <Route path="/favorites">
          {
            <Favorites 
            profiles={profiles} 
            handleFavoriteStatus={handleFavoriteStatus}  
            />}
        </Route>
        <Route exact path="/">
          {
            <Home 
            profiles={profiles} 
            handleAddProfile={handleAddProfile} 
          />}
        </Route>
      </Switch>
    </div>
  )
}

