import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/home/index';
import About from './views/about';
import Portfolio from './views/portfolio';
import Resume from './views/resume';
import Navigation from './components/nav';

function App() {
  return (  
    <>
    <Router>
    <Navigation />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
          <Route path="/" component={Home} />
        </Switch>
    </Router>
    </>
  );
}

export default App;