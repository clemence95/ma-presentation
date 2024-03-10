// App.js

import React from 'react';
 // import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About'; // Assure-toi d'importer correctement le composant About depuis son emplacement
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez le fichier CSS de Bootstrap
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {/* Utilise <Routes> pour envelopper tes routes */}
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}


export default App;

