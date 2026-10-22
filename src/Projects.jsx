import './Projects.css';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

// `featured` projects get a full card at the top. Everything else lands in the
// compact table below so the section stays scannable as the list grows.
const projects = [
  {
    id: 'cafe-kaya',
    title: 'Cafe Kaya',
    tagline: 'Restaurant experience & admin platform',
    summary:
      'A full-stack cafe platform where guests browse the menu and story while staff manage content, reviews, and inquiries from a role-based admin dashboard.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Cloudinary', 'Docker'],
    liveUrl: 'https://cafe-kaya.vercel.app/',
    featured: true,
    highlight: { value: 'Role-based', label: 'admin dashboard for staff' },
  },
  {
    id: 'opsflow',
    title: 'OPSflow',
    tagline: 'Operations & project management platform',
    summary:
      'A web and mobile platform for managing people, departments, clients, projects, and tasks, with role-based dashboards, comment threads, and end-to-end encrypted direct messages.',
    tech: ['React', 'TypeScript', 'Expo', 'Hono', 'Bun', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://opsflow-web-18mx.onrender.com/login',
    githubUrl: 'https://github.com/Ndet0/find-my-org',
    featured: true,
    highlight: { value: 'Web + mobile', label: 'one API, two clients' },
  },
  {
    id: 'mumplan',
    title: 'MumPlan',
    tagline: 'Shopping planner & spending tracker',
    summary:
      'A mobile-first app for planning shopping trips against a budget in KES, recording what was actually paid, and tracking daily, weekly, and monthly spending.',
    tech: ['React', 'TypeScript', 'Hono', 'Bun', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://mumplan-web.onrender.com/sign-in',
    featured: true,
    highlight: { value: 'KES budgets', label: 'planned vs. actually paid' },
  },
  {
    id: 'wema',
    title: 'WEMA',
    tagline: 'Charity donation & campaign platform',
    summary:
      'Secure one-time and recurring gifts, with campaign management and impact tracking for administrators.',
    tech: ['React', 'Flask', 'PostgreSQL', 'Stripe', 'PayPal'],
    liveUrl: 'https://wema-giving-api.vercel.app/',
  },
  {
    id: 'chatbot',
    title: 'AI Chatbot Assistant',
    tagline: 'Conversational assistant with memory',
    summary:
      'Real-time messaging with contextual memory, built to plug into web apps through API-driven integrations.',
    tech: ['React', 'Flask', 'OpenAI API', 'PostgreSQL'],
    liveUrl: 'https://chatbotai-nine-theta.vercel.app/',
  },
  {
    id: 'event360',
    title: 'Event360',
    tagline: 'Event management platform',
    summary:
      'Event creation, discovery, and ticketing with JWT auth and Admin, Organizer, and Attendee roles.',
    tech: ['Python', 'Flask', 'PostgreSQL', 'JWT', 'Cloudinary'],
    liveUrl: 'https://event-360.vercel.app/',
  },
  {
    id: 'readify',
    title: 'Readify',
    tagline: 'Book discovery & online reader',
    summary:
      'Discover, filter, and read public-domain books from the Gutendex (Project Gutenberg) API.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Gutendex API'],
    liveUrl: 'https://readify-10.netlify.app/',
  },
  {
    id: 'agrilink',
    title: 'AgriLink',
    tagline: 'Agriculture community platform',
    summary:
      'Farmers and experts share posts, discussions, and knowledge, with JWT auth, RBAC, and Cloudinary media.',
    tech: ['React', 'Flask', 'PostgreSQL', 'JWT', 'Cloudinary'],
    liveUrl: 'https://agrilink-sigma.vercel.app/',
  },
];

const featured = projects.filter((p) => p.featured);
const more = projects.filter((p) => !p.featured);

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2>Real-world builds</h2>
          <p className="section-sub">
            Products built end to end: the data model, the API, the interface,
            and the deployment. Every one of them is live.
          </p>
        </div>

        <div className="projects-grid">
          {featured.map((project, i) => (
            <article
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <header className="project-head">
                <p className="mono">{project.tagline}</p>
                <h3>{project.title}</h3>
              </header>

              {project.highlight && (
                <p className="project-highlight">
                  <strong>{project.highlight.value}</strong>
                  <span>{project.highlight.label}</span>
                </p>
              )}

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
                  className="link-arrow"
                >
                  View live <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow muted"
                  >
                    <FaGithub aria-hidden="true" /> Source
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="projects-more">
          <p className="projects-more-title mono">
            ~/projects · {more.length} more
          </p>
          <table className="projects-table">
            <thead>
              <tr>
                <th scope="col">Project</th>
                <th scope="col">What it does</th>
                <th scope="col" className="col-stack">Stack</th>
                <th scope="col" className="col-links">
                  <span className="sr-only">Links</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {more.map((project) => (
                <tr key={project.id}>
                  <th scope="row">
                    <span className="project-name">{project.title}</span>
                    <span className="project-tagline">{project.tagline}</span>
                  </th>
                  <td className="col-summary">{project.summary}</td>
                  <td className="col-stack">{project.tech.join(' · ')}</td>
                  <td className="col-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live site`}
                      title="Live"
                    >
                      <FaArrowUpRightFromSquare aria-hidden="true" />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source on GitHub`}
                        title="GitHub"
                      >
                        <FaGithub aria-hidden="true" />
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="projects-github">
          More on{' '}
          <a
            href="https://github.com/Ndet0"
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
          >
            GitHub <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
}

export default Projects;
