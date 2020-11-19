import React from 'react';
import CodeCircles from '../CodeCircles';
import './index.css';
export type ProjectCardProps = {
  title: string;
  link: string;
  time: string;
  thumbnail: string;
  thumbnailAltText: string;
  text: string;
  tags: string[];
};
const ProjectCard = (project: ProjectCardProps) => {
  return (
    <div className="ProjectCard">
      <a
        target="blank"
        href={project.link}
        className={`project ${project.tags.join(' ')}`}
      >
        <h3>{project.title}</h3>
        <time>{project.time}</time>
        <CodeCircles types={project.tags} />
        <img src={project.thumbnail} alt={project.thumbnailAltText} />
        <p dangerouslySetInnerHTML={{ __html: project.text }} />
      </a>
    </div>
  );
};
export default ProjectCard;
