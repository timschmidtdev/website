import './Header.css'

interface HeaderProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <a href="#home" className="logo">Tim Schmidt</a>
        
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#craftcamp">Craft Camp</a>
          <a href="#contact">Contact</a>
          
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
