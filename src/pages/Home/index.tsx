import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import WorkModule from '../../components/WorkModule';
import AwardModule from '../../components/AwardModule';
import DefaultLayout from '../layouts/DefaultLayout';
import Sidebar from '../../components/Sidebar';
import { Helmet } from 'react-helmet';
import './index.css';
import work from './work.json';
import news from './news.json';
import logo from './logo.png';
import { ProjectsData } from '../../data/projects';
import { awards } from './awards';
import { data as publications } from './publications';
import { data as presentations } from './presentations';
const Home = () => {
  const projects = [
    ProjectsData['robojax'],
    ProjectsData['luxai1'],
    ProjectsData['polytomizator'],
  ];

  const works = work.data;

  const tabs = [
    { name: 'Home', href: 'heading' },
    { name: 'News', href: 'news-a' },
    { name: 'Publications', href: 'publications-a' },
    { name: 'Presentations/Talks', href: 'presentations-a' },
    { name: 'Projects', href: 'projects-a' },
    { name: 'Work Experience', href: 'work-a' },
    { name: 'Awards', href: 'awards-a' },
  ];
  return (
    <>
      <Sidebar tabs={tabs} />
      <DefaultLayout page="Home">
        <Helmet>
          <title>Stone Tao</title>
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
            I am an incoming PhD student at UC San Diego, where I will be
            advised by professor{' '}
            <a href="https://cseweb.ucsd.edu/~haosu/">Hao Su</a>. I'm grateful
            to have my research be funded by the{' '}
            <a href="https://www.nsfgrfp.org/">
              NSF Graduate Research Fellowship
            </a>
            .
          </p>
          <p>
            My current research interests revolve around a general goal of building
            efficient, adaptable, and capable embodied AI. A big chunk of my direction is around scalable datasets/benchmarks for robotics and games. To this end, my
            research revolves around reinforcement learning, environment design, few-shot learning,
            imitation learning, auto curriculum-learning, as well as high-quality robotics/game benchmarks. If you are interested in working with me / just want to chat about stuff feel free to reach out to my email / twitter!
          </p>
          <p>
            On the side, I'm also interested in building and running
            high-quality open-source AI competitions for education and research.
            I co-founded the <a href="https://lux-ai.org">Lux AI Challenge</a>{' '}
            and collaborate frequently with <a href="https://kaggle.com/">Kaggle</a> to build and
            deliver these AI competitions.
          </p>
          <p>
            Previously I was an undergraduate at UC San Diego, advised by{' '}
            <a href="https://cseweb.ucsd.edu/~haosu/">Hao Su</a> (on robotics
            and reinforcement learning) and{' '}
            <a href="https://spdow.ucsd.edu/">Steven Dow</a> (on AI x HCI).
            During my undergraduate I interned at{' '}
            <a target="blank" href="https://quantco.com/">
              QuantCo
            </a>{' '}
            (machine learning) advised by <a href="https://tbenthompson.com/">Ben Thompson</a> and{' '}
            <a target="blank" href="https://launchdarkly.com/">
              LaunchDarkly
            </a>{' '}
            (full-stack software engineering).
          </p>
          <div className="anchor" id="news-a" />
          <h2 style={{marginBottom: 0}}>News</h2>
          <ul style={{marginTop: "0.5rem"}}>
          {
            news.data.map((v) => {
              return <li>{v.date}: <span dangerouslySetInnerHTML={{__html: v.content}}></span></li>
            })
          }
          </ul>
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
                    <i>{publication.venue}</i>
                  </p>
                  <p>
                    {publication.link === 'TBA' ? (
                      ""
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
              return (
                <div>
                  <p>
                    <strong>{data.title}</strong>
                    <br />
                    {data.venue}, {data.date}
                    <br />
                    {}
                    {data.slides && (
                      <a target="_blank" rel="noreferrer" href={data.slides}>
                        Slides
                      </a>
                    )}
                    {data.recording && (
                      <a target="_blank" rel="noreferrer" href={data.recording}>
                        Recording
                      </a>
                    )}
                  </p>
                </div>
              );
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
