import './Hero.css'

function Hero() {
  return (
    <section id="about" className="hero">
      <h1 className="hero-title">Hi, I'm Tim Schmidt</h1>
      <p className="hero-subtitle">Software Engineer</p>
      <p className="hero-bio">
        I'm a software engineer.
        When I'm not working, you'll find me biking, running, or cross country skiing.
      </p>
      
      <div className="social-links">
        <a 
          href="https://github.com/timschmidtdev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/timothyjschmidt/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Hero
