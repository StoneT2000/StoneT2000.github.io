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
import { data as publications } from './publications';
import {data as presentations} from './presentations'
const Home = () => {
  const projects = [
    ProjectsData['robojax'],
    ProjectsData['luxai1'],
    ProjectsData['polytomizator'],
  ];

  const works = work.data;

  const tabs = [
    { name: 'Home', href: 'heading' },
    { name: 'Publications', href: 'publications-a' },
    { name: 'Presentations/Talks', href:'presentations-a'},
    { name: 'Projects', href: 'projects-a' },
    { name: 'Work Experience', href: 'work-a' },
    { name: 'Awards', href: 'awards-a' },
  ];
  return (
    <>
      <Sidebar tabs={tabs} />
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
            reinforcement learning, robotics, and tree learners. I'm
            particularly interested in finding ways to more efficiently utilize
            data as well as generate more/better data for reinforcement
            learning to solve difficult tasks. To this end, my research has revolved around various RL problems including few-shot learning, imitation learning, finding good abstractions of the world, as well as work towards building high-quality competitions and benchmarks to garner more research and data collection for different domains.
          </p>
          <p>Currently I conduct
            reinforcement learning and robotics research at UCSD supervised by{' '}
            <a href="https://cseweb.ucsd.edu/~haosu/">Hao Su</a> and AI x HCI
            research supervised by{' '}
            <a href="https://spdow.ucsd.edu/">Steven Dow</a>. I also co-founded
            the <a href="https://lux-ai.org">Lux AI Challenge</a>, which aims to
            build creative, inclusive, and accessible AI competitions and
            environments for all, as well as provide a high quality benchmark
            for massive multi-agent RL. Previously was a Machine Learning Engineer Intern at{' '}
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
            2023.
          </p>
          <div className="anchor" id="publications-a" />
          <h2>Publications / Preprints</h2>
          {publications.map((publication: any) => {
            let bolded = publication.authors;
            bolded = bolded.replace('Stone Tao', '<strong>Stone Tao</strong>');
            return (
              <div className="publication" key={publication.title}>
                <div
                  style={{ textAlign: 'center' }}
                  className="publication-image"
                >
                  {publication.image ? (
                    <img
                      alt={`thumbnail for ${publication.title}`}
                      src={publication.image}
                    ></img>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="publication-details">
                  <p>
                  <strong>
                    {publication.link === 'TBA' ? (
                      publication.title
                    ) : (
                      <a href={publication.link}>{publication.title}</a>
                    )}
                    </strong>
                  </p>
                  <p dangerouslySetInnerHTML={{ __html: bolded }}></p>
                  <p>
                    <i>
                      {publication.venue}
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
          <div className="anchor" id="presentations-a" />
          <h2>Presentations / Talks</h2>
          <div className="presentations">
          {presentations.map((data) => {
            return <div>
              <p><strong>{data.title}</strong>
              <br />
              {data.venue}, {data.date}
              <br/>
              {}{data.slides && <a  target="_blank" rel="noreferrer" href={data.slides}>Slides</a>}
              </p>
              </div>
          })}
          </div>
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
