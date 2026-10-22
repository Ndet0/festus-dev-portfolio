import { FaCode, FaServer, FaPlug, FaTools, FaLightbulb } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaServer />,
    title: 'Backend & API Development',
    description:
      'RESTful APIs, authentication, and database architecture built to be read, tested, and extended by the next engineer.',
  },
  {
    icon: <FaCode />,
    title: 'Full-Stack Web Applications',
    description:
      'Complete products from schema to screen with Python, Flask or FastAPI on the back and React on the front.',
  },
  {
    icon: <FaPlug />,
    title: 'API & Payment Integration',
    description:
      'Third-party services wired in properly: Stripe, PayPal, Cloudinary, authentication providers and developer platforms.',
  },
  {
    icon: <FaTools />,
    title: 'Developer Tooling & Automation',
    description:
      'GitHub workflows, CI/CD pipelines, formatting and pre-commit hooks so the team ships without stepping on each other.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Technical Consulting',
    description:
      'Help for startups and small teams on MVP architecture, data modeling, and a development workflow that scales.',
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Services</p>
          <h2>What I help with</h2>
          <p className="section-sub">
            Practical engineering for teams that need software to work in
            production, not just in a demo.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <article
              className="service-card"
              key={service.title}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}

          <article
            className="service-card service-statement"
            style={{ animationDelay: `${services.length * 0.08}s` }}
          >
            <p className="mono">How I think about it</p>
            <h3>Fix the real problem, not the symptom.</h3>
            <p>
              Every engagement starts by understanding what the system is
              supposed to do, then tracing the issue to its source. The result
              is software you can keep building on.
            </p>
            <a href="#contact" className="link-arrow">
              Start a conversation <span aria-hidden="true">→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;
