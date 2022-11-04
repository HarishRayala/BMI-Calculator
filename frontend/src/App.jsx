import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes,Route, Link} from "react-router-dom"
import Signup from './components/Signup'
import Login from './components/Login'
import CalculateBMI from './components/CalculateBMI'
import Logout from './components/logout'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Link to="/"><button>Go Back to Home</button> </Link>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/calculateBMI" element={<CalculateBMI/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </div>
  )
}

export default App
