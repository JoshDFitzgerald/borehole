/* extra derived prompts on existing datasets */
GROUP("geo");
T("countryshape","countries","Name a country with 'land' in its name","Like Finland.",it=>/land/.test(norm(it.name)));
T("countryshape","countries","Name a country whose only vowel is A","Like Panama. Y doesn't count.",it=>{const n=norm(it.name).replace(/[^a-z]/g,"");return /a/.test(n)&&!/[eiou]/.test(n);});
T("countryshape","countries","Name a country with a Z in its name","",it=>/z/.test(norm(it.name)));
T("countryshape","countries","Name a country with a J or a Q in its name","",it=>/[jq]/.test(norm(it.name)));
T("countryshape","countries","Name an African country whose name ends in A","",it=>it.tags.has("af")&&/a$/.test(norm(it.name)));
T("countryshape","countries","Name a European country whose name ends in A","",it=>it.tags.has("eu")&&/a$/.test(norm(it.name)));
T("capshape","capitals","Name a national capital with two or more words in its name","Like Buenos Aires.",it=>/ /.test(it.name.replace(/[-,.]/g," ").trim()));
GROUP("us");
T("stateshape","states","Name a U.S. state with a double letter in its name","Like Tennessee.",it=>/(.)\1/.test(norm(it.name).replace(/ /g,"")));
T("stateshape","states","Name a U.S. state with a K in its name","",it=>/k/.test(norm(it.name)));
T("stateshape","states","Name a U.S. state that ends in a vowel other than A","",it=>/[eiou]$/.test(norm(it.name)));
GROUP("nature");
T("animalshape","animals","Name an animal with exactly four letters","Like lion.",it=>norm(it.name).replace(/ /g,"").length===4);
T("animalshape","animals","Name an animal with a double letter in its name","Like rabbit.",it=>/(.)\1/.test(norm(it.name).replace(/ /g,"")));
T("animalshape","animals","Name an animal whose name is two words","Like polar bear.",it=>/ /.test(it.name.replace(/-/g," ")));
GROUP("food");
L("foodmisc","Name a fruit that's also a color","",`Orange;Lime;Peach;Plum;Cherry;Lemon;Apricot;Raspberry;Grape;Olive;Tangerine;Mango;Banana;Blueberry;Strawberry;Melon;Watermelon;Kiwi;Avocado;Cranberry;Fig`);
GROUP("life");
LETTERS("jobletters","jobs",c=>`Name a job that starts with ${c}`,"Any job or profession.",null,{min:10});
LETTERS("colorletters","colors",c=>`Name a color that starts with ${c}`,"Any named color or shade.",null,{min:9});
LETTERS("clothesletters","clothes",c=>`Name an item of clothing that starts with ${c}`,"Shoes and hats count.",null,{min:9});
GROUP("music");
LETTERS("instrletters","instruments",c=>`Name a musical instrument that starts with ${c}`,"",null,{min:8});
GROUP("sports");
LETTERS("sportletters","sports",c=>`Name a sport that starts with ${c}`,"",null,{min:8});

