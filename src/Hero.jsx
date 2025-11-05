import './Hero.css';

function Hero() {
  return (
    <section  id="home" className="hero">
      <div className="hero-content">
        <img
          src="/prof1.jpeg"
          alt="Festus Kisoi"
          className="about-img"
        />
        <h1>
          Hi, I’m <span>Festus Kisoi</span>
        </h1>
        <p className="hero-subtitle">Full Stack Web Developer</p>
        <p className="hero-text">
          I build elegant and robust web applications — from responsive front-ends 
          to scalable back-end solutions. I’m passionate about clean design, 
          performance, and seamless user experiences.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
