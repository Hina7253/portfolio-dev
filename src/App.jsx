import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'


function App() {
  return (
    <div style={{ backgroundColor: 'rgb(43, 76, 148)' }} className='min-h-screen w-full'>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      
      <Skills/>
      <Contact/>
      
    </div>
  )
}

export default App;