/* art */
GROUP("hist");
DS("painters",`
Leonardo da Vinci|da vinci|leonardo #ren
Vincent van Gogh|van gogh #imp dutch
Pablo Picasso|picasso #modern spanish
Michelangelo #ren
Claude Monet|monet #imp
Salvador Dalí|dali #modern spanish
Rembrandt #dutch
Frida Kahlo|kahlo #modern female
Andy Warhol|warhol #modern american
Raphael #ren
Georgia O'Keeffe|okeeffe #modern american female
Edvard Munch|munch #modern
Henri Matisse|matisse #modern
Johannes Vermeer|vermeer #dutch
Jackson Pollock|pollock #modern american
Paul Cézanne|cezanne #imp
Pierre-Auguste Renoir|renoir #imp
Edgar Degas|degas #imp
Gustav Klimt|klimt #modern
Banksy #modern
Sandro Botticelli|botticelli #ren
Caravaggio
Francisco Goya|goya #spanish
Diego Velázquez|velazquez #spanish
El Greco #spanish
Joan Miró|miro #modern spanish
Paul Gauguin|gauguin #imp
Henri de Toulouse-Lautrec|toulouse lautrec #imp
Georges Seurat|seurat #imp
Édouard Manet|manet #imp
Camille Pissarro|pissarro #imp
Mary Cassatt|cassatt #imp american female
Berthe Morisot|morisot #imp female
Alfred Sisley|sisley #imp
Wassily Kandinsky|kandinsky #modern
Piet Mondrian|mondrian #modern dutch
René Magritte|magritte #modern
Marc Chagall|chagall #modern
Roy Lichtenstein|lichtenstein #modern american
Keith Haring|haring #modern american
Jean-Michel Basquiat|basquiat #modern american
Mark Rothko|rothko #modern american
Edward Hopper|hopper #modern american
Norman Rockwell|rockwell #american
Grant Wood #american
Andrew Wyeth|wyeth #american
James McNeill Whistler|whistler #american
John Singer Sargent|sargent #american
Winslow Homer #american
Bob Ross #american
Titian #ren
Jan van Eyck|van eyck #ren dutch
Hieronymus Bosch|bosch #dutch
Pieter Bruegel the Elder|bruegel|brueghel #dutch
Peter Paul Rubens|rubens #dutch
Albrecht Dürer|durer #ren
Hans Holbein|holbein #ren
J. M. W. Turner|turner
John Constable|constable
David Hockney|hockney #modern
Lucian Freud #modern
Damien Hirst|hirst #modern
Yayoi Kusama|kusama #modern female
Artemisia Gentileschi|gentileschi #female
Frans Hals #dutch
Giotto #ren
Tintoretto #ren
Canaletto
Jacques-Louis David
Eugène Delacroix|delacroix
Gustave Courbet|courbet
Jean-François Millet
Katsushika Hokusai|hokusai
Utagawa Hiroshige|hiroshige
Amedeo Modigliani|modigliani #modern
Egon Schiele|schiele #modern
Paul Klee|klee #modern
Willem de Kooning|de kooning #modern american
Lee Krasner|krasner #female american
Helen Frankenthaler|frankenthaler #female american
Tamara de Lempicka|de lempicka #female
Diego Rivera|rivera
Fernando Botero|botero
Henri Rousseau
Marcel Duchamp|duchamp #modern
Max Ernst
`);
ALL("painters","painters","Name a famous painter","Surnames are fine.");
T("painters","painters","Name an Impressionist or Post-Impressionist painter","","imp");
T("painters","painters","Name a Renaissance artist","","ren");
T("painters","painters","Name a 20th-century or contemporary artist","","modern");
T("painters","painters","Name an American painter","","american");
T("painters","painters","Name a female painter or artist","","female");
T("painters","painters","Name a Dutch or Flemish painter","","dutch");
T("painters","painters","Name a Spanish painter","","spanish");
L("artworks","Name a famous painting","",`Mona Lisa;The Starry Night|starry night;The Last Supper;The Scream;Girl with a Pearl Earring;The Persistence of Memory;The Birth of Venus;American Gothic;Guernica;The Night Watch;Sunflowers;Water Lilies;The Creation of Adam;The Kiss;Nighthawks;The Great Wave off Kanagawa|the great wave;Las Meninas;Whistler's Mother|arrangement in grey and black;Campbell's Soup Cans;Impression, Sunrise;A Sunday Afternoon on the Island of La Grande Jatte;The Garden of Earthly Delights;Liberty Leading the People;The School of Athens;The Arnolfini Portrait;Washington Crossing the Delaware;Christina's World;The Son of Man;The Hay Wain;The Fighting Temeraire;Café Terrace at Night;Bedroom in Arles;The Potato Eaters;Les Demoiselles d'Avignon;Composition with Red, Blue and Yellow;No. 5, 1948;The Swing;Wanderer above the Sea of Fog;The Raft of the Medusa;Olympia;Luncheon of the Boating Party;The Third of May 1808;Saturn Devouring His Son;Primavera;The Ambassadors;Napoleon Crossing the Alps;The Gleaners;The Two Fridas;Marilyn Diptych;Girl with Balloon;Wheatfield with Crows;Irises;The Treachery of Images;Ophelia;The Lady of Shalott;Flaming June;The Blue Boy`);
L("artworks","Name a famous sculpture or statue","",`David;The Thinker;Venus de Milo;Statue of Liberty;Christ the Redeemer;Mount Rushmore;The Little Mermaid;Pietà|pieta;Winged Victory of Samothrace;Discobolus|discus thrower;Manneken Pis;Cloud Gate|the bean;Charging Bull;The Kiss;Balloon Dog;Moai|easter island heads;Terracotta Army;Great Sphinx|sphinx;Laocoön and His Sons|laocoon;The Gates of Hell;Bust of Nefertiti;Angel of the North;The Motherland Calls;Maman;LOVE;Fearless Girl;Ecstasy of Saint Teresa;Apollo and Daphne;Perseus with the Head of Medusa;The Burghers of Calais;Bird in Space;Spoonbridge and Cherry;Rocky statue;Atlas;Unique Forms of Continuity in Space`);
L("artworks","Name an art movement or style","",`Impressionism;Cubism;Surrealism;Renaissance;Baroque;Pop Art;Abstract Expressionism;Art Nouveau;Art Deco;Romanticism;Realism;Expressionism;Dada;Fauvism;Pointillism;Post-Impressionism;Minimalism;Futurism;Rococo;Neoclassicism;Gothic;Mannerism;Bauhaus;Op Art;Street art;Conceptual art;Photorealism;Pre-Raphaelites;Symbolism;Constructivism;De Stijl;Suprematism;Ukiyo-e;Hudson River School;Harlem Renaissance;Arts and Crafts;Neo-expressionism;Land art;Performance art`);
L("architects","Name a famous architect","Surnames are fine.",`Frank Lloyd Wright;Frank Gehry;Zaha Hadid;I. M. Pei|im pei;Antoni Gaudí|gaudi;Le Corbusier;Ludwig Mies van der Rohe|mies van der rohe;Norman Foster;Renzo Piano;Christopher Wren;Michelangelo;Filippo Brunelleschi;Andrea Palladio;Louis Sullivan;Walter Gropius;Oscar Niemeyer;Rem Koolhaas;Tadao Ando;Bjarke Ingels;Santiago Calatrava;Richard Rogers;Jean Nouvel;Eero Saarinen;Philip Johnson;Louis Kahn;Daniel Libeskind;Jørn Utzon|jorn utzon;Gustave Eiffel;Thomas Jefferson;Inigo Jones;Alvar Aalto;Frederick Law Olmsted;Buckminster Fuller;Kengo Kuma;Shigeru Ban;Julia Morgan;Maya Lin`,{surname:true});

