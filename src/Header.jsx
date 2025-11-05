import './Header.css';
import { useState, useEffect } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [social, setSocial] = useState('');

  const handleSocialChange = (e) => {
    const url = e.target.value;
    if (url) window.open(url, '_blank');
  };

  // ✅ Detect which section is active based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120; // offset for header height
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      // ✅ If near the top, mark "home" as active
      if (window.scrollY < 100) {
        current = 'home';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <h1 className="logo">Festus Dev</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => setActiveSection('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => setActiveSection('about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={() => setActiveSection('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Ndet0"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => setActiveSection('contact')}
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
    </header>
  );
}

export default Header;
