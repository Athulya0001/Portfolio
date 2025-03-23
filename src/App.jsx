import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes> */}
      <Home/>
      <About/>
    </div>
  )
}

export default App
