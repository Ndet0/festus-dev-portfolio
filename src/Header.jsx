
import './Header.css';
import { useState, useEffect, useCallback, useRef } from 'react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';

const NAV_LINKS = [
  { id: 'home', href: '#home', label: 'Home' },
  { id: 'about', href: '#about', label: 'About' },
  { id: 'projects', href: '#projects', label: 'Projects' },
  { id: 'skills', href: '#skills', label: 'Skills' },
  { id: 'events', href: '#events', label: 'Events' },
  { id: 'creator', href: '#creator', label: 'Creator' },
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
  const headerRef = useRef(null);
  const clickedSectionRef = useRef(null);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const handleNavClick = (section) => {
    clickedSectionRef.current = section;
    setActiveSection(section);
    closeMenu();
  };

  useEffect(() => {
    // Sort by document position, not nav order. The nav lists Projects
    // before Skills while the page renders Skills before Projects, so
    // iterating in nav order would highlight Skills while viewing Projects.
    const sections = NAV_LINKS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
      .sort((a, b) =>
        a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
          ? -1
          : 1,
      );

    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const updateActiveSection = () => {
      updateScrolled();

      const atPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      // The active item is the last section whose top has crossed
      // the fixed header's activation line.
      const activationLine = window.scrollY + HEADER_OFFSET + 20;
      let current = 'home';

      if (atPageBottom) {
        current = 'contact';
      } else {
        for (const section of sections) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          if (top <= activationLine) {
            current = section.id;
          }
        }
      }

      // After a nav click, keep the clicked link lit until the smooth
      // scroll actually reaches it instead of flashing through the
      // sections in between.
      const target = clickedSectionRef.current;
      if (target) {
        if (current !== target) return;
        clickedSectionRef.current = null;
      }

      setActiveSection(current);
    };

    // A manual scroll cancels the pending nav-click target so tracking
    // follows the user again.
    const releaseClickTarget = () => {
      clickedSectionRef.current = null;
    };

    // Listen immediately and after scrolling. The initial call ensures
    // the correct link is highlighted if the page loads at a hash URL.
    updateActiveSection();

    window.addEventListener('scroll', updateActiveSection, {
      passive: true,
    });
    window.addEventListener('resize', updateActiveSection);
    window.addEventListener('wheel', releaseClickTarget, { passive: true });
    window.addEventListener('touchstart', releaseClickTarget, {
      passive: true,
    });
    window.addEventListener('keydown', releaseClickTarget);

    const handleHashChange = () => {
      const targetId = window.location.hash.slice(1);
      if (NAV_LINKS.some((link) => link.id === targetId)) {
        clickedSectionRef.current = targetId;
        setActiveSection(targetId);
      }
      updateActiveSection();
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('wheel', releaseClickTarget);
      window.removeEventListener('touchstart', releaseClickTarget);
      window.removeEventListener('keydown', releaseClickTarget);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

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
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
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
    <header
      ref={headerRef}
      className={`header ${isScrolled ? 'scrolled' : ''}`}
    >
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
            clickedSectionRef.current = 'home';
            setActiveSection('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMenu();
          }}
        >
          Festus Kisoi
        </h1>

        <button
          type="button"
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
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
                  aria-current={
                    activeSection === link.id ? 'location' : undefined
                  }
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li className="nav-socials">
              {SOCIAL_LINKS.map((social) => {
                const SocialIcon = social.Icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="nav-icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    onClick={closeMenu}
                  >
                    <SocialIcon aria-hidden="true" />
                  </a>
                );
              })}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
