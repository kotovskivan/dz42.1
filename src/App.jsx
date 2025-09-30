import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Team from './pages/about/Team.jsx'
import Company from './pages/about/Company.jsx'

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} />
            <Route path="company" element={<Company />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>Сторінку не знайдено</h2>} />
        </Routes>
      </div>
    </div>
  )
}
