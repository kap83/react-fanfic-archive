import { wait } from '@testing-library/user-event/dist/utils'
import React from 'react'

//Todo:
  //[]filter author by fandom
  //[] filter by fandom 
  //[] filter by author


export default function Filter() {


  return (
    <div>
        <input 
          type="text"
          placeholder={wait}
          // onChange={handleChange}
          // value={searchInput}
        />
    </div>
  )
}
