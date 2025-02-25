import React from 'react'
import {BrowserRouter as Router, Routes, Route} from
'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import NavbarComp from './components/Navbarcomponent';
import Projects from './components/Project';

const App = () => {
  return (
    <Router>
      <NavbarComp/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/project' element={<Projects/>} />
      </Routes>
      
    </Router>
  )
}

export default App
