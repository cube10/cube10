'use strict'
module.exports = (addStory) => {
  let stories = [
    {
      title: 'Democracy and Bacon',
      description: 'pork Megaphone hunting rectangle Ron hellscape Duke Lagavulin stabbed melancholy tornado greatness nightmare slashing buffet bacon horrifying bandsaw preternaturally respect worst Horsemeals Knope steakhouse Mulligan.',
      imgUrl: 'http://lorempixel.com/800/800/nature/life-without-government'
    },
    {
      title: 'Let\'s Paint!',
      description: 'Even trees need a friend. We all need friends. Those great big fluffy clouds. Let\'s go up in here, and start having some fun The man who does the best job is the one who is happy at his job. We have all at one time or another mixed some mud. There we go. You better get your coat out, this is going to be a cold painting. Learn when to stop. We artists are a different Lorad of people. We\'re a happy bunch. This is gonna be a happy little seascape.',
      imgUrl: 'http://lorempixel.com/800/800/sports/Happy-Little-Picture'
    },
    {
      title: 'Batman',
      description: 'I seek the means to fight injustice. To turn fear against those who prey on the fearful. Bats frighten me. It\'s time my enemies shared my dread. The first time I stole so that I wouldn\'t starve, yes. I lost many assumptions about the simple nature of right and wrong. And when I traveled I learned the fear before a crime and the thrill of success. But I never became one of them.',
      imgUrl: 'http://lorempixel.com/800/800/nightlife/corruption'
    },
    {
      title: 'Horses and More',
      description: 'Do you think horses get songs stuck in their heads? I\'m torn. Dad raised me, but the shark gets me. I\'m just not sure if I\'ll be any good on the grill with one free hand. Dad, I need you to drop everything and shave my legs. Time for the charm bomb to explode. Time for the charm bomb to explode. I\'ll wave at you every day. Here\'s a bunch of numbers. They may look random but they\'re my phone number. There\'s a lot of carrots in that stew. I need both ears to hold up my glasses. It includes material that may not be suitable for all ages. uhhhhhhh YOU GORGEOUS IDIOT! ',
      imgUrl: 'http://lorempixel.com/800/800/animals/Majestic-Horses'
    },
    {
      title: 'Positive Change',
      description: 'Carbon emissions reductions promising development growth turmoil social impact development. Eradicate best practices initiative many voices urban donate clean water. Catalyze progressive carbon rights leverage, agriculture treatment Jane Addams. Micro-finance minority care contribution generosity complexity. Pursue these aspirations Arab Spring innovate think tank amplify engage. Vulnerable population, solutions livelihoods cross-agency coordination time of extraordinary change. Economic development cooperation safety; elevate integrity incubation, recognition UNICEF Jane Jacobs. Connect prevention social analysis efficient reduce carbon emissions. Environmental crisis situation measures, conflict resolution, country pride institutions working alongside. Provide United Nations proper resources future activist. Human being significant, metrics; altruism, lasting change peace.',
      imgUrl: 'http://lorempixel.com/800/800/people'
    },
    {
      title: 'Freak Out!',
      description: 'Freak out! diamond dallas page world heavyweight you\'re goin\' nowhere! hey, freakshow! we have nothing to fear, but fear itself...and the macho man! hulkamania i\'m the macho man randy savage running wild drop destroy heavyweight world ultimate warrior atomic rules? gorgeous george the macho man is right here, and i\'m gonna take it to the limit! gorgeous george love it, or leave it. i say i\'m a million percent. that is better than a hundred percent! hangman the madness is runnin\' wild! i got\'cha for three minutes! intercontinental champion the macho man is right here, and i\'m gonna take it to the limit! and your neck could be broken! freak out! i want everybody to we have nothing to fear, but fear itself...and the macho man! ooooooh yeah! snake eyes i want everybody to man destroy yeah! elbow macho elbow diamond dallas page heavyweight i say i\'m a million percent. that is better than a hundred percent! i say i\'m a million percent. that is better than a hundred percent! hulk hogan atomic the madness is runnin\' wild! diving heavyweight world',
      imgUrl: 'http://lorempixel.com/800/800/sports/Randy-Savage'
    },
    {
      title: 'Ahoy Me Maties!',
      description: 'Pillage draught spyglass log skysail wench trysail to go on account bounty reef sails cutlass bilge water black spot scourge of the seven seas jack. Cat o\'nine tails bilge provost spanker coxswain warp main sheet draught bring a spring upon her cable Brethren of the Coast American Main wherry scourge of the seven seas spyglass dead men tell no tales. Yawl lanyard bucko jib walk the plank strike colors hornswaggle cackle fruit loot gibbet parrel draught topmast code of conduct landlubber or just lubber. Pink me draft cutlass Yellow Jack hail-shot black spot hearties Barbary Coast Privateer pillage carouser dance the hempen jig port fathom. Bilge Sea Legs pink broadside scallywag loaded to the gunwalls Blimey gibbet execution dock deadlights barkadeer main sheet Barbary Coast clipper nipperkin. Bilged on her anchor Nelsons folly mizzen gangway cackle fruit warp barque booty Jolly Roger hulk grog loaded to the gunwalls cog sutler bilge rat. Killick ahoy knave black spot Nelsons folly tender sutler to go on account furl gaff scuttle pink belay jack deadlights. Clap of thunder scourge of the seven seas come about gangway heave to bucko lanyard crimp careen Jack Tar reef wherry lass bring a spring upon her cable pink. Code of conduct quarterdeck Nelsons folly six pounders flogging lookout swab jack Jack Ketch Yellow Jack bowsprit carouser snow take a caulk hands. Rum parley hardtack walk the plank crow\'s nest interloper landlubber or just lubber chase hornswaggle lass aft splice the main brace main sheet Jolly Roger doubloon. ',
      imgUrl: 'http://lorempixel.com/800/800/people/landlubber'
    },
    {
      title: 'Thinking of Starting a Business?',
      description: 'Stock A/B testing niche market ecosystem iPhone funding research & development equity assets business model canvas. Deployment entrepreneur return on investment business-to-consumer pitch social media. Conversion startup bootstrapping seed round investor user experience. Seed round funding growth hacking buzz release interaction design niche market customer investor churn rate. Technology validation traction interaction design responsive web design lean startup branding series A financing. Funding venture iteration customer early adopters. Product management launch party churn rate infrastructure metrics stealth accelerator disruptive startup gen-z. Social proof startup non-disclosure agreement partner network. Low hanging fruit sales research & development facebook partnership deployment business model canvas niche market entrepreneur non-disclosure agreement equity marketing analytics. Accelerator startup market paradigm shift stock.',
      imgUrl: 'http://lorempixel.com/800/800/technics'
    },
    {
      title: 'Business',
      description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
      imgUrl: 'http://lorempixel.com/800/800/business'
    },
    {
      title: 'meow_irl',
      description: 'Soft kitty warm kitty little ball of furr present belly, scratch hand when stroked, but instantly break out into full speed gallop across the house for no reason hide head under blanket so no one can see. Human give me attention meow roll on the floor purring your whiskers off but intently sniff hand, for lick arm hair. Intently stare at the same spot white cat sleeps on a black shirt for drink water out of the faucet and poop on grasses for present belly, scratch hand when stroked. You call this cat food? meow for food, then when human fills food dish, take a few bites of food and continue meowing attack the dog then pretend like nothing happened meow yet intently sniff hand. Soft kitty warm kitty little ball of furr curl into a furry donut. Lie on your belly and purr when you are asleep claws in your leg. Jump off balcony, onto stranger\'s head who\'s the baby, and under the bed, but stand in front of the computer screen, so stare out the window. Chew foot stare at wall turn and meow stare at wall some more meow again continue staring . Instantly break out into full speed gallop across the house for no reason missing until dinner time. Fall over dead (not really but gets sypathy) howl uncontrollably for no reason scratch leg; meow for can opener to feed me under the bed who\'s the baby, i am the best. The dog smells bad stare at wall turn and meow stare at wall some more meow again continue staring but always hungry tuxedo cats always looking dapper yet scratch at the door then walk away. Ignore the squirrels, you\'ll never catch them anyway. Play riveting piece on synthesizer keyboard intently stare at the same spot, or use lap as chair, refuse to leave cardboard box, stick butt in face, flee in terror at cucumber discovered on floor. Jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed cat slap dog in face attack the dog then pretend like nothing happened and paw at your fat belly inspect anything brought into the house. Claw drapes find something else more interesting, and cough furball cats go for world domination so scream at teh bath. Meow make muffins paw at your fat belly so use lap as chair. Lick yarn hanging out of own butt i am the best and hunt by meowing loudly at 5am next to human slave food dispenser or then cats take over the world so sun bathe.',
      imgUrl: 'http://lorempixel.com/800/800/cats/'
    },
    {
      title: 'Riker',
      description: 'I\'d like to think that I haven\'t changed those things, sir. Now, how the hell do we defeat an enemy that knows us better than we know ourselves? Fear is the true enemy, the only enemy. This should be interesting. My oath is between Captain Kargan and myself. Your only concern is with how you obey my orders. Or do you prefer the rank of prisoner to that of lieutenant? Computer, lights up! Captain, why are we out here chasing comets? The Enterprise computer system is controlled by three primary main processor cores, cross-linked with a redundant melacortz ramistat, fourteen kiloquad interface modules. Worf, It\'s better than music. It\'s jazz. Why don\'t we just give everybody a promotion and call it a night - \'Commander\'? Mr. Worf, you do remember how to fire phasers? The Federation\'s gone; the Borg is everywhere! You enjoyed that. I suggest you drop it, Mr. Data. Mr. Worf, you sound like a man who\'s asking his friend if he can start dating his sister. Sorry, Data. Your shields were failing, sir. I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet. Talk about going nowhere fast.',
      imgUrl: 'http://lorempixel.com/800/800/fashion'
    },
    {
      title: 'Musings',
      description: 'We know that the tameless age comes from a suchlike respect. Recent controversy aside, few can name a centrist state that isn\'t a sluggard anethesiologist. Though we assume the latter, palsied shades show us how forecasts can be jets. Extending this logic, a slothful good-bye is a yoke of the mind. To be more specific, a shovel is the worm of a client. The literature would have us believe that a coatless roadway is not but a punch. Authors often misinterpret the barge as a hueless anger, when in actuality it feels more like an uncharged dragonfly. Though we assume the latter, the first loyal force is, in its own way, a tail. A felony is a droughty difference. Authors often misinterpret the sampan as a haloid dipstick, when in actuality it feels more like a racemed cylinder.',
      imgUrl: 'http://lorempixel.com/800/800/abstract'
    },
    {
      title: 'The Finer Things in Life',
      description: 'Monocle ipsum dolor sit amet handsome Airbus A380 concierge Melbourne. Craftsmanship airport charming ANA, lovely Asia-Pacific finest quality of life sleepy iconic business class remarkable uniforms sophisticated essential. Airbus A380 business class boulevard, Ettinger elegant uniforms K-pop Shinkansen efficient quality of life essential exquisite liveable international classic. K-pop Comme des Garçons joy business class efficient carefully curated. International exquisite Washlet Baggu boulevard business class efficient flat white charming. Sophisticated quality of life signature destination extraordinary artisanal handsome concierge global Tsutaya. The best international bespoke punctual bureaux ANA the highest quality Melbourne airport impeccable Lufthansa pintxos Sunspel.',
      imgUrl: 'http://lorempixel.com/800/800/food'
    },
  ]

  stories.forEach((story) => {
     addStory(story)
  })
}
