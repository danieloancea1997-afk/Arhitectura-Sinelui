import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Pachete', to: '/shop' },
  { label: 'Cursuri', to: '/cursuri' },
  { label: 'Contact', to: '/contact' },
  { label: 'Resurse', to: '/resurse' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="brand">
        <Link className="brand-link" to="/" aria-label="Homepage">
          <img className="brand-logo" src={logo} alt="CoachMind logo" />
        </Link>
        <span className="brand-name">Arhitectura Sinelui</span>
      </div>
      <button
        className={menuOpen ? 'nav-toggle nav-toggle-open' : 'nav-toggle'}
        type="button"
        aria-label="Deschide meniul"
        aria-expanded={menuOpen}
        aria-controls="nav-links"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="nav-toggle-line" />
        <span className="nav-toggle-line" />
        <span className="nav-toggle-line" />
      </button>
      <div id="nav-links" className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => {
              const isThankYouShopState =
                item.to === '/shop' && location.pathname === '/multumesc'

              return isActive || isThankYouShopState
                ? 'nav-link nav-link-active'
                : 'nav-link'
            }}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
