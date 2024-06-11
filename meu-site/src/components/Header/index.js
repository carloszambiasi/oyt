import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        Meu Logo
      </div>
      <button className="login-button">
        Login
      </button>
    </header>
  );
}

export default Header;
