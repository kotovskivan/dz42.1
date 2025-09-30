import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const linkClass = ({ isActive }) => 'nav-link' + (isActive ? ' nav-link--active' : '')
  return (
    <nav className="nav">
      <NavLink to="/" className={linkClass} end>Головна</NavLink>
      <NavLink to="/about" className={linkClass}>Про нас</NavLink>
      <NavLink to="/contact" className={linkClass}>Контакти</NavLink>
    </nav>
  )
}
