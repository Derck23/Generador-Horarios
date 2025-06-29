import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="home-footer">
    <div className="footer-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
    </div>
    <div className="footer-copy">© 2025 Bit. Todos los derechos reservados.</div>
  </footer>
);

export default Footer;
