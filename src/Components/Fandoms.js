import React, {useState} from 'react'
import Card from './Card'
import '../index.css'

export default function Fandoms({profiles, handleFavoriteStatus}) {

   const [search, setSearch] = useState("")
   const [active, setActive] = useState(false)

  const handleChange = (e) => { 
    setSearch(e.target.value)
  } 

 const handleSubmit = (e) =>{
  
    e.preventDefault()
    setActive(true)
    setSearch("")
 }

 const handleClearSearchResults = () => {
      setActive(false)
 }

 const newSearchProfiles = active ? profiles : profiles.filter((profile) => profile.fandoms.toString().toLowerCase().includes(search.toLowerCase())) 


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
        {newSearchProfiles.map((profile) => 
          <Card key={profile.id} 
          handleFavoriteStatus={handleFavoriteStatus} 
          profile={profile} 
        />)}
  </>
  )
}