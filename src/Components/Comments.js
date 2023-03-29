import React from 'react'
// eslint-disable-next-line
export default function Comments({comment, commenter, handleCommenter, handleNewComment, handleSubmit}) {
  // eslint-disable-next-line






    
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
