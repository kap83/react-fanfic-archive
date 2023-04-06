import React, {useState, useEffect} from 'react'
import Card from './Card'
import '../index.css'

export default function Fandoms({userData, handleFavoriteUpdate}) {
   const [search, setSearch] = useState("")
   const [localUserData, setLocalUserData] = useState(userData)

   console.log(localUserData)

  const handleChange = (e) => { 
    setSearch(e.target.value)
  } 

 useEffect(() => { 
    setLocalUserData(userData)
 }, [userData]) 
 
 
 const handleSubmit = (e) =>{
    let changeSearchCaseSensitivity = search.toLowerCase()
    e.preventDefault()
    const newSearchData = userData.filter((user) => user.fandoms.toString().toLowerCase().includes(changeSearchCaseSensitivity)
    )
   setLocalUserData(newSearchData)
   setSearch("")
 }

 const handleClearResults = () => {
  setLocalUserData(userData)
 }

  return (
  <>
        <form onSubmit={handleSubmit} className='searchformStyle'>
          <label className='searchLabelStyle'>
            Enter Fandom:
            <input type="text" 
              className='searchInputStyle' 
              value={search} onChange={handleChange} 
              name="name" />
          </label>
          <button type="submit">Search</button>
          <button type="button" 
            onClick={handleClearResults} 
            style={{marginLeft: "3px"}}>
              Clear
          </button>
        </form>
        {localUserData.map((user) => 
          <Card key={user.id} 
          handleFavoriteUpdate={handleFavoriteUpdate} 
          user={user} 
        />)}
  </>
  )
}