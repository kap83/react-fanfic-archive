import React, {useState} from 'react'
import Card from './Card'
import '../index.css'

export default function Fandoms({profiles, handleFavoriteStatus}) {
    //holds the searched words ==> used in newSearchProfiles 
   const [search, setSearch] = useState("")
   //is the user searching for something
   const [active, setActive] = useState(false)

  const handleChange = (e) => { 
    setSearch(e.target.value)
  } 

 const handleSubmit = (e) =>{
    e.preventDefault()
    setActive(true)
 }

 //clears results. shows all authors
 const handleClearSearchResults = () => {
      setActive(false)
      setSearch("")
 }

 //is active true? filter for what the user is looking for 
 //return the profile, who's fandom includes what's in the search
 const newSearchProfiles = active ? profiles.filter((profile) => profile.fandoms.toString().toLowerCase().includes(search.toLowerCase())) : profiles



  return (
  <>
        <form onSubmit={handleSubmit} className='searchformStyle'>
          <label className='searchLabelStyle'>
            Enter Fandom:
            <input type="text" 
              className='searchInputStyle' 
              //tracks the characters entered into the search input
              value={search}
              onChange={handleChange} 
              name="name" />
          </label>
          <button type="submit">Search</button>
          <button type="button" 
            onClick={handleClearSearchResults} 
            style={{marginLeft: "3px"}}>
              Clear
          </button>
        </form>
        {/* displays the cards that match the search */}
        {newSearchProfiles.map((profile) => 
          <Card key={profile.id} 
          handleFavoriteStatus={handleFavoriteStatus} 
          profile={profile} 
        />)}
        {active === true && newSearchProfiles.length === 0 ? <p>sorry got nothing</p> : null}
  </>
  )
}