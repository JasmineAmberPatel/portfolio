import React from 'react';
import './styles/main.css';
import About from './components/about';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Social from './components/social';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Projects />
      <Social />
    </div>

  );
}

export default App;
