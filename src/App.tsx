import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import './styles/base.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import ReactGA from 'react-ga';
function App() {
  const location = useLocation();
  const [initializedGA, setGa] = useState(false);
  useEffect(() => {
    ReactGA.initialize('UA-124803205-1');
    setGa(true);
  }, []);
  useEffect(() => {
    if (initializedGA) {
      ReactGA.pageview(location.pathname);
    }
  }, [initializedGA, location]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route
          exact
          strict
          path="/blog/posts/:postpath"
          component={(path: any) => {
            return <Redirect to={path.location.pathname} />;
          }}
        />
        <Route
          exact
          strict
          path="/blog/posts/:postpath/"
          component={BlogPostPage}
        />
      </Switch>
    </div>
  );
}

export default App;
