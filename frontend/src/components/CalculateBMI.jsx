import React from 'react'
import { useState } from 'react'

const CalculateBMI = () => {
    const [height,setHeight]=useState("");
    const [weight,setWeight]=useState("")
    const handleClick=()=>{
        const payload={
            height,
            weight
        }
        // console.log(payload);
        fetch("http://localhost:8000/calculateBMI",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify(payload)
        })
        .then((res)=>res.json())
        .then((res)=>console.log(res))
    }
  return (
    <div>
        <h1>BMI Calculator</h1>
        <input type="text" placeholder='Height in Feet' onChange={(e)=>setHeight(e.target.value)} />
        <input type="text" placeholder='Weight in Kg' onChange={(e)=>setWeight(e.target.value)} />
        <button onClick={handleClick} >Calculate</button>
    </div>
  )
}

export default CalculateBMI