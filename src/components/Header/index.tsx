import React from 'react';
import './index.css';
const Header = () => {
  return (
    <header className="Header">
      <ul>
        <a href="index.html" className="active">
          <li>Home</li>
        </a>
        <a href="projects.html">
          <li>Projects</li>
        </a>
        <a href="about.html">
          <li>About</li>
        </a>
        <a href="blog/index.html">
          <li>Blog</li>
        </a>
      </ul>
    </header>
  );
};
export default Header;
