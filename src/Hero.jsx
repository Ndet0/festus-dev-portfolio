import './Hero.css';
import { useState, useEffect } from 'react';

function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero" id="home">
      <div className={`hero-content ${isVisible ? 'animate' : ''}`}>
        <p className="hero-name">Festus Kisoi</p>

        <h1>
          Backend-Focused <span>Full-Stack Engineer</span>
        </h1>

        <p className="hero-lead">
          I build reliable APIs, debug complex systems, and turn real-world
          requirements into working software.
        </p>

        <p>
          Experienced with Flask, relational databases, and RESTful architecture,
          with a growing interest in data-driven problem solving and analytics.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Get in Touch</a>
        </div>
      </div>

      <div className={`hero-image ${isVisible ? 'animate' : ''}`}>
        <div className="image-wrapper">
          <img
            src="/prof2.jpeg"
            alt="Festus Kisoi, backend-focused full-stack engineer"
            width="380"
            height="380"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            className={imageLoaded ? 'loaded' : ''}
          />
          {!imageLoaded && <div className="image-placeholder" aria-hidden="true"></div>}
        </div>
      </div>
    </section>
  );
}

export default Hero;
