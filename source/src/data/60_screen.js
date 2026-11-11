GROUP("screen");
const BP="Titanic|1990s;The Godfather|1970s;Forrest Gump|1990s;Gladiator|2000s;Casablanca|1940s;Gone with the Wind|1930s;Schindler's List|1990s;Rocky|1970s;The Silence of the Lambs|1990s;Braveheart|1990s;The Sound of Music|1960s;Oppenheimer|2020s;Parasite|2010s;The Lord of the Rings: The Return of the King|return of the king|lotr|lord of the rings|2000s;Ben-Hur|1950s;The Departed|2000s;Slumdog Millionaire|2000s;Chicago|2000s;Rain Man|1980s;Argo|2010s;The Godfather Part II|1970s;One Flew Over the Cuckoo's Nest|1970s;No Country for Old Men|2000s;A Beautiful Mind|2000s;American Beauty|1990s;Dances with Wolves|1990s;The King's Speech|2010s;Everything Everywhere All at Once|everything everywhere|2020s;Unforgiven|1990s;Moonlight|2010s;Green Book|2010s;The Shape of Water|2010s;Million Dollar Baby|2000s;Shakespeare in Love|1990s;Lawrence of Arabia|1960s;West Side Story|1960s;Annie Hall|1970s;Platoon|1980s;Gandhi|1980s;Amadeus|1980s;Birdman|2010s;12 Years a Slave|2010s;Spotlight|2010s;Nomadland|2020s;CODA|2020s;Anora|2020s;The Hurt Locker|2000s;The Artist|2010s;Crash|2000s;The English Patient|1990s;Driving Miss Daisy|1980s;Out of Africa|1980s;Kramer vs. Kramer|1970s;The Deer Hunter|1970s;The Sting|1970s;The French Connection|1970s;Patton|1970s;Midnight Cowboy|1960s;My Fair Lady|1960s;The Apartment|1960s;All About Eve|1950s;On the Waterfront|1950s;The Bridge on the River Kwai|1950s;Terms of Endearment|1980s;Chariots of Fire|1980s;Ordinary People|1980s;The Last Emperor|1980s;Oliver!|1960s;In the Heat of the Night|1960s;A Man for All Seasons|1960s;Tom Jones|1960s;Around the World in 80 Days|1950s;Gigi|1950s;Marty|1950s;From Here to Eternity|1950s;The Greatest Show on Earth|1950s;An American in Paris|1950s;All the King's Men|1940s;Hamlet|1940s;Gentleman's Agreement|1940s;The Best Years of Our Lives|1940s;The Lost Weekend|1940s;Going My Way|1940s;Mrs. Miniver|1940s;How Green Was My Valley|1940s;Rebecca|1940s;You Can't Take It with You|1930s;The Life of Emile Zola|1930s;The Great Ziegfeld|1930s;Mutiny on the Bounty|1930s;It Happened One Night|1930s;Cavalcade|1930s;Grand Hotel|1930s;Cimarron|1930s;All Quiet on the Western Front|1930s;The Broadway Melody|1920s;Wings|1920s";
DS("bestpic",BP.split(";").map(s=>{const p=s.split("|");const d=p.pop();return p.join("|")+" #d"+d;}).join("\n"));
ALL("oscars","bestpic","Name a Best Picture Oscar winner","Every winner through 2025.");
["1970s","1980s","1990s","2000s","2010s"].forEach(d=>T("oscars","bestpic",`Name a Best Picture winner from the ${d}`,"By ceremony year.","d"+d));

