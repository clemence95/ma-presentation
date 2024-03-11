import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import Home from './components/Home';
import Exercices from './components/Exercices';
import Api from './components/Api';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/exercices" element={<Exercices />} />
            <Route path="/api" element={<Api />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

