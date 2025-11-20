import './Header.css';
import { useState, useEffect } from 'react';

// Header component: shows logo, navigation links and a mobile hamburger menu.
// - Highlights the active section based on scroll position
// - Provides a hamburger menu for small screens which toggles the nav
function Header() {
  // activeSection: which page section is currently active (home/about/projects/contact)
  const [activeSection, setActiveSection] = useState('home');
  // social: value for the socials <select> control
  const [social, setSocial] = useState('');
  // isMenuOpen: whether the mobile slide-in menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Opens the selected social link in a new tab
  const handleSocialChange = (e) => {
    const url = e.target.value;
    if (url) window.open(url, '_blank');
  };

  // Close menu when a nav link is clicked (used on mobile)
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Detect which section is currently visible and update activeSection.
  // This uses window.scrollY and the DOM to find section positions. It runs
  // on scroll and updates the highlighted link in the nav. The offset (-120)
  // accounts for the fixed header height so the correct section becomes active
  // when it appears below the header.
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

      // If near the top, mark "home" as active
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

      {/* Hamburger menu button: visible on small screens only (CSS controls visibility) */}
      <button
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation. When isMenuOpen is true the CSS 'open' class slides the menu in on mobile */}
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => {
                setActiveSection('home');
                handleNavClick();
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => {
                setActiveSection('about');
                handleNavClick();
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={() => {
                setActiveSection('projects');
                handleNavClick();
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Ndet0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => {
                setActiveSection('contact');
                handleNavClick();
              }}
            >
              Contact
            </a>
          </li>
          <li>
            {/* Social links select - open selected social in new tab */}
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
