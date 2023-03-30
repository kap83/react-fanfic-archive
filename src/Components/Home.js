import React, {useState} from 'react'
import '../index.css'

//card favorite authors 
//card your fics
//card your fandoms

export default function Home({userData, setUserData}) {
  const [username, setUsername] = useState("Anon")
  const [fandom, setFandom] = useState("")
  const [title, setTitle] = useState("")

  const handleSubmit =(e) => {
    e.preventDefault()
    const newUserData = {
      username: username, 
      fandoms: [fandom],
      titles: [title] 
    }

    fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newUserData)
    })
    .then(res=> res.json())
    .then(newData => handleUpdateUserData(newData) )
  }
  
  
  function handleUpdateUserData(newData){
    setUserData([...userData], newData)
  }
  
  return (
    <>
      <h1 style={{display: "flex", justifyContent: "center"}}>Welcome to The Fanworks Archive</h1>
      <div className='card-container'>
        <h3>Navigation</h3>
        <p>You can search for fan fiction by fandom by clicking on Fandoms in the Navigation Bar.</p>
        <p>Already have a favorite author? See their work directly by clicking Favorites in the Navigation Bar.</p>
      </div>
      <div className='card-container'>
        <h3>Submit Your Work Anonymously </h3>
        <p>The Fanworks Archive understands that sometimes you don't want your name attached to the demons you've expelled from your mind. Use the adjacent form to submit your work anonymously or with another pseudonym of your choice.</p>
        <p>Please be advised that by using this feature, you will not be able to edit the work in the future.</p>
        <form onSubmit={handleSubmit}>
        <label>Your Name:</label>
        <input 
          type ="text" 
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
        />
        <label>Enter a Fandoms: </label>
        <input 
          type ="text" 
          value={fandom}
          onChange={(e) => setFandom(e.target.value)}
        />
        <label style={{paddingLeft: '3px', paddingRight: '4px'}}>
          Fic Title: 
        </label>
        <input 
          value={title}
          onChange={(e)=> setTitle(e.target.value)} 
          />
        <button type="submit">Submit</button>
      </form>
      </div>
    </>
  )
}
