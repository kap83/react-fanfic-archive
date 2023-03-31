import React, {useState} from 'react'
import Card from './Card'


export default function Fandoms({userData}) {
   const [search, setSearch] = useState("")
   const [localUserData, setLocalUserData] = useState(userData)
   console.log(search)

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
        <form onSubmit={handleSubmit} style={{marginTop: '10px', marginLeft: '5px'}}>
          <label style={{paddingLeft: '3px', paddingRight: '4px'}}>
            Enter Fandom:
            <input type="text" value={search} onChange={handleChange} name="name" />
          </label>
          <button type="submit">Search</button>
        </form>
        {localUserData.map((user) => <Card key={user.id} user={user} />)}
  </>
  )
}


// user.fandoms.includes(search)