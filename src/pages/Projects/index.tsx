import React, { useEffect, useState } from 'react';
import ProjectCard, { ProjectCardProps } from '../../components/ProjectCard';
import DefaultLayout from '../layouts/DefaultLayout';
import Sidebar from '../../components/Sidebar';
import './index.css';
import { Helmet } from 'react-helmet';
import { ProjectsData } from '../../data/projects';
const Projects = () => {
  const [checked, setChecked] = useState({
    useful: true,
    useless: true,
    ai: true,
  });

  const projects = Object.values(ProjectsData);

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newcheck = { ...checked };
    //@ts-ignore
    newcheck[e.target.id] = e.target.checked;
    setChecked(newcheck);
  };

  const [filteredProjects, setFilteredProjects] = useState<ProjectCardProps[]>(
    []
  );
  useEffect(() => {
    const filtered = projects.filter((project) => {
      let a = project.tags.some((v) => {
        //@ts-ignore
        return checked[v] !== undefined && checked[v] === true;
      });
      return a;
    });
    setFilteredProjects(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);
  const tabs = [{ name: 'Projects', href: 'projects-a' }];
  return (
    <>
      <Sidebar tabs={tabs} />,
      <DefaultLayout page="Projects">
        <Helmet>
          <title>Stone Tao's Projects</title>
          <meta
            name="description"
            content="Stone Tao's page of projects on AI, cool software, and useless stuff like a site about cutting bread"
          />
        </Helmet>
        <div className="Projects">
          <div className="anchor" id="projects-a" />
          <h1>Projects</h1>
          <p>
            I make a range of things, from useful to useless. So, that's why
            there's a filter below to help you find what you seek!
          </p>
          <div className="checkbox">
            <input
              type="checkbox"
              id="ai"
              defaultChecked
              onChange={handleCheckChange}
            />
            <label htmlFor="ai">AI</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="useful"
              onChange={handleCheckChange}
              defaultChecked
            />
            <label htmlFor="useful">Useful</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="useless"
              onChange={handleCheckChange}
              defaultChecked
            />
            <label htmlFor="useless">Useless</label>
          </div>
          <div className="projects">
            {filteredProjects.map((project) => (
              <ProjectCard {...project} key={project.title} />
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};
export default Projects;