/* people */
GROUP("screen");
L("people","Name a famous comedian","Stand-up, sketch or film. Surnames are fine.",`Jerry Seinfeld;Robin Williams;Eddie Murphy;Richard Pryor;George Carlin;Chris Rock;Dave Chappelle;Kevin Hart;Ellen DeGeneres;Steve Martin;Jim Carrey;Adam Sandler;Will Ferrell;Bill Murray;Chevy Chase;John Belushi;Dan Aykroyd;Mike Myers;Tina Fey;Amy Poehler;Kristen Wiig;Melissa McCarthy;Joan Rivers;Lucille Ball;Bob Hope;Groucho Marx;Charlie Chaplin;Buster Keaton;Jerry Lewis;Mel Brooks;Rodney Dangerfield;Lily Tomlin;Carol Burnett;Whoopi Goldberg;Conan O'Brien;Sarah Silverman;Ali Wong;John Mulaney;Bill Burr;Jim Gaffigan;Sebastian Maniscalco;Trevor Noah;Amy Schumer;Tiffany Haddish;Wanda Sykes;Norm Macdonald;Chris Farley;Phil Hartman;Gilda Radner;Andy Kaufman;Bernie Mac;Steve Harvey;Martin Lawrence;Jamie Foxx;Seth Rogen;Rowan Atkinson;Ricky Gervais;John Cleese;Eric Idle;Peter Sellers;Billy Connolly;Eddie Izzard;Jimmy Carr;Bo Burnham;Nate Bargatze;Taylor Tomlinson;Matt Rife;Shane Gillis`,{surname:true});
L("people","Name a famous chef or TV cook","Surnames are fine.",`Gordon Ramsay;Julia Child;Anthony Bourdain;Jamie Oliver;Emeril Lagasse;Bobby Flay;Wolfgang Puck;Rachael Ray;Guy Fieri;Ina Garten;Martha Stewart;Nigella Lawson;Paula Deen;Alton Brown;Giada De Laurentiis;Thomas Keller;José Andrés|jose andres;Marco Pierre White;Heston Blumenthal;Jacques Pépin|jacques pepin;Auguste Escoffier;Paul Bocuse;Alain Ducasse;Joël Robuchon|joel robuchon;Massimo Bottura;René Redzepi|rene redzepi;David Chang;Masaharu Morimoto|morimoto;Nobu Matsuhisa|nobu;Ree Drummond|pioneer woman;Padma Lakshmi;Tom Colicchio;Mary Berry;Paul Hollywood;Delia Smith;Yotam Ottolenghi;Samin Nosrat;Andrew Zimmern;Michael Symon;Marcus Samuelsson;Carla Hall;Nadiya Hussain;Salt Bae|nusret;Dominique Ansel;Christina Tosi`,{surname:true});
L("people","Name a famous magician or illusionist","Surnames are fine.",`Harry Houdini|houdini;David Copperfield;David Blaine;Penn Jillette|penn and teller|penn;Teller;Siegfried & Roy|siegfried and roy;Criss Angel;Lance Burton;Dynamo;Derren Brown;Doug Henning;Shin Lim;Justin Willman;Harry Blackstone;Howard Thurston;Harry Kellar;Jean-Eugène Robert-Houdin|robert houdin;Dai Vernon;Ricky Jay;Paul Daniels;Tommy Cooper;James Randi|the amazing randi;Uri Geller;Mat Franco;Zach King;Piff the Magic Dragon;Mac King;Hans Klok;Princess Tenko`,{surname:true});
L("people","Name a famous YouTuber or streamer","",`MrBeast|mr beast;PewDiePie;Markiplier;Jacksepticeye;Logan Paul;Jake Paul;Ninja;Pokimane;KSI;Dude Perfect;Smosh;Casey Neistat;Emma Chamberlain;Lilly Singh;Philip DeFranco;Shane Dawson;Jenna Marbles;David Dobrik;Marques Brownlee|mkbhd;Linus Tech Tips;Kai Cenat;IShowSpeed|speed;xQc;Valkyrae;Ryan's World|ryan kaji;Blippi;Ms Rachel;Mark Rober;Veritasium;Vsauce;Rhett and Link|good mythical morning;Dream;Technoblade;Ludwig;Zach King;Liza Koshy;Tyler Oakley;Michelle Phan`);
L("famousanimals","Name a famous fictional or real dog","Live action, animated or real.",`Lassie;Scooby-Doo|scooby;Snoopy;Beethoven;Toto;Old Yeller;Rin Tin Tin;Benji;Marley;Hachiko|hachi;Eddie;Air Bud|buddy;Hooch;Cujo;Fang;Fluffy;Wishbone;Comet;Bullseye;Einstein;Shadow;Chance;Clifford;Pluto;Goofy;Odie;Brian Griffin;Santa's Little Helper;Gromit;Bolt;Dug;Max;Bluey;Krypto;Uggie;Verdell;Buck;Nana;Dogmatix;Snowy;Gnasher;Laika`);
L("famousanimals","Name a famous horse, real or fictional","",`Seabiscuit;Secretariat;Black Beauty;Mister Ed|mr ed;Trigger;Silver;Shadowfax;Pegasus;Spirit;Bucephalus;Seattle Slew;American Pharoah;Man o' War;The Black Stallion|the black;Joey;Maximus;Bullseye;Artax;Boxer;Phar Lap;Red Rum;War Admiral;Citation;Affirmed;Justify;Hidalgo;Sergeant Reckless;Comanche;Marengo;Copenhagen;Traveller;Scout;Champion;Topper;Epona;Roach;Agro;Khartoum;Samson;Major;Frou-Frou;Brego;Bill the Pony;Silver Blaze;Fury;Flicka;Misty`);
L("famousanimals","Name a famous fictional bear","",`Winnie the Pooh|pooh;Paddington;Yogi Bear|yogi;Baloo;Fozzie Bear|fozzie;Smokey Bear;Teddy Ruxpin;Care Bears;Boo-Boo|boo boo;Lotso;Po;Ted;Corduroy;Rupert Bear;Bear;Kenai;Koda;Gentle Ben;Berenstain Bears;Iorek Byrnison;Pudsey;Fuzzy Wuzzy;Gummi Bears;Grizzly;Ice Bear;Bungle;Sooty;Little Bear;Kumamon;Rilakkuma`);
GROUP("life");
L("mascots","Name a famous brand mascot","",`Ronald McDonald;Tony the Tiger;Pillsbury Doughboy|poppin fresh;Michelin Man|bibendum;Mr. Peanut;Geico Gecko|the gecko;Kool-Aid Man;Colonel Sanders;Energizer Bunny;Mr. Clean;Jolly Green Giant|green giant;M&M's characters|red m and m;Aflac Duck;Chester Cheetah;Snap, Crackle and Pop|snap crackle pop;Toucan Sam;Lucky the Leprechaun;Cap'n Crunch;Elsie the Cow;Trix Rabbit;Keebler Elves;Smokey Bear;Flo;Captain Morgan;Jack Box|jack;Burger King|the king;Grimace;Hamburglar;Mayor McCheese;Speedy Alka-Seltzer;Charlie the Tuna;Morris the Cat;Spuds MacKenzie;Gerber Baby;Quaker Oats Man;Morton Salt Girl;Coppertone Girl;Little Debbie;Chuck E. Cheese;Big Boy;Rich Uncle Pennybags|mr monopoly;Nipper;Taco Bell Chihuahua|gidget;Budweiser Clydesdales;Snuggle Bear;California Raisins;Mr. Owl;Sprout;Duo|duolingo owl;The Noid;Reddy Kilowatt`);
L("mascots","Name a breakfast cereal mascot","",`Tony the Tiger;Toucan Sam;Lucky the Leprechaun;Cap'n Crunch;Trix Rabbit;Snap, Crackle and Pop|snap crackle pop;Count Chocula;Sonny the Cuckoo Bird;Buzz the Bee;Cornelius the Rooster;Dig'em Frog;Chip the Wolf;Franken Berry;Boo Berry;Fred Flintstone;Quisp;Sugar Bear;Coco the Monkey;Fruit Brute;Yummy Mummy`);
L("vehicles","Name a type of boat or ship","",`Canoe;Kayak;Sailboat;Yacht;Submarine;Ferry;Cruise ship;Rowboat;Speedboat;Tugboat;Barge;Gondola;Raft;Catamaran;Schooner;Frigate;Destroyer;Aircraft carrier;Battleship;Cargo ship;Tanker;Trawler;Dinghy;Pontoon;Houseboat;Jet ski;Hovercraft;Steamboat|paddle steamer;Galleon;Junk;Dhow;Sampan;Longship|longboat;Clipper;Sloop;Ketch;Yawl;Brig;Corvette;Cutter;Lifeboat;Trireme;Punt;Coracle;Outrigger;Icebreaker;Container ship;Fishing boat;Airboat;Riverboat;Narrowboat`);
L("vehicles","Name a type of aircraft","",`Airplane|plane;Helicopter;Jet;Glider;Hot air balloon;Blimp;Drone;Biplane;Seaplane;Fighter jet;Bomber;Jumbo jet;Hang glider;Paraglider;Autogyro|gyrocopter;Zeppelin|airship;Space shuttle;Tiltrotor|osprey;Ultralight;Cargo plane;Private jet;Crop duster;Triplane;Turboprop;Spy plane`);

