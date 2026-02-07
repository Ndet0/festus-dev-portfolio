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
          <div className="project-card">
  <h3>Event360 – Full Stack Event Management Platform</h3>

  <p className="project-description">
    Contributed to the backend engineering of Event360, a full-stack event management
    platform that enables event creation, discovery, ticketing, and administration
    through a secure and scalable web architecture.
  </p>

  <p className="project-description">
    Worked in a collaborative team environment to design RESTful APIs, implement
    JWT-based authentication, manage PostgreSQL database models, and build business
    logic supporting multi-role access (Admin, Organizer, Attendee) with real-time
    event and user management workflows.
  </p>

  <div className="project-meta">
    <div className="meta-item">
      <strong>Tech Stack:</strong> Python, Flask, PostgreSQL, SQLAlchemy, JWT, Cloudinary,
      Flask-Migrate, Gunicorn, Render
    </div>
    <div className="meta-item">
      <strong>Key Focus:</strong> REST API design, authentication & authorization,
      database architecture, role-based access control, production deployment
    </div>
  </div>

  <a
    href="https://event-360.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    View Live Application →
  </a>
</div>
<div className="project-card">
  <h3>Readify – Book Discovery & Online Reader Web App</h3>

  <p className="project-description">
    Contributed to the frontend development of Readify, a React and Tailwind CSS
    web application that allows users to discover, filter, and read public-domain
    books fetched from the Gutendex (Project Gutenberg) API.
  </p>

  <p className="project-description">
    Worked in a collaborative team to build reusable React components, implement
    API data fetching, manage global state, and create a responsive, modern UI
    featuring dark mode, infinite scrolling, and local storage-based personal
    library management.
  </p>

  <div className="project-meta">
    <div className="meta-item">
      <strong>Tech Stack:</strong> React, Tailwind CSS, Vite, React Router DOM,
      Gutendex API, LocalStorage API
    </div>
    <div className="meta-item">
      <strong>Key Focus:</strong> Component architecture, API integration,
      responsive UI design, state management, performance optimization
    </div>
  </div>

  <a
    href="https://readify-10.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    View Live Application →
  </a>
</div>

        </div>
      </div>
    </section>
  );
}

export default Projects;

