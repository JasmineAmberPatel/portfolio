import React from 'react';
import './styles/main.css';
import Home from './components/home';
import Navbar from './components/navbar';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
