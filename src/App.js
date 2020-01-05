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
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/social" component={Social} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
