// eslint-disable-next-line
import React, {useState, useEffect} from 'react'
import Header from './Header'
import NavBar from './NavBar'

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
    <div>
      <Header />
      {userData && <NavBar userData={userData} />}

    </div>
  )
}

