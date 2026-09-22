import './Header.css';
import { useState, useEffect, useCallback, useRef } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const NAV_LINKS = [
  { id: 'home', href: '#home', label: 'Home' },
  { id: 'projects', href: '#projects', label: 'Projects' },
  { id: 'skills', href: '#skills', label: 'Skills' },
  { id: 'contact', href: '#contact', label: 'Contact' },
];

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Ndet0',
    Icon: FaGithub,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/livelike_ndet.o?igsh=aDIwb3g2eTNpZjRp&utm_source=qr',
    Icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/festus-ndeto-500227262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    Icon: FaLinkedin,
  },
  {
    label: 'X',
    href: 'https://x.com/livelike_ndeto?s=21',
    Icon: FaXTwitter,
  },
];

const HEADER_OFFSET = 88;

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollTime = useRef(0);
  const headerRef = useRef(null);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    closeMenu();
  };

  const handleScroll = useCallback(() => {
    const now = Date.now();
    if (now - lastScrollTime.current < 100) return;
    lastScrollTime.current = now;

    setIsScrolled(window.scrollY > 50);

    let current = 'home';
    for (const { id } of NAV_LINKS) {
      const section = document.getElementById(id);
      if (!section) continue;
      if (window.scrollY >= section.offsetTop - HEADER_OFFSET) {
        current = id;
      }
    }

    if (window.scrollY < 100) {
      current = 'home';
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const { body, documentElement } = document;

    if (!isMenuOpen) {
      body.style.overflow = '';
      documentElement.style.overflow = '';
      return undefined;
    }

    body.style.overflow = 'hidden';
    documentElement.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };

    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      body.style.overflow = '';
      documentElement.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isMenuOpen, closeMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [closeMenu]);

  return (
    <header ref={headerRef} className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {isMenuOpen && (
        <div
          className="nav-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <div className="header-container">
        <h1
          className="logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMenu();
          }}
        >
          Festus Dev
        </h1>

        <button
          type="button"
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
        >
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={activeSection === link.id ? 'active' : ''}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-socials">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="nav-icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  onClick={closeMenu}
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
