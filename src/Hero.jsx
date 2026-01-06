import './Hero.css';
import { useState, useEffect } from 'react';

function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);
  }, []);

  return (
    <section className="hero" id="home">
      <div className={`hero-content ${isVisible ? 'animate' : ''}`}>
        <h1 className="animate-delay-1">
          Backend-Focused <span>Full-Stack Engineer</span>
        </h1>

        <p className="animate-delay-2">
          I build reliable APIs, debug complex systems, and turn real-world
          requirements into working software.
        </p>

        <p className="animate-delay-3">
          Experienced with Flask, relational databases, and RESTful architecture,
          with a growing interest in data-driven problem solving and analytics.
        </p>

        <div className="hero-cta animate-delay-4">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Get in Touch</a>
        </div>
      </div>

      <div className={`hero-image ${isVisible ? 'animate' : ''}`}>
        <div className="image-wrapper">
          <img
            src="/prof1.jpeg"
            alt="Festus Ndeto - Full-Stack Engineer"
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            className={imageLoaded ? 'loaded' : ''}
          />
          {!imageLoaded && <div className="image-placeholder"></div>}
        </div>
      </div>
    </section>
  );
}

export default Hero;

