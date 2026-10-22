import './Footer.css';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa6';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#events', label: 'Events' },
  { href: '#contact', label: 'Contact' },
];

const SOCIALS = [
  { href: 'mailto:festuskisoi@gmail.com', label: 'Email', Icon: FaEnvelope },
  { href: 'https://github.com/Ndet0', label: 'GitHub', Icon: FaGithub },
  { href: 'https://www.linkedin.com/in/festus-ndeto-500227262', label: 'LinkedIn', Icon: FaLinkedin },
  { href: 'https://x.com/livelike_ndeto?s=21', label: 'X', Icon: FaXTwitter },
  { href: 'https://www.instagram.com/livelike_ndet.o', label: 'Instagram', Icon: FaInstagram },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-name">Festus Kisoi</p>
          <p className="footer-tag">
            Backend-focused full-stack engineer, Nairobi.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="footer-socials" aria-label="Social links">
          {SOCIALS.map((social) => {
            const SocialIcon = social.Icon;
            const external = social.href.startsWith('http');
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  title={social.label}
                >
                  <SocialIcon aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="container footer-bottom">
        <p className="mono">© {year} Festus Kisoi. All rights reserved.</p>
        <p className="mono">Built with React + Vite · Hosted on Netlify</p>
      </div>
    </footer>
  );
}

export default Footer;
