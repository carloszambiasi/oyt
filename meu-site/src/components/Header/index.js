import React, { useState } from 'react';
import './Header.css';
import AuthModal from '../Modal';

const Header = ({ onAuthChange }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleLoginSuccess = () => {
    setModalIsOpen(false);
    onAuthChange(true);
  };

  return (
    <header className="header">
      <div className="logo">
        Meu Logo
      </div>
      <button className="login-button" onClick={() => setModalIsOpen(true)}>
        Login
      </button>
      <AuthModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </header>
  );
}

export default Header;
