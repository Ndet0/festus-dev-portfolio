import './Header.css';
import { useState } from 'react';

function Header() {
  const [social, setSocial] = useState('');

  const handleSocialChange = (e) => {
    const url = e.target.value;
    if (url) window.open(url, '_blank');
  };

  return (
    <header className="header">
      <h1 className="logo">Festus Dev</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="https://github.com/Ndet0" target="_blank">GitHub</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <select
              className="social-select"
              value={social}
              onChange={handleSocialChange}
            >
              <option value="">Socials</option>
              <option value="https://www.instagram.com">Instagram</option>
              <option value="https://www.linkedin.com">LinkedIn</option>
              <option value="https://www.twitter.com">Twitter</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
