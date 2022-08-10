import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import WorkModule from '../../components/WorkModule';
import AwardModule from '../../components/AwardModule';
import DefaultLayout from '../layouts/DefaultLayout';
import Sidebar from '../../components/Sidebar';
import { Helmet } from 'react-helmet';
import './index.css';
import work from './work.json';
import logo from './logo.png';
import { ProjectsData } from '../../data/projects';
import { awards } from './awards';
import publication from './publications.json';
const Home = () => {
  const publications = publication.data;
  const projects = [
    ProjectsData['luxai'],
    ProjectsData['rl-ts'],
    ProjectsData['polytomizator'],
  ];

  const works = work.data;

  const tabs = [
    { name: 'Home', href: 'heading' },
    { name: 'Publications', href: 'publications-a' },
    { name: 'Projects', href: 'projects-a' },
    { name: 'Work Experience', href: 'work-a' },
    { name: 'Awards', href: 'awards-a' },
  ];
  return (
    <>
      <Sidebar tabs={tabs} />,
      <DefaultLayout page="Home">
        <Helmet>
          <title>Stone Tao's Website</title>
          <meta
            name="description"
            content="Stone Tao's personal website with his CV, research, projects, and blog"
          />
        </Helmet>
        <div className="Home">
          <h1 id="heading">
            Stone Tao{' '}
            <img src={logo} width="50px" height="50px" id="logo" alt="logo" />
          </h1>
          <div id="first-links">
            <p>
              <a href="files/Stone_Tao_CV.pdf">CV</a> /{' '}
              <a href="https://scholar.google.com/citations?user=GAMO0EwAAAAJ&hl=en">
                Google Scholar
              </a>{' '}
              / <a href="https://www.github.com/stonet2000">GitHub</a> /{' '}
              <a href="https://twitter.com/Stone_Tao">Twitter</a> /{' '}
              <a href="mailto:stonezt2019@gmail.com ">Email</a>
            </p>
          </div>
          <p>
            I am an AI researcher and my primary research interests are in
            reinforcement learning, robotics, and tree learners. I'm currently
            conducting reinforcement learning and robotics research at UCSD
            supervised by <a href="https://cseweb.ucsd.edu/~haosu/">Hao Su</a>{' '}
            and AI x HCI research supervised by{' '}
            <a href="https://spdow.ucsd.edu/">Steven Dow</a>. I also co-founded
            the <a href="https://lux-ai.org">Lux AI Challenge</a>, which aims to
            build creative, inclusive, and accessible AI competitions and
            environments for all, as well as provide a high quality benchmark
            for massive multi-agent RL.
          </p>
          <p>
            I previously was a Machine Learning Engineer Intern at{' '}
            <a target="blank" href="https://quantco.com/">
              QuantCo
            </a>{' '}
            and interned at{' '}
            <a target="blank" href="https://launchdarkly.com/">
              LaunchDarkly
            </a>
            .
          </p>
          <p>
            I'm currently an undergraduate Computer Science and Cognitive
            Science double major, Math minor, at{' '}
            <a href="https://www.ucsd.edu/">UC San Diego</a>, graduating June
            2023. I'm currently applying to Ph.D. programs for Fall 2023,
            looking to continue learning and researching in AI with interests in
            reinforcement learning.
          </p>
          <div className="anchor" id="publications-a" />
          <h2>Publications</h2>
          {publications.map((publication: any) => {
            let bolded = publication.authors;
            bolded = bolded.replace('Stone Tao', '<strong>Stone Tao</strong>');
            return (
              <div className="publication" key={publication.title}>
                <div style={{textAlign: "center"}} className="publication-image">
                  <img
                    
                    src={publication.image}
                  ></img>
                </div>
                <div className="publication-details">
                  <p>
                    {publication.link === 'TBA' ? (
                      publication.title
                    ) : (
                      <a href={publication.link}>{publication.title}</a>
                    )}
                  </p>
                  <p dangerouslySetInnerHTML={{ __html: bolded }}></p>
                  <p>
                    <i>
                      {publication.venue}, {publication.year}
                    </i>
                  </p>
                  <p>
                    {publication.link === 'TBA' ? (
                      publication.link
                    ) : (
                      <a href={publication.link}>arXiv</a>
                    )}{' '}
                    {publication.projectpage && (
                      <>
                        {publication.projectpage !== 'TBA' && (
                          <>
                            / <a href={publication.projectpage}>project page</a>
                          </>
                        )}{' '}
                      </>
                    )}
                    {publication.code && (
                      <>
                        {publication.code !== 'TBA' && (
                          <>
                            / <a href={publication.code}>code</a>{' '}
                          </>
                        )}
                      </>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="anchor" id="projects-a" />
          <h2>Pinned Projects</h2>
          <div className="projects">
            {projects.map((project) => (
              <ProjectCard {...project} key={project.title} />
            ))}
          </div>
          <div className="anchor" id="work-a" />
          <h2>Work Experience</h2>
          <div>
            {works.map((work) => (
              <WorkModule {...work} key={work.org} />
            ))}
          </div>
          <div className="anchor" id="awards-a" />
          <h2>Awards</h2>
          <div>
            {awards.map((award) => (
              <AwardModule {...award} key={award.title} />
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};
export default Home;
