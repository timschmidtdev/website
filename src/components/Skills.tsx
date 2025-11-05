import './Skills.css'

function Skills() {
  const skills = [
    'React',
    'React Native',
    'TypeScript',
    'Front-End Development'
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
