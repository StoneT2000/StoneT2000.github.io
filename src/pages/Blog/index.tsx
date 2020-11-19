import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import Sidebar from '../../components/Sidebar';
import './index.css';
const About = () => {
  const tabs = [
    { name: 'About', href: 'brief-a' },
    { name: 'Education', href: 'education-a' },
  ];
  return (
    <>
      <Sidebar tabs={tabs} />,
      <DefaultLayout page="About">
        <div className="About">
          <h1 id="brief-a">About Me</h1>
          <div id="brief">
            <p>
              I'm currently an undergraduate student studying Computer Science
              and Cognitive Science at{' '}
              <a href="https://www.ucsd.edu" target="blank">
                UCSD
              </a>
              , class of 2023. I'm interested in AI, HCI, Web Development and
              make AI competitions,{' '}
              <a href="https://stonet2000.github.io/Cut-Bread/" target="blank">
                some useless websites
              </a>
              , and more creations. Currently researching at intersection of AI
              and HCI, focusing on how embedding people in the ML loop can help
              improve the model in terms of predicative power, fairness,
              transparency etc. More talk of all that on my{' '}
              <a href="/blog">blog</a>. Also you can{' '}
              <a href="/files/Stone%20Tao%20-%20Resume.pdf" target="blank">
                view my resume here
              </a>
            </p>
            <p>
              I'm most fluent with Typescript / Javascript, Python, and C++. I
              have also worked with Go, Java and touched Assembly a few times.
            </p>
            <p>
              In Data Science and AI, I'm experienced with Tensorflow, Keras,
              Pandas, Numpy, Scikit-learn and basic PyTorch and CV2
            </p>
            <p>
              In Web Development and Software Engineering, I'm experienced with
              Node.js, React.js, MongoDB, Express.js. I've also worked with
              Wordpress, PHP, MySQL and the LAMP tech stack.
            </p>
            <p>
              I also founded and run the AI club at UCSD, see{' '}
              <a href="https://ai.acmucsd.com" target="blank">
                ai.acmucsd.com
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
              <aside>Major GPA: 4.0/4.0</aside>
              <aside>Overall GPA: 3.98/4.0</aside>
              <p>
                Computer Science and Cognitive Science (ML specialization)
                Double Major. Class of 2023
              </p>
              <p>Selected Courses Taken:</p>
              <ul>
                <li>
                  AI / Data Science: CSE 152 - Intro to Computer vision, COGS
                  108 - Data Science in Practice, COGS 118A - Supervised ML
                  Algorithms
                </li>
                <li>
                  Math: MATH 31AH - Honors Linear Algebra, MATH 31BH - Honors
                  Multivariable Calculus, MATH 31CH - Honors Vector Calculus,
                  CSE 20 & CSE 21 - Discrete Math
                </li>
                <li>
                  Computer Science: CSE 100 - Advanced Data Structures, CSE 101
                  - Design and Analsis of Algorithms, CSE 30 - Computer
                  Organization and Systems Programming
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