const DIR={
 "Steven Spielberg":"Jaws;E.T. the Extra-Terrestrial|et|e t;Jurassic Park;Raiders of the Lost Ark;Schindler's List;Saving Private Ryan;Close Encounters of the Third Kind;Indiana Jones and the Last Crusade|last crusade;Catch Me If You Can;Indiana Jones and the Temple of Doom|temple of doom;Minority Report;War of the Worlds;The Color Purple;Hook;Lincoln;Ready Player One;Bridge of Spies;The Terminal;Munich;A.I. Artificial Intelligence|ai;The Lost World: Jurassic Park|the lost world;West Side Story;The Post;The Fabelmans;War Horse;The BFG|bfg;Duel;Empire of the Sun;1941;Indiana Jones and the Kingdom of the Crystal Skull|kingdom of the crystal skull;The Adventures of Tintin|tintin;Always",
 "Christopher Nolan":"The Dark Knight;Inception;Interstellar;Oppenheimer;Memento;The Prestige;Dunkirk;Batman Begins;The Dark Knight Rises;Tenet;Insomnia;Following",
 "Quentin Tarantino":"Pulp Fiction;Kill Bill|kill bill vol 1|kill bill vol 2|kill bill volume 1;Django Unchained;Inglourious Basterds|inglorious bastards;Reservoir Dogs;Once Upon a Time in Hollywood;The Hateful Eight|hateful 8;Jackie Brown;Death Proof",
 "Martin Scorsese":"Goodfellas;Taxi Driver;The Wolf of Wall Street;The Departed;Raging Bull;Casino;Shutter Island;The Irishman;Gangs of New York;The Aviator;Killers of the Flower Moon;Hugo;Cape Fear;Mean Streets;The King of Comedy;Silence;After Hours;The Age of Innocence;The Last Temptation of Christ;The Color of Money",
 "Alfred Hitchcock":"Psycho;The Birds;Vertigo;Rear Window;North by Northwest;Rebecca;Dial M for Murder;Strangers on a Train;Rope;Notorious;To Catch a Thief;The Man Who Knew Too Much;Spellbound;Marnie;Frenzy;Lifeboat;Shadow of a Doubt;The 39 Steps;Saboteur;Torn Curtain",
 "Stanley Kubrick":"The Shining;2001: A Space Odyssey|2001;A Clockwork Orange;Full Metal Jacket;Dr. Strangelove|doctor strangelove;Eyes Wide Shut;Barry Lyndon;Spartacus;Lolita;Paths of Glory;The Killing",
 "James Cameron":"Titanic;Avatar;The Terminator;Terminator 2: Judgment Day|terminator 2|t2;Aliens;True Lies;The Abyss;Avatar: The Way of Water|the way of water;Avatar: Fire and Ash|fire and ash;Piranha II",
 "Tim Burton":"Edward Scissorhands;Beetlejuice;Batman;Batman Returns;Charlie and the Chocolate Factory;Alice in Wonderland;Sleepy Hollow;Corpse Bride;Big Fish;Sweeney Todd;Ed Wood;Mars Attacks!;Planet of the Apes;Dark Shadows;Frankenweenie;Big Eyes;Miss Peregrine's Home for Peculiar Children;Dumbo;Pee-wee's Big Adventure;Beetlejuice Beetlejuice",
 "Ridley Scott":"Alien;Blade Runner;Gladiator;The Martian;Thelma & Louise|thelma and louise;Black Hawk Down;Kingdom of Heaven;American Gangster;Hannibal;Prometheus;House of Gucci;Napoleon;Gladiator II;Robin Hood;Body of Lies;The Last Duel;Exodus: Gods and Kings",
 "David Fincher":"Fight Club;Se7en|seven;The Social Network;Gone Girl;Zodiac;The Curious Case of Benjamin Button|benjamin button;The Girl with the Dragon Tattoo;Panic Room;The Game;Alien 3;Mank;The Killer",
 "the Coen brothers":"Fargo;The Big Lebowski;No Country for Old Men;O Brother, Where Art Thou?|o brother where art thou;True Grit;Raising Arizona;Inside Llewyn Davis;Burn After Reading;A Serious Man;Miller's Crossing;Barton Fink;Hail, Caesar!|hail caesar;The Ballad of Buster Scruggs;Blood Simple;The Hudsucker Proxy",
 "Wes Anderson":"The Grand Budapest Hotel;The Royal Tenenbaums;Moonrise Kingdom;Fantastic Mr. Fox;Rushmore;The Life Aquatic with Steve Zissou|the life aquatic;Isle of Dogs;The Darjeeling Limited;The French Dispatch;Asteroid City;Bottle Rocket;The Phoenician Scheme",
 "Robert Zemeckis":"Back to the Future;Forrest Gump;Who Framed Roger Rabbit;Cast Away;Back to the Future Part II;Contact;The Polar Express;Romancing the Stone;Death Becomes Her;Back to the Future Part III;What Lies Beneath;Flight;Beowulf;Allied;Here",
 "Peter Jackson":"The Fellowship of the Ring|fellowship of the ring;The Two Towers;The Return of the King;King Kong;The Hobbit: An Unexpected Journey|an unexpected journey;The Hobbit: The Desolation of Smaug|desolation of smaug;The Hobbit: The Battle of the Five Armies|battle of the five armies;The Lovely Bones;Heavenly Creatures;Braindead|dead alive"
};
Object.keys(DIR).forEach(d=>L("directors",`Name a film directed by ${d}`,"Feature films.",DIR[d]));
const ACT={
 "Tom Hanks":"Forrest Gump;Cast Away;Toy Story;Saving Private Ryan;Big;The Green Mile;Philadelphia;Apollo 13;Catch Me If You Can;The Da Vinci Code;Sleepless in Seattle;You've Got Mail;Splash;A League of Their Own;Captain Phillips;The Terminal;Bridge of Spies;Sully;Road to Perdition;The Polar Express;Elvis;A Man Called Otto;Turner & Hooch|turner and hooch;Angels & Demons;The Post;Greyhound;News of the World",
 "Leonardo DiCaprio":"Titanic;Inception;The Wolf of Wall Street;The Revenant;The Departed;Catch Me If You Can;Shutter Island;The Great Gatsby;Django Unchained;Romeo + Juliet|romeo and juliet;Once Upon a Time in Hollywood;Gangs of New York;The Aviator;Blood Diamond;What's Eating Gilbert Grape;Killers of the Flower Moon;Don't Look Up;The Beach;The Man in the Iron Mask;J. Edgar;One Battle After Another",
 "Tom Cruise":"Top Gun;Top Gun: Maverick|maverick;Mission: Impossible|mission impossible;Jerry Maguire;Risky Business;Rain Man;A Few Good Men;Edge of Tomorrow;Minority Report;The Last Samurai;Interview with the Vampire;Eyes Wide Shut;Collateral;War of the Worlds;Jack Reacher;Oblivion;Days of Thunder;Cocktail;Born on the Fourth of July;Vanilla Sky;Magnolia;Tropic Thunder;The Firm;Far and Away;Knight and Day;American Made;The Mummy",
 "Meryl Streep":"The Devil Wears Prada;Mamma Mia!|mamma mia;Sophie's Choice;Kramer vs. Kramer;The Iron Lady;Out of Africa;Julie & Julia|julie and julia;Doubt;The Deer Hunter;Into the Woods;Little Women;The Post;Silkwood;Death Becomes Her;The Bridges of Madison County;Adaptation;It's Complicated;Don't Look Up;Postcards from the Edge;Florence Foster Jenkins",
 "Will Smith":"Men in Black;Independence Day;Bad Boys;I Am Legend;The Pursuit of Happyness;Hitch;Ali;Aladdin;I, Robot;Hancock;Enemy of the State;Wild Wild West;King Richard;Suicide Squad;Shark Tale;Focus;Concussion;Seven Pounds;Bright;Gemini Man",
 "Harrison Ford":"Star Wars;Raiders of the Lost Ark;Blade Runner;The Fugitive;Air Force One;The Empire Strikes Back;Witness;Patriot Games;Clear and Present Danger;What Lies Beneath;Working Girl;Sabrina;The Mosquito Coast;42;Blade Runner 2049;Presumed Innocent;Six Days, Seven Nights;Regarding Henry;Frantic;Ender's Game",
 "Denzel Washington":"Training Day;Glory;Malcolm X;Remember the Titans;Philadelphia;The Equalizer;Man on Fire;American Gangster;Flight;Fences;Inside Man;The Book of Eli;Déjà Vu|deja vu;The Hurricane;Crimson Tide;The Pelican Brief;John Q;Unstoppable;Safe House;The Magnificent Seven;Gladiator II;Antwone Fisher;The Bone Collector;Courage Under Fire;Devil in a Blue Dress",
 "Brad Pitt":"Fight Club;Se7en|seven;Ocean's Eleven;Troy;Mr. & Mrs. Smith|mr and mrs smith;Moneyball;Inglourious Basterds;The Curious Case of Benjamin Button;Once Upon a Time in Hollywood;Interview with the Vampire;Legends of the Fall;12 Monkeys;Thelma & Louise;Snatch;World War Z;Bullet Train;Babylon;F1;Meet Joe Black;Fury;Ad Astra;Burn After Reading;Seven Years in Tibet;A River Runs Through It",
 "Johnny Depp":"Pirates of the Caribbean;Edward Scissorhands;Charlie and the Chocolate Factory;Alice in Wonderland;Sweeney Todd;Sleepy Hollow;Ed Wood;Donnie Brasco;Fear and Loathing in Las Vegas;Blow;Public Enemies;What's Eating Gilbert Grape;Cry-Baby;A Nightmare on Elm Street;Finding Neverland;Corpse Bride;Rango;Dark Shadows;The Lone Ranger;Black Mass",
 "Julia Roberts":"Pretty Woman;Notting Hill;Erin Brockovich;My Best Friend's Wedding;Runaway Bride;Ocean's Eleven;Steel Magnolias;Mystic Pizza;Eat Pray Love;Sleeping with the Enemy;The Pelican Brief;Hook;Flatliners;Closer;Wonder;Mona Lisa Smile;August: Osage County;Ticket to Paradise;Leave the World Behind;Charlie Wilson's War",
 "Jim Carrey":"Ace Ventura|ace ventura pet detective;The Mask;Dumb and Dumber;Liar Liar;The Truman Show;Bruce Almighty;How the Grinch Stole Christmas|the grinch;Eternal Sunshine of the Spotless Mind;Yes Man;Man on the Moon;Me, Myself & Irene;The Cable Guy;Batman Forever;A Series of Unfortunate Events;Sonic the Hedgehog;Fun with Dick and Jane;Mr. Popper's Penguins;The Number 23;Horton Hears a Who!",
 "Adam Sandler":"Happy Gilmore;Billy Madison;The Waterboy;The Wedding Singer;Big Daddy;50 First Dates;Grown Ups;Click;Mr. Deeds;Anger Management;Uncut Gems;Hotel Transylvania;Pixels;Just Go with It;Little Nicky;The Longest Yard;Hustle;Murder Mystery;Blended;You Don't Mess with the Zohan;Happy Gilmore 2;Punch-Drunk Love;Spaceman;Jack and Jill",
 "Morgan Freeman":"The Shawshank Redemption;Se7en|seven;Driving Miss Daisy;Million Dollar Baby;Bruce Almighty;Invictus;Glory;Unforgiven;The Dark Knight;Batman Begins;Lucy;Now You See Me;Deep Impact;Kiss the Girls;The Bucket List;Robin Hood: Prince of Thieves;Olympus Has Fallen;Wanted;Evan Almighty;Oblivion;Lean on Me;Along Came a Spider",
 "Robin Williams":"Mrs. Doubtfire;Good Will Hunting;Dead Poets Society;Aladdin;Jumanji;Hook;Good Morning, Vietnam;Patch Adams;The Birdcage;Night at the Museum;Flubber;Awakenings;One Hour Photo;Insomnia;Bicentennial Man;What Dreams May Come;Jack;Popeye;Toys;RV;The Fisher King;Happy Feet;Robots",
 "Arnold Schwarzenegger":"The Terminator;Terminator 2: Judgment Day|terminator 2;Predator;Total Recall;True Lies;Kindergarten Cop;Twins;Commando;Conan the Barbarian;Junior;Jingle All the Way;Eraser;The Running Man;Last Action Hero;Batman & Robin;Red Heat;End of Days;The 6th Day;Collateral Damage;Terminator 3;The Expendables",
 "Sylvester Stallone":"Rocky;Rambo|first blood;Creed;The Expendables;Cliffhanger;Demolition Man;Cobra;Judge Dredd;Over the Top;Tango & Cash;Rocky IV;Daylight;Cop Land;Escape Plan;Get Carter;Assassins;Lock Up;Stop! Or My Mom Will Shoot;Oscar",
 "Eddie Murphy":"Beverly Hills Cop;Coming to America;Trading Places;48 Hrs.|48 hours;The Nutty Professor;Shrek;Dr. Dolittle;Mulan;Bowfinger;Dreamgirls;Norbit;Daddy Day Care;The Haunted Mansion;Boomerang;Harlem Nights;The Golden Child;Dolemite Is My Name;Tower Heist;Coming 2 America",
 "Sandra Bullock":"Speed;Gravity;The Blind Side;Miss Congeniality;Ocean's 8;The Proposal;While You Were Sleeping;Bird Box;The Heat;Two Weeks Notice;Practical Magic;The Net;Hope Floats;Demolition Man;A Time to Kill;The Lake House;Crash;Minions;The Lost City;Forces of Nature;28 Days",
 "Keanu Reeves":"The Matrix;John Wick;Speed;Point Break;Bill & Ted's Excellent Adventure|bill and teds excellent adventure;Constantine;The Devil's Advocate;Toy Story 4;The Lake House;My Own Private Idaho;Bram Stoker's Dracula|dracula;Johnny Mnemonic;Little Buddha;Chain Reaction;Sweet November;The Replacements;Something's Gotta Give;A Scanner Darkly;The Day the Earth Stood Still;47 Ronin;Always Be My Maybe",
 "Matt Damon":"Good Will Hunting;The Bourne Identity|bourne;The Martian;Saving Private Ryan;Ocean's Eleven;The Departed;Interstellar;The Talented Mr. Ripley;Dogma;Rounders;Invictus;Elysium;Contagion;Ford v Ferrari;Oppenheimer;We Bought a Zoo;True Grit;Air;Stillwater;The Last Duel;Downsizing;The Monuments Men;Syriana;Green Zone;The Adjustment Bureau",
 "Jack Nicholson":"The Shining;One Flew Over the Cuckoo's Nest;Batman;As Good as It Gets;A Few Good Men;Chinatown;The Departed;Terms of Endearment;Easy Rider;Five Easy Pieces;The Bucket List;About Schmidt;Anger Management;Something's Gotta Give;Mars Attacks!;The Witches of Eastwick;Wolf;Prizzi's Honor;Reds;Hoffa",
 "Robert De Niro":"Taxi Driver;Goodfellas;Raging Bull;The Godfather Part II;Casino;Meet the Parents;The Deer Hunter;Heat;Analyze This;Cape Fear;The Irishman;Joker;The Intern;Silver Linings Playbook;A Bronx Tale;Ronin;Jackie Brown;Midnight Run;The Untouchables;Once Upon a Time in America;Killers of the Flower Moon;Awakenings;Wag the Dog;Mean Streets;The King of Comedy",
 "Al Pacino":"The Godfather;Scarface;Heat;Scent of a Woman;Dog Day Afternoon;Serpico;Carlito's Way;The Devil's Advocate;Donnie Brasco;The Irishman;Glengarry Glen Ross;Insomnia;Any Given Sunday;The Insider;Ocean's Thirteen;Dick Tracy;House of Gucci;Sea of Love;Frankie and Johnny;Righteous Kill;Once Upon a Time in Hollywood"
};
Object.keys(ACT).forEach(a=>L("actors",`Name a movie starring ${a}`,"Voice roles count.",ACT[a]));

