import './App.scss'
import { Routes, Route, useLocation } from 'react-router-dom'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import Home from './containers/Home'
import About from './containers/About'
import Resume from './containers/Resume'
import Portfolio from './containers/Portfolio'
import Contact from './containers/Contact'
import Navbar from './Components/navbar'
import particlesConfig from './helpers/particelsConfig'

function App() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  const location = useLocation()
  const renderParticleJsIfCurrentPageIsHomePage = location.pathname === '/'

  return (
    <div className="App">
      {/* particles js */}
      {renderParticleJsIfCurrentPageIsHomePage && (
        <Particles
          id="particles"
          options={particlesConfig}
          init={particlesInit}
        />
      )}
      {/* navbar component */}
      <div className="App__navbar-wrapper">
        <Navbar />
      </div>
      {/* main page content */}
      <div className="App__main-content-wrapper">
        <Routes>
          {/* create all routes */}
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
