#show heading: set text(font: "Times New Roman")

#show link: underline
#set page(
 margin: (x: 1.6cm, y: 1.3cm),
)
#set par(justify: true)

#let chiline() = {v(-3pt); line(length: 100%); v(-5pt)}

= Stone Tao

stao\@ucsd.edu |
#link("https://github.com/stonet2000")[github.com/stonet2000] | #link("https://stoneztao.com")[stoneztao.com] |
#link("https://twitter.com/Stone_Tao")[twitter.com/Stone_Tao]

== Education
#chiline()

*PhD Student in Computer Science and Engineering* #h(1fr) 2023 --  \
University of California, San Diego. Advisor: Hao Su #h(1fr)  \
Research Topics/Interests: Reinforcement Learning, Simulation, Embodied AI, Learning from Demonstrations

*B.S. Double Major in Computer Science and Cognitive Science, Math Minor* #h(1fr) 2019 -- 2023 \
University of California, San Diego. #h(1fr) \

//- *Graduate Courses:* Computer Vision (ML meets Geometry), ML for Robotics, Differentiable Programming, Recommender Systems, Embodied AI. \
//- *Undergraduate Courses* Decision-Making in the Brain, Parallel Computing, Statistical NLP, Advanced Optimization Methods for Data Science, Advanced Data Structures, Operating Systems, Multiple Probability and Stats Courses, Foundations of Real Analysis, Honors Calculus, and more. \

== Selected Awards
#chiline()
*National Science Foundation Graduate Research Fellowship* #h(1fr) 2023-2028 \
*UCSD CSE Award for Excellence in Leadership* #h(1fr) 2023 \
*UCSD CSE Alumni Advisory Board Leadership Excellence Scholarship* #h(1fr) 2021-2022

== Publications / Preprints
#chiline()

*Multi-Stage Manipulation with Demonstration-Augmented Reward, Policy, and World Model \ Learning* \
arxiv 2025. \
Adrià López Escoriza, Nicklas Hansen, *Stone Tao*, Tongzhou Mu, Hao Su. #h(1fr) \
#link("https://arxiv.org/abs/2503.01837")[arXiv] | #link("https://adrialopezescoriza.github.io/demo3/")[project page] | #link("https://github.com/adrialopezescoriza/demo3")[code]

*ManiSkill-HAB: A Benchmark for Low-Level Manipulation in Home Rearrangement Tasks* #h(1fr) \
International Conference on Learning Representations *(ICLR)* 2025. \
Arth Shukla, *Stone Tao*, Hao Su. \
#link("https://arxiv.org/abs/2412.13211")[arXiv] | #link("https://arth-shukla.github.io/mshab/")[project page] | #link("https://github.com/arth-shukla/mshab")[code]

*Policy Decorator: Model-Agnostic Online Refinement for Large Policy Model* #h(1fr) \
International Conference on Learning Representations *(ICLR)* 2025. \
Xiu Yuan\*, Tongzhou Mu\*, *Stone Tao*, Yunhao Fang, Michael Zhang, Hao Su. \
#link("https://arxiv.org/abs/2412.13630")[arXiv] | #link("https://policydecorator.github.io/")[project page] | #link("https://github.com/tongzhoumu/policy_decorator")[code]

*ManiSkill3: GPU Parallelized Robotics Simulation and Rendering for Generalizable Embodied AI* #h(1fr) \
Robot Learning Workshop at ICLR 2025, Oral Presentation \
*Stone Tao*, Fanbo Xiang, Arth Shukla, Yuzhe Qin, Xander Hinrichsen, Xiaodi Yuan, Chen Bao, Xinsong Lin, Yulin Liu, Tse-kai Chan, Yuan Gao, Xuanlin Li, Tongzhou Mu, Nan Xiao, Arnav Gurha, Viswesh Nagaswamy Rajesh, Yong Woo Choi, Yen-Ru Chen, Zhiao Huang, Roberto Calandra, Rui Chen, Shan Luo, Hao Su. \
#link("https://arxiv.org/abs/2410.00425")[arXiv] | #link("http://maniskill.ai/")[project page] | #link("https://github.com/haosulab/ManiSkill")[code]

