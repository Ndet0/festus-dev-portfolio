import './Hero.css';

// Hero section: full-screen background (set in CSS) with a centered content box.
// The background image is controlled in `Hero.css`. The profile <img> uses
// `loading="lazy"` so it doesn't block the initial page render on slow networks.

function Hero() {
  return (
    <section  id="home" className="hero">
      <div className="hero-content">
        <img
          src="/prof1.jpeg"
          alt="Festus Kisoi"
          className="about-img"
          loading="lazy"
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
