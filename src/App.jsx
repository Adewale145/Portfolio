import { Routes, Route} from "react-router-dom"
import React, { useState } from 'react'
import './styles/App.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Works from './components/Works'
import Contact from './components/Contact'
import Menu   from './components/Menu'
import Skills   from './components/Skills';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="sections">
            <Routes>
               <Route exact path='/' element={<Hero />} />
               <Route exact path='/hero' element={<Hero />} />
               <Route path='portfolio' element={<Portfolio />} />
               <Route path='works' element={<Works />} />
               <Route path='skills' element={<Skills />} /> 
               <Route path='contact' element={<Contact />} /> 
            </Routes>
          </div>
      </div>    
  );
}

export default App;
