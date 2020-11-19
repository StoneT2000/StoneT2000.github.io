import React, { useEffect, useState } from 'react';
import ProjectCard, { ProjectCardProps } from '../../components/ProjectCard';
import DefaultLayout from '../layouts/DefaultLayout';
import Sidebar from '../../components/Sidebar';
import './index.css';
const Projects = () => {
  const [checked, setChecked] = useState({
    useful: true,
    useless: true,
    ai: true,
  });

  const projects = [
    {
      title: 'Dimensions',
      time: '2020/04',
      thumbnail: 'assets/dim-thumb.gif',
      thumbnailAltText:
        'Dimensions framework running a rock paper scissors tournament',
      text: `A <strong>Generalized Artificial Intelligence Competition Framework</strong>. This framework gives you the
      power to easily design your own AI competition and let your <strong>creativity</strong> run free. The
      framework handles the rest. Dimensions makes it easy for people to write AIs of any language to compete in
      your design as well`,
      link: 'https://github.com/StoneT2000/Dimensions/',
      tags: ['useful', 'typescript', 'ai'],
    },
    {
      title: 'IgushArray - Java',
      time: '2019/09',
      thumbnail: 'assets/igusharrayidea.png',
      thumbnailAltText: 'Concept of the IgushArray',
      text: `I developed the first Java version of the IgushArray, which allows <strong>O(1)</strong> access and has all
      the same time complexities of a normal array or Java's ArrayList, but is much faster as it also allows
      <strong>O(n^1/2)</strong> insertion and removal.`,
      link: 'https://github.com/StoneT2000/IgushArray-Java',
      tags: ['useful', 'java'],
    },
    {
      title: 'AI Visuals',
      time: '2019/02',
      thumbnail: 'assets/aivisuals.png',
      thumbnailAltText: 'Home page of AI Visuals',
      text: `This is a personal project that is a website that helps visualize machine learning at work with Google's TensorFlow.js or just raw JavaScript through various webapps`,
      link: 'https://github.com/StoneT2000/IgushArray-Java',
      tags: ['useful', 'tensorflow', 'js', 'ai'],
    },
    {
      title: 'Polytomizator',
      time: '2018/07',
      thumbnail: 'assets/GreatWave22MP1MB.jpg',
      thumbnailAltText:
        'Dimensions framework running a rock paper scissors tournament',
      text: `This is a website that auto generates poly art. It makes use of Delaunay triangulation, image filtering,
      computer vision techniques, and Poisson disk sampling to help auto-generate better low-poly art.`,
      link: 'https://github.com/StoneT2000/Polytomizator',
      tags: ['useful', 'p5js', 'js', 'htmlcss', 'ai'],
    },
    {
      title: 'Cut Bread',
      time: '2018/07',
      thumbnail: 'assets/cutbread.png',
      thumbnailAltText: 'Cutting Bread',
      text: `<p>A whimsical site about cutting bread. Yep, it's literally about cutting bread and looking at how evenly you can cut it.</p>`,
      link: 'https://stonet2000.github.io/Cut-Bread',
      tags: ['useless', 'p5js', 'js', 'htmlcss'],
    },
  ];

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
