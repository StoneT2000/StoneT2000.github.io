import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/base.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