L("animation","Name a Pixar movie","Feature films through 2025.","Toy Story;Finding Nemo;The Incredibles;Monsters, Inc.|monsters inc;Up;Cars;Inside Out;WALL-E|wall e;Ratatouille;Coco;Toy Story 3;Toy Story 2;Finding Dory;A Bug's Life;Brave;Monsters University;Incredibles 2;Toy Story 4;Soul;Luca;Turning Red;Cars 2;Cars 3;Inside Out 2;Onward;The Good Dinosaur;Elemental;Lightyear;Elio");
L("animation","Name a Walt Disney Animation Studios movie","Feature films through 2025. Not Pixar.","The Lion King;Frozen;Aladdin;Beauty and the Beast;The Little Mermaid;Snow White and the Seven Dwarfs|snow white;Cinderella;Moana;Tangled;Mulan;Bambi;Pinocchio;Dumbo;Peter Pan;Lady and the Tramp;Sleeping Beauty;Zootopia;Encanto;Frozen II|frozen 2;Lilo & Stitch|lilo and stitch;Pocahontas;Hercules;Tarzan;The Jungle Book;Alice in Wonderland;One Hundred and One Dalmatians|101 dalmatians;The Hunchback of Notre Dame;Big Hero 6;Wreck-It Ralph;The Princess and the Frog;Robin Hood;The Aristocats;Fantasia;The Emperor's New Groove;Bolt;Moana 2;Zootopia 2;Raya and the Last Dragon;The Fox and the Hound;The Sword in the Stone;Ralph Breaks the Internet;Atlantis: The Lost Empire;Treasure Planet;Brother Bear;Chicken Little;Meet the Robinsons;Wish;Strange World;The Rescuers;The Great Mouse Detective;Oliver & Company;The Many Adventures of Winnie the Pooh;Home on the Range;Dinosaur;Fantasia 2000;The Black Cauldron;The Rescuers Down Under;The Three Caballeros;Saludos Amigos;Make Mine Music;Melody Time");
L("animation","Name a DreamWorks Animation movie","Through 2025.","Shrek;Kung Fu Panda;Madagascar;How to Train Your Dragon;Shrek 2;Shark Tale;The Prince of Egypt;Puss in Boots;Megamind;The Boss Baby;Trolls;Bee Movie;Over the Hedge;Monsters vs. Aliens;The Croods;Chicken Run;Antz;The Road to El Dorado;Spirit: Stallion of the Cimarron|spirit;Shrek the Third;Shrek Forever After;The Wild Robot;Flushed Away;Rise of the Guardians;Turbo;Home;Penguins of Madagascar;Captain Underpants;Abominable;The Bad Guys;Mr. Peabody & Sherman;Sinbad: Legend of the Seven Seas;Wallace & Gromit: The Curse of the Were-Rabbit;Kung Fu Panda 4;Trolls World Tour;Puss in Boots: The Last Wish;Ruby Gillman, Teenage Kraken;Dog Man;The Bad Guys 2;Spirit Untamed");
L("animation","Name a Studio Ghibli movie","","Spirited Away;My Neighbor Totoro|totoro;Princess Mononoke;Howl's Moving Castle;Kiki's Delivery Service;Ponyo;Castle in the Sky|laputa;Grave of the Fireflies;Nausicaä of the Valley of the Wind|nausicaa;The Wind Rises;Porco Rosso;The Boy and the Heron;Whisper of the Heart;The Cat Returns;Arrietty|the secret world of arrietty;From Up on Poppy Hill;The Tale of the Princess Kaguya|princess kaguya;When Marnie Was There;Only Yesterday;Pom Poko;My Neighbors the Yamadas;Tales from Earthsea;Ocean Waves;Earwig and the Witch;The Red Turtle");
L("franchise","Name a Marvel Cinematic Universe movie","Through 2025.","Avengers: Endgame|endgame;The Avengers;Iron Man;Avengers: Infinity War|infinity war;Black Panther;Spider-Man: No Way Home|no way home;Guardians of the Galaxy;Captain America: Civil War|civil war;Thor: Ragnarok|ragnarok;Captain America: The Winter Soldier|the winter soldier;Doctor Strange;Captain Marvel;Ant-Man;Spider-Man: Homecoming|homecoming;Thor;Captain America: The First Avenger|the first avenger;Iron Man 2;Iron Man 3;Avengers: Age of Ultron|age of ultron;Guardians of the Galaxy Vol. 2;Deadpool & Wolverine|deadpool and wolverine;Spider-Man: Far From Home|far from home;Black Widow;The Incredible Hulk;Thor: The Dark World|the dark world;Shang-Chi and the Legend of the Ten Rings|shang chi;Eternals;Ant-Man and the Wasp;Doctor Strange in the Multiverse of Madness;Thor: Love and Thunder|love and thunder;Black Panther: Wakanda Forever|wakanda forever;Guardians of the Galaxy Vol. 3;Ant-Man and the Wasp: Quantumania|quantumania;The Marvels;Captain America: Brave New World|brave new world;Thunderbolts*|thunderbolts;The Fantastic Four: First Steps|fantastic four|first steps");
L("franchise","Name a Star Wars movie","Theatrical films through 2025.","A New Hope|star wars|episode iv;The Empire Strikes Back|empire strikes back|episode v;Return of the Jedi|episode vi;The Phantom Menace|episode i;Revenge of the Sith|episode iii;The Force Awakens|episode vii;Attack of the Clones|episode ii;Rogue One;The Last Jedi|episode viii;The Rise of Skywalker|episode ix;Solo|solo a star wars story;The Clone Wars");
L("franchise","Name a Harry Potter or Fantastic Beasts movie","","Harry Potter and the Sorcerer's Stone|sorcerers stone|philosophers stone;Harry Potter and the Chamber of Secrets|chamber of secrets;Harry Potter and the Prisoner of Azkaban|prisoner of azkaban;Harry Potter and the Goblet of Fire|goblet of fire;Harry Potter and the Deathly Hallows – Part 2|deathly hallows part 2;Harry Potter and the Deathly Hallows – Part 1|deathly hallows part 1|deathly hallows;Harry Potter and the Order of the Phoenix|order of the phoenix;Harry Potter and the Half-Blood Prince|half blood prince;Fantastic Beasts and Where to Find Them|fantastic beasts;Fantastic Beasts: The Crimes of Grindelwald|crimes of grindelwald;Fantastic Beasts: The Secrets of Dumbledore|secrets of dumbledore");
L("franchise","Name a James Bond film","The official Eon series.","Goldfinger;Skyfall;Casino Royale;Dr. No;GoldenEye;From Russia with Love;Thunderball;Live and Let Die;The Spy Who Loved Me;No Time to Die;Moonraker;You Only Live Twice;Spectre;Diamonds Are Forever;Tomorrow Never Dies;The World Is Not Enough;Quantum of Solace;Die Another Day;Octopussy;A View to a Kill;The Man with the Golden Gun;For Your Eyes Only;On Her Majesty's Secret Service;Licence to Kill|license to kill;The Living Daylights");
L("franchise","Name an actor who has played James Bond","Including the 1967 Casino Royale.","Sean Connery;Daniel Craig;Roger Moore;Pierce Brosnan;Timothy Dalton;George Lazenby;David Niven",{surname:true});
L("franchise","Name a Jurassic Park or Jurassic World movie","","Jurassic Park;Jurassic World;The Lost World: Jurassic Park|the lost world;Jurassic Park III|jurassic park 3;Jurassic World: Fallen Kingdom|fallen kingdom;Jurassic World Dominion|dominion;Jurassic World Rebirth|rebirth");
L("franchise","Name a Fast & Furious movie","","The Fast and the Furious;Fast Five;Furious 7;2 Fast 2 Furious;The Fast and the Furious: Tokyo Drift|tokyo drift;Fast & Furious|fast and furious;Fast & Furious 6;The Fate of the Furious;Fast X;F9;Hobbs & Shaw|hobbs and shaw");
L("holidaymovies","Name a Christmas movie","",`Home Alone;Elf;A Christmas Story;It's a Wonderful Life;The Polar Express;How the Grinch Stole Christmas|the grinch;The Santa Clause;Love Actually;Miracle on 34th Street;National Lampoon's Christmas Vacation|christmas vacation;The Nightmare Before Christmas;Die Hard;Home Alone 2: Lost in New York|home alone 2;A Christmas Carol;Scrooged;The Muppet Christmas Carol;Jingle All the Way;White Christmas;Bad Santa;Four Christmases;The Holiday;Klaus;Arthur Christmas;Fred Claus;Last Christmas;Gremlins;Jack Frost;Deck the Halls;Noelle;The Christmas Chronicles;Holiday Inn;Rudolph the Red-Nosed Reindeer;Frosty the Snowman;A Charlie Brown Christmas;Christmas with the Kranks;Krampus;The Family Stone;Office Christmas Party;Trading Places;Edward Scissorhands;Eight Crazy Nights;Violent Night;Red One;The Night Before;Carol;Happiest Season;A Bad Moms Christmas;The Bishop's Wife;Prancer;Ernest Saves Christmas;Spirited;Lethal Weapon;Babes in Toyland;Daddy's Home 2;Surviving Christmas`);

