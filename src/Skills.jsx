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
              <li>JWT Authentication & Authorization</li>
              <li>SQLAlchemy ORM</li>
              <li>Database Migrations (Flask-Migrate)</li>
              <li>File Upload Integration (Cloudinary)</li>
            </ul>
          </div>

          <div className="skills-group" style={{ animationDelay: '0.2s' }}>
            <h3>Databases</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>SQLite</li>
              <li>Relational Data Modeling</li>
              <li>Query Optimization (Foundational)</li>
            </ul>
          </div>

          <div className="skills-group" style={{ animationDelay: '0.3s' }}>
            <h3>Frontend</h3>
            <ul>
              <li>React (Hooks, Context API)</li>
              <li>JavaScript (ES6+)</li>
              <li>Tailwind CSS</li>
              <li>Responsive UI Development</li>
              <li>API Integration (Axios / Fetch)</li>
              <li>State Management (Context API)</li>
            </ul>
          </div>

          <div className="skills-group" style={{ animationDelay: '0.4s' }}>
            <h3>Tools & Workflow</h3>
            <ul>
              <li>Git & GitHub (Collaborative Workflows, PRs)</li>
              <li>Linux / CLI</li>
              <li>Postman / API Testing</li>
              <li>Debugging & Error Tracing</li>
              <li>Vercel & Render Deployment</li>
              <li>Agile / Scrum Team Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