*Lux AI Season 3: Multi-Agent Meta Learning at Scale* #h(1fr) \
Neural Information and Processing Systems *(NeurIPS)* 2024 Competitions Track. \
*Stone Tao*, Akarsh Kumar, Bovard Doerschuk-Tiberi, Isabelle Pan, Addison Howard, Hao Su. \
#link("https://www.kaggle.com/c/lux-ai-season-3/")[competition page] | #link("https://github.com/Lux-AI-Challenge/Lux-Design-S3/")[code]

*Reverse Forward Curriculum Learning for Extreme Sample and Demonstration Efficiency in RL* #h(1fr) \
International Conference on Learning Representations *(ICLR)* 2024. \
*Stone Tao*, Arth Shukla, Tse-kai Chan, Hao Su. \
#link("https://arxiv.org/abs/2405.03379")[arXiv] | #link("https://reverseforward-cl.github.io/")[project page] | #link("https://github.com/stonet2000/rfcl")[code]

*MetaWriter: Exploring the Potential and Perils of AI Writing Support in Scientific Peer Review* #h(1fr) \
26th ACM Conference on Computer-Supported Cooperative Work and Social Computing *(CSCW)* 2024. \
Lu Sun, *Stone Tao*, Junjie Hu, Steven Dow. \
#link("https://dl.acm.org/doi/pdf/10.1145/3637371")[ACM Digital Library Link]

*Lux AI Season 2: NeurIPS Edition* #h(1fr) \
Neural Information and Processing Systems *(NeurIPS)* 2023 Competitions Track. \
*Stone Tao*, Qimai Li, Yuhao Jiang, Jiaxin Chen, Xiaolong Zhu, Bovard Doerschuk-Tiberi, Isabelle Pan, Addison Howard. \
#link("https://www.kaggle.com/competitions/lux-ai-season-2")[competition page]

*Abstract-to-Executable Trajectory Translation for One-Shot Task Generalization* #h(1fr) \
International Conference on Machine Learning *(ICML)* 2023. \
*Stone Tao*, Xiaochen Li, Tongzhou Mu, Zhiao Huang, Yuzhe Qin, Hao Su. \
#link("https://arxiv.org/abs/2210.07658")[arXiv] | #link("https://trajectorytranslation.github.io/")[project page] | #link("https://github.com/stonet2000/trajectorytranslation")[code]

*ManiSkill2: a Unified Benchmark for Generalizable Manipulation Skills* #h(1fr) \
International Conference on Learning Representations *(ICLR)* 2023 #h(1fr) \
Jiayuan Gu†, Fanbo Xiang†, Xuanlin Li\*, Zhan Ling\*, Xiqiang Liu\*, Tongzhou Mu\*, Yihe Tang\*, *Stone Tao\**, \ Xinyue Wei\*, Yunchao Yao\*, Xiaodi Yuan, Pengwei Xie, Zhiao Huang, Rui Chen, Hao Su. \
#link("https://arxiv.org/abs/2302.04659")[arXiv] | #link("https://sapien.ucsd.edu/challenges/maniskill/2022/")[project page] | #link("https://github.com/haosulab/ManiSkill2")[code]

*Maniskill: Generalizable manipulation skill benchmark with large-scale demonstrations* #h(1fr) \
Neural Information and Processing Systems *(NeurIPS)* 2021 Datasets and Benchmarks Track \
Tongzhou Mu\*, Zhan Ling\*, Fanbo Xiang\*, Derek Cathera Yang\*, Xuanlin Li\*, *Stone Tao*, Zhiao Huang, \
Zhiwei Jia, Hao Su. \
#link("https://arxiv.org/abs/2107.14483")[arXiv] | #link("https://sapien.ucsd.edu/challenges/maniskill/2021/")[project page] | #link("https://github.com/haosulab/ManiSkill")[code]

*Emergent Collective Intelligence From Massive-Agent Cooperation and Competition* #h(1fr) \
Neural Information and Processing Systems *(NeurIPS)* 2022 Deep RL Workshop. \
Hanmo Chen\*, *Stone Tao\**, Jiaxin Chen, Weihan Shen, Xihui Li, Sikai Cheng, Xiaolong Zhu, Xiu Li. \
#link("https://arxiv.org/abs/2301.01609")[arXiv]

