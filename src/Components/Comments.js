import React, {useState} from 'react'
// eslint-disable-next-line
export default function Comments({}) {
  // eslint-disable-next-line

  const [commenter, setCommenter] = useState("")
  const [comment, setComment] = useState()

  const handleCommenter = (e) => {
    setCommenter(e.target.value)
  }
  
  const handleNewComment = (e) => {
    setComment(e.target.value)
  }
  
   // eslint-disable-next-line
  const handleSubmit =(e) => {
    e.preventDefault()
    const commentData = {commenter, comment}
    fetch(`http://localhost:3000/users`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(commentData)
    })
    .then(res=> res.json())
    .then(newComment => handleUpdateUserData(newComment))
  }
  
  function handleUpdateUserData(newComment){
    setUserData([...userData], newComment)
  }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type ="text" 
          value={commenter}
          onChange={handleCommenter}
        />
        <label style={{paddingLeft: '3px', paddingRight: '4px'}}>
          Leave a Comment: 
        </label>
        <textarea 
          value={comment}
          onChange={handleNewComment} 
          style={{width:" 300px", height: "200px"}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
