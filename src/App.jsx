import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import Home from './components/Home';
import Navbar from './components/Navbar';

import './App.css'
function App() {

  return (
    <div classname='App'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<h1>These are my projects</h1>}/>
        <Route path='/projects/:id' element={<h2>This is an individual project</h2>}/>
        <Route path='/resume' element={<h2>This is my resume</h2>}/>\
      </Routes>
    </Router>
    <Home/>
    </div>
  )
}

export default App