L("characters","Name a character from The Simpsons","",`Homer;Bart;Marge;Lisa;Maggie;Mr. Burns|montgomery burns|burns;Ned Flanders|flanders;Moe;Krusty the Clown|krusty;Apu;Milhouse;Smithers;Barney;Chief Wiggum;Ralph Wiggum|ralph;Sideshow Bob;Nelson;Patty;Selma;Grampa|abe simpson|grandpa;Principal Skinner|skinner;Edna Krabappel;Comic Book Guy;Otto;Groundskeeper Willie|willie;Lenny;Carl;Dr. Hibbert;Reverend Lovejoy;Troy McClure;Itchy;Scratchy;Martin Prince;Kent Brockman;Professor Frink;Hans Moleman;Fat Tony;Snake;Disco Stu;Cletus;Mayor Quimby;Lionel Hutz;Dr. Nick;Kearney;Jimbo;Sideshow Mel;Santa's Little Helper;Snowball II|snowball;Superintendent Chalmers|chalmers;Rod Flanders;Todd Flanders;Maude Flanders;Lunchlady Doris;Gil;Bumblebee Man;Agnes Skinner;Duffman`);
L("characters","Name a character from Friends","",`Rachel Green|rachel;Ross Geller|ross;Monica Geller|monica;Chandler Bing|chandler;Joey Tribbiani|joey;Phoebe Buffay|phoebe;Gunther;Janice;Mike Hannigan|mike;Richard Burke|richard;Emily;Carol;Susan;Ben;Emma;Ursula;Mr. Heckles;Ugly Naked Guy;Jack Geller;Judy Geller;Estelle;Paolo;Julie;Tag;Charlie;Kathy;Pete;David;Elizabeth;Paul;Eddie;Janine;Marcel;Jill;Amy;Barry;Mindy;Gavin;Joshua;Mona;Gary;Frank Jr.`);
L("characters","Name a character from The Office (US)","",`Michael Scott|michael;Dwight Schrute|dwight;Jim Halpert|jim;Pam Beesly|pam|pam halpert;Andy Bernard|andy;Kevin Malone|kevin;Angela Martin|angela;Oscar Martinez|oscar;Stanley Hudson|stanley;Phyllis Vance|phyllis;Creed Bratton|creed;Meredith Palmer|meredith;Kelly Kapoor|kelly;Ryan Howard|ryan;Toby Flenderson|toby;Darryl Philbin|darryl;Erin Hannon|erin;Jan Levinson|jan;Holly Flax|holly;David Wallace;Gabe Lewis|gabe;Robert California;Nellie Bertram|nellie;Clark Green;Pete Miller;Karen Filippelli|karen;Roy Anderson|roy;Todd Packer;Mose Schrute|mose;Jo Bennett;Deangelo Vickers;Charles Miner;Hank;Bob Vance;Cathy Simms;Danny Cordray;Nate`);
L("characters","Name a character from Seinfeld","",`Jerry Seinfeld|jerry;George Costanza|george;Elaine Benes|elaine;Cosmo Kramer|kramer;Newman;Frank Costanza;Estelle Costanza;J. Peterman|peterman;Mr. Pitt;Uncle Leo;David Puddy|puddy;Jackie Chiles;Susan Ross;Morty Seinfeld;Helen Seinfeld;The Soup Nazi|soup nazi;Kenny Bania;Mickey Abbott;George Steinbrenner;Babu Bhatt;Tim Whatley;Lloyd Braun;Jack Klompus;Sue Ellen Mischke;Crazy Joe Davola;The Bubble Boy;Mr. Lippman;Mr. Wilhelm`);
L("characters","Name a Star Wars character","",`Luke Skywalker|luke;Darth Vader|vader|anakin skywalker|anakin;Han Solo|han;Princess Leia|leia|leia organa;Yoda;Chewbacca|chewie;Obi-Wan Kenobi|obi wan|ben kenobi;R2-D2|r2d2;C-3PO|c3po;Darth Maul;Emperor Palpatine|palpatine|darth sidious;Boba Fett;Jabba the Hutt|jabba;Lando Calrissian|lando;Kylo Ren|ben solo;Rey;Finn;Poe Dameron;BB-8|bb8;Padmé Amidala|padme;Mace Windu;Qui-Gon Jinn;Jar Jar Binks;Count Dooku;General Grievous;Grogu|baby yoda;The Mandalorian|din djarin|mando;Ahsoka Tano|ahsoka;Jyn Erso;Cassian Andor|andor;K-2SO;Admiral Ackbar;Wedge Antilles;Grand Moff Tarkin|tarkin;Wicket;Snoke;General Hux;Captain Phasma;Rose Tico;Maz Kanata;Jango Fett;Watto;Greedo;Bossk;Nien Nunb;Mon Mothma;Saw Gerrera;Orson Krennic;Chirrut Îmwe|chirrut;Bo-Katan;Moff Gideon;Cad Bane;Fennec Shand;Ezra Bridger;Hera Syndulla;Thrawn;Asajj Ventress;Captain Rex;Qi'ra;Cara Dune;Greef Karga;Luthen Rael`);
L("characters","Name a Harry Potter character","",`Harry Potter|harry;Hermione Granger|hermione;Ron Weasley|ron;Albus Dumbledore|dumbledore;Lord Voldemort|voldemort|tom riddle;Severus Snape|snape;Rubeus Hagrid|hagrid;Draco Malfoy|draco;Sirius Black;Ginny Weasley|ginny;Neville Longbottom|neville;Luna Lovegood|luna;Dobby;Minerva McGonagall|mcgonagall;Bellatrix Lestrange|bellatrix;Fred Weasley;George Weasley;Remus Lupin|lupin;Lucius Malfoy;Dolores Umbridge|umbridge;Cedric Diggory;Molly Weasley;Arthur Weasley;Percy Weasley;Hedwig;Peter Pettigrew|wormtail;Gilderoy Lockhart;Argus Filch|filch;Cho Chang;Nymphadora Tonks|tonks;Mad-Eye Moody|alastor moody;Kingsley Shacklebolt;Viktor Krum;Fleur Delacour;Fawkes;Kreacher;Dudley Dursley;Vernon Dursley;Petunia Dursley;James Potter;Lily Potter;Moaning Myrtle;Nearly Headless Nick;Peeves;Crookshanks;Buckbeak;Aragog;Gellert Grindelwald|grindelwald;Horace Slughorn;Quirinus Quirrell|quirrell;Sybill Trelawney|trelawney;Pomona Sprout;Filius Flitwick;Madam Pomfrey;Rita Skeeter;Cornelius Fudge;Seamus Finnigan;Dean Thomas;Lavender Brown;Oliver Wood;Griphook;Ollivander;Narcissa Malfoy;Fenrir Greyback;Vincent Crabbe|crabbe;Gregory Goyle|goyle`);
L("characters","Name a character from The Lord of the Rings or The Hobbit","",`Frodo Baggins|frodo;Gandalf;Samwise Gamgee|sam|samwise;Aragorn;Legolas;Gimli;Gollum|smeagol;Bilbo Baggins|bilbo;Sauron;Saruman;Boromir;Merry;Pippin;Arwen;Galadriel;Elrond;Éowyn|eowyn;Théoden|theoden;Faramir;Denethor;Treebeard;Tom Bombadil;Gríma Wormtongue|wormtongue;Witch-king of Angmar|witch king;Éomer|eomer;Shelob;Smaug;Thorin Oakenshield|thorin;Radagast;Celeborn;Haldir;Bard;Thranduil;Tauriel;Balrog;Azog;Beorn;Isildur;Glorfindel;Rosie Cotton;Barliman Butterbur`);
L("characters","Name a Game of Thrones character","",`Jon Snow;Daenerys Targaryen|daenerys|dany;Tyrion Lannister|tyrion;Arya Stark|arya;Cersei Lannister|cersei;Sansa Stark|sansa;Ned Stark|eddard stark;Jaime Lannister|jaime;Joffrey Baratheon|joffrey;Bran Stark|bran;Robb Stark|robb;Khal Drogo|drogo;The Hound|sandor clegane;Littlefinger|petyr baelish;Varys;Brienne of Tarth|brienne;Samwell Tarly|sam tarly;Theon Greyjoy|theon;Ramsay Bolton|ramsay;Night King;Jorah Mormont|jorah;Melisandre;Stannis Baratheon|stannis;Robert Baratheon;Tywin Lannister|tywin;Margaery Tyrell|margaery;Olenna Tyrell|olenna;Oberyn Martell|oberyn;Davos Seaworth|davos;Gendry;Hodor;Missandei;Grey Worm;Bronn;Podrick Payne|podrick;The Mountain|gregor clegane;Ygritte;Tormund;Catelyn Stark|catelyn;Lysa Arryn;Jaqen H'ghar|jaqen;Euron Greyjoy;Yara Greyjoy;Tommen;Myrcella;Viserys;Gilly;High Sparrow;Shae;Ellaria Sand;Beric Dondarrion;Qyburn;Walder Frey;Roose Bolton`);
L("characters","Name a character from Breaking Bad","",`Walter White|walt|heisenberg;Jesse Pinkman|jesse;Saul Goodman|jimmy mcgill;Skyler White|skyler;Hank Schrader|hank;Gus Fring|gustavo fring;Mike Ehrmantraut|mike;Marie Schrader|marie;Walter White Jr.|flynn|walt jr;Tuco Salamanca|tuco;Todd Alquist|todd;Lydia Rodarte-Quayle|lydia;Jane Margolis|jane;Badger;Skinny Pete;Hector Salamanca|hector;Gale Boetticher|gale;Steven Gomez|gomez;Huell;Combo;Andrea;Brock;Ted Beneke;Krazy-8;Uncle Jack`);
L("characters","Name a character from Stranger Things","",`Eleven;Mike Wheeler|mike;Dustin Henderson|dustin;Lucas Sinclair|lucas;Will Byers|will;Max Mayfield|max;Jim Hopper|hopper;Joyce Byers|joyce;Steve Harrington|steve;Nancy Wheeler|nancy;Jonathan Byers|jonathan;Robin Buckley|robin;Eddie Munson|eddie;Billy Hargrove|billy;Erica Sinclair|erica;Murray Bauman|murray;Dr. Brenner|brenner;Vecna|henry creel;Barb;Bob Newby|bob;Argyle;Kali;Karen Wheeler;Demogorgon;Mind Flayer;Holly Wheeler;Dr. Owens;Suzie;Alexei;Enzo`);
L("characters","Name a Sesame Street character","",`Elmo;Big Bird;Cookie Monster;Oscar the Grouch|oscar;Bert;Ernie;Grover;Count von Count|the count;Abby Cadabby;Mr. Snuffleupagus|snuffleupagus|snuffy;Zoe;Rosita;Telly;Prairie Dawn;Herry Monster;Baby Bear;Julia;Mr. Hooper;Gordon;Maria;Bob;Kermit the Frog|kermit;Guy Smiley;Super Grover;Murray Monster;Hoots the Owl;Alan;Luis;Slimey;Mr. Noodle;Dorothy;Two-Headed Monster;Sherlock Hemlock;Forgetful Jones`);
L("characters","Name a Muppet","",`Kermit the Frog|kermit;Miss Piggy;Fozzie Bear|fozzie;Gonzo;Animal;Rowlf;Swedish Chef;Beaker;Dr. Bunsen Honeydew|bunsen;Statler;Waldorf;Scooter;Rizzo the Rat|rizzo;Pepe the King Prawn|pepe;Sam Eagle;Sweetums;Camilla the Chicken|camilla;Lew Zealand;Janice;Dr. Teeth;Floyd Pepper;Zoot;Walter;Crazy Harry;Robin the Frog;Uncle Deadly;Bobo the Bear;Clifford;Mahna Mahna`);
L("characters","Name a Looney Tunes character","",`Bugs Bunny;Daffy Duck;Porky Pig;Tweety;Sylvester;Road Runner;Wile E. Coyote;Elmer Fudd;Yosemite Sam;Foghorn Leghorn;Pepé Le Pew|pepe le pew;Speedy Gonzales;Marvin the Martian;Tasmanian Devil|taz;Lola Bunny;Granny;Gossamer;Michigan J. Frog;Marc Antony;Henery Hawk;Barnyard Dawg;Sam Sheepdog;Ralph Wolf;Petunia Pig;Cecil Turtle;Witch Hazel;Hippety Hopper;Beaky Buzzard;Penelope Pussycat;K-9`);
L("characters","Name a SpongeBob SquarePants character","",`SpongeBob|spongebob squarepants;Patrick Star|patrick;Squidward;Mr. Krabs|krabs;Sandy Cheeks|sandy;Plankton;Gary;Karen;Mrs. Puff;Pearl;Larry the Lobster;Mermaid Man;Barnacle Boy;Flying Dutchman;King Neptune;Bubble Bass;Squilliam Fancyson|squilliam;Patchy the Pirate;Potty the Parrot;Man Ray;DoodleBob;Old Man Jenkins;Kevin the Sea Cucumber;Dirty Bubble`);
L("characters","Name a Peanuts character","",`Charlie Brown;Snoopy;Linus;Lucy;Woodstock;Peppermint Patty;Marcie;Sally;Schroeder;Pig-Pen|pigpen;Franklin;Rerun;The Little Red-Haired Girl;Spike;Frieda;Violet;Shermy;Patty;Eudora;Joe Cool`);
L("characters","Name a Winnie the Pooh character","",`Winnie the Pooh|pooh;Piglet;Tigger;Eeyore;Christopher Robin;Rabbit;Owl;Kanga;Roo;Gopher;Heffalump;Woozle;Lumpy;Kessie`);
L("disney","Name a Disney princess or queen","Official princesses plus a few famous royals.",`Cinderella;Ariel;Belle;Jasmine;Snow White;Aurora|sleeping beauty;Elsa;Mulan;Rapunzel;Moana;Anna;Pocahontas;Tiana;Merida;Raya;Esmeralda;Giselle;Kida;Vanellope;Asha;Elena;Sofia`);
L("disney","Name a Disney villain","Disney and Pixar.",`Ursula;Maleficent;Scar;Jafar;Cruella de Vil|cruella;Gaston;Hades;Captain Hook|hook;Evil Queen|queen grimhilde;Lady Tremaine|wicked stepmother;Mother Gothel;Shere Khan;Ratigan;Dr. Facilier;Yzma;Hans;Frollo;Governor Ratcliffe;Shan Yu;Queen of Hearts;Medusa;Horned King;Kaa;Edgar;Syndrome;Lotso;Randall;Hopper;Chernabog;Clayton;Prince John;Sir Hiss;Madam Mim;Pete;Stromboli;Honest John;Monstro;King Magnifico;Tamatoa;Big Bad Wolf;Lucifer;Percival McLeach;Charles Muntz;Ernesto de la Cruz;Chef Skinner;Stinky Pete;Sid Phillips|sid`);

