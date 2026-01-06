import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <h3>Superheroes REST API</h3>

            <p className="project-description">
              Designed and implemented a RESTful API for managing heroes, superpowers,
              and their relationships. The system models many-to-many relationships,
              enforces validations, and exposes clean endpoints tested via Postman.
            </p>

            <p className="project-description">
              This project involved setting up Flask application structure, defining
              relational database models, running migrations, seeding data, and
              debugging environment and routing issues to deliver a fully working API.
            </p>

            <div className="project-meta">
              <div className="meta-item">
                <strong>Tech Stack:</strong> Python, Flask, SQLAlchemy, Flask-Migrate, SQLite
              </div>
              <div className="meta-item">
                <strong>Key Focus:</strong> REST APIs, relational models, validations, debugging
              </div>
            </div>

            <a
              href="https://github.com/Ndet0/superheroes-code-challenge"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>

          {/* Project 2 */}
          <div className="project-card">
           <h3>Donor Management CLI Application</h3>

<p className="project-description">
  Built a command-line application to manage donors, campaigns, and donations,
  with persistent storage and secure user authentication.
</p>

<p className="project-description">
  The project focuses on clean data modeling, role-based command access, and
  reliable reporting, demonstrating practical backend architecture and real-world
  CRUD workflows without a graphical interface.
</p>

<div className="project-meta">
  <div className="meta-item">
    <strong>Tech Stack:</strong> Python, SQLAlchemy, Click, SQLite, Pipenv
  </div>
  <div className="meta-item">
    <strong>Key Focus:</strong> CLI design, authentication, ORM-based data modeling,
    reporting logic
  </div>
</div>

<a
  href="https://github.com/Ndet0/donor-cli"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  View on GitHub →
</a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

