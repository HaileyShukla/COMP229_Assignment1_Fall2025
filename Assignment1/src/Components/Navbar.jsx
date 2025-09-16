/*
  File: Navbar.jsx
  Student’s Name: Hailey Shukla
  StudentID: 301487045
  Date: 2025-09-15
  Purpose: Site navigation with custom logo
*/

import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="nav">
      <Link to="/" className="brand" aria-label="Go to Home">
        <img src={logo} className="brand-logo" alt="Personal logo" />
        <span className="brand-text">Hailey Shukla</span>
      </Link>

      <nav aria-label="Primary">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
