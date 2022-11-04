import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const handleClick=()=>{
    localStorage.setItem("token","")
}
  return (
    <div style={{display:"flex",justifyContent:"space-between" }} >
        <Link to="/login" ><button>LOG IN</button></Link>
        <h1>Welcome to BMI App</h1>
        <button style={{height:"25px"}} onClick={handleClick}>LOG OUT</button>
    </div>
  )
}

export default Navbar