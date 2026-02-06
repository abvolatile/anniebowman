var quotes = [
	"Watched protests yesterday but was under the impression that we just had an election! Why didn’t these people vote? Celebs hurt cause badly.",
	"Happy New Year to all, including to my many enemies and those who have fought me and lost so badly they just don’t know what to do. Love!",
	"Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog & will do it again – just watch. He can do much better!",
	"Meryl Streep, one of the most over-rated actresses in Hollywood, doesn’t know me but attacked last night at the Golden Globes. She is a Hillary flunky who lost big. For the 100th time, I never “mocked” a disabled reporter (would never do that) but simply showed him “groveling” when he totally changed a 16 year old story that he had written in order to make me look bad. Just more very dishonest media!",
	"When Mexico sends its people, they’re not sending the best... They’re bringing drugs. They’re bring crime. They’re rapists. And some, I assume, are good people.",
	"One of they key problems today is that politics is such a disgrace. Good people don’t go into government.",
	"It’s freezing and snowing in New York – we need global warming!",
	"I’ve said if Ivanka weren’t my daughter, perhaps I’d be dating her.",
	"I was down there, and I watched our police and our firemen, down on 7-Eleven, down at the World Trade Center, right after it came down",
	"The only card [Hillary Clinton] has is the woman’s card. She’s got nothing else to offer and frankly, if Hillary Clinton were a man, I don’t think she’d get 5 percent of the vote. The only thing she’s got going is the woman’s card, and the beautiful thing is, women don’t like her.",
	"You know, it really doesn’t matter what the media write as long as you’ve got a young, and beautiful, piece of ass.",
	"My fingers are long and beautiful, as, it has been well documented, are various other parts of my body.",
	"The beauty of me is that I’m very rich.",
	"I will build a great wall – and nobody builds walls better than me, believe me – and I’ll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words.",
	"An ‘extremely credible source’ has called my office and told me that Barack Obama’s birth certificate is a fraud",
	"I could stand in the middle of 5th avenue and shoot somebody, and I wouldn't lose voters.",
	"I think that putting a wife to work is a very dangerous thing.",
	"26,000 unreported sexual assults in the military-only 238 convictions. What did these geniuses expect when they put men & women together?",
	"If Hilary Clinton can't satisfy her husband what makes her think she can satisfy America?",
	"And when you’re a star, they let you do it. You can do anything. Grab them by the pussy. You can do anything.",
	"Do you believe it? The Obama Administration agreed to take thousands of illegal immigrants from Australia. Why? I will study this dumb deal!",
	"If the ban were announced with a one week notice, the 'bad' would rush into our country during that week. A lot of bad 'dudes' out there",
	"Congressman John Lewis should spend more time on fixing and helping his district, which is in horrible shape and falling apart (not to mention crime infested) rather than falsely complaining about the election results. All talk, talk, talk - no action or results. Sad!",
	"I win an election easily, a great 'movement' is verified, and crooked opponents try to belittle our victory with FAKE NEWS. A sorry state!",
	"Wow, the ratings are in and Arnold Schwarzenegger got 'swamped' (or destroyed) by comparison to the ratings machine, DJT. So much for being a movie star... But who cares, he supported Kasich and Hillary",
	"The dishonest media likes saying that I am in Agreement with Julian Assange - wrong. I simply state what he says, it is for the people to make up their own minds as to the truth...",
	"I would have done even better in the election if that is possible, if the winner was based on popular vote - but would campaign differently",
	"I have NOTHING to do with The Apprentice except for the fact that I conceived it with Mark B & have a big stake in it...",
	"I watched parts of @nbcsnl Saturday Night Live last night. It is a totally one-sided, biased show - nothing funny at all. Equal time for us?",
	"In addition to winning the Electoral College in a landslide, I won the popular vote if you deduct the millions of people who voted illegally",
	"The Theater must always be a safe and special place. The cast of Hamilton was very rude last night to a very good man, Mike Pence. Apologize!",
	"Yes, Arnold Schwarzenegger did a really bad job as Governor of California and even worse on the Apprentice... but at least he tried hard!"
];

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
