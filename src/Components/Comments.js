import React, {useState} from 'react'
// eslint-disable-next-line
export default function Comments({userData}) {
  // eslint-disable-next-line
  const [commenter, setCommenter] = useState("")
  const [comment, setComment] = useState("")


  const handleCommenter = (e) => {
      // let commenter = e.target.value
    //  handleCommentSubmit(commenter)
    setCommenter(e.target.value)
  }
  
  const handleNewComment = (e) => {
    // let comment = e.target.value
    // handleCommentSubmit(e.target.value)
    setComment(e.target.value)
  }

  const commentData = {
      commenter: commenter,
      comment: comment
        }

  const handleCommentSubmit =(e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/users/${userData.id}`, {
    method: 'PATCH',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(commentData)
  })
  .then(res=> res.json())
  .then(newComment => console.log(newComment))
}


  
  return (
    <div>
      <form onSubmit={handleCommentSubmit}>
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
