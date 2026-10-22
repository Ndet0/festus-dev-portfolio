import './About.css';

const FACTS = [
  { label: 'Based in', value: 'Nairobi, Kenya' },
  { label: 'Focus', value: 'Backend & API design' },
  { label: 'Stack', value: 'Python · Flask · PostgreSQL · React' },
  { label: 'Now', value: 'Data analysis, hackathons, datathons' },
  { label: 'Status', value: 'Open to full-time & contract' },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <div className="section-head">
              <p className="eyebrow">About</p>
              <h2>Systems that keep working after the demo.</h2>
            </div>

            <p className="about-lead">
              I specialize in building and fixing backend systems: designing
              RESTful APIs, working with relational data models, and debugging
              issues across environments, dependencies, and application logic.
            </p>

            <p>
              I&apos;m comfortable starting from scratch — setting up virtual
              environments, configuring databases and migrations, and iterating
              until endpoints behave exactly as expected. I enjoy reading error
              messages, tracing problems to their source, and delivering clean,
              testable solutions.
            </p>

            <p>
              Backend is the core, but I also work with React to build simple,
              functional interfaces for the systems behind them. I&apos;m currently
              expanding into data analysis and competitive problem-solving, and I
              document the journey on{' '}
              <a
                href="https://www.linkedin.com/in/festus-ndeto-500227262"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                LinkedIn
              </a>
              .
            </p>

            <a href="#how-i-work" className="link-arrow">
              See how I work <span aria-hidden="true">→</span>
            </a>
          </div>

          <aside className="about-facts" aria-label="Quick facts">
            <p className="about-facts-title mono">about.txt</p>
            <dl>
              {FACTS.map((fact) => (
                <div className="fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;
