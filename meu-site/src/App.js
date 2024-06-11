import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthChange = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <div className="App">
      <Header onAuthChange={handleAuthChange} />
      <main>
        <h1>Bem-vindo ao Meu Site</h1>
        {isAuthenticated ? (
          <p>Você está logado!</p>
        ) : (
          <p>Por favor, faça login ou cadastre-se.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
