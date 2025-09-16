/*
  File: App.jsx
  Student’s Name: Hailey Shukla
  StudentID: 301487045
  Date: 2025-09-15
  Purpose: Top-level layout & routes
*/

import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Projects from './Pages/Projects.jsx'
import Services from './Pages/Services.jsx'
import Contact from './Pages/Contact.jsx'

function App() {
  // Layout wrapper with Navbar + Routes + Footer
  return (
    <div className="app">
      {/*Global Navigation*/}
      <Navbar />

      {/*Page Content*/}
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Fallback: redirect unknown routes to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/*Global Footer*/}
      <Footer />
    </div>
  )
}

export default App