== Experience
#chiline()
*NVIDIA Research*, Incoming Research Intern #h(1fr) 2025

*Hillbot*, Research Scientist Intern, Advisor: Hao Su #h(1fr) 2024 \
- Research on the intersection of simulation, reinforcement learning, imitation learning, and embodied AI
- Business Strategy

*UC San Diego: Hao Su Lab*, Undergraduate Researcher, Advisor: Hao Su #h(1fr) 2020 -- 2023 \
- Research on robotics and embodied AI, particularly tackling long-horizon problems. Leveraging reinforcement learning, few-shot learning, imitation learning, and transformers.
- Research and develop large-scale robotic manipulation benchmarks (ManiSkill2).

*UC San Diego: ProtoLab*, Undergraduate Researcher, Advisor: Steven Dow #h(1fr) 2019 -- 2023 \
- Research at the intersection of AI and HCI, particularly AI-assisted tools and using NLP in systems requiring in-depth synthesis of information such as peer-review systems.
- Developed the Design for San Diego competition's front and backend.

*Lux AI Challenge*, Co-Founder #h(1fr) 2021 --
- Lead the research, development, and design of creative, accessible, and inclusive AI competitions.
- Past competitions have accumulated over 1,600+ teams, 1,000+ github stars, 30,000+ submissions, 10,000,000+ matches run, and had one of the most diverse group of participants ever. Enabled competitors to research novel deep RL and IL methods to a unique large-scale multi-agent problem.
- Currently working on a season 3 competition in collaboration with Kaggle.

*QuantCo*, ML Engineer Intern, Advisor: T. Ben Thompson #h(1fr) 2021 \
- Researched high-precision and accurate function approximation using neural nets and decision trees. Help automatically migrate slow, complex, hand-built computations in old systems to new systems.
- Developed OCR+NLP tools for analysis of insurance documents.

*LaunchDarkly*, Software Engineer Intern #h(1fr) 2020 \
- Worked full stack on feature workflows, semantic patches, and conflict handling to enable state independent scheduling of feature flagging, a feature requested by LaunchDarkly’s largest business customers.

== Selected Open Source Projects
#chiline()
*ManiSkill ★1400+* #h(1fr) 2021 -- \
GPU parallelized robotics simulation with state-of-the-art state simulation speed and the fastest visual simulation speeds (10-1000x faster compared to other simulators). Designed to be pythonic and abstract away most GPU memory management code to make building and training on robotics tasks a breeze.\
#link("https://github.com/haosulab/maniskill")[haosulab/ManiSkill]

*Lux AI Challenge ★1600+* #h(1fr)  2021 -- \
Code for the Lux AI Challenge, including the AI environments and visualizers. \
#link("https://github.com/Lux-AI-Challenge")[Lux-AI-Challenge]

*Reinforcement Learning Gym and Library in Typescript ★20+* #h(1fr) 2021 \
Implements a gym interface and algorithms like PPO and DQN in Typescript for reinforcement learning on browsers and Node.js. \
#link("https://github.com/stonet2000/rl-ts")[stonet2000/rl-ts]

== Leadership
#chiline()
*Co-Founder of the Lux AI Challenge* #h(1fr) 2021 -- \
Initiated the original project concept and invited others to co-found the non-profit organization and competition. Successfully some of the largest multi-agent AI competitions in collaboration with Kaggle. Raised over \$130,000 in funds for the competition.

*Founding President of ACM AI at UC San Diego* #h(1fr) 2020 -- 2022 \
Founded the largest organization on AI at UC San Diego, seeking to cultivate a community of AI enthusiasts as well as lower the barriers for learning AI. Grew the organization from zero to 1000+ members in 2 years, working with my board to develop social events, workshops, seminars, and competitions.


== Presentations / Talks
#chiline()
*Scaling Embodied AI via Simulation and Sim-integrated Robot Learning* \
Institute for AI Industry Research (AIR), Tsinghua University #h(1fr) 2024

*ManiSkill3: Scalable Simulation+Rendering for Generalizable Embodied AI* \
CVPR 2024 Embodied AI Workshop #h(1fr) 2024 \
Echo AI Talk  #h(1fr) 2024