DS("comics",`
Spider-Man|spiderman|peter parker #marvel hero avenger
Batman|bruce wayne #dc hero
Superman|clark kent #dc hero
Iron Man|tony stark #marvel hero avenger
Wonder Woman|diana prince #dc hero
Captain America|steve rogers #marvel hero avenger
The Joker|joker #dc villain bat
Thor #marvel hero avenger
Hulk|bruce banner|the hulk #marvel hero avenger
Wolverine|logan #marvel hero xmen avenger
Black Widow|natasha romanoff #marvel hero avenger
Thanos #marvel villain
The Flash|flash|barry allen #dc hero
Aquaman #dc hero
Deadpool #marvel hero
Black Panther|tchalla #marvel hero avenger
Lex Luthor #dc villain
Harley Quinn #dc villain bat
Loki #marvel villain
Green Lantern #dc hero
Catwoman #dc villain bat
Doctor Strange #marvel hero avenger
Magneto #marvel villain
Hawkeye #marvel hero avenger
Green Goblin #marvel villain spidey
Venom #marvel villain spidey
Captain Marvel #marvel hero avenger
Robin #dc hero
Penguin|the penguin #dc villain bat
Riddler|the riddler #dc villain bat
Storm #marvel hero xmen
Two-Face #dc villain bat
Ant-Man #marvel hero avenger
Scarlet Witch|wanda #marvel hero avenger
Poison Ivy #dc villain bat
Doctor Octopus|doc ock #marvel villain spidey
Bane #dc villain bat
Cyclops #marvel hero xmen
Jean Grey #marvel hero xmen
Professor X|charles xavier #marvel hero xmen
Supergirl #dc hero
Ultron #marvel villain
Doctor Doom #marvel villain
Red Skull #marvel villain
Daredevil #marvel hero
Punisher|the punisher #marvel hero
Scarecrow #dc villain bat
Darkseid #dc villain
Cyborg #dc hero
Groot #marvel hero
Star-Lord #marvel hero
Gamora #marvel hero
Rocket Raccoon|rocket #marvel hero
Vision #marvel hero avenger
Falcon #marvel hero avenger
Winter Soldier|bucky barnes #marvel hero avenger
Mystique #marvel villain
Batgirl #dc hero
Mr. Freeze #dc villain bat
General Zod #dc villain
Rogue #marvel hero xmen
Beast #marvel hero xmen avenger
Gambit #marvel hero xmen
Iceman #marvel hero xmen
Nightcrawler #marvel hero xmen
Colossus #marvel hero xmen
Ghost Rider #marvel hero
Silver Surfer #marvel hero
Galactus #marvel villain
Kingpin #marvel villain spidey
Ra's al Ghul #dc villain bat
Sandman #marvel villain spidey
Electro #marvel villain spidey
Vulture #marvel villain spidey
Mysterio #marvel villain spidey
Deathstroke #dc villain bat
Brainiac #dc villain
Sinestro #dc villain
Martian Manhunter #dc hero
Green Arrow #dc hero
Shazam #dc hero
Nightwing #dc hero
Hela #marvel villain
Killmonger #marvel villain
Kraven the Hunter|kraven #marvel villain spidey
Lizard #marvel villain spidey
Rhino #marvel villain spidey
Carnage #marvel villain spidey
Juggernaut #marvel villain
Sabretooth #marvel villain
Apocalypse #marvel villain
Black Manta #dc villain
Reverse-Flash #dc villain
Cheetah #dc villain
Doomsday #dc villain
Killer Croc #dc villain bat
Mad Hatter #dc villain bat
Black Canary #dc hero
Luke Cage #marvel hero
Jessica Jones #marvel hero
Iron Fist #marvel hero
Moon Knight #marvel hero
She-Hulk #marvel hero avenger
Ms. Marvel #marvel hero avenger
Mister Fantastic #marvel hero
Invisible Woman #marvel hero
Human Torch #marvel hero
The Thing #marvel hero
Nick Fury #marvel hero
Shang-Chi #marvel hero
Blade #marvel hero
Quicksilver #marvel hero avenger
Miles Morales #marvel hero
War Machine #marvel hero avenger
Kitty Pryde #marvel hero xmen
Jubilee #marvel hero xmen
Psylocke #marvel hero xmen
Cable #marvel hero
Emma Frost #marvel hero xmen
Angel #marvel hero xmen
Bishop #marvel hero xmen
Havok #marvel hero xmen
Dazzler #marvel hero xmen
Wasp #marvel hero avenger
Raven #dc hero
Starfire #dc hero
Beast Boy #dc hero
Blue Beetle #dc hero
Hawkgirl #dc hero
Hawkman #dc hero
Zatanna #dc hero
Constantine #dc hero
Swamp Thing #dc hero
Hobgoblin #marvel villain spidey
Bullseye #marvel villain
Taskmaster #marvel villain
Kang the Conqueror|kang #marvel villain
Baron Zemo|zemo #marvel villain
Mandarin #marvel villain
Clayface #dc villain bat
Hush #dc villain bat
Black Mask #dc villain bat
Hugo Strange #dc villain bat
Ventriloquist #dc villain bat
Talia al Ghul #dc villain bat
Captain Cold #dc villain
Gorilla Grodd #dc villain
Bizarro #dc villain
Steppenwolf #dc villain
Shocker #marvel villain spidey
Morbius #marvel villain spidey
Chameleon #marvel villain spidey
Scorpion #marvel villain spidey
`);
T("comics","comics","Name a Marvel superhero","","marvel&hero");
T("comics","comics","Name a DC superhero","","dc&hero");
T("comics","comics","Name a Marvel villain","","marvel&villain");
T("comics","comics","Name a DC villain","","dc&villain");
T("comics","comics","Name a Batman villain","","bat");
T("comics","comics","Name a Spider-Man villain","","spidey");
T("comics","comics","Name a member of the X-Men","Any era.","xmen");
T("comics","comics","Name a member of the Avengers","Comics or films.","avenger");
ALL("comics","comics","Name a comic book superhero or supervillain","Marvel or DC.");

