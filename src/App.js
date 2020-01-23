import React from 'react';
import './styles/main.scss';
import About from './components/about';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Social from './components/social';


function App() {
  return (
    <div className="app">
      <About />
      <Projects />
      <Social />
    </div>
  );
}

export default App;
