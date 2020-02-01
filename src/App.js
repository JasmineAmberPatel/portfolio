import React from 'react';
import './styles/main.scss';
import About from './components/about';
import Projects from './components/projects';
import Social from './components/social';

function App() {
    return (
      <div className="App">
        <About />
        <Projects />
        <Social />
      </div>
    );
}


export default App;
