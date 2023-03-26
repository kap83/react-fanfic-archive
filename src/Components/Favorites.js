import React, {useState} from 'react'
import '../index.css'


const cardStyle = {
  marginTop:"3%",
  marginLeft: "25%", 
  marginRight: "-20%"
}

const h1Style = {
  display: "flex", 
  marginLeft: "45%"
}

const usernameStyle = {
  float: "left", 
  marginLeft: "2%"
}

const fandomLableStyle ={
  display: "flex", 
  justifyContent: "center", 
  marginTop: "20%", 
  marginBottom: "1%", 
  padding: "0px"
}

const btnStyle = {
  float: "left", 
  marginTop:"5%", 
  marginLeft: "1%"
}

const fandomListStyle = {
  display: "inline-block", 
  marginTop: "0" , 
  justifyContent: "center", 
  marginBottom:"1%", 
  padding: "0px 3px", 
  listStyleType: "none"
}

const titleLabelStyle = {
  borderStyle: "solid", 
  color: "green", 
  marginTop: "0"
}

const titleListStyle = {
  listStyleType: "none", 
  marginTop: "0px", 
  display: "flex", 
  justifyContent: "center", 
  borderStyle: "solid", 
  color: "pink"
}

 // eslint-disable-next-line
export default function Favorites({userData, setUserData}) {
   // eslint-disable-next-line
  const [click, setClick] = useState("no") //or "yes" b/c this is favorites component

 console.log(userData.id)

  const handleClick = (e) => {
    e.preventDefault(e)
    setClick(!click)
  }
// eslint-disable-next-line 
const handleChange = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      // body: JSON.stringify({"favorite": value})
    })
    .then(res=> console.log(res))
    // .then(data => console.log(data))

}


  

  return (
    <>
        <h1 style={h1Style}>FAVORITE AUTHORS</h1>
      {userData.map((user) => user.favorite === "yes" ?  
        <div key={user.id} className= 'card-container' style={cardStyle} >
          <button style={btnStyle}  onClick={(e) => handleClick(e, user.id)}>♥️</button>
        <div className='image-container'><img src={user.icon} alt="icon" /></div>
          <h2 style={usernameStyle}>{user.username} </h2>
            <h3 style={fandomLableStyle}>Fandoms:</h3>
            {user.fandoms.map((fandom) => <ul key={crypto.randomUUID()} style={fandomListStyle}><li>{fandom},</li></ul>)}
            <h3 style={titleLabelStyle}>Titles:</h3> {user.titles.map((title) => <ul key={crypto.randomUUID()}><li style={titleListStyle}>{title}</li></ul>)}
            <form>
                <label style={{paddingLeft: '3px', paddingRight: '4px'}}>
                  Leave a Comment: 
                  <input type="text" name="name" style={{width:" 300px", height: "200px"}}/>
                </label>
                <button type="submit">Submit</button>
              </form>
        </div>: null)} 
    </>
  )
}
