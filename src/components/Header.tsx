import { useState } from 'react'
import './Header.css'

interface HeaderProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

function Header({ theme, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-content">
        <a href="#home" className="logo">Tim Schmidt</a>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#craftcamp" onClick={handleNavClick}>Craft Camp</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>

          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
