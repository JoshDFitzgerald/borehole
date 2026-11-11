GROUP("words");
const COMP={
 SUN:"Sunflower;Sunshine;Sunset;Sunrise;Sunglasses;Sunburn;Sunday;Sunlight;Sunscreen;Sundial;Sunbathe;Sunspot;Sundae;Sunroof;Sunbeam;Sunblock;Sundown;Sunfish;Sunlit;Sunstroke;Sunhat;Suntan;Sunbed;Sunlamp;Sunup",
 FIRE:"Fireworks|firework;Firefly;Fireplace;Firefighter;Fireman;Firewood;Firetruck|fire truck;Firearm;Firecracker;Firehouse;Fireproof;Fireball;Firestorm;Firewall;Fireside;Firepit;Firebird;Firestarter;Firebrand;Firelight;Fireboat;Firebomb;Firefight",
 WATER:"Waterfall;Watermelon;Waterproof;Watercolor;Waterbed;Waterslide;Waterfront;Watercress;Waterline;Watermark;Waterway;Waterpark;Watershed;Watertight;Waterlogged;Watercraft;Waterhole;Waterlily;Waterfowl;Waterspout;Waterboy;Waterwheel",
 RAIN:"Rainbow;Raincoat;Raindrop;Rainforest;Rainfall;Rainstorm;Rainwater;Rainmaker;Rainproof;Rainboot;Raincheck|rain check;Raingear",
 SNOW:"Snowman;Snowflake;Snowball;Snowboard;Snowstorm;Snowfall;Snowplow;Snowmobile;Snowshoe;Snowdrift;Snow cone|snowcone;Snowsuit;Snowdrop;Snowcap;Snowbank;Snowblower;Snowbird;Snow globe|snowglobe;Snowpack;Snowmelt;Snowfield",
 FOOT:"Football;Footprint;Footstep;Footnote;Footwear;Footstool;Footpath;Footage;Foothill;Footlocker;Footbridge;Footloose;Footman;Footrest;Footwork;Footlights;Foothold;Footbath;Footsore",
 HAND:"Handbag;Handshake;Handwriting;Handcuffs;Handball;Handmade;Handbook;Handstand;Handkerchief;Handsome;Handlebar;Handrail;Handyman;Handout;Handprint;Handset;Handgun;Handpicked;Handsaw;Handheld;Handcraft;Handful",
 HEAD:"Headache;Headphones;Headline;Headlight;Headband;Headquarters;Headstone;Headboard;Headset;Headstart|head start;Headfirst;Headway;Headlock;Headdress;Headmaster;Headrest;Headstand;Headwind;Headlong;Headcount;Headhunter;Headroom;Headscarf",
 BOOK:"Bookstore|bookshop;Bookshelf;Bookmark;Bookcase;Bookworm;Bookkeeper;Bookend;Booklet;Bookbag;Bookmobile;Bookmaker;Bookplate;Bookbinder",
 STAR:"Starfish;Stardust;Starlight;Starboard;Starstruck;Starship;Starfruit;Stargazer;Starlet;Starburst;Stardom;Starlit",
 AIR:"Airplane;Airport;Airline;Airbag;Aircraft;Airmail;Airbrush;Airtight;Airway;Airspace;Airship;Airstrip;Airfield;Airhead;Airlift;Airborne;Airwaves;Airbase;Airflow;Airfare;Airgun",
 OUT:"Outside;Outfit;Outdoor;Outcome;Output;Outline;Outlaw;Outlet;Outbreak;Outburst;Outcast;Outfield;Outgoing;Outlook;Outrun;Outsider;Outsmart;Outspoken;Outstanding;Outwit;Outhouse;Outpost;Outreach;Outback;Outboard;Outnumber;Outshine;Outgrow",
 BACK:"Backpack;Background;Backyard;Backbone;Backfire;Backstage;Backward;Backlash;Backhand;Backfield;Backlog;Backside;Backslash;Backstroke;Backtrack;Backup;Backdrop;Backhoe;Backorder;Backseat;Backstory;Backwoods",
 BLACK:"Blackboard;Blackbird;Blackberry;Blackout;Blacksmith;Blackmail;Blackjack;Blacklist;Blackhead;Blacktop;Blackcurrant;Blackball",
 HOUSE:"Household;Housework;Housekeeper;Housewife;Houseboat;Housefly;Houseplant;Housewarming;Housemate;Housecoat;Househusband;Housebroken;Houseguest",
 SEA:"Seashell;Seafood;Seahorse;Seaweed;Seashore;Seagull;Seaside;Seaport;Seaplane;Seasick;Seawater;Seabed;Seafloor;Seaboard;Seafront;Seaworthy;Seawall;Seabird",
 MOON:"Moonlight;Moonshine;Moonwalk;Moonbeam;Moonstone;Moonlit;Moonrise;Moonshot;Moonstruck;Moonscape;Moonflower",
 EVERY:"Everyone;Everything;Everybody;Everywhere;Everyday;Everyplace;Everyman",
 BUTTER:"Butterfly;Buttermilk;Butterscotch;Buttercup;Butterfingers;Butterball;Butternut;Butterfat"
};
Object.keys(COMP).forEach(k=>L("compound",`Name a compound word that starts with ${k}`,`One word, like ${COMP[k].split(";")[0].split("|")[0].toLowerCase()}.`,COMP[k]));
const RHY={
 CAT:"Hat;Bat;Rat;Mat;Sat;Fat;Pat;Flat;That;Chat;Brat;Splat;Spat;Gnat;Vat;Scat;Drat;Slat;Tat;At;Acrobat;Habitat;Diplomat;Aristocrat;Thermostat;Format;Combat;Wombat;Doormat;Cravat;Democrat;Bureaucrat;Laundromat;Copycat;Chitchat;Tomcat;Nonfat",
 DAY:"Way;Say;Play;Stay;May;Pay;Gray|grey;Hay;Ray;Bay;Clay;Pray;Stray;Tray;Spray;Sway;Okay;Today;Away;Delay;Display;Hooray;Birthday;Holiday;Ballet;Bouquet;Buffet;Decay;Obey;Essay;Betray;X-ray;Relay;Dismay;Array;Portray;Toupee;Fiancé|fiance;Beret;Survey;Convey;Weigh;They;Sleigh;Neigh;Prey;Slay;Fray;Jay",
 LIGHT:"Night;Right;Bright;Sight;Fight;Kite;White;Bite;Might;Tight;Flight;Height;Write;Quite;Site;Fright;Knight;Slight;Delight;Polite;Invite;Despite;Tonight;Midnight;Ignite;Unite;Excite;Recite;Appetite;Dynamite;Termite;Satellite;Overnight;Spite;Rite;Blight;Plight;Trite;Alight;Sprite;Byte;Mite;Smite;Contrite",
 TREE:"Free;See;Sea;Bee;Key;Knee;Me;We;He;She;Three;Tea;Flee;Glee;Plea;Spree;Agree;Degree;Guarantee;Referee;Jubilee;Chimpanzee;Decree;Ski;Pea;Fee;Flea;Wee;Emcee;Settee;Trustee;Absentee;Employee;Refugee;Pedigree;Marquee;Banshee;Bumblebee;Honeybee;Carefree;Oversee;Disagree;Foresee",
 CAKE:"Make;Take;Bake;Lake;Snake;Shake;Wake;Fake;Rake;Break;Steak;Brake;Flake;Stake;Quake;Mistake;Awake;Earthquake;Cupcake;Pancake;Cheesecake;Keepsake;Sake;Drake;Opaque;Intake;Outtake;Remake;Retake;Snowflake;Handshake;Rattlesnake;Overtake;Forsake;Partake",
 BLUE:"True;Two;Too;To;You;Shoe;New;Few;Flew;Glue;Clue;Crew;Grew;Threw;Through;View;Zoo;Moo;Boo;Chew;Stew;Dew;Due;Sue;Who;Do;Knew;Queue;Canoe;Igloo;Shampoo;Tattoo;Bamboo;Kangaroo;Taboo;Cuckoo;Review;Menu;Avenue;Rescue;Debut;Pursue;Undo;Overdue;Breakthrough;Barbecue;Interview;Achoo;Hullabaloo;Voodoo;Kazoo;Brew;Drew;Cue;Hue;Ewe;Gnu;Yew;Flu",
 BEAR:"Care;Hair;Chair;Pair;Air;Fair;There;Where;Share;Stare;Square;Wear;Dare;Rare;Bare;Scare;Flair;Glare;Spare;Swear;Tear;Aware;Beware;Despair;Repair;Prepare;Compare;Affair;Declare;Nightmare;Millionaire;Questionnaire;Solitaire;Wheelchair;Armchair;Mare;Hare;Pear;Prayer;Heir;Flare;Snare;Their;Upstairs",
 RING:"Sing;King;Thing;Wing;Spring;Swing;Bring;Sting;String;Fling;Cling;Sling;Ding;Ping;Zing;Wring;Anything;Everything;Something;Offspring;Earring;Bling;Plaything;Beijing;Shoestring;Upswing",
 GO:"No;So;Snow;Toe;Show;Slow;Grow;Flow;Row;Low;Know;Though;Throw;Bow;Crow;Glow;Blow;Sew;Tow;Doe;Foe;Hoe;Pro;Oh;Owe;Below;Hello;Ago;Although;Tomato;Potato;Piano;Radio;Video;Rainbow;Elbow;Window;Shadow;Arrow;Tornado;Volcano;Banjo;Buffalo;Domino;Plateau;Bureau;Chateau",
 NOSE:"Rose;Goes;Toes;Hose;Pose;Close;Those;Shows;Flows;Grows;Knows;Chose;Froze;Prose;Foes;Glows;Blows;Throws;Rows;Bows;Crows;Doze;Suppose;Compose;Oppose;Expose;Propose;Dispose;Enclose;Impose;Tiptoes;Tomatoes;Potatoes;Arose;Repose"
};
Object.keys(RHY).forEach(k=>L("rhymes",`Name a word that rhymes with ${k}`,"Real words only.",RHY[k]));
L("wordplay","Name a palindrome","A word that reads the same backwards. Names count.",`Racecar;Level;Kayak;Radar;Civic;Madam;Noon;Mom;Dad;Wow;Refer;Rotor;Pop;Eye;Peep;Deed;Hannah;Anna;Otto;Bob;Tenet;Stats;Solos;Sees;Reviver;Redder;Rotator;Repaper;Deified;Minim;Sagas;Tot;Nun;Gag;Pup;Did;Bib;Toot;Ewe;Ava;Eve;Elle;Nan`);
L("wordplay","Name a word with no A, E, I, O or U","Y is allowed.",`Rhythm;Myth;Gym;Sky;Fly;Cry;Dry;Try;Spy;Why;Shy;My;By;Lynx;Nymph;Hymn;Crypt;Glyph;Pygmy;Tryst;Syzygy;Sylph;Gypsy;Psych;Shh;Hmm;Brr;Nth;Tsk;Pfft;Cwm;Crwth;Fry;Ply;Sly;Sty;Wry;Thy;Spry;Stymy|stymie? `.replace("|stymie? ",""));
L("wordplay","Name a word that contains -OUGH","Like though or tough.",`Though;Through;Tough;Rough;Cough;Dough;Enough;Thought;Bought;Brought;Fought;Ought;Bough;Plough|plow;Thorough;Borough;Trough;Sought;Drought;Although;Nought;Slough;Hiccough`);
L("wordplay","Name an onomatopoeia","A word that sounds like what it means.",`Buzz;Bang;Boom;Splash;Pop;Crash;Sizzle;Hiss;Meow;Woof;Moo;Quack;Oink;Tick-tock;Ding-dong;Achoo;Beep;Honk;Knock;Zoom;Whoosh;Thud;Click;Clap;Crack;Crunch;Drip;Fizz;Gurgle;Hiccup;Howl;Purr;Roar;Rumble;Slurp;Snap;Squeak;Squish;Swoosh;Thump;Vroom;Whack;Whir|whirr;Zap;Zip;Boing;Cock-a-doodle-doo;Cuckoo;Tweet;Chirp;Ribbit;Baa;Neigh;Cluck;Hoot;Grr;Splat;Kaboom;Ka-ching;Pow;Bam;Wham;Plop;Clang;Clatter;Jingle;Gulp;Burp;Screech;Ping`);
L("alphabets","Name a letter of the Greek alphabet","",`Alpha;Beta;Omega;Delta;Gamma;Pi;Sigma;Theta;Lambda;Epsilon;Zeta;Kappa;Psi;Mu;Phi;Chi;Rho;Tau;Iota;Eta;Omicron;Upsilon;Nu;Xi`);
L("alphabets","Name a word from the NATO phonetic alphabet","Alpha, Bravo, Charlie...",`Alpha|alfa;Bravo;Charlie;Delta;Echo;Foxtrot;Tango;Zulu;Romeo;Sierra;X-ray|xray;Victor;Oscar;Hotel;Golf;Kilo;Lima;Mike;November;Papa;Quebec;Uniform;Whiskey|whisky;Yankee;India;Juliet|juliett`);
DS("languages",`
English #germanic
Spanish #romance
French #romance
Mandarin|chinese|mandarin chinese #asia
German #germanic
Italian #romance
Japanese #asia
Portuguese #romance
Russian #slavic
Arabic #semitic africa
Hindi #india
Korean #asia
Dutch #germanic
Greek
Latin #dead
Hebrew #semitic
Swedish #germanic
Polish #slavic
Turkish
Vietnamese #asia
Thai #asia
Swahili #africa
Norwegian #germanic
Danish #germanic
Finnish
Irish|irish gaelic|gaelic #celtic
Welsh #celtic
Bengali #india
Urdu #india
Punjabi #india
Tamil #india
Telugu #india
Marathi #india
Gujarati #india
Kannada #india
Malayalam #india
Persian|farsi
Tagalog|filipino #asia
Indonesian #asia
Malay #asia
Cantonese #asia
Ukrainian #slavic
Czech #slavic
Hungarian
Romanian #romance
Bulgarian #slavic
Serbian #slavic
Croatian #slavic
Slovak #slavic
Slovenian #slavic
Icelandic #germanic
Afrikaans #germanic africa
Zulu #africa
Xhosa #africa
Yoruba #africa
Igbo #africa
Hausa #africa
Amharic #africa semitic
Somali #africa
Esperanto
Sanskrit #india dead
Catalan #romance
Basque
Galician #romance
Scottish Gaelic #celtic
Breton #celtic
Cornish #celtic
Manx #celtic
Yiddish #germanic
Navajo
Cherokee
Quechua
Guarani
Nahuatl
Hawaiian
Maori
Samoan
Mongolian #asia
Tibetan #asia
Burmese #asia
Khmer #asia
Lao #asia
Nepali #india
Sinhala #india
Pashto
Kurdish
Armenian
Georgian
Azerbaijani
Kazakh
Uzbek
Albanian
Lithuanian
Latvian
Estonian
Maltese #semitic
Luxembourgish #germanic
Faroese #germanic
Frisian #germanic
Occitan #romance
Romansh #romance
Sardinian #romance
Corsican #romance
Aramaic #semitic dead
Coptic #dead
Old English #germanic dead
Ancient Greek #dead
Sumerian #dead
Akkadian #semitic dead
Etruscan #dead
Gothic #germanic dead
Old Norse #germanic dead
Hittite #dead
Ancient Egyptian #dead
Phoenician #semitic dead
Wolof #africa
Shona #africa
Kinyarwanda #africa
Oromo #africa
Tigrinya #africa semitic
Lingala #africa
Twi #africa
Sesotho #africa
Setswana #africa
Malagasy #africa
Inuktitut
Greenlandic
Sami
`);
ALL("languages","languages","Name a language","Living or dead.",{});
T("languages","languages","Name a Romance language","Descended from Latin.","romance");
T("languages","languages","Name a Germanic language","","germanic");
T("languages","languages","Name a Slavic language","","slavic");
T("languages","languages","Name a language spoken in India","","india");
T("languages","languages","Name a language spoken in Africa","","africa");
T("languages","languages","Name a Celtic language","","celtic");
T("languages","languages","Name a Semitic language","","semitic");
T("languages","languages","Name a dead or ancient language","No native speakers today.","dead");
DS("currency",`
Dollar
Euro
Pound|pound sterling|sterling
Yen
Peso
Rupee
Franc
Yuan|renminbi
Ruble|rouble
Won
Real
Rand
Krona
Krone
Lira
Dinar
Dirham
Riyal
Shekel
Baht
Ringgit
Rupiah
Dong
Zloty
Forint
Koruna
Lev
Leu
Hryvnia
Naira
Cedi
Shilling
Birr
Kwacha
Kwanza
Pula
Rial
Taka
Afghani
Tenge
Som
Manat
Lari
Dram
Tugrik
Kyat
Kip
Riel
Ngultrum
Pa'anga|paanga
Tala
Vatu
Kina
Quetzal
Colón|colon
Córdoba|cordoba
Lempira
Balboa
Bolívar|bolivar
Sol
Guaraní|guarani
Boliviano
Gourde
Drachma #former
Deutsche Mark|mark|deutschmark #former
Peseta #former
Escudo #former
Guilder #former
Schilling #former
Markka #former
Irish pound|punt #former
Kuna #former
Sucre #former
Tolar #former
Kroon #former
Litas #former
Lats #former
Reichsmark #former
Denarius #former
`);
T("currency","currency","Name a currency","In use today.","!former");
T("currency","currency","Name a currency that's no longer used","Replaced, retired or ancient.","former");
L("grammar","Name a punctuation mark or typographic symbol","",`Period|full stop;Comma;Question mark;Exclamation point|exclamation mark;Apostrophe;Quotation marks|quotes;Colon;Semicolon;Hyphen;Dash|em dash;Parentheses|brackets;Ellipsis;Slash;Asterisk;Ampersand;At sign|at symbol;Hashtag|pound sign|hash;Square brackets;Curly braces;Underscore;Tilde;Caret;Backslash;Pipe;Interrobang;Guillemets;Bullet point;Pilcrow;Section sign;Percent sign`);
L("grammar","Name a part of speech","",`Noun;Verb;Adjective;Adverb;Pronoun;Preposition;Conjunction;Interjection;Article;Determiner;Participle`);
L("collective","Name a collective noun for a group of animals","Like a pride of lions.",`Flock;Herd;Pack;School;Pride;Swarm;Murder;Gaggle;Pod;Colony;Litter;Troop;Parliament;Army;Tower;Crash;Bloat;Dazzle;Business;Shrewdness;Unkindness;Exaltation;Murmuration;Skulk;Sleuth|sloth;Drove;Hive;Nest;Brood;Clutch;Kindle;Clowder;Parade;Memory;Gang;Mob;Raft;Romp;Cackle;Knot;Prickle;Pandemonium;Flamboyance;Charm;Wake;Kettle;Convocation;Rookery;Gaze;Cete;Quiver;Bale;Smack;Shiver;Team;String;Yoke;Labor;Scurry;Tribe;Sounder;Rhumba;Lounge;Band;Bevy;Covey;Siege`);
L("phrases","Name a Latin phrase used in English","",`Carpe diem;Et cetera|etc;E pluribus unum;Veni, vidi, vici|veni vidi vici;Ad hoc;Per se;Vice versa;Status quo;Bona fide;Quid pro quo;Ad nauseam;Alma mater;Alter ego;Caveat emptor;De facto;Ad infinitum;Cum laude;Magna cum laude;Summa cum laude;In vitro;Mea culpa;Persona non grata;Pro bono;Tempus fugit;Terra firma;Habeas corpus;Rigor mortis;Curriculum vitae|cv;Deus ex machina;Et tu, Brute|et tu brute;In memoriam;Modus operandi;Non sequitur;Post mortem;Prima facie;Semper fidelis;Sine qua non;Tabula rasa;Verbatim;Vox populi;Cogito, ergo sum|cogito ergo sum;In situ;In absentia;Ipso facto;Ad lib|ad libitum;Per capita;Per annum;Pro rata;Exempli gratia|eg;Id est|ie;Nota bene|nb;Post scriptum|ps;Anno Domini|ad;Ante meridiem|am;Post meridiem|pm;Quod erat demonstrandum|qed;Requiescat in pace|rip;Alea iacta est;Memento mori;Amor fati;Ex post facto;Magnum opus;Sui generis`);
L("phrases","Name a French phrase used in English","",`Déjà vu|deja vu;Rendezvous;Cul-de-sac;À la carte|a la carte;Bon appétit|bon appetit;Faux pas;Je ne sais quoi;C'est la vie;Bon voyage;Coup d'état|coup detat;Joie de vivre;Raison d'être|raison detre;Tête-à-tête|tete a tete;Avant-garde;Crème de la crème|creme de la creme;En route;Film noir;Haute couture;Laissez-faire;Nouveau riche;Par excellence;Pièce de résistance|piece de resistance;Savoir-faire;Touché|touche;Vis-à-vis|vis a vis;Femme fatale;Carte blanche;Bête noire|bete noire;Double entendre;Enfant terrible;Esprit de corps;Fait accompli;Hors d'oeuvre|hors doeuvre;Art deco;À la mode|a la mode;Au revoir;Bon vivant;Cordon bleu;En masse;Encore;Mise en place;Noblesse oblige;RSVP|repondez sil vous plait;Sang-froid;Soirée|soiree;Trompe-l'oeil;Voilà|voila;Cause célèbre;Coup de grâce|coup de grace;Objet d'art`);
L("acronyms","Name a well-known acronym or initialism","Like NASA.",`NASA;FBI;CIA;ASAP;LOL;NATO;USA;UK;DIY;FAQ;RSVP;ATM;PIN;VIP;CEO;DNA;HTML;GIF;JPEG;Laser;Radar;Scuba;Sonar;AWOL;UNICEF;UNESCO;OPEC;IKEA;GPS;URL;POTUS;SCOTUS;TBA;TBD;FYI;BRB;OMG;TGIF;AKA;ETA;MIA;POW;IOU;SWAT;ZIP code|zip;BBC;NBA;NFL;ESPN;ASCII;CAPTCHA;PDF;USB;AIDS;YOLO;FOMO;NIMBY;UFO;IQ;PhD;MBA;NAACP;EPA;IRS;DMV;NYPD;LAPD;MI6;KGB;EU;UN;WHO;NAFTA;IMAX;CD;DVD;LED;LCD;SIM;Wi-Fi|wifi;Emoji`.replace(";Emoji",""));
