import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Bem-vindo ao Meu Site</h1>
        {/* Conteúdo principal do seu site */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
