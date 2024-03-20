import React from "react"
import {Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { About, Home, Projects, Contact } from "./pages"
function App() {

  return (
    <main className="bg-slate-300/20 ">
      <Router basename="portfolio">
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<Home/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
