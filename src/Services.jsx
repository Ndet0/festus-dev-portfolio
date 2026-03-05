import { FaCode, FaServer, FaPlug, FaTools, FaLightbulb } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaCode />,
    title: 'Full-Stack Web Development',
    description:
      'Building modern, scalable web applications using technologies like Python, Flask, JavaScript, and SQL databases.',
  },
  {
    icon: <FaServer />,
    title: 'Backend & API Development',
    description:
      'Designing and building RESTful APIs, backend systems, and database architectures for scalable applications.',
  },
  {
    icon: <FaPlug />,
    title: 'API Integration',
    description:
      'Integrating third-party APIs including payment systems, authentication providers, and developer platforms.',
  },
  {
    icon: <FaTools />,
    title: 'Developer Tooling & Automation',
    description:
      'Setting up development workflows including GitHub automation, CI/CD pipelines, code formatting, and pre-commit hooks.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Technical Consulting',
    description:
      'Helping startups and teams design MVP architectures, backend systems, and scalable development workflows.',
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Services</h2>
        <p className="services-subtitle">What I Can Help You Build</p>

        <div className="services-grid">
          {services.map((service, i) => (
            <article
              className="service-card"
              key={service.title}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <div className="services-cta">
          <p>Interested in working together? Let&apos;s build something great.</p>
          <a href="#contact" className="services-cta-btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
