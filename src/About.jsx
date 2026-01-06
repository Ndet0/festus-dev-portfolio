import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I specialize in building and fixing backend systems. My strength lies in
            designing RESTful APIs, working with relational data models, and
            debugging issues across environments, dependencies, and application
            logic.
          </p>

          <p>
            I&apos;m comfortable starting projects from scratch — setting up virtual
            environments, configuring databases and migrations, and iterating until
            endpoints behave exactly as expected. I enjoy reading error messages,
            tracing problems to their source, and delivering clean, testable
            solutions.
          </p>

          <p>
            While backend development is my core focus, I also work with React to
            build simple, functional user interfaces that support the systems behind
            them. I&apos;m currently expanding into data analysis and competitive
            problem-solving through hackathons and datathons.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