*Lux AI Season 2 and Reinforcement Learning* \
Kaggle Podcast #h(1fr) 2023 \
#link("https://www.youtube.com/watch?v=3QdOTFtQ76U")[Youtube recording]

*AI Competition Design For Multi-Agent Environments / Games* \
Kaggle Podcast #h(1fr) 2022 \
Learning in Foundation Environments (LIFE) #h(1fr) 2022 \
#link("https://docs.google.com/presentation/d/13EwQQLNcXJRJx0cDTgCoMATbEMWLDyO1HWeUf03x_io/edit?usp=sharing")[Slides]

== Current/Past Student Mentees
#chiline()
*Xiu Yua* (BS UC San Diego #sym.arrow.r PhD University of Washingtong) #h(1fr) 2024 -- 2025 \
*Xander Hinrichsen* (BS UC San Diego #sym.arrow.r MS UC San Diego) #h(1fr) 2024 -- now \
*Sid Bharthulwar* (BS Harvard) #h(1fr) 2024 -- now \
*Rebecca Chen* (BS UC San Diego) #h(1fr) 2024 -- now \
*Nan Xiao* (MS UC San Diego) #h(1fr) 2024 -- now \
*Arnav Gurha* (BS UC San Diego) #h(1fr) 2024 -- now \
*Arth Shukla* (BS UC San Diego #sym.arrow.r PhD UC San Diego) #h(1fr) 2023 -- 2025 \
*Kevin Chan* (BS UC San Diego #sym.arrow.r MS Stanford) #h(1fr) 2022 -- 2024 \
*Doris Zhang* (BS UC San Diego) #h(1fr) 2022 -- 2024


== Teaching
#chiline()
*UC San Diego: CSE 276F Machine Learning for Robotics (Co-Instructor)* #h(1fr) 2024 Spring \
Taught 4 lectures covering off policy RL, exploration in RL, learning from demonstrations, and model based RL. Wrote homework material covering robotics, robotics simulation, reinforcement learning, and robot learning. Held office hours.

*UC San Diego: CSE 291 Machine Learning for Robotics* #h(1fr) 2023 Winter \
Wrote various course materials and Google Colab notebooks covering robotics, robotics environments, reinforcement learning, and imitation learning.

*UC San Diego: CSE 12 Basic Data Structures and Object-Oriented Design* #h(1fr) 2020 Spring \
Held office hours and wrote unit tests for grading homework automatically in Java.

== Service
#chiline()
*Challenge Organization* \
Robotics: ManiSkill Challenge 2021 (ICLR 2022 Generalizable Policy Learning in the Physical World Workshop), ManiSkill2 Challenge (CVPR 2023 Embodied AI Workshop) \
Multiagent Games/RL: Lux AI Season 1, Lux AI Season 2 (NeurIPS 2023 Competitions), Lux AI Season 3 (NeurIPS 2024 Competitions)

*Peer Review* \
AI/ML: ICLR, ICML, NeurIPS, CoLLas, RLC \
Robotics: IROS, ICRA \
Computer Vision/Graphics: SIGGRAPH \

== Other Awards
#chiline()
*UCSD Undergraduate Provost Honors List* #h(1fr) 2019-2023\
*MIT Battlecode (AI Competition) Finalist* #h(1fr) 2019-2021 \
Made finals 3 times in a row (2019-2021), placing 1st out of all soloists and 5th overall in 2020, competing against over 600 teams of high school to graduate students. Won the Five Rings adaptive strategy award for spearheading an influential
strategy in 2021.

== Skills
#chiline()
*Programming Languages:* Python, Typescript/Javascript, C/C++, Go, Java, SQL

*AI:* Reinforcement Learning, 2D/3D Computer Vision, Deep Learning, Tree Learners, Embodied AI

*Frameworks:* Jax, Pytorch, Tensorflow, Pandas, scikit-learn, Node.js, React, MongoDB, Express.js

*Tools:* Docker, Google Cloud, Jupyter Notebook/Lab, Git, Adobe Photoshop, Figma

== Interests
#chiline()
*Languages:* English, Chinese

*Sports:* Fencing (Saber), Fencing Coaching

*Music:* Violin, Viola