L("tvshows","Name a sitcom","TV situation comedies.",`Friends;Seinfeld;The Office;The Big Bang Theory;How I Met Your Mother;Cheers;Frasier;Parks and Recreation;Modern Family;Brooklyn Nine-Nine;The Simpsons;Everybody Loves Raymond;Two and a Half Men;Arrested Development;Full House;The Fresh Prince of Bel-Air;I Love Lucy;Family Matters;Scrubs;That '70s Show;Married... with Children;Community;30 Rock;It's Always Sunny in Philadelphia;Curb Your Enthusiasm;Schitt's Creek;The Golden Girls;Happy Days;M*A*S*H|mash;Roseanne;Will & Grace;Malcolm in the Middle;New Girl;Silicon Valley;Veep;Abbott Elementary;Ted Lasso;The Good Place;Superstore;Home Improvement;Saved by the Bell;The Cosby Show;Family Ties;Growing Pains;Boy Meets World;Sanford and Son;All in the Family;The Jeffersons;The Brady Bunch;Gilligan's Island;The Andy Griffith Show;Leave It to Beaver;Bewitched;I Dream of Jeannie;The Addams Family;The Munsters;Taxi;Mork & Mindy;Laverne & Shirley;Three's Company;Diff'rent Strokes;Perfect Strangers;Step by Step;Mad About You;The Nanny;The King of Queens;Black-ish;Fawlty Towers;Only Fools and Horses;Mr. Bean;Blackadder;The IT Crowd;Peep Show;Gavin & Stacey;Derry Girls;What We Do in the Shadows;Young Sheldon;Mom;The Middle;The Goldbergs;Kim's Convenience;Letterkenny`);
L("tvshows","Name a TV game show","",`Jeopardy!|jeopardy;Wheel of Fortune;The Price Is Right;Family Feud;Who Wants to Be a Millionaire?|who wants to be a millionaire;Deal or No Deal;Let's Make a Deal;The Newlywed Game;The Dating Game;Match Game;Hollywood Squares;Password;Pyramid|100000 pyramid;Press Your Luck;The Weakest Link;Minute to Win It;Are You Smarter Than a 5th Grader?;Supermarket Sweep;Double Dare;Legends of the Hidden Temple;Fear Factor;The Chase;Wipeout;Card Sharks;Name That Tune;Hole in the Wall;1 vs. 100;Cash Cab;Lingo;Catchphrase;Blankety Blank;Countdown;University Challenge;Mastermind;Pointless;Tipping Point;The Wall;Win Ben Stein's Money;Beat Shazam;Concentration;To Tell the Truth;What's My Line?;The $64,000 Question;Twenty-One`);
L("tvshows","Name a reality TV show","",`Survivor;The Bachelor;The Bachelorette;Big Brother;American Idol;The Voice;America's Got Talent;Keeping Up with the Kardashians;The Amazing Race;Dancing with the Stars;The Real World;Jersey Shore;Shark Tank;Love Island;The Real Housewives;Top Chef;Hell's Kitchen;MasterChef;Project Runway;RuPaul's Drag Race;Queer Eye;The Great British Bake Off|great british baking show;The Apprentice;Duck Dynasty;Deadliest Catch;Pawn Stars;Storage Wars;Fixer Upper;Love Is Blind;Selling Sunset;Vanderpump Rules;Dance Moms;Toddlers & Tiaras;90 Day Fiancé|90 day fiance;Teen Mom;The Osbournes;The Simple Life;Laguna Beach;The Hills;Below Deck;Kitchen Nightmares;Extreme Makeover: Home Edition;Undercover Boss;Naked and Afraid;The Traitors;Squid Game: The Challenge;Too Hot to Handle;Married at First Sight;Sister Wives;Little People, Big World;Hoarders;Intervention;Cops;The Biggest Loser;American Ninja Warrior;The Masked Singer;So You Think You Can Dance;Flavor of Love`);
L("kidstv","Name a Nickelodeon show","",`SpongeBob SquarePants|spongebob;Rugrats;iCarly;Drake & Josh|drake and josh;The Fairly OddParents|fairly odd parents;Avatar: The Last Airbender|avatar;All That;Kenan & Kel;Hey Arnold!|hey arnold;The Adventures of Jimmy Neutron|jimmy neutron;Dora the Explorer;Blue's Clues;Victorious;Zoey 101;Danny Phantom;Invader Zim;Rocko's Modern Life;The Ren & Stimpy Show|ren and stimpy;The Amanda Show;Teenage Mutant Ninja Turtles;Doug;Aaahh!!! Real Monsters;CatDog;The Wild Thornberrys;The Angry Beavers;Sam & Cat;Big Time Rush;The Loud House;Henry Danger;Clarissa Explains It All;Are You Afraid of the Dark?;Ned's Declassified School Survival Guide;Unfabulous;The Legend of Korra;Paw Patrol;Bubble Guppies;The Thundermans;Hey Dude;My Life as a Teenage Robot;Back at the Barnyard`);
L("kidstv","Name a Cartoon Network show","",`The Powerpuff Girls;Dexter's Laboratory;Ed, Edd n Eddy;Courage the Cowardly Dog;Johnny Bravo;Adventure Time;Regular Show;Ben 10;Samurai Jack;Codename: Kids Next Door|kids next door;Teen Titans;Teen Titans Go!;Steven Universe;The Amazing World of Gumball|gumball;Cow and Chicken;Foster's Home for Imaginary Friends;The Grim Adventures of Billy & Mandy|billy and mandy;Camp Lazlo;Chowder;The Marvelous Misadventures of Flapjack|flapjack;Over the Garden Wall;We Bare Bears;Craig of the Creek;Uncle Grandpa;Clarence;I Am Weasel;Sheep in the Big City;Time Squad;Megas XLR;Hi Hi Puffy AmiYumi;Robotboy;Generator Rex;Infinity Train;Summer Camp Island;Apple & Onion;OK K.O.! Let's Be Heroes;Victor and Valentino;Space Ghost Coast to Coast;Sym-Bionic Titan;The Secret Saturdays`);
L("kidstv","Name a Disney Channel show","",`Hannah Montana;That's So Raven;Lizzie McGuire;The Suite Life of Zack & Cody|suite life;Wizards of Waverly Place;Phineas and Ferb;Kim Possible;Even Stevens;Good Luck Charlie;Sonny with a Chance;Jessie;Austin & Ally;Shake It Up;Girl Meets World;Liv and Maddie;Kickin' It;A.N.T. Farm;Dog with a Blog;Gravity Falls;Recess;The Proud Family;Lilo & Stitch: The Series;American Dragon: Jake Long;The Replacements;Cory in the House;The Suite Life on Deck;Andi Mack;Bunk'd;Raven's Home;Stuck in the Middle;K.C. Undercover;Bizaardvark;Sofia the First;Doc McStuffins;Mickey Mouse Clubhouse;Big City Greens;Amphibia;The Owl House;Star vs. the Forces of Evil;So Weird;Phil of the Future;Zeke and Luther;Lab Rats;Pair of Kings;Mighty Med`);
L("tvshows","Name an HBO series","",`The Sopranos;Game of Thrones;The Wire;Sex and the City;Succession;The Last of Us;Curb Your Enthusiasm;Euphoria;True Detective;Westworld;Six Feet Under;Veep;Boardwalk Empire;Silicon Valley;Band of Brothers;Chernobyl;The White Lotus;House of the Dragon;Deadwood;Entourage;Big Little Lies;The Newsroom;Barry;Insecure;Girls;Watchmen;Mare of Easttown;Oz;True Blood;Rome;The Leftovers;Ballers;Hacks;The Pacific;Generation Kill;Treme;Eastbound & Down;Flight of the Conchords;The Gilded Age;The Penguin;Industry;The Pitt`);
L("tvshows","Name a Netflix original series","",`Stranger Things;The Crown;Squid Game;Bridgerton;Wednesday;Orange Is the New Black;House of Cards;Narcos;Ozark;The Witcher;Money Heist;Black Mirror;Cobra Kai;13 Reasons Why;Tiger King;The Queen's Gambit;Emily in Paris;You;Lupin;Dark;Mindhunter;BoJack Horseman;Big Mouth;Sex Education;The Umbrella Academy;Russian Doll;Never Have I Ever;Outer Banks;Ginny & Georgia;Arcane;One Piece;Adolescence;Baby Reindeer;The Haunting of Hill House;Unbelievable;Maid;Beef;3 Body Problem;The Night Agent;GLOW;Daredevil;Jessica Jones;Grace and Frankie;Unbreakable Kimmy Schmidt;Making a Murderer;The Sandman;Shadow and Bone;Monster;Sweet Tooth;Elite;The Diplomat;Fool Me Once`);
L("tvpeople","Name a talk show host","Daytime or late night.",`Oprah Winfrey|oprah;Ellen DeGeneres|ellen;Jimmy Fallon;Jimmy Kimmel;Stephen Colbert;David Letterman;Jay Leno;Johnny Carson;Conan O'Brien|conan;Seth Meyers;James Corden;Trevor Noah;Jon Stewart;Kelly Clarkson;Drew Barrymore;Graham Norton;Jerry Springer;Maury Povich|maury;Dr. Phil|phil mcgraw;Steve Harvey;Arsenio Hall;Craig Ferguson;Chelsea Handler;Wendy Williams;Rosie O'Donnell;Regis Philbin;Kelly Ripa;Ryan Seacrest;Michael Strahan;Phil Donahue;Sally Jessy Raphael;Montel Williams;Ricki Lake;Tyra Banks;Dick Cavett;Merv Griffin;Carson Daly;Bill Maher;John Oliver;Samantha Bee;Hasan Minhaj;Whoopi Goldberg;Joy Behar;Barbara Walters;Andy Cohen;Taylor Tomlinson;Tamron Hall;Sherri Shepherd;Jonathan Ross;Michael Parkinson`,{surname:true});
L("media","Name a streaming service","",`Netflix;Hulu;Disney+|disney plus;Amazon Prime Video|prime video|amazon prime;HBO Max|max;Apple TV+|apple tv|apple tv plus;Peacock;Paramount+|paramount plus;YouTube;Crunchyroll;Tubi;Pluto TV;The Roku Channel;Sling TV|sling;Fubo;Starz;Showtime;BritBox;Discovery+;ESPN+;Mubi;Criterion Channel;Shudder;AMC+;Philo;Fandango at Home|vudu;BBC iPlayer;Twitch;DAZN;Funimation`);
L("media","Name a TV network or channel","",`CBS;NBC;ABC;Fox;CNN;ESPN;HBO;MTV;Nickelodeon;Disney Channel;PBS;Cartoon Network;Discovery Channel|discovery;History Channel|history;Comedy Central;Food Network;HGTV;TLC;Fox News;MSNBC;CNBC;AMC;FX;TNT;TBS;USA Network;Bravo;E!;A&E;Lifetime;Hallmark Channel|hallmark;BET;VH1;Animal Planet;National Geographic|nat geo;Syfy;Showtime;Starz;Cinemax;The CW|cw;Univision;Telemundo;C-SPAN;The Weather Channel|weather channel;QVC;HSN;Freeform;Paramount Network;IFC;SundanceTV;BBC;ITV;Channel 4;Sky;Al Jazeera;CBC;Oxygen;OWN;Travel Channel;Golf Channel`);
L("toons","Name a cartoon dog","Any animated dog.",`Scooby-Doo|scooby;Snoopy;Pluto;Goofy;Odie;Brian Griffin|brian;Santa's Little Helper;Clifford;Courage;Bluey;Blue;Lady;Tramp;Spike;Droopy;Astro;Gromit;Bolt;Dug;Slinky Dog|slinky;Bingo;Chase;Marshall;Rubble;Skye;Jake the Dog|jake;Ren Höek|ren;Muttley;Huckleberry Hound;Krypto;Dogbert;Max;Copper;Pongo;Perdita;Hong Kong Phooey;McGruff;Underdog;Mr. Peabody;Deputy Dawg;Rowlf`);
L("toons","Name a cartoon cat","Any animated cat.",`Garfield;Tom;Sylvester;Felix the Cat|felix;Hello Kitty;The Cat in the Hat|cat in the hat;Puss in Boots;Cheshire Cat;Scratchy;Snowball;Heathcliff;Top Cat;Mr. Jinks;Figaro;Lucifer;Dinah;Duchess;Thomas O'Malley|omalley;Marie;Si and Am;Oliver;Sergeant Tibbs;Salem;Stimpy;Catbus;Jiji;Azrael;Hobbes;Bill the Cat;Meowth;Luna;Doraemon;Pink Panther;Mittens;Sassy;Gumball;Nermal;Toulouse;Berlioz;Kitty Softpaws;Sagwa;Pusheen`);
L("robots","Name a famous robot from film, TV or games","",`R2-D2|r2d2;C-3PO|c3po;WALL-E|wall e;The Terminator|t 800|terminator;Optimus Prime;Bumblebee;Data;Robby the Robot;Bender;Baymax;Johnny 5;HAL 9000|hal;Marvin the Paranoid Android|marvin;K-9;Rosie the Robot|rosie;The Iron Giant|iron giant;Ultron;Vision;EVE;Megatron;BB-8|bb8;K-2SO;RoboCop;Mega Man;Astro Boy;Gort;Daleks|dalek;Cylons|cylon;Sonny;Ava;David;Chappie;Mechagodzilla;Maria;KITT;Dot Matrix;Roz;M3GAN|megan;TARS;Claptrap;GLaDOS;Clank;Twiki;Gigolo Joe`);
L("villains","Name a famous movie villain","",`Darth Vader;The Joker|joker;Hannibal Lecter;Voldemort;Thanos;Freddy Krueger;Jason Voorhees;Michael Myers;Norman Bates;Jack Torrance;The Wicked Witch of the West|wicked witch;Scar;Ursula;Maleficent;Hans Gruber;Agent Smith;Sauron;Dr. Evil;Annie Wilkes;Nurse Ratched;Anton Chigurh;Bane;Loki;Magneto;Pennywise;Chucky;Leatherface;Ghostface;Pinhead;The Terminator;Xenomorph|alien;Gordon Gekko;Cruella de Vil|cruella;Captain Hook;Biff Tannen;Khan;Emperor Palpatine|palpatine;Dolores Umbridge;Lord Farquaad;Syndrome;HAL 9000;Amon Göth|amon goeth;Hans Landa;Goldfinger;Blofeld;Jigsaw;Samara;The Predator;Patrick Bateman;Frank Booth;Alonzo Harris;Calvin Candie;Bill the Butcher;Max Cady;Judge Doom;Gaston;Jafar;Mother Gothel;Bruce the Shark|jaws`);
