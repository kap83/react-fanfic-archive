import React, {useState} from 'react'


export default function Fandoms({userData}) {
   const [search, setSearch] = useState("")
   const [localUserData, setLocalUserData] = useState(userData)
   

  const handleChange = (e) => {  
    setSearch(e.target.value)
  } 

 const handleSubmit = (e) =>{
    e.preventDefault()
    const newSearchData = userData.filter((user) =>  user.fandoms.includes(search.toLowerCase()))
   setLocalUserData(newSearchData)
 }
  return (
  <>
      <div>
        <form onSubmit={handleSubmit} style={{marginTop: '10px', marginLeft: '5px'}}>
          <label style={{paddingLeft: '3px', paddingRight: '4px'}}>
            Search:
            <input type="text" value={search} onChange={handleChange} name="name" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {localUserData.map((user) => {
          return(
            <div key={user.id} className= 'card-container'>
              <button>♥️</button>
              <div className='image-container'><img src={user.icon} alt="icon" /></div>
              <h2>{user.username}</h2>
              <h3>Fandoms:</h3>
              {user.fandoms.map((fandom) =><ul key={crypto.randomUUID()}><li style={{listStyleType: "none"}}>{fandom}</li></ul>)}
              <h3>Titles:</h3> {user.titles.map((title) => <ul key={crypto.randomUUID()}><li style={{listStyleType:"none"}}>{title}</li></ul>)}
              <form>
                <label style={{paddingLeft: '3px', paddingRight: '4px'}}>
                  Leave a Comment: 
                  <input type="text" name="name" style={{width:" 300px", height: "200px"}}/>
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>
          )
        })}
    </div>
  </>
  )
}
