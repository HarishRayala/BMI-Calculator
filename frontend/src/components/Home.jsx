import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>HomePage</h1>
        <Link to="/signup" > <button style={{height:"25px"}}>Signup Page</button> </Link>
        <Link to="/calculateBMI" > <button style={{height:"25px"}}>Calculate BMI Page</button> </Link>
    </div>
  )
}

export default Home