import React, {useState} from 'react'
import '../index.css'

export default function AddNewProfile ({handleAddProfile}) {

    const [username, setUsername] = useState("")
    const [fandom, setFandom] = useState("")
    const [title, setTitle] = useState("")
  
  
    const handleSubmit =(e) => {
      e.preventDefault()
      const newProfileData = {
        username: username, 
        fandoms: [fandom],
        titles: [title] 
      }
  
      fetch("http://localhost:3000/profiles", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newProfileData)
      })
      .then(res=> res.json())
      .then(updatedProfileData => handleAddProfile(updatedProfileData))
  
      setUsername("")
      setFandom("")
      setTitle("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label className='formLabelStyle'>Pseudonym:</label>
        <input 
          type ="text" 
          value={username}
         className='inputStyle' 
          onChange={(e)=> setUsername(e.target.value)}
        />
        <br />
        <br />
       <label className='formLabelStyle'>Fandom:</label>
        <input 
          type ="text" 
          value={fandom}
          className='inputStyle' 
          onChange={(e) => setFandom(e.target.value)}
        />
        <br />
        <br />
        <label className='formLabelStyle'>Title:</label>
        <input 
          value={title}
          className='inputStyle' 
          onChange={(e)=> setTitle(e.target.value)} 
          />
        <br />
        <br />
        <button style={{marginLeft: "12%"}}type="submit">Submit</button>
      </form>
    </div>
  )
}
