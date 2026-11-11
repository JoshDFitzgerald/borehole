GROUP("life");
DS("cars",`
Toyota #jp
Ford #us
Honda #jp
Chevrolet|chevy #us
BMW #de lux
Mercedes-Benz|mercedes|benz #de lux
Tesla #us
Volkswagen|vw #de
Nissan #jp
Audi #de lux
Ferrari #it lux
Porsche #de lux
Lamborghini #it lux
Jeep #us
Hyundai #kr
Kia #kr
Subaru #jp
Mazda #jp
Dodge #us
Lexus #jp lux
Volvo #se
Jaguar #uk lux
Land Rover|range rover #uk lux
Cadillac #us lux
Mini #uk
Fiat #it
Rolls-Royce #uk lux
Bentley #uk lux
Aston Martin #uk lux
Maserati #it lux
Buick #us
GMC #us
Chrysler #us
Lincoln #us lux
Mitsubishi #jp
Acura #jp lux
Infiniti #jp lux
Ram #us
Peugeot #fr
Renault #fr
Citroën|citroen #fr
Alfa Romeo #it
McLaren #uk lux
Bugatti #fr lux
Lotus #uk
Genesis #kr lux
Rivian #us
Lucid #us
Polestar #se
Saab #se
Pontiac #us
Oldsmobile #us
Plymouth #us
Hummer #us
Saturn #us
Mercury #us
DeLorean #us
Suzuki #jp
Isuzu #jp
Daihatsu #jp
Lancia #it
Škoda|skoda
SEAT|seat
Opel #de
Vauxhall #uk
Smart #de
BYD #cn
Geely #cn
Nio #cn
Xpeng #cn
Great Wall #cn
Chery #cn
Tata
Mahindra
Koenigsegg #se lux
Pagani #it lux
Maybach #de lux
Dacia
Lada
Morgan #uk
MG #uk
Triumph #uk
Datsun #jp
Scion #jp
Fisker #us
Studebaker #us
Packard #us
Alpine #fr
DS #fr
Proton
`);
ALL("cars","cars","Name a car brand","Current or defunct.");
T("cars","cars","Name a German car brand","","de");
T("cars","cars","Name a Japanese car brand","","jp");
T("cars","cars","Name an American car brand","Current or defunct.","us");
T("cars","cars","Name an Italian car brand","","it");
T("cars","cars","Name a British car brand","","uk");
T("cars","cars","Name a French car brand","","fr");
T("cars","cars","Name a Chinese car brand","","cn");
T("cars","cars","Name a luxury or supercar brand","","lux");
L("carmodels","Name a Toyota model","",`Camry;Corolla;Prius;RAV4;Tacoma;Highlander;Tundra;4Runner;Sienna;Land Cruiser;Supra;Yaris;Celica;Avalon;Sequoia;Corolla Cross;Venza;C-HR;MR2;Previa;Hilux;bZ4X;Crown;GR86;Matrix;Echo;FJ Cruiser;Mirai`);
L("carmodels","Name a Ford model","",`F-150;Mustang;Explorer;Focus;Escape;Fiesta;Bronco;Ranger;Fusion;Taurus;Expedition;Model T;Thunderbird;Edge;Maverick;Mustang Mach-E|mach e;Transit;Escort;Pinto;Crown Victoria;Excursion;GT;Flex;EcoSport;Probe;Galaxie;Fairlane;Super Duty;F-150 Lightning|lightning`);
L("carmodels","Name a Honda model","",`Civic;Accord;CR-V;Pilot;Odyssey;Fit;HR-V;Ridgeline;Passport;Element;Insight;Prelude;S2000;NSX;Del Sol;CR-Z;Jazz;Clarity;Prologue`);
L("carmodels","Name a Chevrolet model","",`Corvette;Camaro;Silverado;Malibu;Impala;Tahoe;Suburban;Equinox;Bel Air;Cruze;Colorado;Blazer;Traverse;Volt;Bolt;Spark;Nova;Chevelle;El Camino;Cavalier;Monte Carlo;Trailblazer;Avalanche;Sonic;Caprice;Corvair;Trax;Express;Astro;Lumina;Aveo;Cobalt;HHR;SSR`);
L("carmodels","Name a Volkswagen model","",`Beetle|bug;Golf;Jetta;Passat;Tiguan;Atlas;ID.4|id4;Polo;Bus|microbus|type 2;Rabbit;GTI;Touareg;Scirocco;Karmann Ghia;Thing;Corrado;CC;Eos;Taos;Arteon;ID. Buzz|id buzz;Phaeton;Up!|up;Routan`);
L("carmodels","Name a Tesla model","Vehicles, shipped or announced.",`Model S;Model 3;Model X;Model Y;Cybertruck;Roadster;Semi;Cybercab`);
L("travel","Name an airline","Current or defunct.",`Delta;American Airlines|american;United;Southwest;JetBlue;Alaska Airlines;Spirit;Frontier;Hawaiian Airlines;British Airways;Lufthansa;Air France;Emirates;Qatar Airways;Singapore Airlines;KLM;Ryanair;easyJet;Virgin Atlantic;Air Canada;WestJet;Qantas;Cathay Pacific;Japan Airlines|jal;ANA|all nippon airways;Etihad;Turkish Airlines;Aer Lingus;Iberia;Swiss;Air New Zealand;Korean Air;Asiana;Air India;IndiGo;China Airlines;China Southern;China Eastern;Air China;EVA Air;Aeroméxico|aeromexico;LATAM;Avianca;Copa;Icelandair;Finnair;SAS;Norwegian;ITA Airways;Alitalia;Aeroflot;El Al;Royal Jordanian;Saudia;Ethiopian Airlines;Kenya Airways;South African Airways;Virgin Australia;Pan Am;TWA;Continental;Northwest;US Airways;Allegiant;Sun Country;Breeze;Wizz Air;Vueling;Philippine Airlines;Thai Airways;Vietnam Airlines;Malaysia Airlines;AirAsia;Jetstar`);
L("travel","Name a hotel chain","",`Marriott;Hilton;Holiday Inn;Hyatt;Best Western;Sheraton;Motel 6;Ritz-Carlton;Four Seasons;Westin;Comfort Inn;Hampton Inn;Days Inn;Super 8;Radisson;InterContinental;Wyndham;Embassy Suites;Courtyard;Red Roof Inn;La Quinta;Ramada;Quality Inn;Fairmont;W Hotels;Waldorf Astoria;St. Regis;Mandarin Oriental;Peninsula;Shangri-La;Aloft;DoubleTree;Residence Inn;Extended Stay America;Hotel Indigo;Kimpton;Omni;Loews;Travelodge;Premier Inn;Novotel;Ibis;Sonesta`);
L("tech","Name a tech company","",`Apple;Google|alphabet;Microsoft;Amazon;Meta|facebook;Tesla;Netflix;Samsung;IBM;Intel;Nvidia;Sony;Oracle;Adobe;Dell;HP|hewlett packard;Cisco;Uber;Airbnb;Spotify;X|twitter;Snap|snapchat;ByteDance|tiktok;Salesforce;OpenAI;Anthropic;PayPal;eBay;Yahoo;LinkedIn;Zoom;Lenovo;Huawei;Xiaomi;Alibaba;Tencent;Baidu;AMD;Qualcomm;Texas Instruments;SAP;Nintendo;Pinterest;Reddit;Dropbox;Slack;Shopify;Block|square;Stripe;Palantir;SpaceX;Lyft;DoorDash;Instacart;Atari;Motorola;Nokia;BlackBerry;Xerox;Philips;Panasonic;LG;Toshiba;Canon;Asus;Acer;Logitech;Garmin;Fitbit;GoPro;Roku;Electronic Arts|ea;Activision;Epic Games;Valve;Unity;Discord`);
L("tech","Name a social media platform or messaging app","Current or defunct.",`Facebook;Instagram;TikTok;X|twitter;Snapchat;YouTube;WhatsApp;LinkedIn;Pinterest;Reddit;Tumblr;Discord;Telegram;WeChat;Threads;Bluesky;MySpace;Vine;Twitch;BeReal;Clubhouse;Quora;Signal;Messenger;Flickr;Friendster;Google+;Mastodon;Weibo;LINE;Kik;Viber;Tinder;Bumble;Hinge;Nextdoor;Yik Yak;Periscope;Musical.ly;Truth Social;Rumble;Substack;Letterboxd;Goodreads;Strava`);
L("tech","Name a mobile phone brand","Current or defunct.",`Apple|iphone;Samsung;Google|pixel;Motorola;Nokia;LG;BlackBerry;Huawei;Xiaomi;OnePlus;Sony;HTC;Oppo;Vivo;Lenovo;Asus;ZTE;Alcatel;Palm;Sony Ericsson|ericsson;Siemens;Realme;Honor;Nothing;Fairphone;Kyocera;TCL;Tecno;Infinix;Essential`);
L("fashion","Name a fashion designer or luxury fashion house","",`Gucci;Prada;Chanel;Louis Vuitton;Versace;Armani|giorgio armani;Dior|christian dior;Ralph Lauren;Calvin Klein;Tommy Hilfiger;Michael Kors;Burberry;Hermès|hermes;Givenchy;Saint Laurent|yves saint laurent|ysl;Dolce & Gabbana|dolce and gabbana;Fendi;Balenciaga;Valentino;Tom Ford;Marc Jacobs;Kate Spade;Coach;Vera Wang;Donna Karan|dkny;Stella McCartney;Alexander McQueen;Vivienne Westwood;Oscar de la Renta;Carolina Herrera;Diane von Furstenberg;Jimmy Choo;Christian Louboutin|louboutin;Manolo Blahnik;Hugo Boss;Lacoste;Moschino;Missoni;Bottega Veneta;Celine;Off-White;Supreme;Balmain;Kenzo;Jean Paul Gaultier;Karl Lagerfeld;Coco Chanel;Halston;Tory Burch;Miu Miu;Loewe;Max Mara;Ferragamo|salvatore ferragamo;Paul Smith;Rick Owens;Comme des Garçons|comme des garcons;Issey Miyake;Yohji Yamamoto`);
L("fashion","Name a sneaker or athletic wear brand","",`Nike;Adidas;Puma;Reebok;New Balance;Converse;Vans;Under Armour;Asics;Skechers;Jordan|air jordan;Fila;Saucony;Brooks;Hoka;On|on running;Lululemon;Champion;Le Coq Sportif;Mizuno;Salomon;K-Swiss;Diadora;Umbro;Kappa;Ellesse;Onitsuka Tiger;Allbirds;Veja;Gymshark;Athleta;Columbia;The North Face|north face;Patagonia`);
L("stores","Name a big U.S. retail store or chain","Not restaurants or grocery stores.",`Walmart;Target;Costco;Amazon;Home Depot;Lowe's|lowes;Best Buy;Macy's|macys;Kohl's|kohls;Nordstrom;JCPenney|jcp;Sears;Kmart;TJ Maxx;Marshalls;Ross;IKEA;CVS;Walgreens;Dollar Tree;Dollar General;Gap;Old Navy;H&M;Zara;Uniqlo;Forever 21;Banana Republic;American Eagle;Abercrombie & Fitch|abercrombie;Hollister;Urban Outfitters;Bed Bath & Beyond;Barnes & Noble;GameStop;Toys "R" Us|toys r us;Staples;Office Depot;PetSmart;Petco;Dick's Sporting Goods|dicks;Bloomingdale's;Saks Fifth Avenue|saks;Neiman Marcus;Sam's Club;BJ's;Big Lots;Michaels;Hobby Lobby;Joann;Sephora;Ulta;Bath & Body Works;Victoria's Secret;Foot Locker;Five Below;RadioShack;Circuit City;Blockbuster;Borders;Tiffany & Co.|tiffany;Apple Store;Williams-Sonoma;Pottery Barn;Crate & Barrel;The Container Store;Burlington;Tractor Supply;AutoZone;Menards;Ace Hardware;Rite Aid;7-Eleven;Wawa;Buc-ee's|bucees`);
L("stores","Name a supermarket chain","Any country.",`Kroger;Walmart;Publix;Safeway;Aldi;Lidl;Trader Joe's|trader joes;Whole Foods;Wegmans;Albertsons;Meijer;H-E-B|heb;Food Lion;Giant;Stop & Shop;ShopRite;Winn-Dixie;Piggly Wiggly;Hy-Vee;Harris Teeter;Sprouts;Ralphs;Vons;Fred Meyer;Jewel-Osco;Tesco;Sainsbury's;Asda;Morrisons;Waitrose;Carrefour;Loblaws;Woolworths;Coles;Save-A-Lot;Market Basket;WinCo;Food 4 Less;Smart & Final;Shaw's;Hannaford;Raley's;Giant Eagle;Schnucks;Ingles;Weis`);
L("toys","Name a classic toy","Brands and generic toys.",`LEGO;Barbie;Hot Wheels;Rubik's Cube;Play-Doh;Slinky;Etch A Sketch;Teddy bear;Yo-yo;Frisbee;Hula hoop;Mr. Potato Head;G.I. Joe;Nerf;Tamagotchi;Furby;Beanie Babies;Cabbage Patch Kids;Lite-Brite;Lincoln Logs;Tonka trucks|tonka;Matchbox cars|matchbox;Easy-Bake Oven;Silly Putty;Magic 8 Ball;Transformers;Polly Pocket;American Girl dolls|american girl;Care Bears;My Little Pony;Pokémon cards|pokemon cards;Bratz;Tickle Me Elmo;Super Soaker;Erector set;K'Nex;Spirograph;View-Master;Simon;Speak & Spell;Teddy Ruxpin;Radio Flyer wagon|radio flyer;Tinkertoy;Jack-in-the-box;Kite;Marbles;Jacks;Pogo stick;Squishmallows;Fidget spinner;L.O.L. Surprise!|lol surprise;Hatchimals;Shopkins;Duplo;Playmobil;Labubu`);
DS("colors",`
Red #red
Blue #blue
Green #green
Yellow #yellow
Orange #orange
Purple #purple
Pink #pink
Black
White #white
Brown #brown
Gray|grey #gray
Silver #gray
Gold #yellow
Navy|navy blue #blue
Teal #blue green
Turquoise #blue green
Maroon #red
Beige #brown
Lavender #purple
Violet #purple
Indigo #blue purple
Magenta #pink purple
Cyan #blue
Lime #green
Olive #green
Crimson #red
Scarlet #red
Burgundy #red
Coral #pink orange
Peach #orange pink
Tan #brown
Cream #white
Ivory #white
Khaki #brown
Mint #green
Emerald #green
Sky blue #blue
Royal blue #blue
Baby blue #blue
Aqua #blue green
Charcoal #gray
Fuchsia #pink
Hot pink #pink
Salmon #pink orange
Rose #pink red
Lilac #purple
Mauve #purple pink
Plum #purple
Amber #orange yellow
Mustard #yellow
Ochre #yellow brown
Rust #orange brown
Copper #orange brown
Bronze #brown
Chocolate #brown
Mahogany #red brown
Chestnut #brown
Taupe #brown gray
Sepia #brown
Cobalt #blue
Sapphire #blue
Azure #blue
Cerulean #blue
Periwinkle #blue purple
Powder blue #blue
Steel blue #blue
Midnight blue #blue
Electric blue #blue
Ultramarine #blue
Prussian blue #blue
Denim #blue
Sea green #green
Forest green #green
Kelly green #green
Hunter green #green
Jade #green
Chartreuse #green yellow
Sage #green
Moss green #green
Pistachio #green
Seafoam #green
Neon green #green
Cherry red #red
Ruby #red
Brick red #red
Fire engine red #red
Blood red #red
Wine #red
Vermilion #red orange
Cardinal #red
Raspberry #pink red
Blush #pink
Bubblegum pink #pink
Carnation pink #pink
Millennial pink #pink
Amethyst #purple
Eggplant #purple
Grape #purple
Orchid #purple pink
Mulberry #purple
Wisteria #purple
Byzantium #purple
Tangerine #orange
Apricot #orange
Pumpkin #orange
Burnt orange #orange
Marigold #orange yellow
Saffron #yellow orange
Lemon #yellow
Canary yellow #yellow
Goldenrod #yellow
Champagne #yellow white
Off-white #white
Eggshell #white
Pearl #white
Alabaster #white
Slate #gray
Ash gray #gray
Gunmetal #gray
Pewter #gray
Platinum #gray
Ebony
Jet black
Umber #brown
Sienna #brown orange
Caramel #brown
Coffee #brown
Mocha #brown
Cinnamon #brown
Camel #brown
Puce #purple brown
Celadon #green
Viridian #green
`);
ALL("colors","colors","Name a color","Any named color or shade.");
T("colors","colors","Name a shade of blue","","blue");
T("colors","colors","Name a shade of red","","red");
T("colors","colors","Name a shade of green","","green");
T("colors","colors","Name a shade of purple","","purple");
T("colors","colors","Name a shade of pink","","pink");
T("colors","colors","Name a shade of brown","","brown");
T("colors","colors","Name a shade of yellow or gold","","yellow");
L("colors","Name a color of the rainbow","",`Red;Blue;Green;Yellow;Orange;Purple|violet;Indigo`,{min:6});
DS("clothes",`
T-shirt|tee #top
Jeans #bottom
Dress
Shirt #top
Sweater|jumper #top
Jacket #outer
Coat #outer
Skirt #bottom
Shorts #bottom
Pants|trousers #bottom
Hoodie #top
Socks #foot
Shoes #foot
Hat #head
Scarf
Gloves
Suit
Tie
Blouse #top
Vest #top
Pajamas|pyjamas
Underwear
Bra
Boxers
Leggings #bottom
Sweatpants #bottom
Tank top #top
Polo shirt #top
Cardigan #top
Blazer #outer
Tuxedo
Gown
Overalls #bottom
Jumpsuit
Romper
Bikini
Swimsuit
Raincoat #outer
Parka #outer
Trench coat #outer
Poncho #outer
Cape #outer
Kimono
Sari
Kilt #bottom
Robe
Apron
Sneakers|trainers #foot
Boots #foot
Sandals #foot
Slippers #foot
Flip-flops #foot
High heels|heels #foot
Loafers #foot
Moccasins #foot
Clogs #foot
Crocs #foot
Cowboy boots #foot
Flats #foot
Wedges #foot
Stilettos #foot
Oxfords #foot
Espadrilles #foot
Mules #foot
Platform shoes #foot
Rain boots|wellies|wellington boots #foot
Baseball cap|cap #head
Beanie #head
Fedora #head
Cowboy hat #head
Top hat #head
Beret #head
Bowler hat|derby #head
Sombrero #head
Sun hat #head
Bucket hat #head
Visor #head
Helmet #head
Turban #head
Crown #head
Hijab #head
Bandana #head
Headband #head
Fez #head
Panama hat #head
Trucker hat #head
Balaclava #head
Earmuffs #head
Hard hat #head
Belt
Suspenders
Bow tie
Sunglasses
Mittens
Tights
Stockings
Corset
Turtleneck #top
Crop top #top
Sweatshirt #top
Windbreaker #outer
Peacoat #outer
Bomber jacket #outer
Leather jacket #outer
Denim jacket #outer
Puffer jacket #outer
Fleece #outer
Anorak #outer
Shawl
Waistcoat #top
Cargo pants #bottom
Chinos #bottom
Joggers #bottom
Culottes #bottom
Capri pants #bottom
Bell-bottoms #bottom
Sarong
Tunic #top
Onesie
Leotard
Tutu
Lederhosen
Dirndl
Hanbok
Qipao|cheongsam
Dashiki
`);
ALL("clothes","clothes","Name an item of clothing","Including shoes and hats.");
T("clothes","clothes","Name a type of footwear","","foot");
T("clothes","clothes","Name a type of hat or headwear","","head");
T("clothes","clothes","Name a top you'd wear on your upper body","Shirts, sweaters and the like.","top");
T("clothes","clothes","Name a type of coat or jacket","","outer");
T("clothes","clothes","Name something you'd wear on your legs","Pants, shorts, skirts and so on.","bottom");
L("home","Name a fabric or textile","",`Cotton;Silk;Wool;Polyester;Denim;Leather;Linen;Nylon;Velvet;Satin;Cashmere;Spandex|lycra|elastane;Fleece;Flannel;Rayon;Suede;Corduroy;Chiffon;Lace;Tweed;Jersey;Canvas;Felt;Tulle;Muslin;Organza;Taffeta;Chenille;Mohair;Alpaca;Angora;Acrylic;Viscose;Modal;Lyocell|tencel;Gabardine;Seersucker;Chambray;Burlap|hessian;Poplin;Crepe;Georgette;Damask;Brocade;Gingham;Terry cloth;Microfiber;Vinyl;Neoprene;Gore-Tex;Oilcloth;Hemp;Jute;Calico;Mesh;Sateen;Voile`);
L("home","Name a piece of furniture","",`Chair;Table;Sofa|couch;Bed;Desk;Dresser;Bookshelf|bookcase;Cabinet;Stool;Bench;Wardrobe|armoire;Nightstand|bedside table;Recliner;Ottoman;Futon;Armchair;Coffee table;Dining table;Crib|cot;Bunk bed;Rocking chair;Chest of drawers;Hutch;Sideboard|buffet;Credenza;Loveseat;Sectional;Chaise longue|chaise lounge;Bean bag;Hammock;TV stand;End table;Vanity;Headboard;Filing cabinet;Office chair|desk chair;Bar stool;High chair;Cradle;Daybed;Trundle bed;Murphy bed;Chest|hope chest;China cabinet;Coat rack;Shoe rack;Console table;Footstool;Settee;Divan;Canopy bed;Four-poster bed;Wingback chair;Papasan;Folding chair;Picnic table;Lawn chair;Adirondack chair;Porch swing;Curio cabinet;Roll-top desk;Lectern`);
L("home","Name a room or space in a house","",`Kitchen;Bedroom;Bathroom;Living room|lounge;Dining room;Garage;Basement;Attic;Office|study|home office;Laundry room;Closet;Hallway;Den;Family room;Guest room;Nursery;Pantry;Mudroom;Foyer|entryway;Porch;Patio;Sunroom;Playroom;Library;Home gym|gym;Home theater|media room;Wine cellar;Game room;Utility room;Primary bedroom|master bedroom;Powder room;Walk-in closet;Loft;Conservatory;Parlor;Deck;Balcony;Cellar;Workshop;Man cave;Panic room;Breakfast nook;Butler's pantry;Scullery;Larder;Spare room;Box room`);
L("home","Name a tool","Hand tools, power tools and garden tools.",`Hammer;Screwdriver;Wrench|spanner;Saw;Drill;Pliers;Tape measure;Level;Chisel;Axe;Shovel;Rake;Hoe;File;Sandpaper;Crowbar;Mallet;Vise;Clamp;Utility knife|box cutter;Wire cutters;Socket wrench;Allen wrench|hex key;Staple gun;Nail gun;Hacksaw;Jigsaw;Circular saw;Chainsaw;Sander;Router;Plane;Awl;Trowel;Pickaxe;Sledgehammer;Ladder;Flashlight;Soldering iron;Glue gun;Caulking gun;Multimeter;Stud finder;Square;Putty knife;Paintbrush;Paint roller;Pruning shears|pruners|secateurs;Hedge trimmer;Lawn mower;Leaf blower;Wheelbarrow;Pitchfork;Spade;Monkey wrench;Pipe wrench;Ratchet;Bolt cutters;Tin snips;Scraper;Drill press;Table saw;Miter saw;Band saw;Lathe;Heat gun;Impact driver;Torque wrench;Pry bar;Wire stripper;Anvil;Hatchet;Machete;Scythe;Sickle`);
DS("jobs",`
Doctor|physician #hosp
Teacher #school
Nurse #hosp school
Lawyer|attorney #law
Firefighter|fireman
Police officer|cop|policeman
Engineer
Chef|cook #rest
Pilot
Dentist
Accountant
Farmer
Scientist
Artist
Actor|actress #film
Musician
Writer|author
Mechanic
Plumber #constr
Electrician #constr
Carpenter #constr
Architect #constr
Software engineer|programmer|developer|coder
Waiter|waitress|server #rest
Cashier
Veterinarian|vet
Pharmacist #hosp
Surgeon #hosp
Judge #law
Journalist|reporter
Photographer
Soldier
Astronaut
Librarian #school
Professor
Principal #school
Janitor|custodian #school hosp
Construction worker #constr
Truck driver
Bus driver #school
Taxi driver
Mail carrier|mailman|postman
Hairdresser|hairstylist
Barber
Baker #rest
Butcher
Banker
Secretary
Receptionist #hosp
Salesperson
Real estate agent|realtor
Flight attendant
Lifeguard
Coach #school
Athlete
Dancer
Singer
Comedian
Director #film
Producer #film
Editor #film
Designer
Psychologist
Therapist
Social worker #hosp
Paramedic|emt #hosp
Optometrist
Chiropractor
Physical therapist #hosp
Radiologist #hosp
Anesthesiologist #hosp
Pediatrician #hosp
Midwife #hosp
Orderly #hosp
Phlebotomist #hosp
Lab technician #hosp
Dietitian|nutritionist #hosp
Chaplain #hosp
Security guard #hosp
Bartender #rest
Host|hostess #rest
Busser|busboy #rest
Dishwasher #rest
Sous chef #rest
Line cook #rest
Sommelier #rest
Pastry chef #rest
Maître d'|maitre d #rest
Food runner #rest
Restaurant manager #rest
Cinematographer #film
Screenwriter #film
Stunt performer|stuntman|stunt double #film
Makeup artist #film
Costume designer #film
Gaffer #film
Grip #film
Boom operator #film
Script supervisor #film
Casting director #film
Location scout #film
Set designer #film
Production assistant #film
Composer #film
Sound mixer #film
Visual effects artist #film
Extra #film
Camera operator #film
Best boy #film
Key grip #film
Art director #film
Foley artist #film
Choreographer #film
Teaching assistant #school
Guidance counselor|counselor #school
Vice principal #school
Lunch lady|cafeteria worker #school
Crossing guard #school
Superintendent #school
Tutor #school
Substitute teacher #school
Speech therapist #school hosp
Paralegal #law
Bailiff #law
Court reporter #law
Court clerk|clerk #law
Prosecutor|district attorney #law
Public defender #law
Notary #law
Detective
Welder #constr
Bricklayer|mason #constr
Roofer #constr
Painter #constr
Surveyor #constr
Crane operator #constr
Foreman #constr
Glazier #constr
Plasterer #constr
Ironworker #constr
HVAC technician #constr
Tiler #constr
Landscaper
Gardener
Fisherman
Miner
Lumberjack
Zookeeper
Florist
Tailor
Jeweler
Locksmith
Exterminator
Dog walker
Nanny
Babysitter
Housekeeper|maid
Butler
Chauffeur
Clown
Magician
DJ
Barista
Model
Influencer
Politician
Mayor
Diplomat
Spy
Translator|interpreter
Economist
Actuary
Data scientist
Mortician|undertaker
Priest
Rabbi
Imam
Monk
Nun
Archaeologist
Historian
Geologist
Biologist
Chemist
Physicist
Astronomer
Meteorologist
Marine biologist
Zoologist
Psychiatrist
Coroner
Air traffic controller
Sailor
Train conductor
`);
ALL("jobs","jobs","Name a job or profession","");
T("jobs","jobs","Name a job you'd find in a hospital","","hosp");
T("jobs","jobs","Name a job in a restaurant","","rest");
T("jobs","jobs","Name a job on a film set","","film");
T("jobs","jobs","Name a job in a school","","school");
T("jobs","jobs","Name a job in a courtroom or law office","","law");
T("jobs","jobs","Name a construction or building trade","","constr");
L("school","Name a school subject","",`Math|maths|mathematics;English;Science;History;Art;Music;Physical education|pe|gym;Geography;Biology;Chemistry;Physics;Spanish;French;Computer science;Economics;Psychology;Social studies;Literature;Algebra;Geometry;Calculus;Health;Drama|theater;Government|civics;German;Latin;Statistics;Sociology;Philosophy;Religious studies;Home economics;Shop|woodshop;Band;Choir;Journalism;Debate;Photography;Mandarin|chinese;Japanese;Environmental science;Astronomy;Anatomy;Business;Accounting;Earth science;World history;U.S. history|american history;Trigonometry;Creative writing;Robotics`);
DS("holidays",`
Christmas #christian us
Thanksgiving #us
Halloween
Easter #christian
New Year's Day #us
Valentine's Day
Independence Day|fourth of july|july 4th #us
Hanukkah|chanukah #jewish
St. Patrick's Day|saint patricks day
Mother's Day
Father's Day
Memorial Day #us
Labor Day #us
Martin Luther King Jr. Day|mlk day #us
Presidents' Day|washingtons birthday #us
Veterans Day #us
Columbus Day|indigenous peoples day #us
Juneteenth #us
New Year's Eve
Diwali #hindu
Ramadan #muslim
Eid al-Fitr #muslim
Eid al-Adha #muslim
Passover #jewish
Rosh Hashanah #jewish
Yom Kippur #jewish
Lunar New Year|chinese new year #chinese
Kwanzaa
Cinco de Mayo
Día de los Muertos|day of the dead|dia de los muertos
Mardi Gras|fat tuesday
Good Friday #christian
Ash Wednesday #christian
Palm Sunday #christian
Lent #christian
Advent #christian
Epiphany #christian
Pentecost #christian
All Saints' Day #christian
Christmas Eve #christian
Boxing Day
Groundhog Day
April Fools' Day
Earth Day
Arbor Day
Holi #hindu
Navratri #hindu
Raksha Bandhan #hindu
Ganesh Chaturthi #hindu
Janmashtami #hindu
Dussehra #hindu
Purim #jewish
Sukkot #jewish
Shavuot #jewish
Tu BiShvat #jewish
Simchat Torah #jewish
Mid-Autumn Festival|moon festival #chinese
Dragon Boat Festival #chinese
Lantern Festival #chinese
Qingming Festival|qingming #chinese
Mawlid #muslim
Ashura #muslim
Laylat al-Qadr #muslim
Isra and Mi'raj #muslim
Guy Fawkes Night|bonfire night
Bastille Day
Canada Day
Australia Day
Anzac Day
Oktoberfest
Carnival
Hogmanay
Burns Night
Remembrance Day
Flag Day
Election Day
Pi Day
Star Wars Day|may the fourth
St. Nicholas Day #christian
Candlemas #christian
Corpus Christi #christian
Maundy Thursday|holy thursday #christian
Easter Monday #christian
Shrove Tuesday|pancake day
Vesak
Nowruz
Songkran
Obon
Tết|tet
`);
ALL("holidays","holidays","Name a holiday or festival","Any culture.");
T("holidays","holidays","Name a U.S. federal holiday","","us");
T("holidays","holidays","Name a Jewish holiday","","jewish");
T("holidays","holidays","Name a Christian holiday or season","","christian");
T("holidays","holidays","Name a Hindu festival","","hindu");
T("holidays","holidays","Name an Islamic holiday or observance","","muslim");
T("holidays","holidays","Name a Chinese festival","","chinese");
L("holidaythings","Name something associated with Christmas","",`Christmas tree|tree;Santa Claus|santa;Presents|gifts;Reindeer;Snowman;Stockings;Ornaments;Lights;Candy canes;Mistletoe;Wreath;Elves;Sleigh;Carols;Gingerbread;Eggnog;Star;Angel;Nativity;Holly;Tinsel;Chimney;North Pole;Cookies;Rudolph;Fruitcake;Poinsettia;Snow;Christmas cards;Advent calendar;Nutcracker;Chestnuts;Yule log;Bells;Bows;Wrapping paper;The Grinch|grinch;Scrooge;Frosty;Jesus;Mary;Joseph;Wise men|three kings|magi;Shepherds;Manger;Turkey;Ham;Christmas pudding;Christmas crackers|crackers;Ugly sweater;Fireplace;Garland;Tree topper;Sugarplums;Mince pie;Pinecones;Krampus;Mrs. Claus`);
L("misc","Name a traditional wedding anniversary gift","Like paper for the first.",`Paper;Silver;Gold;Diamond;Cotton;Wood;Leather;Ruby;Pearl;Tin|aluminum;Crystal;China;Iron;Wool;Bronze;Pottery;Silk;Lace;Steel;Sapphire;Emerald;Copper;Ivory;Linen;Sugar;Coral;Jade;Platinum`);
