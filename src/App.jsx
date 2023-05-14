import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import HomePage from './Pages/HomePage'

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
