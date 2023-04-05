import React from 'react'
import NewAuthorSubmit from './NewAuthorSubmit'
import '../index.css'


export default function Home({handleNewUser}) {

  return (
  <>
    <h1>Welcome to The Fanworks Archive</h1>
    <div className='card-container'>
      <h3>Navigation</h3>
      <p>To search for fan fiction by fandoms use the search bar in Fandoms.</p>
      <p>Already have a favorite author? See their work directly by clicking Favorites in the Navigation Bar.</p>
    </div>
    
    <div className='card-container'>
      <h3>Submit Your Work Anonymously</h3>
      <p>The Fanworks Archive understands that sometimes you don't want your name attached to the demons you've expelled from your mind.</p>
      <p>Use the adjacent form to submit your work with pseudonym of your choice.</p>
      <p>Please be advised, work submitted via this feature cannot be edited in the future.</p>
      
      <NewAuthorSubmit handleNewUser={handleNewUser}/>
    
    </div>
    </>
  )
}
