import './Header.css';
import { useState, useEffect, useCallback, useRef } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [social, setSocial] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollTime = useRef(0);
  const socialSelectRef = useRef(null);

  const handleSocialChange = (e) => {
    const url = e.target.value;
    if (url) {
      window.open(url, '_blank');
      // Reset select to first option after opening
      e.target.value = '';
      setSocial('');
    }
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  // Memoized scroll handler with built-in throttling for better performance
  const handleScroll = useCallback(() => {
    const now = Date.now();
    if (now - lastScrollTime.current < 100) return;
    lastScrollTime.current = now;

    setIsScrolled(window.scrollY > 50);

    const sections = document.querySelectorAll('section');
    let current = 'home';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        current = section.getAttribute('id') || 'home';
      }
    });

    if (window.scrollY < 100) {
      current = 'home';
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <h1 className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Festus Dev
          </h1>

          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav 
            className={`nav ${isMenuOpen ? 'open' : ''}`} 
            id="primary-navigation"
            aria-label="Main navigation"
            role="navigation"
          >
            <ul className="nav-links" role="menubar">
              <li>
                <a
                  href="#home"
                  className={activeSection === 'home' ? 'active' : ''}
                  onClick={() => handleNavClick('home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={activeSection === 'about' ? 'active' : ''}
                  onClick={() => handleNavClick('about')}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={activeSection === 'skills' ? 'active' : ''}
                  onClick={() => handleNavClick('skills')}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#how-i-work"
                  className={activeSection === 'how-i-work' ? 'active' : ''}
                  onClick={() => handleNavClick('how-i-work')}
                >
                  How I Work
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={activeSection === 'projects' ? 'active' : ''}
                  onClick={() => handleNavClick('projects')}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Ndet0"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeSection === 'contact' ? 'active' : ''}
                  onClick={() => handleNavClick('contact')}
                >
                  Contact
                </a>
              </li>
              <li>
                <select
                  className="social-select"
                  value={social}
                  onChange={handleSocialChange}
                >
                  <option value="">Socials</option>
                  <option value="https://www.instagram.com/livelike_ndet.o?igsh=aDIwb3g2eTNpZjRp&utm_source=qr">Instagram</option>
                  <option value="https://www.linkedin.com/in/festus-ndeto-500227262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</option>
                  <option value="https://www.twitter.com">Twitter</option>
                </select>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

