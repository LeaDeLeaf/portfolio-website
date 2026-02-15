import React, { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <a 
          href="#home" 
          className="logo"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('home')
          }}
        >
          <h1>Lea Gabay</h1>
        </a>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas fa-sun"></i>
            )}
          </button>
        </nav>

        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
