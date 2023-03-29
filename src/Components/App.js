import React, {useState, useEffect} from 'react'
import {Route, Switch} from "react-router-dom"
import Header from './Header'
import NavBar from './NavBar'
import Home from './Home'
import Fandoms from './Fandoms'
import Favorites from "./Favorites"


export default function App() {
  const [userData, setUserData] = useState(null)
  const [commenter, setCommenter] = useState("")
  const [comment, setComment] = useState()


  useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => setUserData(data)
    )
  },[])

const handleCommenter = (e) => {
  setCommenter(e.target.value)
}

const handleNewComment = (e) => {
  setComment(e.target.value)
}

 // eslint-disable-next-line
const handleSubmit =(e) => {
  e.preventDefault()
  const commentData = {commenter, comment}
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(commentData)
  })
  .then(res=> res.json())
  .then(newComment => handleUpdateUserData(newComment))
}

function handleUpdateUserData(newComment){
  setUserData([...userData], newComment)
}



  return (
    <div>
      <Header />
      <NavBar/>
      <Switch>
        <Route path="/fandoms">
          {userData && <Fandoms 
            userData={userData} 
            setUserData={setUserData} 
            handleCommenter={handleCommenter}
            handleNewComment ={handleNewComment}
            handleSubmit={handleSubmit}
            commenter={commenter}
            comment={comment}
            />}
        </Route>
        <Route path="/favorites">
          {userData && <Favorites userData={userData} setUserData={setUserData} />}
        </Route>
        <Route exact path="/">
          {userData && <Home userData={userData}/>}
        </Route>
      </Switch>
    </div>
  )
}

