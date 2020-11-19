import React, { useState } from 'react';
import './index.css';
type HeaderProps = {
  active: string;
};
const Header = ({ active }: HeaderProps) => {
  const [shadow, setShadow] = useState('');
  window.onscroll = function () {
    if (window.pageYOffset > 135) {
      setShadow('shadow');
      // $('.active').css('border-bottom', '4px solid #fefefe');
      //@ts-ignore
      document.getElementsByClassName('active')[0].style.borderBottomColor =
        '#fefefe';
    } else {
      setShadow('');
      //@ts-ignore
      document.getElementsByClassName('active')[0].style.borderBottomColor = '';
    }
  };
  return (
    <header className={`Header ${shadow}`}>
      <ul>
        <a href="/" className={active === 'Home' ? 'active' : ''}>
          <li>Home</li>
        </a>
        <a href="/projects" className={active === 'Projects' ? 'active' : ''}>
          <li>Projects</li>
        </a>
        <a href="/about" className={active === 'About' ? 'active' : ''}>
          <li>About</li>
        </a>
        <a href="/blog/" className={active === 'Blog' ? 'active' : ''}>
          <li>Blog</li>
        </a>
      </ul>
    </header>
  );
};
export default Header;
