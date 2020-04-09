# Dimensions

Over the past few years I have fell in love with AI competitions. Particularly [Halite](halite.io/) and [Battlecode](https://battlecode.org/) have inspired me to study more about computing and try to learn as much as I can. So at the conclusion of Battlecode 2020 last February, I'm left with that feeling that "I have to wait another year before competing again" as many other competitors may feel. 

Tldr; With the Coronavirus going around I had a lot of time, so I developed a [generalized AI competition framework](https://github.com/stonet2000/dimensions) that allows you to easily create an AI competition so you don't have to wait for another quality competition any longer. This framework gives you boundless possibilities as to what kind of AI competition you want to make and it lets your creativity run wild.

Jump here if you want more details on why I made it, how I created it, and what are some possible implications.

### What makes a good AI Competition?

Ok, now back to the motivation and story.

High quality AI competitions like Halite and Battlecode are not that easy to come by. There are many other competitions and platforms like Halite and Battlecode such as [Terminal](https://terminal.c1games.com/), [CodinGame](https://www.codingame.com/), and Kaggle's new [Connect X](https://www.kaggle.com/c/connectx), but they don't quite hit that high mark for me.

What made Halite and Battlecode so amazing to me in stark comparison to the others is the following:

1. Great Tight knit Community and Excellent Communication
2. Brilliant / Interesting competition design every year
3. History (Battlecode stretches way back to at least 2003)
5. Great flexibility (Although Battlecode does not achieve this at all, it makes up for this through the above points)

There's actually a whole paper on the [design of programming competitions](https://arxiv.org/pdf/1710.07738.pdf) with specific focus on the first rendition of Halite by Michael Truell and Benjamin Spector. I am choosing to focus on a few aspects.

CodinGame is not geared so socially. It's dashboard shows no indication that there is a forum or a discord and appears to geared towards getting jobs. 

Terminal is better and does offer a very active forum and brings great events to universities once in a while but each year it doesn't seem to change much. Furthermore Terminal seems to only officially support a few languages directly.

Kaggle outright only supports Python, although understandably due to its extremely strong Python tied data science audience. Kaggle similarly is a much more professional community, and loses touch with the personal side of competing.

### The Greatness of Halite and Battlecode

Halite and Battlecode both use [Discord](https://discordapp.com/) for communication and Halite takes on step further through using their own forum as well. The idea of using Discord is brilliant because Discord is often seen as a casual community, a community that can form really tight knit bonds. This is why organizations like ACM at UCSD use Discord because of its culture and community like nature, and has successfully brought together over a thousand members into one org in less than a year. In my own experience, Battlecode's discord has been so friendly and has kind of been my computer science mentor throughout high school. I was learned the ropes of Java through failing again and again in Battlecode 2018 and learning from more experienced programmers and competitors in the Discord.



Halite and Battlecode are also always **fresh**. In the 3 iterations of Halite, every single year has been a unique  design that is both simple yet filled with complex scenarios and possible strategies. In the 3 years I have participated in Battlecode, every single design has been different and each with its immense amount of varying strategy. And from online videos of finals of Battlecode and what I have heard, Battlecode is always fresh each year. 

Battlecode also brings about a ton of history and simultaneously develops a greater community, a literal Battlecode alumni community. One of the most legendary competitors, Greg McLynn, has competed several times over and still competes once in a while despite having long graduated. At Battlecode 2020 Finals he came back, not as an competitor, but as a sponsor representative of Battlecode. That's community right there.

### The Case For a Generalized AI Competition Framework