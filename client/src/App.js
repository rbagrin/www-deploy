import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import DomainVerification from './DomainVerification';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/.well-known/acme-challenge/6D94L5iYDuGgNmb0PEPODYBP6U2bLDUhLJu-EWozTY8">
            <DomainVerification />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
