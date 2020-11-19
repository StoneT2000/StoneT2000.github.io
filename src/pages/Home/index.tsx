import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import WorkModule from '../../components/WorkModule';
import AwardModule from '../../components/AwardModule';
import DefaultLayout from '../layouts/DefaultLayout';
import './index.css';
import logo from './logo.png';
const Home = () => {
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
      tags: ['interesting', 'useful', 'typescript'],
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
      tags: ['interesting', 'useful', 'java'],
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
      tags: ['interesting', 'useful', 'p5js', 'js', 'htmlcss'],
    },
  ];

  const works = [
    {
      link: 'http://protolab.ucsd.edu',
      org: 'ProtoLab / Design Lab',
      start: '2020/08',
      end: null,
      location: 'San Diego, USA',
      details: [
        `Currently researching at the intersection of HCI and AI.
      Specifically looking at how to encourage more positive results from
      AI models and increase trust in data and predictions through humans
      in ML, crowdsourcing and more.`,
        `Working under Steven Dow and Brian McInnis`,
      ],
      role: 'Undegraduate Researcher',
      logoImage: 'assets/dlab.jpg',
    },
    {
      link: 'https://launchdarkly.com/',
      org: 'LaunchDarkly',
      start: '2020/06',
      end: '2020/09',
      location: 'Oakland, USA',
      details: [
        `Part of the full stack team Squad Oinx. Worked on feature workflows and semantic patches to enable state independent scheduling of feature flagging as well as a new approval review system for feature flagging, allowing users to release complex features with confidence`,
        `Developed REST API with Go for backend and React + Typescript for frontend`,
      ],
      role: 'Software Engineering Intern',
      logoImage: 'assets/ld.png',
    },
    {
      link: 'https://www.taosdata.com/en/',
      org: 'TAOS Data',
      start: '2020/06',
      end: '2020/09',
      location: 'Oakland, USA',
      details: [
        `Independently developed the company website and integrated Wordpress as a headless CMS, serving up to
        18k+ daily users`,
        `Developed a Node.js Connector for the company’s main product, TDengine, an open source big data
        platform with 11000+ stars`,
        `Created a C interface, to enable high-speed interaction with TDengine. Implemented subscription,
        async, and stream functionality`,
      ],
      role: 'Full Stack Developer Intern',
      logoImage: 'assets/taosdata.png',
    },
  ];

  const awards = [
    {
      details: `<p>
      MIT Battlecode 2020 | Finalist, 5th overall, top soloist (Competed in
      Java) – Jan. 2020 |
      <a href="https://github.com/StoneT2000/Battlecode2020/" target="blank">
        Bot Code
      </a>
      | <a href="https://stonet2000.github.io/battlecode/2020">Post Mortem</a>
    </p>
    <p>
      MIT Battlecode 2019 | Finalist, 9th overall, 4th out of high school
      teams (Competed in JS) – Jan. 2019 |
      <a href="https://github.com/StoneT2000/BC19/" target="blank">
        Bot Code
      </a>
    </p>`,
      link: 'http://battlecode.org/',
      title: 'MIT Battlecode (AI Competition)',
    },
    {
      title: 'Halite AI Competition',
      link: 'https://halite.io/',
      details: `<p>Halite 3 | Placed 66th out of 4000+ students and professionals globally. Achieved admiral status by placing above Two Sigma’s base bot. 5th placed high school student out of 500+ HS students. 1st place JavaScript bot. – Nov. 2018 to Jan. 2019</p>`,
    },
    {
      title: 'IEEE at UCSD Quarterly Projects++',
      link: null,
      details: `<p>Placed 1st with my team. Collaborated on building an IoT personal farm with auto-irrigation and time series data collection, aimed at improving the user feedback on plant growth. Contributed on database work, data integration with hardware, and data visualizers</p>`,
    },
    {
      title: 'USA Mathematical Talent Search',
      link: 'https://usamts.org/',
      details: `<p>Silver Medal - May 2018</p>`,
    },
  ];

  return (
    <DefaultLayout>
      <div className="Home">
        <h1 id="heading">
          Stone Tao{' '}
          <img src={logo} width="50px" height="50px" id="logo" alt="logo" />
        </h1>
        <p id="first-links">
          <div>
            GitHub: <a href="https://www.github.com/stonet2000">StoneT2000</a>
          </div>
          <div>
            Email:{' '}
            <a href="mailto:stonezt2019@gmail.com ">stonezt2019@gmail.com </a>
          </div>
          <div>
            Resume: <a href="resume.html">Online</a> |{' '}
            <a href="files/Stone%20Tao%20-%20Resume.pdf">PDF</a>
          </div>
        </p>
        <p>
          Computer Science and Cognitive Science major at{' '}
          <a href="https://www.ucsd.edu/">UC San Diego</a>, class of 2023
        </p>
        <p>
          I love AI and design. Currently developing fun AI competitions and
          researching at the intersection of HCI and AI. Check out my{' '}
          <a href="projects.html">Projects</a>, <a href="#work-a">Experience</a>
          , <a href="about.html">About Me</a>, or <a href="#awards-a">Awards</a>
          . <a href="resume.html">View my resume</a> or{' '}
          <a href="files/Stone%20Tao%20-%20Resume.pdf">
            download a pdf version
          </a>
        </p>
        <div className="anchor" id="projects-a" />
        <h2>Pinned Projects</h2>
        <div className="projects">
          {projects.map((project) => (
            <ProjectCard {...project} />
          ))}
        </div>
        <div className="anchor" id="work-a" />
        <h2>Experience</h2>
        <div>
          {works.map((work) => (
            <WorkModule {...work} />
          ))}
        </div>
        <div className="anchor" id="awards-a" />
        <h2>Awards</h2>
        <div>
          {awards.map((award) => (
            <AwardModule {...award} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Home;
