import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </div>
  )
}

export default App
