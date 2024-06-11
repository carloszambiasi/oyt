import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        Contato: contato@meusite.com
      </div>
      <div className="social-links">
        <a href="https://instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://twitch.tv/seu-perfil" target="_blank" rel="noopener noreferrer">
          Twitch
        </a>
      </div>
    </footer>
  );
}

export default Footer;
