import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="overlay"></div>
      <div className="projects-content fade-in">
        <h1>My Projects</h1>
        <p className="subtitle">
          Here’s a sneak peek into my work — something awesome is on the way!
        </p>
        <div className="coming-soon">
          <span>🚀 Coming Soon...</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
