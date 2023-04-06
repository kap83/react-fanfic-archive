import React, {useState} from 'react'
import Card from './Card'
import '../index.css'


export default function Fandoms({userData}) {
   const [search, setSearch] = useState("")
   const [localUserData, setLocalUserData] = useState(userData)


  const handleChange = (e) => { 
    setSearch(e.target.value)
  } 

 const handleSubmit = (e) =>{
    let changeSearchCaseSensitivity = search.toLowerCase()
    e.preventDefault()
    const newSearchData = userData.filter((user) => user.fandoms.toString().toLowerCase().includes(changeSearchCaseSensitivity)
    )
   setLocalUserData(newSearchData)
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
        </form>
        {localUserData.map((user) => <Card key={user.id} user={user} />)}
  </>
  )
}