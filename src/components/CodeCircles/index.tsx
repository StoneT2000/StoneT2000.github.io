import React from 'react';
import './index.css';
type CodeCirclesProps = {
  types: string[];
};
const CodeCircles = ({ types }: CodeCirclesProps) => {
  const colors: Record<string, string> = {
    css: '#563d7c',
    java: '#b07219',
    html: '#e34c26',
    js: '#f1e05a',
    p5js: '#ed225d',
    tensorflow: '#ff6f00',
    htmlcss: '#85425F',
    typescript: '#2b7489',
    react: '#61dafb',
  };
  const names: Record<string, string> = {
    css: 'CSS',
    java: 'Java',
    typescript: 'Typescript',
    react: 'React',
    js: 'JS',
    tensorflow: 'TensorFlow',
    p5js: 'p5.js',
    html: 'HTML',
    htmlcss: 'HTML & CSS',
  };
  return (
    <span className="CodeCircles">
      {types
        .filter((type) => colors[type])
        .map((type) => {
          return [
            <div
              key={type}
              className="code-circle"
              style={{ backgroundColor: colors[type] }}
            ></div>,
            <span className="code-circle-def" key={`${type}-s`}>
              {names[type]}
            </span>,
          ];
        })}
    </span>
  );
};
export default CodeCircles;
