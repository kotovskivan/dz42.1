import { Outlet, NavLink } from 'react-router-dom'

export default function About() {
  const subLink = ({ isActive }) => 'sub-link' + (isActive ? ' sub-link--active' : '')
  return (
    <div>
      <h1>Це сторінка про нас</h1>
      <div className="subnav">
        <NavLink to="team" className={subLink}>Наша команда</NavLink>
        <NavLink to="company" className={subLink}>Про компанію</NavLink>
      </div>
      <Outlet />
    </div>
  )
}
