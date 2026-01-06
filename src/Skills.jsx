import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills & Tech Stack</h2>

        <div className="skills-container">
          <div className="skills-group" style={{ animationDelay: '0.1s' }}>
            <h3>Backend Development</h3>
            <ul>
              <li>Python</li>
              <li>Flask (App Factory, Blueprints)</li>
              <li>RESTful API Design</li>
              <li>SQLAlchemy ORM</li>
              <li>Database Migrations (Flask-Migrate)</li>
            </ul>
          </div>

          <div className="skills-group" style={{ animationDelay: '0.2s' }}>
            <h3>Databases</h3>
            <ul>
              <li>SQLite</li>
              <li>PostgreSQL (Foundational)</li>
              <li>Relational Data Modeling</li>
            </ul>
          </div>

          <div className="skills-group" style={{ animationDelay: '0.3s' }}>
            <h3>Frontend (Supporting)</h3>
            <ul>
              <li>React</li>
              <li>JavaScript (ES6+)</li>
              <li>API Integration</li>
            </ul>
          </div>

          <div className="skills-group" style={{ animationDelay: '0.4s' }}>
            <h3>Tools & Workflow</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Linux / CLI</li>
              <li>Postman</li>
              <li>Debugging & Error Tracing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

