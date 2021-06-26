# The Lux AI Challenge 

### (and everything wrong with other competitions)

In 2018, I got my first real taste of an AI programming challenge. It was MIT's infamously difficult [Battlecode](https://battlecode.org/). I competed in it with a few friends on a complete whim. I had no knowledge of Java or any algorithms/data structures and as expected we basically sucked really hard. Flopped every tournament. You would not expect someone to suddenly make finals the year after, or consecutively for 3 years in a row, to then go on to be extremely interested about AI.

I put this up first because I dislike saying Battlecode is a bad competition because it is the very reason I'm where I am right now. I'm working at [QuantCo](https://quantco.com/) as an intern purely because of Battlecode. I'm interested in AI because of Battlecode. I'm interested in Computer Science and Cognitive Science because of Battlecode (and a few other factors). So no hard feelings @Battlecode devs, but Battlecode is terrible in a number dimensions which unfortunately tends to hide all the great work Battlecode has done over the years in other areas.

This post looks at a few competitions as mini case-studies, pointing out what went wrong, and what was good. In particular, I have selected [Battlecode](https://battlecode.org/), [Halite](http://halite.io/), and Correlation One's (which is basically just Citadel owned) [Terminal](http://terminal.c1games.com/) competitions.

If you want to skip that part and just learn about how Lux AI Challenge fixes many of those issues and retains lots of the good from past competitions, [click here]()

Also if you don't know what an AI programming challenge is, it's effectively programming a virtual bot to compete against other bots in a game.

<h2 id='Case-Studies'>Case Studies</h2>

### Battlecode

Here's what Battlecode gets right. **Community**. Right from the start, you join a (rather niche) online community of people who love to compete in AI programming competitions, talk strategy, code, and random other things. Battlecode has built a following, an alumni network, and online community over its decades old history of existence and recently has done well to maintain that to some extent. You will literally see previous winners who now work full-time come back as company representatives for recruiting. There are also a number of blog posts online which have "cult" like following in that a ton of people read them, e.g. [Cory Li's post on bytecode optimization](https://cory.li/bytecode-hacking/) which proves an effective toolset to have in Battlecode.


Now here's what they get wrong

**Accessibility, Barriers to entry, Game Balance, Feedback**, and probably 20+ more design principles broken according to "The Design of Everyday Things" (here on out abbreviated as DOET) by [Don Norman](https://jnd.org/) (a truly in-depth, fascinating, relevant, meaningful book)

What causes this? A decade something old JVM based engine that only allows bots written in Java to compete. A disregard for their competitor's time (or just lack of development man power on Battlecode's team). Lots of last minute patches here and there. A seriously poorly optimized visualizer. A lack of proper "design thinking" and design process. Also potentially the lack of a real product manager on the Battlecode team.

Design is always hard, and I have no issue if Battlecode's team doesn't come up with a great game design (they have had some great designs in the past). Definitely, Battlecode has a history of making interesting game designs at least (I would not say the same about the visuals however). Battlecode tends to almost always create designs that result in super long matches, which is really just not great for competitors but for now lets just ignore that.

On the side of engineering, so much more could be done. Seriously, the engine they're using is the same thing they've been relying on in the last decade. A [Catalan based AI competition](https://www.coliseum.ai/) built by some members from the Battlecode community, while smaller in popularity, have a much faster JVM based engine with supposedly minor tweaks. The only reason I can think of sticking to the Java engine is that the Battlecode team cannot afford to spend time building a new engine or are unwilling to move away from a bytecode counter to a time based measure to cap bot computations. In particular, they did try some other engines but they've all failed horribly, which is a bit strange because they do have some pretty talented engineers, but they just chose the wrong direction to take for engine building. The end result regardless is that: Battlecode is Java only limiting who can participate; engine is slow so it's hard for people to improve their bots in a timely manner; bytecode counting is confusing and also leads to competitors performing typically tedious hyper-optimizations on bytecode.

Another issue is the visualizer. The visualizer is poorly optimized, and could be significantly faster (trust me, I've made some pull requests to their visualizer before and while doing so found a number of places that could be changed to make it faster). Since it's so slow, there is much less feedback to competitors on how their current bot's strategy is performing, making it difficult for competitors to tune their bots and improve them, with many competitors relying on pure intuition.

In the end, Battlecode is still extremely fun, but only for a select few who are willing to put the time in and willing to deal with a number of problems. 

### Halite

Halite is actually very good. Less active of a community in my opinion than Battlecode but they do have a rather large discord. The first 3 iterations ticked off a lot of boxes. Great feedback, low barrier to entry, intutive and intriguing game designs, highly accessible and inclusive and the list goes on.

Halite supports just about any programming language, has a 1-2 page set of rules compared to Battlecode's average of 10+ pages, and has a generally fast engine and visualizer that is also often well designed. You wouldn't believe that this was mostly built by a kid in highschool interning at Two Sigma (who also goes to MIT, helped run Battlecode one year then left because Battlecode refuses to change for the better).

Unfortunately, Halite is no longer built by the same people at Two Sigma but maintained by [Kaggle](https://kaggle.com/), who are trying to launch a new style of competition they like to call simulations (but we call them AI programming challenges). Kaggle has had a severe number of limitations and from what I hear, had to rush building their simulations competition platform to run the latest Halite iteration (Halite 4). As a result, a lot of problems surfaced.

Halite 4 ran very few matches per day relative to what Two Sigma was doing in the past. From what I remember, there were typically < 15 matches played per day per agent, which sounds ridicuolous because in previous Halite iterations, there were > 100 matches per day, and even more if you just submitted a new agent. The lack of matches and thus feedback made it difficult to evaluate your agent against other competitors' agents.

Another issue is that Halite 4 is python only, likely in part due to the rush order Kaggle had to fulfill. If you do a bit of data analysis, you will find that the higher ranked the competitor was, the less likely they used python. So instantly, Halite 4 lost a part of the old community since they couldn't reasonably compete anymore. 

</br>
</br>
</br>
</br>

Anyway, blog post no.4 done, 

🌊

