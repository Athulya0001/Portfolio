import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import { ThemeContext } from "./Context/ThemeContext";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Foooter";
import Particles from "./components/3D/Particles";

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <SplashCursor />

      <div className="absolute inset-0 -z-10">
        <Particles quantity={120} color="hotpink" />
      </div>

      <Navbar />
      <div
        className={`w-full md:px-16 ${
          !darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
