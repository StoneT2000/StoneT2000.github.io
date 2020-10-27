# Starting a Proper Blog

I've realized as I get older, things are very real in the world, my thoughts and ideas no longer relevant to just friends and family. Also, apparently some people want to hear about my experiences and activities and I guess the older I get, the more "important" my voice is (curious though about how to measure "importance" of one's voice).

So here's to that! This blog will now feature what I've been working on, thoughts I find interesting, books and articles I think are worth reading, and anything else I think is relevant enough to bother typing. Happy reading y'all!

## Research on HCI and AI 📝

I've recently started doing research! Never have I ever thought I might do undergraduate research (actually, I'm not sure if I'm officially a researcher at Protolabs but I'm doing research). Nevertheless, I've been exploring the intersection of [Human Computer Interaction (HCI)](https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction) and [Artificial Intelligence (AI)](https://en.wikipedia.org/wiki/Artificial_intelligence). Luckily UCSD is a great hub for HCI and am lucky to live in a time period where this intersection has become more important than ever.

In short terms, HCI x AI asks questions about the **interface of AI technology and people.** 

Why is it relevant? Here's 2 articles demonstrating how AI tech has had a measurable impact on us, on the dimensions of discrimination and bias, politics and filter bubbles (and there's so many more examples, many of which are very subtle)

- [https://www.theguardian.com/technology/2020/sep/21/twitter-apologises-for-racist-image-cropping-algorithm](https://www.theguardian.com/technology/2020/sep/21/twitter-apologises-for-racist-image-cropping-algorithm)
- [https://www.theguardian.com/technology/2017/may/22/social-media-election-facebook-filter-bubbles](https://www.theguardian.com/technology/2017/may/22/social-media-election-facebook-filter-bubbles)

Here's a great article on algorithimic bias by [Vox](https://vox.com)

- [https://www.vox.com/recode/2020/2/18/21121286/algorithms-bias-discrimination-facial-recognition-transparency](https://www.vox.com/recode/2020/2/18/21121286/algorithms-bias-discrimination-facial-recognition-transparency)

(fun fact, I'm in the background of [this video on fencing](https://www.youtube.com/watch?v=kTw05gC2T9Y&ab_channel=Vox) by Vox. I'm the kid wearing red shoes. This will be the closest I ever get to being on a 2 million view youtube video)

Tldr; Technology is extremely integrated into our lives, affecting our political views, the content we see and experience, creating our filter bubbles and can cause havoc if mishandled. Moreover, AI is central to many of these issues. There are many stages in the process from research / ideas to production AI models that are riddled with possible bias. Whether it is during feature selection, data collection, or hyperparameter tuning, there are many possibilities 

A number of issues include lack of **transparency** of algorithms (e.g blackboxed neural networks), a lack of trustworthy / reasonable **post-hoc explanations** for the results of algorithms. [Lipton (2016)](https://arxiv.org/abs/1606.03490) gives a good, grounded, overview of what is involved with "interpretability" of models. But while these may be lacking, it may be more of a question of tradeoff between predicative power and interpretability.

I believe with more effort into researching how to improve various properties of "interpretability" from angles such as crowdsourcing, embedding humans in ML among others in the contexts of social media, healthcare etc., we can then truly generate more **trust** in AI and / or remove bias and enable the full potential of **AI** without the backlash.

## Building AI Competitions in 3 days 🤖

Here's a big pivot to AI competitions. No, not something like Kaggle (although they run Halite now). Some of you readers may have seen that I've built (and am working on still) a [AI competition framework](https://github.com/StoneT2000/Dimensions) intended to make it extremely easy to launch your own language agnostic AI competition, fully scalable and secured (mostly), inspired by the work of [Battlecode](http://battlecode.org/) and [Halite](http://halite.io/) and intended to generalize those two into a common framework. 

Recently I've been working on several of these, having run two at my university and working on a new one outside of school that I'm very excited about because it is quite a novel design compared to past competitions (details are still hidden so stay tuned).

Here's some interesting results. I built a hide and seek AI competition, launched to the cloud, **in 3 days.** I built a competition similar to Halite 3 but with less features, different unit collision mechanic, and different map generation **in 3 days** as well, along with a full on visualizer. 

To say the least, if you know how to use the framework, it becomes pretty easy to make competitions on the fly provided you have an idea. Something that I didn't even realize could happen initially was **how easy it is to create visualizers** for an AI competition now, something that I have worked a bit with recently as I help develop a new AI competition.

<img src="https://cdn.discordapp.com/attachments/724158854534791199/768181430064775208/running.gif" alt="running" style="zoom: 50%;" />
<p class="caption">A gif of the visualizer of one of the competitions</p>

Here's some context. A visualizer takes a match's replay file and generates the visuals to show users the result of the match as well as what happened. Usually, visualizers are web based and that means they're written in Javascript, a different language to whatever runs the match engine and competitions (e.g. Halite 3 is C++, Battlecode is Java). This means you need to store replays that reflect most of the match information, including the actions taken by agents, perhaps the grid map and how it changes over time due to actions etc. Then, not only are these replays typically big, you then need to program the visualizer to read all of that output and change it to javascript understandable code and then effectively play the match out again. **Tedious** right? (the answer is yes by the way)

Since Dimensions is in [typescript](typescriptlang.org) (superset of javascript), you can now actually just store purely whatever output agents send to the engine and rerun the match in the visualizer without the need to store condensed replay information and then unpack it again for the visualizer to understand. Effectively, your code for the engine is **reused** to generate the match for the visualizer. Now, the visualizer has all of the information the original match had with **minimal extra code overhead** and small replay files! It is as simple as importing the match engine for your competition into your visualizer and refeeding it all the agent output sent to the engine during the match.

Anyway, first blog post done,

🌊
