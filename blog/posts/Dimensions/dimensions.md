# Dimensions

Over the past few years, I have fallen in love with AI competitions. Particularly [Halite](https://halite.io/) and [Battlecode](https://battlecode.org/) have inspired me to study more about computing and try to learn as much as I can. So at the conclusion of Battlecode 2020 last February, I'm left with that feeling that "I have to wait another year before competing again" as many other competitors may feel. 

Tldr; With the Coronavirus going around I had a lot of time, so I developed a [generalized AI competition framework](https://github.com/stonet2000/dimensions) called [Dimensions](https://github.com/stonet2000/dimensions) that allows you to easily create an AI competition so you don't have to wait for another quality competition any longer. This framework gives you boundless possibilities as to what kind of AI competition you want to make and how you want it to be run with implications in research as well.

Scroll to the final section if you want more details on why I made this framework and what makes it stand out.

### What makes a good AI Competition?

Ok, now back to the motivation and story.

High-quality AI competitions like Halite and Battlecode are not that easy to come by. There are many other competitions and platforms like Halite and Battlecode such as [Terminal](https://terminal.c1games.com/), [CodinGame](https://www.codingame.com/), and Kaggle's new [Connect X](https://www.kaggle.com/c/connectx), but they don't quite hit that high mark for me.

What made Halite and Battlecode so amazing to me in stark comparison to the others are the following:

1. Great tight knit Community and Excellent Communication
2. Fresh, interesting competition designs every year
3. History (Battlecode stretches way back to at least 2003)

There's a great paper that goes in-depth on the [design of programming competitions](https://arxiv.org/pdf/1710.07738.pdf) with a specific focus on the first rendition of Halite by Michael Truell and Benjamin Spector. I am choosing to focus on a few aspects and relate them to why I developed the Dimensions framework.

### The Greatness of Halite and Battlecode

Halite and Battlecode are also always **fresh** and filled with creativity. In the 3 iterations of Halite, every single year has been a unique design that is both simple yet filled with complex scenarios and possible strategies. In the 3 years I have participated in Battlecode, every single design has been different and each with its immense amount of varying strategy. And from online videos of finals of Battlecode and what I have heard, Battlecode is always fresh each year. It's what keeps me coming back year after year.

Halite and Battlecode both use [Discord](https://discordapp.com/) for communication and Halite takes on step further through using their forum as well. The idea of using Discord is brilliant because Discord is often seen as a casual community, a community that can form tight-knit bonds. This is why organizations like [ACM at UCSD](https://acmucsd.com/) use Discord because of its culture and community like nature and has successfully brought together over a thousand members into one organization in less than a year. In my own experience, Battlecode's discord has been so friendly and has kind of been my computer science mentor throughout high school. I learned the ropes of Java through failing again and again in Battlecode 2018 and learning from more experienced programmers and competitors in the Discord.

Battlecode also brings about a ton of history and simultaneously develops a greater community, a literal Battlecode alumni community. One of the most legendary competitors, Greg McLynn, has competed several times over and still competes once in a while despite having long graduated. At Battlecode 2020 Finals he came back, not as a competitor, but as a sponsor representative of his company at Battlecode!

Having to wait a year for Battlecode to come back is what at first motivated me to develop an AI competition framework. As I developed it, I came to realize the greater implications of it as well.

### The Case For a Generalized AI Competition Framework

**Creativity** is one of the greatest components of any project and competition. Many people may have great ideas like an interesting AI competition design but don't have the time or skills to write all the infrastructure. The same is the reason why we have all these libraries like Tensorflow and Pytorch. Researchers have ideas and theories about novel AI models but may not have the time to reimplement everything from scratch. Instead, libraries save researchers time and resources, enabling them to spend their time efficiently utilizing their creativity and minds for more research.

Similarly, an AI competition framework gives rise to the same efficiency and creativity but in the context of AI competitions. An ideal framework would make it easy for anyone to make their own competition design and allow anyone to compete in their design. Another key feature is **flexibility**. By making the framework flexible, the user can be much more creative in designing a competition.

Now, in fact, CodinGame has an SDK to create AI games through their game engine. But for one, it is all in Java, and is limited in terms what kind of competitions you can make and the way you run those competitions is strictly on the CodinGame platform.

Thus, I introduce [Dimensions](https://github.com/stonet2000/dimensions), a new, **open-sourced**, AI competition framework that gives you almost **unlimited freedom** in the kind of competition you want to make and how you want to run them. Want to run a poker bot tournament? You can do that easily with Dimensions. Want to recreate Halite 3 and run a leaderboard ranked by the Trueskill algorithm? Yep, you can do that, and I actually did that [here](https://github.com/StoneT2000/dimensions-halite3). Want to run a single agent competition that tests how good a bot is at collecting wild chicken while dodging zombies? Yep, let your mind run wild, you can do all of that.

Dimensions is written in [Typescript](https://www.typescriptlang.org/) and allows the user to design any kind of competition in Typescript or Javascript, which are much more flexible languages than Java and give it an edge over CodinGame's Java platform. Dimensions out-of-the-box enables your competition design to support virtually any language through an I/O based model similar to Halite.

Dimensions is also locally runnable on any platform and is not tied to some company platform or website. It offers a multi-level approach to designing AI competitions by providing a vast number of configurations from the design level down to the very engine that runs the matches. These features grant this framework great flexibility on the designing side and is what makes Dimensions an excellent framework to use to test out ideas or serve a whole competition to your own **community**, whether it is your friends, your company, or the world.

An open-sourced AI competition framework also has implications in the field of AI research. For one, it allows researchers to design AIs and train models on any platform and any competition design they want with ease. Furthermore, the framework may also provide help in the area of general AI. For example, there is the [General Video Game AI Competition](http://www.gvgai.net/) sponsored by Google's [DeepMind](https://deepmind.com/), which tasks people with creating a general AI to play various games. The infrastructure for research into general AI isn't as ubiquitous as research into more common tracks like Computer Vision, NLP, of which there are tons of libraries to help research those topics. Dimensions brings a completely modifiable framework and its **genericness** allows for research into general AI and many other fields to utilize this framework to help develop testing fields for general AI models like a general video game AI. With the power of open-source, Dimensions can truly be built up by not just AI enthusiasts, but also researchers and help make research into general AI more accessible.

To sum it up, **flexibility, genericness, and open source** are three key features of the [Dimensions](https://github.com/stonet2000/dimensions) framework that make it novel and open for endless possibilities in programming, AI design, research, and much much more. I hope more people see this project the same way I do and aspire for more and more people to contribute to this project.