/* more derived letter prompts */
GROUP("nature");LETTERS("dogletters","dogs",c=>`Name a dog breed that starts with ${c}`,"Crossbreeds count.",null,{min:8});
GROUP("life");LETTERS("carletters","cars",c=>`Name a car brand that starts with ${c}`,"Current or defunct.",null,{min:7});
GROUP("games");LETTERS("pokeletters","pokemon",c=>`Name an original-151 Pokémon that starts with ${c}`,"Red and Blue.",null,{min:8});
GROUP("words");LETTERS("langletters","languages",c=>`Name a language that starts with ${c}`,"Living or dead.",null,{min:8});

/* namesakes and pairs */
GROUP("misc");
L("namesakes","Name a famous person named John","Real or fictional. Surnames are fine.",`John Lennon;John F. Kennedy|jfk;John Wayne;John Travolta;John Cena;John Legend;John Mayer;John Candy;John Cleese;John Grisham;John Steinbeck;John Lithgow;John Krasinski;John Goodman;John Malkovich;John Cusack;John Belushi;John Mulaney;John Oliver;John Stamos;John Denver;John McEnroe;John Elway;John Madden;John Glenn;John Hancock;John Locke;John Milton;John Keats;John Calvin;John Williams;John Carpenter;John Hughes;John Lewis;John Wick;John Quincy Adams;Pope John Paul II|john paul ii;John the Baptist;John Deere;John D. Rockefeller|rockefeller;John Muir;John Boyega;John Bonham;John Coltrane;John Mellencamp;John Lydon|johnny rotten;John Oates;John Stockton;John Wooden;John McCain;John Kerry;John Ritter;John Leguizamo;John Cho;John Waters;John Huston;John Ford;John Updike;John Irving;John le Carré|le carre;John Green;John Bunyan;John Donne;John Adams;John Constantine;John McClane;John Snow`,{surname:true});
L("namesakes","Name a famous person named Michael","Real or fictional. Surnames are fine.",`Michael Jackson;Michael Jordan;Michael Phelps;Michael J. Fox;Michael Caine;Michael Douglas;Michael Bublé|michael buble;Michael Keaton;Michael B. Jordan;Michael Scott;Michael Myers;Michael Schumacher;Michael Bay;Michael Moore;Michael Bloomberg;Michael Dell;Michael Kors;Michael Bolton;Michael Strahan;Michael Cera;Michael Fassbender;Michael Shannon;Michael Sheen;Michael Palin;Michael Crichton;Michael Faraday;Michael Collins;Michael McDonald;Michael Stipe;Michael Vick;Michael Irvin;Michael Johnson;Michael Owen;Michael Buffer;Michael Landon;Michael Imperioli;Michael Gambon;Michael Madsen;Michael Clarke Duncan;Michael K. Williams;Michael Peña|michael pena;Michael Flatley;Michael Hutchence;Michael Corleone;Michael Knight;Michael Ondaatje;Michael Chabon;Michael Lewis;Michael Pollan;Michael Dukakis;Michael Spinks;Michael Oher;Michael Che;Michael Rapaport;Michael Rooker;Michael Biehn;Michael Giacchino;Michelangelo? `.replace(";Michelangelo? ",""),{surname:true});
L("namesakes","Name a famous person named David","Real or fictional. Surnames are fine.",`David Bowie;David Beckham;David Letterman;David Attenborough;David Copperfield;David Hasselhoff;David Schwimmer;David Lynch;David Fincher;David Duchovny;David Spade;David Tennant;David Byrne;David Gilmour;David Blaine;David Cameron;David Hockney;David Lee Roth;David Cassidy;David Guetta;David Harbour;David Ortiz;David Robinson;David Goggins;David Sedaris;David Mamet;David Arquette;David Boreanaz;David Hyde Pierce;David Cross;David Alan Grier;David Crosby;David Gray;David Archuleta;David Foster Wallace;David Mitchell;David Walliams;David Frost;David Niven;David Lean;David Cronenberg;David Muir;David Geffen;David Livingstone;David Hume;David Brent;David Rose;David Haye;David de Gea;David Villa;David Silva;David Stern;David Lloyd George;David Ben-Gurion;David Souter;King David`,{surname:true});
L("namesakes","Name a famous person named Elizabeth","Real or fictional. Surnames are fine.",`Elizabeth Taylor;Queen Elizabeth II;Elizabeth I;Elizabeth Warren;Elizabeth Banks;Elizabeth Olsen;Elizabeth Hurley;Elizabeth Holmes;Elizabeth Bennet;Elizabeth Swann;Elisabeth Moss|elizabeth moss;Elizabeth Debicki;Elizabeth Montgomery;Elizabeth Berkley;Elizabeth Perkins;Elisabeth Shue|elizabeth shue;Elizabeth Gilbert;Elizabeth Cady Stanton;Elizabeth Barrett Browning;Elizabeth Arden;Elizabeth Smart;Elizabeth Bishop;Elizabeth Blackwell;Elizabeth Fry;Elizabeth Báthory|elizabeth bathory;Elizabeth Gaskell;Elizabeth McGovern;Elizabeth Mitchell;Elisabeth Hasselbeck;Elizabeth Dole;Elizabeth Bowes-Lyon|queen mother;Elizabeth Woodville;Elizabeth of York`,{surname:true});
L("duos","Name a famous duo","Real or fictional. Either name, or both.",`Batman and Robin;Tom and Jerry;Bonnie and Clyde;Simon & Garfunkel;Laurel and Hardy;Abbott and Costello;Romeo and Juliet;Lewis and Clark;Penn & Teller;Sonny & Cher;Hall & Oates;Mario and Luigi;Bert and Ernie;Ben & Jerry;Starsky & Hutch;Holmes and Watson;Lilo & Stitch;Timon and Pumbaa;Mulder and Scully;Thelma & Louise;Cheech & Chong;Key & Peele;Rick and Morty;Beavis and Butt-Head;Wallace & Gromit;Bill & Ted;Wayne and Garth;Ren & Stimpy;Phineas and Ferb;SpongeBob and Patrick;Calvin and Hobbes;Frog and Toad;Jay and Silent Bob;Daft Punk;Siegfried & Roy;Ant & Dec;Fred Astaire and Ginger Rogers|fred and ginger;Jack and Jill;Hansel and Gretel;Adam and Eve;Antony and Cleopatra;Popeye and Olive Oyl;Mickey and Minnie;Woody and Buzz;Shrek and Donkey;Sonic and Tails;Ratchet & Clank;Han and Chewie;R2-D2 and C-3PO;Pinky and the Brain;Statler and Waldorf;Rocky and Bullwinkle;Chip 'n' Dale|chip and dale;Tweedledum and Tweedledee;Romulus and Remus;Castor and Pollux;Kenan & Kel;Drake & Josh;Garfield and Odie;Lady and the Tramp;Thing 1 and Thing 2`);
L("duos","Name a famous trio","Real or fictional groups of three.",`The Three Stooges;The Three Musketeers;The Three Little Pigs;Huey, Dewey and Louie;Harry, Ron and Hermione;Alvin and the Chipmunks;The Powerpuff Girls;Destiny's Child;Peter, Paul and Mary;Snap, Crackle and Pop;Charlie's Angels;Three Billy Goats Gruff;Three Blind Mice;The Three Wise Men|three kings|magi;Bee Gees;Nirvana;Rush;The Police;Green Day;Blink-182;The Supremes;TLC;The Andrews Sisters;The Chicks;Hanson;Jonas Brothers;Three Amigos;Goldilocks and the Three Bears|three bears;Ed, Edd n Eddy;The Fates;The Three Graces;Shadrach, Meshach and Abednego;Kingston Trio;Totally Spies;The Lonely Island;ZZ Top;Cream;Crosby, Stills & Nash;Emerson, Lake & Palmer;Wilson Phillips;Bananarama;Atomic Kitten;The Fresh Prince, Will and Carlton? `.replace(";The Fresh Prince, Will and Carlton? ",""));
