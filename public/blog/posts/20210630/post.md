# A Case Study on AI Programming Challenges 

### (and also why the Lux AI Challenge is the future)

In 2018, I got my first real taste of an AI programming challenge. It was MIT's infamously difficult [Battlecode](https://battlecode.org/). I competed in it with a few friends on a complete whim. I had no knowledge of Java or any algorithms/data structures and as expected we basically sucked really hard. Flopped every tournament. You would not expect someone to suddenly make finals the year after, or consecutively for 3 years in a row, to then go on to be extremely interested about AI.

I put this up first because I dislike saying Battlecode is a bad competition because it is the very reason I'm where I am right now. I'm working at [QuantCo](https://quantco.com/) as an intern purely because of Battlecode. I'm interested in AI because of Battlecode. I'm interested in Computer Science and Cognitive Science because of Battlecode (and a few other factors). So no hard feelings @Battlecode devs, but Battlecode is terrible in a number dimensions which unfortunately tends to hide all the great work Battlecode has done over the years in other areas.

This post looks at a few competitions as mini case-studies, pointing out what went wrong, and what was good. In particular, I have selected [Battlecode](https://battlecode.org/), [Halite](http://halite.io/), [Terminal](http://terminal.c1games.com/), [CodinGame](http://codingame.com/) and [Screeps](https://screeps.com/). These 5 (in my opinion) span the general spectrum of the current state of AI programming challenges.

If you want to skip that part and just learn about how the [Lux AI Challenge](lux-ai.org) works to address the shortcomings of other competitions and retains lots of the good from past competitions, [click here]() **TODO fix gramamr**

Also if you don't know what an AI programming challenge is, it's effectively programming a virtual bot to compete against other bots in a game.

<h2 id='Case-Studies'>Case Studies</h2>

### Battlecode

Here's what Battlecode gets right. **Community**. Right from the start, you join a (rather niche) online community of people who love to compete in AI programming competitions, talk strategy, code, and random other things. Battlecode has built a following, an alumni network, and online community over its decades old history of existence and recently has done well to maintain that to some extent. You will literally see previous winners who now work full-time come back as company representatives for recruiting. There are also a number of blog posts online which have "cult" like following in that a ton of people read them, e.g. [Cory Li's post on bytecode optimization](https://cory.li/bytecode-hacking/) which proves an effective toolset to have in Battlecode.


Now here's what they get wrong

**Accessibility, Barriers to entry, Game Balance, Feedback**, and probably 20+ more design principles broken according to "The Design of Everyday Things" (here on out abbreviated as DOET) by [Don Norman](https://jnd.org/) (a truly in-depth, fascinating, relevant, meaningful book)

What causes this? A decade something old JVM based engine that only allows bots written in Java to compete. A disregard for their competitor's time (or just lack of development man power on Battlecode's team). Lots of last minute patches here and there. A seriously poorly optimized visualizer. A lack of proper "design thinking" and design process. Also potentially the lack of a real product manager on the Battlecode team.

Design is always hard, and I have no issue if Battlecode's team doesn't come up with a great game design (they have had some great designs in the past). Definitely, Battlecode has a history of making interesting game designs at least (I would not say the same about the visuals however). Battlecode tends to almost always create designs that result in super long matches, which is really just not great for competitors but for now lets just ignore that.

On the side of engineering, so much more could be done. Seriously, the engine they're using is the same thing they've been relying on in the last decade. A [Catalan based AI competition](https://www.coliseum.ai/) built by some members from the Battlecode community, while smaller in popularity, have a much faster JVM based engine with supposedly minor tweaks. The only reason I can think of sticking to the Java engine is that the Battlecode team cannot afford to spend time building a new engine or are unwilling to move away from a bytecode counter to a time based measure to cap bot computations. In particular, they did try some other engines but they've all failed horribly, which is a bit strange because they do have some pretty talented engineers, but they just chose the wrong direction to take for engine building. The end result regardless is that: Battlecode is Java only, limiting who can participate; engine is slow so it's hard for people to improve their bots in a timely manner; bytecode counting is confusing and also leads to competitors performing typically tedious hyper-optimizations on bytecode.

Another issue is the visualizer. The visualizer is poorly optimized, and could be significantly faster (trust me, I've made some pull requests to their visualizer before and while doing so found a number of places that could be changed to make it faster). Since it's so slow, there is much less feedback to competitors on how their current bot's strategy is performing, making it difficult for competitors to tune their bots and improve them, with many competitors relying on pure intuition.

In the end, Battlecode is still extremely fun, but only for a select few who are willing to put the time in and willing to deal with a number of problems.

**Conclusion:** Fun, super hard, and basically for the strong willed who are happy to drop everything for it (e.g. me lmao). Not worth doing if you are a bit more new to Battlecode or not okay with dealing with lower feedback and sometimes slow matchmaking.

### Halite

Halite is actually very good. Less active of a community in my opinion than Battlecode but they do have a rather large fan base after demonstratably being the most popular AI programming challenge of its kind (not including screeps) in recent years. The first 3 iterations ticked off a lot of boxes. Great feedback, low barrier to entry, intutive and intriguing game designs, highly accessible and inclusive and the list goes on. This would be an exemplary example in DOET if DOET ever covered programming competitions.

Halite supports just about any programming language, has a 1-2 page set of rules compared to Battlecode's average of 10+ pages, and has a generally fast engine and visualizer that is also often well designed. You wouldn't believe that this was mostly built by a kid in highschool interning at Two Sigma (who also goes to MIT, helped run Battlecode one year then left because Battlecode refuses to change for the better). Moreover, the Halite competition has the most open source contributors I've ever seen compared to the other competitions in this blog post. A lot of the starter kits for other languages were built by the community, not Two Sigma.

Unfortunately, Halite is no longer built by the same people at Two Sigma but maintained by [Kaggle](https://kaggle.com/), who are trying to launch a new style of competition they like to call simulations (but we call them AI programming challenges). Kaggle has had a severe number of limitations and from what I hear, had to rush build their simulations competition platform to run the latest Halite iteration (Halite 4). As a result, a lot of problems surfaced.

Halite 4 ran very few matches per day relative to what Two Sigma was doing in the past. From what I remember, there were typically < 15 matches played per day per agent, which sounds ridicuolous because in previous Halite iterations, there were something like > 50 matches per day, and even more if you just submitted a new agent. The lack of matches and thus feedback made it difficult to evaluate your agent against other competitors' agents.

Another issue is that Halite 4 is effectively python only, likely in part due to the rush order Kaggle had to fulfill. Other languages might work, but aren't supported and aren't easy to use. If you do a bit of data analysis, you will find that the higher ranked the competitor was, the less likely they used python. So instantly, Halite 4 lost a part of the old community, and a even more significant part of the most competitive competitors since they couldn't reasonably compete anymore. This is also reflected in the  [Github repository](https://github.com/Kaggle/kaggle-environments) that ran Halite 4, there are much less open source contributors and that repo is the home for 5+ other competitions on the Kaggle platform. There's definitely a future for AI programming competitions on Kaggle because they have the right community, but more works needs to be done (which the Lux AI Challenge addresses to an extent)

**Conclusion:** Probably one of the best, if not the best competition back then. Could resurface as a great competition again if Kaggle could at least retain a lot of the old features Halite had in terms of e.g. matchmaking, more language support, and perhaps open-source friendliness and community building. 

### Terminal

Great game design, (it's like space themed tower defence auto-chess), good visualizer, generally good development tooling. What's interesting is that despite the simplicity, strategies can easily change by just changing some parameters of the game, making it fairly reusable which in one part is less engineering work for Correlation One (the company that runs it, almost exclusively for Citadel).

However, by only changing parameters and the design itself, the game becomes **very dull** over time. In fact, they've been running this same design for 7/8 years now and you frequently can see that people can submit old bots from the previous season with minor tweaks and get generally good performance on the next season which has some obvious problems. Old competitors tend to get bored as there is much analysis to do given that most of the time the units in the game are the same, rules are generally the same, it becomes more busy work and this is reflected in the general lower amount of hype online for this competition. They do offer some of the largest prize pools though, which in my opinion just compensates for the lack of change. Halite had no prizes and still had way more competitors and honestly much more competitive play at the very top of the rankings.

Another huge issue which is something that I think only Halite and Battlecode really embodied is that the goals of the Terminal competition are really just to recruit engineers and data scientists for Citadel and other sponsoring companies. While yes Halite was backed by Two Sigma, Battlecode has their sponsors that come for exposure and recruiting, Halite and Battlecode are basically built and maintained by either a community of AI programming challenge enthusiasts or students whose intentions are to build a fun and exciting competition. Terminal's intentions lead to things such as screening competitors for certain competitions before they can participate, corporate overhead from Citadel (which Halite also has), and honestly a lack of effort to even just keep Terminal the exciting competition it once was. **GRAMMAR**

**Conclusion:** Once a great competition but now outdated. Terminal is interesting the first or second time but then really not worth your time (unless you like money and they decide to increase the prize pool because they are backed by Citadel after all).

### CodinGame

This is an interesting one. CodinGame is a company that has a lot of success with this style of competition. They have a community of 2 million something members and AI programming challenges with 100,000+ competitors with their seasonal competitions bringing in 8,000+ competitors easily. It seems to be overwhelmingly popular in the French and European circles of engineers



**Conclusion:** A great move forward. 

### Screeps

This is quite special in the sense that it probably has the competitors of any competition, but it's actually a game on [Steam](https://store.steampowered.com/) and by far the most popular AI programming one. The interesting part is that Screeps is actually an MMO which is not a easy thing to engineer for. UIUC's most recent MechMania AI programming competition attempted to run an MMO AI competition and it failed completely. About 20 competitors, nothing worked, visualizer was broken, a lot of "overengineering," and unfortunately not worth more than two sentences to talk about. 

Looking at the reviews on Steam and feedback from some of their competitors, Screeps is truly unique and extremely addicting. 



**Conclusion:** Very very well developed game and good game design and awesome tooling from what I hear. Unfortunately it's JavaScript only and behind a paywall which is okay for some but I think it just too many barriers.


<h2 id='Lux-AI-Challenge'>Lux AI Challenge</h2>
</br>
</br>
</br>
</br>

Anyway, blog post no.4 done, 

🌊

