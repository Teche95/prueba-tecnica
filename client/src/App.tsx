// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AddCharacter } from "./pages/AddCharacter"
import { EditCharacter } from "./pages/EditCharacter"
import { Home } from "./pages/Home"
import DetailCharacter from './pages/DetailCharacter'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddCharacter />} />
        <Route path="/edit/:id" element={<EditCharacter />} />
        <Route path="/detail/:id" element={<DetailCharacter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
