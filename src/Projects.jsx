import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
        <div className="project-card">
  <h3>Cafe Kaya – Full-Stack Restaurant Experience & Admin Platform</h3>

  <p className="project-description">
    Designed and developed Cafe Kaya, a modern full-stack restaurant platform that delivers
    an immersive digital experience through interactive storytelling, dynamic menu browsing,
    and visually rich content. The platform enables customers to explore the cafe’s offerings
    while providing administrators with powerful tools to manage content, reviews, and customer interactions.
  </p>

  <p className="project-description">
    Architected a high-performance FastAPI backend with async SQLAlchemy and JWT-based
    authentication, supporting modular APIs for menu management, gallery systems, reviews,
    and contact workflows. Built a responsive React + TypeScript frontend with advanced UI
    patterns including animated sections (Framer Motion), server-state management with
    React Query, and schema-driven form validation using Zod. Integrated Cloudinary for
    optimized media delivery and implemented a role-based admin dashboard with full CRUD
    capabilities and moderation pipelines.
  </p>

  <div className="project-meta">
    <div className="meta-item">
      <strong>Tech Stack:</strong> React, TypeScript, Vite, Tailwind CSS, shadcn/ui,
      FastAPI, Python, PostgreSQL, SQLAlchemy (async), Alembic, React Query,
      Zod, Framer Motion, Cloudinary, Docker
    </div>
    <div className="meta-item">
      <strong>Key Focus:</strong> Full-stack architecture, async backend design,
      REST API development, admin systems, content management workflows,
      performance optimization, scalable UI systems
    </div>
  </div>

  <a
    href="https://cafe-kaya.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    View Live Application →
  </a>
</div>
        <div className="project-card">
  <h3>WEMA – Charity Donation & Campaign Management Platform</h3>

  <p className="project-description">
    Built and architected WEMA, a full-stack charity donation platform that enables
    users to contribute to fundraising campaigns through secure one-time and recurring
    payments, while providing administrators with tools to manage campaigns and track impact.
  </p>

  <p className="project-description">
    Designed and implemented scalable backend services with Flask, integrating Stripe
    and PayPal payment systems, handling webhook events with idempotency, and enforcing
    secure HMAC-based authentication for admin operations. Developed a modern React
    frontend with dynamic campaign browsing, donation flows, and analytics dashboards.
  </p>

  <div className="project-meta">
    <div className="meta-item">
      <strong>Tech Stack:</strong> React, TypeScript, Vite, Tailwind CSS, Python, Flask,
      PostgreSQL, SQLAlchemy, Stripe API, PayPal API, Flask-Limiter, ReportLab, Vercel
    </div>
    <div className="meta-item">
      <strong>Key Focus:</strong> Payment integration, webhook handling, secure backend architecture,
      REST API design, campaign management systems, full-stack deployment
    </div>
  </div>

  <a
    href="https://wema-giving-api.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    View Live Application →
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
<div className="project-card">
  <h3>AgriLink – Full-Stack Agriculture Community & Knowledge Platform</h3>

  <p className="project-description">
    Designed and built AgriLink, a scalable full-stack platform that connects farmers,
    agricultural experts, and communities to share knowledge, discover insights, and
    collaborate on modern farming practices. The platform supports content creation,
    community engagement, and structured discussions to improve information accessibility
    within the agriculture ecosystem.
  </p>

  <p className="project-description">
    Architected a robust Flask backend with JWT-based authentication and role-based
    access control (RBAC), powering features such as posts, communities, and messaging.
    Engineered a responsive React frontend with protected routing, optimized API data
    fetching, and seamless media handling via Cloudinary. Improved system reliability
    and performance by addressing N+1 query issues, enforcing input sanitization, and
    introducing database indexing strategies.
  </p>

  <div className="project-meta">
    <div className="meta-item">
      <strong>Tech Stack:</strong> React, Vite, Tailwind CSS, Python, Flask,
      PostgreSQL, SQLAlchemy, JWT Authentication, Cloudinary, Flask-Migrate,
      Vercel, Render
    </div>
    <div className="meta-item">
      <strong>Key Focus:</strong> Scalable system design, REST API architecture,
      authentication & RBAC, performance optimization, secure backend development,
      community-driven platforms
    </div>
  </div>

  <a
    href="https://agrilink-sigma.vercel.app/"
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

