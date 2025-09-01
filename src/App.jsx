import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/home'
import About from './components/about'
import Portfolio from './components/portfolio'
import Skills from './components/skills'
import Contact from './components/Contact'


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