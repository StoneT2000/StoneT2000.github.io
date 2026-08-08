import { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import './styles/base.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
// import Blog from './pages/Blog';
// import BlogPostPage from './pages/BlogPostPage';

/**
 * Top-level app shell: routes pages and records SPA pageviews in GA4.
 *
 * @returns Routed application tree.
 */
function App() {
  const location = useLocation();
  const [initializedGA, setGa] = useState(false);

  useEffect(() => {
    // Legacy UA property; GA4 will no-op until a G- measurement ID is set.
    ReactGA.initialize('UA-124803205-1');
    setGa(true);
  }, []);

  useEffect(() => {
    if (initializedGA) {
      ReactGA.send({ hitType: 'pageview', page: location.pathname });
    }
  }, [initializedGA, location]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        {/* <Route exact path="/about" component={About} /> */}
        {/* <Route exact path="/blog" component={Blog} /> */}
        <Route
          path="/blog"
          component={() => {
            window.location.href = `https://stoneztao.substack.com/`;
            return null;
          }}
        />
        {/* <Route
          exact
          strict
          path="/blog/posts/:postpath"
          component={(path: any) => {
            let newp = path.location.pathname;
            if (path.location.pathname[-1] !== '/') {
              newp += '/';
            }
            return <Redirect to={newp} />;
          }}
        />
        <Route
          exact
          strict
          path="/blog/posts/:postpath/"
          component={BlogPostPage}
        /> */}
      </Switch>
    </div>
  );
}

export default App;
