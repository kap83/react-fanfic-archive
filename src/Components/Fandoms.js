import React, {useState, useEffect} from 'react'
import Card from './Card'
import '../index.css'

export default function Fandoms({profiles, handleFavoriteStatus}) {

   const [search, setSearch] = useState("")
   const [displayedProfiles, setDisplayedProfiles] = useState(profiles)


  const handleChange = (e) => { 
    setSearch(e.target.value)
  } 

 useEffect(() => { 
  setDisplayedProfiles(profiles)
 }, [profiles]) 
 

 const handleSubmit = (e) =>{
    let changeSearchCaseSensitivity = search.toLowerCase()
    e.preventDefault()
    const newSearchProfiles = profiles.filter((profile) => profile.fandoms.toString().toLowerCase().includes(changeSearchCaseSensitivity)
    )
    setDisplayedProfiles(newSearchProfiles)
    setSearch("")
 }

 const handleClearSearchResults = () => {
    setDisplayedProfiles(profiles)
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
            onClick={handleClearSearchResults} 
            style={{marginLeft: "3px"}}>
              Clear
          </button>
        </form>
        {displayedProfiles.map((profile) => 
          <Card key={profile.id} 
          handleFavoriteStatus={handleFavoriteStatus} 
          profile={profile} 
        />)}
  </>
  )
}