import React, { useState } from 'react';
import './index.css';
export type SidebarProps = {
  tabs: { name: string; href: string }[];
};
const Sidebar = ({ tabs }: SidebarProps) => {
  const [opacity, setOpacity] = useState(0);
  const handleMouseEnter = () => {
    setOpacity(1);
  };
  const handleMouseLeave = () => {
    setOpacity(0);
  };
  return (
    <div
      className="Sidebar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sidebars">
        {tabs.map((tab) => {
          return (
            <a
              className="bar-wrapper"
              href={'#' + tab.href}
              id="bar"
              key={tab.name}
            >
              <span style={{ opacity: opacity }}>{tab.name}</span>
              <div className="bar"></div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;
