import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import Sidebar from '../../components/Sidebar';
import './index.css';
import { Helmet } from 'react-helmet';
const About = () => {
  const tabs = [
    { name: 'About', href: 'brief-a' },
    { name: 'Education', href: 'education-a' },
  ];
  return (
    <>
      <Sidebar tabs={tabs} />
      <DefaultLayout page="About">
        <Helmet>
          <title>About Stone Tao</title>
          <meta
            name="description"
            content="Stone Tao's about page, covering education, interests, and various other details"
          />
        </Helmet>
        <div className="About">
          <h1 id="brief-a">About Me</h1>
          <div id="brief">
            <p>
              I'm currently an undergraduate student studying Computer Science
              and Cognitive Science at{' '}
              <a href="https://www.ucsd.edu" target="blank">
                UCSD
              </a>
              , class of 2023. I'm interested in AI, Reinforcement Learning, and
              HCI. I love building AI competitions and environments,{' '}
              <a href="https://stonet2000.github.io/Cut-Bread/" target="blank">
                some useless websites
              </a>
              , and <a href="/projects">more creations</a>. Currently
              researching RL at the{' '}
              <a
                href="https://cseweb.ucsd.edu/~haosu/"
                target="_blank"
                rel="noreferrer"
              >
                SU Lab
              </a>{' '}
              and the intersection of AI and HCI at the{' '}
              <a
                href="http://protolab.ucsd.edu/"
                target="_blank"
                rel="noreferrer"
              >
                ProtoLabs
              </a>
              . Also you can{' '}
              <a href="/files/Stone%20Tao%20-%20Resume.pdf" target="blank">
                view my resume here
              </a>
            </p>
            <p>
              I co-founded and currently run the{' '}
              <a href="https://lux-ai.org" target="blank">
                Lux AI Challenge
              </a>{' '}
              with <a href="https://bovard.dev/">Bovard</a>, Isa Pan, and Andrew
              Mou
            </p>
            <p>
              In Data Science and AI, I'm experienced with Tensorflow, PyTorch, Jax, scikit-learn, OpenAI Gym, and various other tools. For domains I'm experienced and interested in Computer Vision, Reinforcement Learning, GANs, Decision Trees,
              and Clustering Algorithms
            </p>
            <p>
              In Web Development and Software Engineering, I'm experienced with
              Node.js, React.js, MongoDB, Express.js to list a few
            </p>
            <p>
              I also founded and run the{' '}
              <a href="https://ai.acmucsd.com" target="blank">
                AI club at UCSD
              </a>
              , helping run competitions, reach out to high schools, and run
              workshops on AI topics and programming
            </p>
          </div>
          <h1 id="education-a">Education</h1>
          <div id="education">
            <div>
              <h3>
                Undergraduate:{' '}
                <a href="https://www.ucsd.edu" target="blank">
                  University of California San Diego
                </a>
              </h3>
              <aside>GPA: 3.98/4.0</aside>
              <aside>
                Provost Honors List. Member of Tau Beta Pi Honors Engineering
                Society
              </aside>
              <p>
                Computer Science and Cognitive Science (ML specialization)
                Double Major. Class of 2023
              </p>
              <p>Selected Courses Taken:</p>
              <ul>
                <li>
                  AI / Data Science: CSE 291-I - ML Meets Geometry (Graduate
                  CV), CSE 152 - Intro to Computer vision, COGS 108 - Data
                  Science in Practice, COGS 118A - Supervised ML Algorithms
                </li>
                <li>
                  Math: MATH 31AH - Honors Linear Algebra, MATH 31BH - Honors
                  Multivariable Calculus, MATH 31CH - Honors Vector Calculus,
                  CSE 20 & CSE 21 - Discrete Math, MATH 180A & MATH 181A -
                  Intro. to Probability and Statistics
                </li>
                <li>
                  Computer Science: CSE 100 - Advanced Data Structures, CSE 101
                  - Design and Analsis of Algorithms, CSE 30 - Computer
                  Organization and Systems Programming, CSE 110 - Software
                  Engineering
                </li>
                <li>
                  Cognitive Science: COGS 14A & 14B - Research Methods in
                  Cognitive Science, COGS 17 - Neurobiology of Cognition
                </li>
              </ul>
            </div>
            <div>
              <h3>
                High school:{' '}
                <a href="https://www.isb.bj.edu.cn/" target="blank">
                  The International School of Beijing
                </a>
              </h3>
              <p>Class of 2019</p>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};
export default About;
