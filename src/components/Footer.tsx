import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Tim Schmidt. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
