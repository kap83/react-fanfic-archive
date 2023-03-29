import React, {useState} from 'react'
import Card from './Card'


export default function Fandoms({userData, handleCommenter, handleNewComment, handleCommentSubmit, comment, commenter}) {
   const [search, setSearch] = useState("")
   const [localUserData, setLocalUserData] = useState(userData)
   

  const handleChange = (e) => { 
    setSearch(e.target.value)
  } 

 const handleSubmit = (e) =>{
    e.preventDefault()
    const newSearchData = userData.filter((user) => user.fandoms.includes(search))
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
        {localUserData.map((user) => <Card key={user.id} user={user} handleCommenter={handleCommenter}
            handleNewComment ={handleNewComment}
            handleSubmit={handleSubmit}
            commenter={commenter}
            comment={comment} />)}
  </>
  )
}
