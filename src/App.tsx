import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/base.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/posts/:postpath" component={BlogPostPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
