# A Case Study on AI Programming Challenges 

In 2018, I got my first real taste of an AI programming challenge. It was MIT's infamously difficult [Battlecode](https://battlecode.org/). I competed in it with a few friends on a complete whim. I had no knowledge of Java or any algorithms/data structures and as expected we basically sucked really hard. Flopped every tournament. You would not expect someone to suddenly make finals the year after, or consecutively for 3 years in a row, to then go on to be extremely interested about AI.

I put this up first because I dislike saying Battlecode is a bad competition because it is the very reason I'm where I am right now. I'm working at [QuantCo](https://quantco.com/) as an intern purely because of Battlecode. I'm interested in AI because of Battlecode. I'm interested in Computer Science and Cognitive Science because of Battlecode (and a few other factors). So no hard feelings @Battlecode devs, but Battlecode still needs a lot of work and the current state unfortunately clouds all the great work Battlecode has done over the years.

This post looks at a few competitions as mini case-studies, pointing out what is great and what is not so great. In particular, I have selected [Battlecode](https://battlecode.org/), [Halite](http://halite.io/), [Terminal](http://terminal.c1games.com/), [CodinGame](http://codingame.com/) and [Screeps](https://screeps.com/). These 5 (in my opinion) span the general spectrum of the current state of AI programming challenges. Lastly, I also give a overview of the Lux AI Challenge and give it a similar sort of "case-study" treatment.

If you don't know what an AI programming challenge is, it's effectively programming a virtual bot to compete against other bots in a game.

And tldr; My current ranking of AI challenges, weighing factors like game design, quality, tooling, and community building: 

1. Lux AI Challenge (not biased at all)  2. Screeps 3. Halite 4. Battlecode 5. CodinGame 6. Terminal

<h2 id='Case-Studies'>Case Studies</h2>

### Battlecode

Here's what Battlecode gets right. **Community**. Right from the start, you join a (rather niche) online community of people who love to compete in AI programming competitions, talk strategy, code, and random other things. Battlecode has built a following, an alumni network, and online community over its decades old history of existence and recently has done well to maintain that to some extent. You will literally see previous winners who now work full-time come back as company representatives for recruiting. There are also a number of blog posts online which have "cult" like following in that a ton of people read them, e.g. [Cory Li's post on bytecode optimization](https://cory.li/bytecode-hacking/) which proves an effective toolset to have in Battlecode. Their current president, [Jerry Mao](https://www.jerrymao.net/) is a Battlecode alumni and I've had some great memories competing against his teams. Their team is great at just being active in their community and taking with competitors and are extremely down to earth!


Now here's what they get wrong

**Accessibility, Barriers to entry, Game Balance, Feedback**, and probably 20+ more design principles broken according to "The Design of Everyday Things" (here on out abbreviated as DOET) by [Don Norman](https://jnd.org/) (a truly in-depth, fascinating, relevant, meaningful book)

What causes this? A decade something old JVM based engine that only allows bots written in Java to compete. A disregard for their competitor's time (or just lack of development man power on Battlecode's team). Lots of last minute patches here and there. A seriously poorly optimized visualizer. And a general lack of proper "design thinking" and design process. 

Note that the above should be taken with a grain of salt in the sense that it depends on what goal you think one should strive for when building AI competitions. I recently had a chat with Jerry Mao himself over a call and to be fair, when he explains how Battlecode is approaching their competition, it sounds quite normal and reasonable. Battlecode really does well to hit a specific niche of competitors, but my view is that it should be more accessible instead of making it fun for the few, so I continue my small discussion on the issues.

Designing a competition is incredibly difficult, and you cannot blame anyone for not coming with a interesting game design. Battlecode has a great history of designing super fun game designs, but a bad history of repeatedly changing the game mid way through a one month competition with week by week high stakes intermediate competitions. A consequence of their approach to build competition designs is that they tend to create super long matches, which make it difficult for competitors to develop their agents as feedback on bot performance is extremely delayed.

On the side of engineering, so much more could be done. Seriously, the engine they're using is the same thing they've been relying on in the last decade. A [Catalan based AI competition](https://www.coliseum.ai/) built by some members from the Battlecode community, while smaller in popularity, have a much faster JVM based engine with supposedly minor tweaks. Another limiting factor is that Battlecode will not move away from bytecode counting computation caps, which are quite confusing to newcomers and you have to rely on tedious hyper-optimizations on bytecode which really isn't that fun (to me). The only pro is that it ensures all agents are given the same exact computation taps with no room for noise but this really does not give sufficient benefits to warrant the problems. Perhaps history is what keeps Battlecode clinging on to bytecode counting.

Another issue is the visualizer, which is poorly optimized, slow, and eats up your ram. Since it's so slow, there is much less feedback to competitors on how their current bot's strategy is performing, making it difficult for competitors to tune their bots and improve them, with many competitors relying on pure intuition.

In the end, Battlecode is still extremely fun, but only for a select few who are willing to put the time in and willing to deal with a number of problems. On the bright side, their current president Jerry is extremely capable, and he is pushing for changes to improve the competition, engine etc.

**Conclusion:** Fun, super hard, and basically for the strong willed who are happy to drop everything for it (e.g. me lmao). Not worth doing if you are a bit more new to Battlecode or not okay with dealing with lower feedback and sometimes slow matchmaking.

### Halite

[Halite](https://halite.io) is extremely well designed and though out. Less active of a community in my opinion than Battlecode but they do have a rather large fan base after demonstratably being the most popular AI programming challenge of its kind (not including screeps) in recent years. The first 3 iterations ticked off a lot of boxes. Great feedback, low barrier to entry, intutive and intriguing game designs (with lots of interesting emergent behaviors), highly accessible and inclusive and the list goes on. This would be an exemplary example in DOET if DOET ever covered programming competitions.

Halite supports just about any programming language, has a 1-2 page set of rules compared to Battlecode's average of 10+ pages, and has a generally fast engine and visualizer that is also often well designed. You wouldn't believe that this was mostly built by a highschool student interning at Two Sigma (who also goes to MIT, helped run Battlecode one year then left because Battlecode refused to change at the time). Moreover, the Halite competition has the most open source contributors I've ever seen compared to the other competitions in this blog post. In fact, a lot of the starter kits for other languages were built by the community, not Two Sigma.

Unfortunately, Halite is no longer built by the same people at Two Sigma but maintained by [Kaggle](https://kaggle.com/), who are trying to launch a new style of competition they like to call simulations (but we call them AI programming challenges). Kaggle had a severe number of limitations the first year and had to rush build their simulations competition platform to run the latest Halite iteration (Halite 4). As a result, a lot of problems surfaced.

Halite 4 ran very few matches per day relative to what Two Sigma was doing in the past. From what I remember, there were typically < 15 matches played per day per agent, which sounds ridicuolous because in previous Halite iterations, there were something like > 50 matches per day, and even more if you just submitted a new agent. The lack of matches and thus feedback made it difficult to evaluate your agent against other competitors' agents.

Another issue is that Halite 4 is effectively python only, likely in part due to the rush order Kaggle had to fulfill. Other languages might work, but aren't supported and aren't easy to use. If you do a bit of data analysis, you will find that the higher ranked the competitor was, the less likely they used python. So instantly, Halite 4 lost a part of the old community, and an even more significant part of the most competitive competitors since they couldn't reasonably compete anymore. This is also reflected in the  [Github repository](https://github.com/Kaggle/kaggle-environments) that ran Halite 4, there are much less open source contributors and that repo is the home for 5+ other competitions on the Kaggle platform. There's definitely a future for AI programming competitions on Kaggle because they have the right community, but more work needs to be done (which the Lux AI Challenge is helping address!).

The best thing Kaggle did get right with Halite 4 is that they made it extremely machine learnable, which plays to their audience much more, with many more RL, ML solutions being submitted and many new insights

**Conclusion:** Probably one of the best, if not the best competition back then. Could resurface as a great competition again if Kaggle could keep a lot of the old features Halite had in terms of e.g. matchmaking, more language support, and perhaps open-source friendliness and community building. 

### Terminal

[Terminal](https://terminal.c1games.com/) has great game design, (it's like space themed tower defence auto-chess), good visualizer, generally good development tooling. What's interesting is that despite the simplicity, strategies can easily change by just changing some parameters of the game, making it fairly reusable which in one part is less engineering work for Correlation One (the company that runs it, almost exclusively for Citadel).

However, by only changing parameters and the design itself, the game becomes **very dull** over time. In fact, they've been running this same design for 7/8 years now and you frequently can see that people can submit old bots from the previous season with minor tweaks and get generally good performance on the next season which has some obvious problems. Old competitors tend to get bored as there is much analysis to do given that most of the time the units in the game are the same, rules are generally the same, it becomes more busy work and this is reflected in the general lower amount of hype online for this competition. They do offer some of the largest prize pools though, which in my opinion just compensates for the lack of change. Halite had no prizes and still had way more competitors and much more competitive play at the very top of the rankings.

Another huge issue is that the goals of the Terminal competition are really just to recruit engineers and data scientists for Citadel and other sponsoring companies. The goals are not aligned with the interests of competitors. Terminal's intentions lead to things such as screening competitors for certain competitions before they can participate, corporate overhead from Citadel (which Halite also has), and honestly a lack of effort to even just keep Terminal active and fresh like the exciting competition it once was. Halite also suffered from this in that Two Sigma decided to no longer support Halite because it had less value to them, despite having incredible value to competitors of which Kaggle recognized. Battlecode is one of the few competitions who are not hassled by corporate demands and interests, and is built for the enjoyment of the competitors.

**Conclusion:** Once a great competition but now outdated. Terminal is interesting the first or second time but then really not worth your time (unless you like money and they decide to increase the prize pool because they are backed by Citadel after all).

### CodinGame

This is an interesting one. [CodinGame](https://codingame.com) is a company that has a lot of success with a specific style of AI competitions. They have a community of 2 million something members and AI programming challenges with 100,000+ competitors with their seasonal competitions bringing in 8,000+ competitors easily. It seems to be overwhelmingly popular in the French and European circles of engineers and their Discord has upwards to 20k+ members.

They've really done well to "democratize" AI challenges by making it relatively simple for competitors to build their own AI challenges, with a voting system in place to then determine which competitions are published and launched. They've capitalized on the incredible power of AI challenges to help identify genuine talent and outside the box thinkers and I really hope CodinGame keeps this up for as long as possible.

One downside is that their competitions visually aren't that appealing or in line with modern "design" but that's mostly my subjective view of them. The other downside is that most of their competitions tend to be *too* simple, with less room for emergent like strategies, and/or interesting designs that could encourage interesting play from RL and ML. It seems that often times their competitions boil down to a few simple algorithms and boil their platform down as more of an algorithms education and tuning platform.

**Conclusion:** A great move forward for AI challenges with a ton of potential and I look forward to seeing them grow

### Screeps

This is quite special in the sense that it probably has the same style as any other AI programming challenge, but it's actually a game on [Steam](https://store.steampowered.com/app/464350/Screeps_World/) and by far the most popular one. The interesting part is that Screeps is actually an MMO which is not a easy thing to engineer for. UIUC's most recent MechMania AI programming competition attempted to run an MMO AI competition and it failed completely. About 20 competitors, nothing worked, visualizer was broken, a lot of "overengineering," and unfortunately not worth more than two sentences to talk about.

Looking at the reviews on Steam and feedback from some of their competitors, Screeps is truly unique and extremely addicting and I wish I had the time to compete in it. It has some awesome developer tools that really define what it means to have "smooth competition experiences", although it is primarily Javascript only (with probably good reason as something so massive may want to have more equity amongst competitor compute speeds). It has **incredible graphics** and developer support (although it is a paid game), and the now more recently are preparing to launch Screeps Arena which is much more like Halite, Battlecode etc. and looks crazy fun.

**Conclusion:** Very very well developed game and good game design and awesome tooling from what I hear. Unfortunately it's Javascript only and part of it is behind a paywall but it seems there is movement to help support more languages for Screeps.


<h2 id='Lux-AI-Challenge'>Lux AI Challenge</h2>

I will write a more in-depth post about the [Lux AI Challenge](https:/lux-ai.org) at a future date, perhaps after Season 1 finishes. This future post will go more in depth of it's history, and how it came about, and perhaps more on my "origin" story that led up to the Lux AI Challenge, in addition to potential future directions I think my team can help take the organization in.

This section will give a quick overview of my mostly "objective" view of the Lux AI Challenge.

The Lux AI Challenge is most similar to Halite (in addition to also being hosted on Kaggle), but has a complexity level in between Halite and Battlecode. It follows the same "hivemind" paradigm where you control many units and have them try to achieve a particular goal in a multivariable resource optimization problem in a 1v1 scenario. Differently from Halite 4 which was effectively python only, Lux AI now adds support for C++, Java, and Javascript/Typescript, with other compiled languages being easy to add.

Interestingly, it is one of the first competitions apart from Halite (and somewhat recently Battlecode) to really try to build **gender-neutral designs**. Details like these tend to go unnoticed to most competitors and observers but a step forward towards building a competition for everyone via gender-neutral designs is always better than no steps at all. In particular, Lux AI Challenge has even gotten itself [referred to as being "cute"](https://twitter.com/tachiuo60427603/status/1428020593358639112) on twitter (in japanese), which is definitely an adjective you would almost never associate with a programming competition. Did I forget to mention, Lux AI also has **incredible graphics** designed by Isa Pan, our head of design (or chief design officer, we don't have labeled positions at the moment). If I were to rank graphics, I would put Lux AI first, then Screeps, then Halite.

Another point is that the Lux AI Challenge heavily builds on 3 key goals, **novelty, inclusivity, and accessibility**. Things like gender neutrality help target inclusivity. Our plan is to also remake the competition each year using our long history of competing and building competitions, targeting novelty. Then small details such as color blind palettes go a long away to helping improve accessibility. It's not all perfect though. The visualizer (I'm at fault here) is not very well optimized in that while most computers can run it smoothly, older laptops tend to struggle a bit and it'll eat away a lot of RAM, creating a bit of an accessibility problem here if not dealt with.

Another great thing about the Lux AI Challenge is that like Battlecode, the intentions are solely focused on giving the competitors a great competition. The Lux AI Challenge does not intend to be for-profit (and eventually will register as a non-profit when feasible), and as a result, this lets us really explore a whole wider range of options in terms of how to improve competitor experience, without having to close down like Halite went through because it no longer became "worth it" to Two Sigma. 

The non-profit mindset gives us a ton of opportunities to be different, from cultivating a open community like Battlecode to funding outreach programs to teach AI and Computer Science to underrepresented demographics, schools without standard curriculums in CS, and more.

**Conclusion:** Up and coming competition with goals that could shape it into being a long lasting, constantly exciting AI challenge that is truly open to all. Currently undergoing growing pains that may make Season 1 not as great as future Seasons.

</br>
</br>
</br>
</br>

Anyway, blog post no.5 done, 

🌊

