import React from 'react'
import { useState } from 'react'

const Logout = () => {
   
    const handleClick=()=>{
            localStorage.setItem("token","")
    }
  return (
    <div>
        <h1>Login page</h1>
        <button onClick={handleClick} >Logout</button>
    </div>
  )
}

export default Logout