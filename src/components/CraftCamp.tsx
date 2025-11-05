import './CraftCamp.css'

function CraftCamp() {
  return (
    <section id="craftcamp" className="craftcamp">
      <h2 className="section-title">Craft Camp</h2>
      <div className="craftcamp-content">
        <p className="craftcamp-description">
          In addition to my engineering work, I run{' '}
          <a
            href="https://www.craftcamp.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="craftcamp-link"
          >
            Craft Camp
          </a>
          , a digital products company.
        </p>
      </div>
    </section>
  )
}

export default CraftCamp
