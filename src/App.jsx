import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About'
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Portfolio />
      <About />
      <ContactMe />
      <Footer/>

      

      
    </>
  )
}

export default App
