import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar/Navbar'
import { ThemeContext } from './Context/ThemeContext'
import Contact from './components/Contact/Contact'

const App = () => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div>
      <Navbar />
      <div className={`w-full md:px-16 ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}>
        <Home />
        <About />
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
