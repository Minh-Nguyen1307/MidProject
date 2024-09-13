import { useState } from 'react'

import './App.css'
import NavBar from '../Components/NavBar'
import Header1 from '../Components/Header1'
import Poster from '../Components/Poster'
import Header2 from '../Components/Header2'

import Release from '../Components/Release'

function App() {
 

  return (
    <div className="app">
      <NavBar />
      <Header1 />
      <Poster />
      <Header2 />
      <Release />
    </div>
  )
}

export default App
