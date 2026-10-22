import './Hero.css';
import { useState, useEffect } from 'react';

// Tools I actually ship with. Shown as a quiet strip under the hero, the way
// agencies show client logos, so a visitor sees the stack before scrolling.
const STACK = [
  'Python',
  'Flask',
  'FastAPI',
  'PostgreSQL',
  'SQLAlchemy',
  'React',
  'TypeScript',
  'Hono',
  'Prisma',
  'Docker',
  'Stripe',
  'Cloudinary',
];

function useNairobiTime() {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Africa/Nairobi',
    }).format(new Date());

  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const time = useNairobiTime();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className={`hero-content ${isVisible ? 'animate' : ''}`}>
          <p className="status-pill hero-status">
            <span className="dot" aria-hidden="true"></span>
            <span>Open to work</span>
            <span className="sep" aria-hidden="true">·</span>
            <span>Nairobi</span>
            <time aria-label="Current time in Nairobi">{time}</time>
          </p>

          <p className="hero-name">Festus Kisoi</p>

          <h1>
            I build the backend systems <span>that keep products running.</span>
          </h1>

          <p className="hero-lead">
            Backend-focused full-stack engineer. I design REST APIs, model
            relational data, and debug the hard problems between the database
            and the browser.
          </p>

          <p>
            Flask, PostgreSQL and React day to day, with a growing focus on
            data-driven problem solving. Available for full-time roles and
            contract work.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View projects</a>
            <a href="#contact" className="btn-secondary">Work with me</a>
          </div>
        </div>

        <div className={`hero-image ${isVisible ? 'animate' : ''}`}>
          <div className="image-wrapper">
            <picture>
              <source srcSet="/prof2.webp" type="image/webp" />
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
            </picture>
            {!imageLoaded && <div className="image-placeholder" aria-hidden="true"></div>}
          </div>
        </div>
      </div>

      <div className="stack-strip" aria-label="Technologies I work with">
        <p className="stack-label mono">Working with</p>
        <ul className="stack-list">
          {STACK.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
