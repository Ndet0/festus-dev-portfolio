import './Projects.css';

const projects = [
  {
    id: 'cafe-kaya',
    title: 'Cafe Kaya – Restaurant Experience & Admin Platform',
    summary:
      'A full-stack cafe platform where guests browse the menu and story while staff manage content, reviews, and inquiries from a role-based admin dashboard.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Cloudinary', 'Docker'],
    liveUrl: 'https://cafe-kaya.vercel.app/',
    featured: true,
  },
  {
    id: 'wema',
    title: 'WEMA – Charity Donation & Campaign Platform',
    summary:
      'A donation platform for secure one-time and recurring gifts, with campaign management and impact tracking for administrators.',
    tech: ['React', 'TypeScript', 'Flask', 'PostgreSQL', 'Stripe', 'PayPal'],
    liveUrl: 'https://wema-giving-api.vercel.app/',
  },
  {
    id: 'chatbot',
    title: 'AI Conversational Chatbot Assistant',
    summary:
      'A deployed chatbot with real-time messaging and contextual memory, built to plug into modern web apps through API-driven integrations.',
    tech: ['React', 'TypeScript', 'Flask', 'OpenAI API', 'PostgreSQL'],
    liveUrl: 'https://chatbotai-nine-theta.vercel.app/',
  },
  {
    id: 'event360',
    title: 'Event360 – Event Management Platform',
    summary:
      'A collaborative event platform for creation, discovery, and ticketing, with JWT auth and Admin, Organizer, and Attendee roles.',
    tech: ['Python', 'Flask', 'PostgreSQL', 'JWT', 'Cloudinary'],
    liveUrl: 'https://event-360.vercel.app/',
  },
  {
    id: 'readify',
    title: 'Readify – Book Discovery & Online Reader',
    summary:
      'A React app for discovering, filtering, and reading public-domain books from the Gutendex (Project Gutenberg) API.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'React Router', 'Gutendex API'],
    liveUrl: 'https://readify-10.netlify.app/',
  },
  {
    id: 'agrilink',
    title: 'AgriLink – Agriculture Community Platform',
    summary:
      'A community platform where farmers and experts share posts, discussions, and knowledge, with JWT auth, RBAC, and Cloudinary media.',
    tech: ['React', 'Flask', 'PostgreSQL', 'JWT', 'Cloudinary'],
    liveUrl: 'https://agrilink-sigma.vercel.app/',
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`project-card${project.featured ? ' featured' : ''}`}
            >
              {project.image && (
                <div className="project-thumb">
                  <img src={project.image} alt="" />
                </div>
              )}

              {project.featured && <span className="project-badge">Featured</span>}

              <h3>{project.title}</h3>
              <p className="project-description">{project.summary}</p>

              <ul className="project-tech" aria-label={`${project.title} technologies`}>
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="project-actions">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
