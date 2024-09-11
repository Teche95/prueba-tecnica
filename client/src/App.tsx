// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AddCharacter } from "./pages/AddCharacter"
import { EditCharacter } from "./pages/EditCharacter"
import { Home } from "./pages/Home"
import DetailCharacter from './pages/DetailCharacter'
// import { QueryClientProvider, QueryClient } from "react-query"

// import './style.css';
function App() {
  // const [count, setCount] = useState(0)

  return (
    // <QueryClientProvider client={QueryClient()}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddCharacter />} />
          <Route path="/edit/:id" element={<EditCharacter />} />
          <Route path="/detail/:id" element={<DetailCharacter />} />
        </Routes>
      </BrowserRouter>
    // </QueryClientProvider>
  )
}

export default App
