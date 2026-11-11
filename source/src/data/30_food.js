GROUP("food");
/* produce: fruit veg berry citrus tropical stone melon root leafy cruc squash legume allium · red green yellow orange purple */
DS("produce",`
Apple #fruit red green
Banana #fruit tropical yellow
Orange #fruit citrus orange
Strawberry #fruit berry red
Grape #fruit purple green
Watermelon #fruit melon red green
Pineapple #fruit tropical yellow
Mango #fruit tropical orange
Peach #fruit stone orange
Pear #fruit green yellow
Cherry #fruit stone red
Lemon #fruit citrus yellow
Blueberry #fruit berry purple
Raspberry #fruit berry red
Kiwi|kiwifruit #fruit green
Lime #fruit citrus green
Grapefruit #fruit citrus
Plum #fruit stone purple
Coconut #fruit tropical
Cantaloupe #fruit melon orange
Papaya #fruit tropical orange
Pomegranate #fruit red
Blackberry #fruit berry purple
Apricot #fruit stone orange
Avocado #fruit green
Fig #fruit purple
Nectarine #fruit stone orange
Tangerine #fruit citrus orange
Clementine #fruit citrus orange
Honeydew #fruit melon green
Cranberry #fruit berry red
Passion fruit #fruit tropical purple
Dragon fruit|pitaya #fruit tropical
Lychee #fruit tropical
Guava #fruit tropical
Date #fruit tropical
Tomato #fruit veg red
Persimmon #fruit orange
Mandarin #fruit citrus orange
Starfruit|carambola #fruit tropical yellow
Gooseberry #fruit berry green
Currant|blackcurrant|redcurrant #fruit berry
Elderberry #fruit berry purple
Mulberry #fruit berry purple
Boysenberry #fruit berry
Huckleberry #fruit berry purple
Kumquat #fruit citrus orange
Quince #fruit yellow
Jackfruit #fruit tropical
Durian #fruit tropical
Rambutan #fruit tropical red
Mangosteen #fruit tropical purple
Plantain #fruit tropical
Olive #fruit green
Acai #fruit berry purple
Goji berry #fruit berry red
Yuzu #fruit citrus yellow
Blood orange #fruit citrus
Pomelo #fruit citrus
Tamarind #fruit tropical
Breadfruit #fruit tropical
Soursop|guanabana #fruit tropical
Cherimoya|custard apple #fruit tropical
Loquat #fruit
Longan #fruit tropical
Feijoa #fruit
Prickly pear #fruit
Cloudberry #fruit berry
Lingonberry #fruit berry red
Ackee #fruit tropical
Kiwano|horned melon #fruit melon
Bilberry #fruit berry
Marionberry #fruit berry
Ground cherry|physalis #fruit
Pluot #fruit stone
Sapodilla #fruit tropical
Ugli fruit #fruit citrus
Carrot #veg root orange
Potato #veg root
Broccoli #veg cruc green
Onion #veg allium
Lettuce #veg leafy green
Cucumber #veg green
Corn #veg yellow
Spinach #veg leafy green
Bell pepper|pepper #veg green red yellow
Celery #veg green
Peas #veg legume green
Cabbage #veg cruc leafy green
Cauliflower #veg cruc
Green beans|string beans #veg legume green
Mushroom #veg
Garlic #veg allium
Zucchini|courgette #veg squash green
Sweet potato #veg root orange
Asparagus #veg green
Eggplant|aubergine #veg purple
Kale #veg leafy cruc green
Pumpkin #veg squash orange
Brussels sprouts #veg cruc green
Radish #veg root red
Beet|beetroot #veg root purple red
Squash #veg squash yellow
Artichoke #veg green
Leek #veg allium green
Turnip #veg root cruc
Okra #veg green
Butternut squash #veg squash orange
Arugula|rocket #veg leafy green
Bok choy|pak choi #veg leafy cruc green
Parsnip #veg root
Yam #veg root
Collard greens|collards #veg leafy cruc green
Swiss chard|chard #veg leafy green
Jalapeño|jalapeno #veg green
Chili pepper|chile #veg red
Shallot #veg allium
Scallion|green onion|spring onion #veg allium green
Kohlrabi #veg cruc
Rutabaga|swede #veg root cruc
Fennel #veg
Watercress #veg leafy green
Endive #veg leafy
Radicchio #veg leafy purple
Jicama #veg root
Edamame #veg legume green
Lima beans #veg legume
Chickpeas|garbanzo beans #veg legume
Lentils #veg legume
Black beans #veg legume
Kidney beans #veg legume red
Snow peas #veg legume green
Sugar snap peas #veg legume green
Bamboo shoots #veg
Bean sprouts #veg legume
Daikon #veg root
Taro #veg root
Cassava|yuca #veg root
Celeriac #veg root
Spaghetti squash #veg squash yellow
Acorn squash #veg squash
Horseradish #veg root
Ginger #veg root
Water chestnut #veg
Lotus root #veg root
Chayote #veg squash green
Tomatillo #veg green
Mustard greens #veg leafy cruc green
Broccoli rabe|rapini #veg cruc green
Romanesco #veg cruc green
Rhubarb #veg red
Jerusalem artichoke|sunchoke #veg root
Napa cabbage #veg cruc leafy
Red cabbage #veg cruc purple
Red onion #veg allium purple
Sorrel #veg leafy green
Romaine #veg leafy green
`);
const PR="produce";
T("produce",PR,"Name a fruit","Botanical fruits people eat as fruit, plus tomatoes.","fruit");
T("produce",PR,"Name a vegetable","","veg");
T("produce",PR,"Name a berry","Culinary berries.","berry");
T("produce",PR,"Name a citrus fruit","","citrus");
T("produce",PR,"Name a tropical fruit","","tropical");
T("produce",PR,"Name a stone fruit","Fruits with a pit.","stone");
T("produce",PR,"Name a root vegetable","Roots, tubers, corms.","root");
T("produce",PR,"Name a leafy green","","leafy");
T("produce",PR,"Name a bean, pea or lentil","","legume");
T("produce",PR,"Name a squash or gourd","","squash");
T("produce",PR,"Name a vegetable in the cabbage family","Brassicas.","cruc");
T("produce",PR,"Name a red fruit or vegetable","","red");
T("produce",PR,"Name a green vegetable","","veg&green");
T("produce",PR,"Name a yellow fruit or vegetable","","yellow");
T("produce",PR,"Name an orange fruit or vegetable","Orange in color.","orange");
T("produce",PR,"Name a purple fruit or vegetable","","purple");
LETTERS("produceletters",PR,c=>`Name a fruit or vegetable that starts with ${c}`,"",null,{min:9});

DS("cheese",`
Cheddar #uk
Mozzarella #it
Parmesan|parmigiano reggiano|parmigiano #it
Swiss #us
Brie #fr
Gouda #nl
Feta #gr
American #us
Provolone #it
Blue cheese|bleu cheese
Camembert #fr
Ricotta #it
Monterey Jack|jack #us
Pepper Jack #us
Colby #us
Gruyère|gruyere #ch
Goat cheese|chevre #fr
Cream cheese #us
Cottage cheese
Gorgonzola #it
Roquefort #fr
Stilton #uk
Mascarpone #it
Havarti
Manchego #es
Pecorino|pecorino romano #it
Emmental|emmentaler #ch
Halloumi
Asiago #it
Muenster|munster #us
Edam #nl
Fontina #it
Burrata #it
Paneer
Queso fresco
Limburger
Raclette #ch
Jarlsberg
Romano #it
Taleggio #it
Comté|comte #fr
Neufchâtel|neufchatel #fr
Wensleydale #uk
Double Gloucester #uk
Red Leicester #uk
Cheshire #uk
Lancashire #uk
Caerphilly #uk
Port Salut #fr
Reblochon #fr
Boursin #fr
Époisses|epoisses #fr
Grana Padano #it
Bel Paese #it
Scamorza #it
Cotija
Oaxaca cheese|oaxaca
Brunost
Leerdammer #nl
Maasdam #nl
Appenzeller #ch
Manouri #gr
Kefalotyri #gr
Cabrales #es
Velveeta #us
String cheese #us
Colby-Jack|colby jack #us
Brick #us
Cambozola
Danish Blue
Saint-Nectaire|saint nectaire #fr
Morbier #fr
Cantal #fr
Mimolette #fr
`);
ALL("cheese","cheese","Name a cheese","Any variety.");
T("cheese","cheese","Name a French cheese","","fr");
T("cheese","cheese","Name an Italian cheese","","it");
T("cheese","cheese","Name a British cheese","","uk");
T("cheese","cheese","Name a cheese that originated in the USA","","us");

L("pasta","Name a pasta shape","",`Spaghetti;Penne;Macaroni|elbow macaroni|elbows;Fettuccine;Lasagna|lasagne;Ravioli;Linguine;Rigatoni;Fusilli;Farfalle|bow tie|bowtie;Tortellini;Orzo;Rotini;Angel hair|capellini;Ziti;Gnocchi;Tagliatelle;Pappardelle;Shells|conchiglie;Manicotti;Cannelloni;Orecchiette;Bucatini;Vermicelli;Ditalini;Tortelloni;Gemelli;Cavatappi;Campanelle;Paccheri;Radiatore;Rotelle|wagon wheels;Stelline|stars;Cavatelli;Trofie;Strozzapreti;Agnolotti;Mafaldine|mafalda;Fregola;Anelli;Acini di pepe;Casarecce;Tortiglioni;Lumache;Spaghettini;Bigoli;Pici;Garganelli;Cappelletti;Fideo;Sedani`);
L("bread","Name a type of bread","",`White bread;Whole wheat|wholemeal;Sourdough;Baguette;Rye;Croissant;Bagel;Pita;Naan;Ciabatta;Focaccia;Brioche;Tortilla;Cornbread;English muffin;Challah;Pumpernickel;Multigrain;Banana bread;Garlic bread;Flatbread;Roti;Chapati;Dinner roll;Biscuit;Soda bread;Matzo|matzah;Pretzel;Hamburger bun|bun;French bread;Hawaiian roll|hawaiian bread;Monkey bread;Zucchini bread;Lavash;Injera;Arepa;Paratha;Concha|pan dulce;Panettone;Stollen;Babka;Scone;Crumpet;Bao|steamed bun;Potato bread;Milk bread|shokupan;Kaiser roll;Ezekiel bread;Brown bread;Breadsticks|grissini;Pandesal;Puri;Bhatura;Simit;Lefse;Texas toast;Fougasse`);
L("desserts","Name a dessert","",`Ice cream;Cake;Cookies;Brownies;Pie;Cheesecake;Apple pie;Tiramisu;Pudding;Cupcake;Donut|doughnut;Chocolate cake;Crème brûlée|creme brulee;Chocolate mousse|mousse;Macarons;Cannoli;Baklava;Churros;Flan;Sundae;Banana split;Key lime pie;Pumpkin pie;Carrot cake;Red velvet cake;Lemon bars;Fudge;Gelato;Sorbet;Panna cotta;Cobbler|peach cobbler;Crumble|apple crumble;Trifle;Éclair|eclair;Profiteroles|cream puffs;Soufflé|souffle;Pavlova;Strudel|apple strudel;S'mores|smores;Rice pudding;Bread pudding;Sticky toffee pudding;Black Forest cake;Angel food cake;Pound cake;Tres leches cake|tres leches;Mochi;Gulab jamun;Eton mess;Banoffee pie;Crêpes|crepes;Lava cake|molten chocolate cake;Boston cream pie;Pecan pie;Cherry pie;Frozen yogurt;Milkshake;Popsicle;Jell-O|jello|jelly;Custard;Tart;Madeleines;Biscotti;Petit fours;Mille-feuille|napoleon;Opera cake;Baked Alaska;Bananas Foster;Blondies;Whoopie pie;Rugelach;Halva;Kulfi;Semifreddo;Zabaglione;Affogato;Sfogliatella;Pastel de nata|portuguese custard tart;Knafeh|kunafa;Taiyaki;Brigadeiro`);
L("cookies","Name a type of cookie","Generic kinds, not brands.",`Chocolate chip;Oatmeal raisin;Sugar cookie;Peanut butter cookie;Snickerdoodle;Shortbread;Gingerbread;Macaron;Biscotti;Fortune cookie;Black and white cookie;Butter cookie;Molasses cookie;Thumbprint cookie;Linzer cookie;Madeleine;Macaroon;Snowball cookie|russian tea cake|mexican wedding cookie;Pizzelle;Florentine;Amaretti;Gingersnap;White chocolate macadamia;Double chocolate;Anzac biscuit;Digestive biscuit;Spritz cookie;Wafer;Ladyfinger;Rainbow cookie;Sandies|pecan sandie;Oatmeal cookie;Crinkle cookie;Meringue;Alfajor;Stroopwafel;Speculoos;Lebkuchen;Polvorón|polvoron;Hamantaschen;Sandwich cookie;Kolache`);
L("candy","Name a chocolate bar","Brand names.",`Snickers;Kit Kat;Twix;Milky Way;Hershey's|hersheys bar;3 Musketeers|three musketeers;Butterfinger;Baby Ruth;Almond Joy;Mounds;Crunch|nestle crunch;Mr. Goodbar|mr goodbar;PayDay;Heath;Toblerone;Mars;Bounty;Kinder Bueno;Skor;100 Grand;Whatchamacallit;Take 5;Zero;Charleston Chew;Oh Henry!|oh henry;Dairy Milk|cadbury dairy milk;Crunchie;Aero;Galaxy;Wispa;Flake;Caramello;Milkybar;Double Decker;Picnic;Lion;Yorkie;Fry's Chocolate Cream;Clark Bar;Hershey's Cookies 'n' Creme|cookies n creme`);
L("candy","Name a candy that isn't chocolate","Brand names.",`Skittles;Starburst;Jolly Rancher;Twizzlers;Sour Patch Kids;Swedish Fish;Haribo|gummy bears;Nerds;Laffy Taffy;Airheads;Tootsie Roll;Life Savers|lifesavers;Jelly Belly|jelly beans;Mike and Ike;Hot Tamales;Lemonheads;Smarties;Pez;Dots;Good & Plenty|good and plenty;Red Vines;Runts;Ring Pop;Blow Pop;Dum Dums;Werther's Original|werthers;Peeps;Sweethearts;Candy corn;Pop Rocks;Fun Dip;Warheads;Big League Chew;Bazooka;Trolli;Juicy Fruit;Mentos;Tic Tac;Altoids;Jawbreaker|gobstopper;Chupa Chups;Atomic Fireball;Zotz;Now and Later;Bottle Caps;Gushers`);
L("cereal","Name a breakfast cereal","Brand names.",`Cheerios;Frosted Flakes;Froot Loops;Lucky Charms;Cinnamon Toast Crunch;Corn Flakes;Rice Krispies;Cap'n Crunch|captain crunch;Honey Nut Cheerios;Cocoa Puffs;Raisin Bran;Special K;Trix;Apple Jacks;Fruity Pebbles;Cocoa Pebbles;Honey Bunches of Oats;Frosted Mini-Wheats|mini wheats;Kix;Golden Grahams;Corn Pops;Reese's Puffs|reeses puffs;Cookie Crisp;Count Chocula;Wheaties;Grape-Nuts|grape nuts;Life;Chex;Honey Smacks;Cocoa Krispies;Crispix;Total;Fiber One;Cracklin' Oat Bran;Honeycomb;Weetabix;Shreddies;Franken Berry;Boo Berry;Waffle Crisp;Oreo O's;French Toast Crunch;Alpha-Bits;Krave;Coco Pops;Crunchy Nut;Basic 4`);
L("drinks","Name a soda brand","",`Coca-Cola|coke;Pepsi;Sprite;Dr Pepper;Mountain Dew;Fanta;7 Up|seven up;A&W|root beer;Diet Coke;Canada Dry|ginger ale;Sunkist;Crush;Barq's|barqs;Coke Zero;Diet Pepsi;Mello Yello;Sierra Mist|starry;Big Red;RC Cola|royal crown;Fresca;Squirt;Tab;Irn-Bru|irn bru;Schweppes;Jarritos;Inca Kola;Vernors;Cheerwine;Moxie;Surge;Shasta;Faygo;Stewart's;Jones Soda;Olipop;Poppi;Mug;Dad's`);
L("chains","Name a fast food chain","",`McDonald's|mcdonalds;Burger King;Wendy's|wendys;Taco Bell;KFC|kentucky fried chicken;Subway;Chick-fil-A|chick fil a;Pizza Hut;Domino's|dominos;Starbucks;Dunkin'|dunkin|dunkin donuts;Arby's|arbys;Sonic;Popeyes;Five Guys;In-N-Out|in n out;Chipotle;Jack in the Box;Dairy Queen;Little Caesars;Panda Express;Papa John's|papa johns;Whataburger;Carl's Jr.|carls jr;Hardee's|hardees;White Castle;Shake Shack;Culver's|culvers;Panera Bread|panera;Wingstop;Raising Cane's|raising canes;Del Taco;Jimmy John's|jimmy johns;Long John Silver's;Checkers|rally's;Krystal;Zaxby's;Bojangles;Church's Chicken|churchs;Steak 'n Shake|steak n shake;Qdoba;Moe's|moes;Firehouse Subs;Jersey Mike's;Quiznos;Tim Hortons;El Pollo Loco;Krispy Kreme;Baskin-Robbins|baskin robbins;Auntie Anne's;Cinnabon;Wienerschnitzel;Freddy's;Smashburger;Fatburger;Nando's|nandos;Pret A Manger|pret;Greggs;Jollibee;Dutch Bros;Portillo's;Cook Out`);
L("chains","Name a sit-down restaurant chain","",`Olive Garden;Applebee's|applebees;Chili's|chilis;Red Lobster;Outback Steakhouse|outback;TGI Fridays|fridays;Buffalo Wild Wings|bdubs;Cheesecake Factory;Texas Roadhouse;IHOP;Denny's|dennys;Cracker Barrel;Red Robin;Ruby Tuesday;LongHorn Steakhouse|longhorn;P.F. Chang's|pf changs;Hooters;Waffle House;Perkins;Bob Evans;Golden Corral;Benihana;Carrabba's;Maggiano's;Hard Rock Cafe;Rainforest Cafe;Dave & Buster's|dave and busters;Chuck E. Cheese|chuck e cheese;Bonefish Grill;Ruth's Chris;Buca di Beppo;BJ's Restaurant|bjs;Yard House;California Pizza Kitchen|cpk;Joe's Crab Shack;Bubba Gump;Sizzler;Bahama Breeze;Cheddar's;O'Charley's;Friendly's;Famous Dave's;Logan's Roadhouse;Houlihan's;Village Inn`);
L("drinks","Name a coffee drink","",`Latte;Cappuccino;Espresso;Americano;Mocha;Macchiato;Flat white;Cold brew;Iced coffee;Frappuccino|frappe;Cortado;Affogato;Irish coffee;Turkish coffee;Café au lait|cafe au lait;Ristretto;Lungo;Red eye;Doppio;Vietnamese iced coffee|ca phe sua da;Nitro cold brew;Dalgona coffee|dalgona;Breve;Café con leche|cafe con leche;Piccolo;Cuban coffee|cafecito|cafe cubano;Pumpkin spice latte|psl;Vienna coffee|einspanner;Galão|galao`);
L("drinks","Name a type of tea","",`Green tea;Black tea;Chamomile;Earl Grey;Oolong;White tea;Peppermint|mint tea;Chai;Matcha;English Breakfast;Jasmine;Hibiscus;Rooibos;Darjeeling;Assam;Lapsang souchong;Sencha;Genmaicha;Pu-erh|puerh;Yerba mate|mate;Bubble tea|boba;Iced tea|sweet tea;Ginger tea;Ceylon;Lady Grey;Irish Breakfast;Moroccan mint;Hojicha;Kombucha;Thai iced tea;Milk tea;Butter tea`);
L("drinks","Name a cocktail","",`Margarita;Martini;Mojito;Cosmopolitan;Old Fashioned;Piña Colada|pina colada;Bloody Mary;Daiquiri;Manhattan;Mai Tai;Long Island Iced Tea;Moscow Mule;Negroni;Whiskey Sour;Gin and Tonic;Screwdriver;Mimosa;Sex on the Beach;Tequila Sunrise;Aperol Spritz|spritz;Paloma;Mint Julep;Tom Collins;Bellini;White Russian;Black Russian;Espresso Martini;Caipirinha;Sangria;Sidecar;Gimlet;Hurricane;Cuba Libre|rum and coke;Dark 'n' Stormy|dark and stormy;Kir Royale;French 75;Sazerac;Pisco Sour;Singapore Sling;Zombie;Grasshopper;Brandy Alexander;Mudslide;Amaretto Sour;Lemon Drop;Appletini;Blue Lagoon;Fuzzy Navel;Salty Dog;Greyhound;Bramble;Aviation;Last Word;Boulevardier;Vesper;Rob Roy;Rusty Nail;Gin Fizz;Ramos Gin Fizz;Hot Toddy;Painkiller;Bahama Mama;Michelada;Pimm's Cup|pimms`);
L("drinks","Name a type of liquor","Spirits.",`Vodka;Whiskey|whisky;Rum;Gin;Tequila;Brandy;Bourbon;Scotch;Mezcal;Cognac;Absinthe;Schnapps;Moonshine;Rye whiskey|rye;Baijiu;Soju;Grappa;Ouzo;Pisco;Cachaça|cachaca;Aquavit|akvavit;Sambuca;Armagnac;Arak;Raki;Slivovitz;Calvados;Shochu;Poitín|poitin;Applejack;Kirsch;Pastis;Genever|jenever`);
L("drinks","Name a wine grape","",`Merlot;Cabernet Sauvignon|cabernet;Chardonnay;Pinot Noir;Sauvignon Blanc;Pinot Grigio|pinot gris;Riesling;Malbec;Zinfandel;Shiraz|syrah;Moscato|muscat;Sangiovese;Tempranillo;Grenache|garnacha;Chenin Blanc;Gewürztraminer|gewurztraminer;Viognier;Nebbiolo;Cabernet Franc;Petite Sirah;Barbera;Carménère|carmenere;Gamay;Mourvèdre|mourvedre|monastrell;Albariño|albarino;Grüner Veltliner|gruner veltliner;Sémillon|semillon;Pinotage;Torrontés|torrontes;Montepulciano;Primitivo;Trebbiano;Vermentino;Petit Verdot;Marsanne;Touriga Nacional;Aglianico;Furmint;Concord;Glera`);
L("drinks","Name a beer brand","",`Budweiser;Coors|coors light;Miller|miller lite;Heineken;Corona;Guinness;Stella Artois;Bud Light;Michelob Ultra|michelob;Blue Moon;Samuel Adams|sam adams;Modelo;Dos Equis;Pabst Blue Ribbon|pbr|pabst;Busch;Natural Light|natty light;Keystone;Yuengling;Sierra Nevada;Labatt;Molson;Carlsberg;Beck's|becks;Amstel;Peroni;Asahi;Sapporo;Kirin;Tsingtao;Foster's|fosters;Fat Tire;Pacifico;Tecate;Shiner;Leinenkugel's;Rolling Rock;Newcastle;Bass;Hoegaarden;Leffe;Chimay;Duvel;Pilsner Urquell;Paulaner;Spaten;Lagunitas;Goose Island;Grolsch;Kronenbourg;Estrella Damm;San Miguel;Red Stripe;Tiger;Singha;Kingfisher`);
L("drinks","Name a style of beer","",`Lager;IPA|india pale ale;Stout;Pilsner;Ale;Pale ale;Porter;Wheat beer|hefeweizen;Sour;Amber ale;Brown ale;Bock;Saison;Blonde ale;Tripel;Dubbel;Kölsch|kolsch;Gose;Lambic;Märzen|marzen|oktoberfest;Dunkel;Witbier;Barleywine;Cream ale;Irish red|red ale;Scotch ale;Berliner Weisse;Hazy IPA|neipa;Light beer;Shandy;Doppelbock;Quadrupel;Rauchbier;Schwarzbier`);
L("spices","Name a herb or spice","",`Black pepper|pepper;Cinnamon;Basil;Oregano;Paprika;Cumin;Rosemary;Thyme;Parsley;Ginger;Nutmeg;Cilantro|coriander;Turmeric;Chili powder;Cayenne;Sage;Dill;Mint;Bay leaf|bay leaves;Cloves;Vanilla;Curry powder;Saffron;Cardamom;Allspice;Chives;Mustard seed|mustard;Tarragon;Fennel seed|fennel;Star anise|anise;Marjoram;Sesame seeds|sesame;Poppy seeds;Lemongrass;Garam masala;Za'atar|zaatar;Sumac;Fenugreek;Caraway;Celery seed;Red pepper flakes|chili flakes;Garlic powder;Onion powder;Juniper berries;Five-spice|chinese five spice;Herbes de Provence;Old Bay;Cajun seasoning;Lavender;Chervil;Lovage;Savory;Asafoetida;Nigella seeds|kalonji;Mace;Sichuan pepper|szechuan pepper;Galangal;Makrut lime leaves|kaffir lime leaves;Epazote;Annatto|achiote;Ras el hanout;Berbere;White pepper`);
L("sauces","Name a condiment or sauce","",`Ketchup|catsup;Mustard;Mayonnaise|mayo;Ranch;Barbecue sauce|bbq sauce;Hot sauce;Soy sauce;Salsa;Relish;Sriracha;Worcestershire sauce|worcestershire;Tartar sauce;Teriyaki sauce;Honey mustard;Buffalo sauce;Guacamole;Pesto;Marinara;Alfredo;Hollandaise;Gravy;Tabasco;Aioli;Tzatziki;Chimichurri;Hoisin sauce|hoisin;Fish sauce;Oyster sauce;Horseradish;Cocktail sauce;Sweet and sour sauce;Thousand Island;Italian dressing;Blue cheese dressing;Caesar dressing;Vinaigrette;Tahini;Harissa;Gochujang;Sambal;Chutney;Mint sauce;Applesauce;Cranberry sauce;Brown sauce|hp sauce;Salad cream;Marmite;Vegemite;Piccalilli;Béarnaise|bearnaise;Béchamel|bechamel;Vodka sauce;Romesco;Mole;Ponzu;Peri-peri|piri piri;Jerk sauce;Sweet chili sauce;Malt vinegar;Balsamic vinegar|balsamic`);
L("nuts","Name a nut","Culinary nuts count.",`Peanut;Almond;Cashew;Walnut;Pistachio;Pecan;Hazelnut|filbert;Macadamia;Brazil nut;Pine nut;Chestnut;Coconut;Acorn;Hickory nut;Kola nut;Candlenut;Tiger nut;Butternut;Pili nut;Beechnut`);
L("pizza","Name a pizza topping","",`Pepperoni;Cheese|extra cheese;Sausage;Mushrooms;Onions;Green peppers|peppers;Olives|black olives;Bacon;Ham;Pineapple;Chicken;Jalapeños|jalapenos;Spinach;Tomatoes;Anchovies;Basil;Garlic;Ground beef|beef;Meatballs;Artichokes;Feta;Banana peppers;Red onion;Salami;Prosciutto;Arugula;Sun-dried tomatoes;Ricotta;Broccoli;Goat cheese;Pesto;BBQ chicken;Buffalo chicken;Egg;Corn;Shrimp;Capers;Eggplant;Zucchini;Canadian bacon;Hot honey;Truffle oil`);
L("sandwich","Name a type of sandwich","",`BLT;Grilled cheese;Peanut butter and jelly|pbj|pb and j;Ham and cheese;Club sandwich|club;Reuben;Cuban sandwich|cubano;Philly cheesesteak|cheesesteak;Sub|hoagie|hero;Tuna melt;French dip;Monte Cristo;Po' boy|po boy;Muffuletta;Bánh mì|banh mi;Panini;Sloppy joe;Gyro;Egg salad;Chicken salad;Meatball sub;Italian sub;Croque monsieur;Patty melt;Lobster roll;Pulled pork;Roast beef;Pastrami on rye|pastrami;Chicken parm sandwich|chicken parm;Fluffernutter;Cucumber sandwich;Chip butty;Bacon butty|bacon sandwich;Katsu sando;Torta;Shawarma;Beef on weck;Hot Brown;Italian beef;Horseshoe;Smørrebrød|smorrebrod;Sabich;Bacon egg and cheese|bec;Pimento cheese;Elvis sandwich;Turkey sandwich;Denver sandwich`);
L("soup","Name a soup","",`Chicken noodle;Tomato;Minestrone;French onion;Clam chowder;Split pea;Lentil;Vegetable;Gazpacho;Miso;Pho;Ramen;Wonton;Hot and sour;Egg drop;Butternut squash;Potato leek;Broccoli cheddar;Gumbo;Borscht;Bisque|lobster bisque;Matzo ball;Mulligatawny;Tom yum;Tom kha;Pozole;Tortilla soup;Menudo;Bouillabaisse;Cream of mushroom;Italian wedding;Ribollita;Vichyssoise;Goulash;Avgolemono;Laksa;Cock-a-leekie;Scotch broth;Black bean;Corn chowder;Cioppino;Caldo verde;Harira;Egusi;Sinigang;Kimchi jjigae;Mushroom barley`);
L("breakfast","Name a breakfast food","",`Eggs;Bacon;Pancakes;Waffles;Cereal;Toast;Oatmeal;French toast;Sausage;Hash browns;Bagel;Yogurt;Omelet|omelette;Muffin;Croissant;Grits;Biscuits and gravy;Eggs Benedict;Breakfast burrito;Smoothie;Granola;Avocado toast;Crêpes|crepes;Donut|doughnut;Cinnamon roll;Home fries;Porridge;Quiche;Frittata;Huevos rancheros;Shakshuka;Chilaquiles;English muffin;Danish;Scones;Kippers;Black pudding;Baked beans;Congee;Beignets;Breakfast sandwich;Chicken and waffles;Dutch baby;Kedgeree;Menemen;Açaí bowl|acai bowl;Overnight oats;Idli`);
L("cuisine","Name an Italian dish","",`Pizza;Spaghetti;Lasagna|lasagne;Risotto;Carbonara;Tiramisu;Ravioli;Gnocchi;Fettuccine Alfredo|alfredo;Bruschetta;Osso buco;Minestrone;Arancini;Caprese salad|caprese;Gelato;Cannoli;Calzone;Chicken parmesan|chicken parm;Eggplant parmesan|eggplant parm;Polenta;Pesto;Panna cotta;Focaccia;Carpaccio;Saltimbocca;Cacio e pepe;Bolognese|spaghetti bolognese;Amatriciana;Puttanesca;Vitello tonnato;Piccata;Panzanella;Ribollita;Porchetta;Cotoletta;Supplì|suppli;Frittata;Affogato;Pasta e fagioli;Tortellini in brodo;Bistecca alla fiorentina|florentine steak`);
L("cuisine","Name a Mexican dish","",`Tacos;Burritos;Enchiladas;Quesadillas;Nachos;Guacamole;Salsa;Tamales;Fajitas;Churros;Mole;Pozole;Chiles rellenos;Tostadas;Carnitas;Carne asada;Tacos al pastor|al pastor;Elote;Flautas;Taquitos;Gorditas;Chilaquiles;Huevos rancheros;Menudo;Birria;Ceviche;Queso fundido;Flan;Tres leches;Horchata;Sopes;Tlayudas;Cochinita pibil;Barbacoa;Pico de gallo;Empanadas;Refried beans;Mexican rice;Chalupa;Torta;Esquites;Pambazo;Champurrado`);
L("cuisine","Name a Japanese dish","",`Sushi;Ramen;Tempura;Sashimi;Teriyaki;Miso soup;Udon;Edamame;Gyoza;Tonkatsu;Yakitori;Onigiri;Mochi;Soba;Okonomiyaki;Takoyaki;Japanese curry|katsu curry;Bento;Donburi;Unagi;Wagyu;Sukiyaki;Shabu-shabu|shabu shabu;Karaage;Yakisoba;Tamagoyaki;Natto;Chirashi;Nigiri;Maki;Oyakodon;Gyudon;Katsudon;Dorayaki;Taiyaki;Dango;Chawanmushi;Oden;Nikujaga;Temaki|hand roll;Yakiniku`);
L("cuisine","Name a Chinese dish","",`Fried rice;Dumplings;Chow mein;Lo mein;Spring rolls;Egg rolls;Peking duck;Dim sum;Kung pao chicken;Sweet and sour pork|sweet and sour chicken;General Tso's chicken|general tsos;Orange chicken;Wonton soup;Hot and sour soup;Mapo tofu;Char siu;Bao|baozi;Xiaolongbao|soup dumplings;Chop suey;Egg foo young;Congee;Hot pot;Dan dan noodles;Scallion pancakes;Potstickers;Beef and broccoli;Sesame chicken;Cashew chicken;Moo shu pork;Crab rangoon;Egg tarts;Mooncake;Zongzi;Century egg;Chow fun;Lion's head meatballs;Twice-cooked pork;Dongpo pork;Roast duck;Jianbing;Hand-pulled noodles|lamian;Cheung fun|rice noodle roll;Siu mai|shumai;Har gow`);
L("cuisine","Name an Indian dish","",`Curry;Naan;Samosa;Chicken tikka masala|tikka masala;Butter chicken;Biryani;Tandoori chicken;Dal|daal;Paneer;Korma;Vindaloo;Saag paneer|palak paneer;Chana masala;Pakora;Dosa;Idli;Raita;Chutney;Roti;Paratha;Chapati;Lassi;Gulab jamun;Rogan josh;Aloo gobi;Masala chai|chai;Jalebi;Kulfi;Pav bhaji;Vada pav;Onion bhaji|bhaji;Papadum|poppadom;Dhokla;Uttapam;Malai kofta;Keema;Rasmalai;Kheer;Halwa;Pani puri|golgappa;Bhel puri;Upma;Sambar;Rasam;Thali;Kachori;Jalfrezi;Madras;Balti`);
L("cuisine","Name a French dish","",`Croissant;Crêpes|crepes;Baguette;Quiche;Ratatouille;Coq au vin;Beef bourguignon|boeuf bourguignon;Crème brûlée|creme brulee;Escargot;French onion soup;Soufflé|souffle;Macarons;Bouillabaisse;Cassoulet;Croque monsieur;Foie gras;Duck confit|confit de canard;Steak frites;Tarte Tatin;Profiteroles;Éclair|eclair;Chocolate mousse|mousse au chocolat;Madeleines;Pain au chocolat;Salade niçoise|nicoise salad;Crème caramel;Gratin dauphinois|potato gratin;Vichyssoise;Blanquette de veau;Pot-au-feu;Tartiflette;Galette;Choucroute;Moules frites;Terrine;Pâté|pate;Mille-feuille;Clafoutis;Quenelles;Sole meunière;Crêpe Suzette`);
L("cuisine","Name a Thai dish","",`Pad thai;Green curry;Tom yum;Red curry;Massaman curry;Pad see ew;Papaya salad|som tam;Mango sticky rice;Satay;Tom kha gai|tom kha;Larb;Panang curry;Drunken noodles|pad kee mao;Spring rolls;Khao soi;Thai fried rice|khao pad;Pad krapow|basil chicken;Yellow curry;Thai iced tea;Moo ping;Khao man gai;Boat noodles;Crying tiger;Sticky rice;Fish cakes|tod mun pla;Pad prik king;Kai jeow;Coconut ice cream`);
L("cuisine","Name a Greek dish","",`Gyro;Souvlaki;Moussaka;Spanakopita;Tzatziki;Baklava;Greek salad|horiatiki;Dolmades|dolmas;Pastitsio;Loukoumades;Keftedes;Avgolemono;Taramasalata;Saganaki;Kleftiko;Stifado;Tiropita;Galaktoboureko;Gemista;Fasolada;Spanakorizo;Horta;Bougatsa;Kourabiedes;Melomakarona;Grilled octopus|octopus;Calamari;Gigantes;Koulouri`);
L("cuisine","Name a Korean dish","",`Kimchi;Bibimbap;Bulgogi;Korean barbecue|korean bbq;Japchae;Tteokbokki;Kimbap|gimbap;Samgyeopsal;Korean fried chicken;Galbi;Sundubu jjigae|soft tofu stew;Kimchi jjigae;Naengmyeon;Mandu;Pajeon|haemul pajeon;Bingsu|patbingsu;Hotteok;Jjajangmyeon;Doenjang jjigae;Budae jjigae|army stew;Dakgalbi;Gamjatang;Seolleongtang;Samgyetang;Banchan`);
L("cuisine","Name a Spanish dish","",`Paella;Tapas;Churros;Gazpacho;Tortilla española|spanish omelette|tortilla espanola;Jamón ibérico|jamon;Patatas bravas;Chorizo;Sangria;Croquetas;Albóndigas|albondigas;Gambas al ajillo;Pulpo a la gallega;Crema catalana;Pan con tomate;Salmorejo;Fabada;Pisto;Calamares;Pimientos de Padrón;Empanada gallega;Turrón|turron;Cochinillo;Migas;Escalivada;Flan`);
L("cuisine","Name a Middle Eastern dish","",`Hummus;Falafel;Shawarma;Kebab;Tabbouleh;Baba ganoush;Pita;Baklava;Fattoush;Kibbeh;Labneh;Shakshuka;Dolma;Mansaf;Maqluba;Manakish;Kofta;Muhammara;Mujadara;Knafeh|kunafa;Ful medames;Koshari;Mezze;Sfiha;Musakhan;Shish tawook;Umm Ali;Halva`);
L("cuisine","Name a British dish","",`Fish and chips;Full English breakfast|full english;Shepherd's pie|shepherds pie;Sunday roast;Bangers and mash;Yorkshire pudding;Beef Wellington;Cornish pasty;Scones;Toad in the hole;Eton mess;Sticky toffee pudding;Bubble and squeak;Scotch egg;Welsh rarebit;Haggis;Trifle;Steak and kidney pie;Black pudding;Crumpets;Cottage pie;Jacket potato;Ploughman's lunch;Chip butty;Lancashire hotpot;Spotted dick;Bakewell tart;Pork pie;Kedgeree;Mince pies;Victoria sponge;Chelsea bun;Eccles cake;Cullen skink`);
L("cuisine","Name a dish from the American South","",`Fried chicken;Biscuits and gravy;Grits;Cornbread;Gumbo;Jambalaya;Shrimp and grits;Mac and cheese;Collard greens;Barbecue|bbq;Pulled pork;Hush puppies;Chicken and waffles;Sweet tea;Pecan pie;Peach cobbler;Banana pudding;Fried green tomatoes;Fried catfish|catfish;Crawfish étouffée|etouffee;Red beans and rice;Po' boy|po boy;Chicken fried steak|country fried steak;Beignets;Fried okra|okra;Black-eyed peas;Hoppin' John|hoppin john;Pimento cheese;Key lime pie;Chess pie;Boiled peanuts;Brunswick stew;Sweet potato pie;Deviled eggs;Boudin`);
L("icecream","Name an ice cream flavor","",`Vanilla;Chocolate;Strawberry;Cookies and cream;Mint chocolate chip;Rocky road;Butter pecan;Cookie dough;Coffee;Neapolitan;Pistachio;Salted caramel;Chocolate chip;Birthday cake;Moose tracks;Peanut butter cup;Black cherry;Rum raisin;French vanilla;Coconut;Mango;Green tea|matcha;Cotton candy;Bubble gum;Banana;Black raspberry;Peach;Dulce de leche;Tutti frutti;Spumoni;Maple walnut;Chocolate fudge brownie;Cake batter;Raspberry ripple;Stracciatella;Pralines and cream;Toasted almond;Cinnamon;Ube;Honeycomb`);
L("potato","Name a potato dish","",`French fries|fries|chips;Mashed potatoes;Baked potato|jacket potato;Hash browns;Potato chips|crisps;Potato salad;Tater tots;Home fries;Scalloped potatoes;Potatoes au gratin|au gratin;Roast potatoes;Potato skins;Latkes|potato pancakes;Poutine;Gnocchi;Potato wedges|wedges;Curly fries;Twice-baked potatoes;Rösti|rosti;Pierogi;Colcannon;Boxty;Patatas bravas;Duchess potatoes;Hasselback potatoes;Potato croquettes|croquettes;Knish;Papas rellenas;Aligot;Lyonnaise potatoes;Fondant potatoes`);
L("eggs","Name a way to cook or serve eggs","",`Scrambled;Fried;Boiled|hard boiled|soft boiled;Poached;Omelet|omelette;Deviled eggs;Eggs Benedict;Frittata;Quiche;Sunny side up;Over easy;Egg salad;Shakshuka;Huevos rancheros;Scotch egg;Egg drop soup;Soufflé|souffle;Eggs Florentine;Tamagoyaki;Egg fried rice;Spanish omelette;Egg foo young;Coddled;Baked eggs|shirred eggs;Eggs en cocotte;Pickled eggs;Tea eggs;Century egg;Menemen;Migas;Over hard;Over medium`);
L("sushi","Name a type of sushi roll","",`California roll;Spicy tuna roll;Philadelphia roll;Dragon roll;Rainbow roll;Shrimp tempura roll;Caterpillar roll;Spider roll;Eel roll|unagi roll;Salmon avocado roll;Cucumber roll|kappa maki;Tuna roll|tekka maki;Alaska roll;Volcano roll;Boston roll;Futomaki;Crunchy roll;Yellowtail roll;Spicy salmon roll;Las Vegas roll;Tiger roll;Oshinko roll;Avocado roll;Seattle roll;Dynamite roll;Negitoro roll`);
L("beef","Name a cut of beef","",`Ribeye;Sirloin;Filet mignon|tenderloin;T-bone;New York strip|strip steak;Porterhouse;Brisket;Flank steak;Skirt steak;Chuck;Prime rib;Round;Short ribs;Tri-tip;Hanger steak;Flat iron;Rump;Oxtail;Tomahawk;Denver steak;Picanha;Bavette;London broil;Shank;Cube steak;Chateaubriand;Eye of round;Tongue;Cheek;Delmonico`);
L("noodles","Name a type of Asian noodle","Not Italian pasta.",`Ramen;Udon;Soba;Rice noodles;Egg noodles;Glass noodles|cellophane noodles|mung bean noodles;Lo mein;Chow mein;Rice vermicelli|vermicelli;Somen;Lamian;Hokkien noodles;Shirataki;Ho fun|shahe fen|chow fun;Dangmyeon|japchae noodles;Naengmyeon;Misua;Knife-cut noodles|daoxiaomian;Biang biang noodles;Yi mein;Mee pok;Kelp noodles;Pho noodles|banh pho`);
L("rice","Name a rice dish","",`Fried rice;Paella;Risotto;Biryani;Sushi;Jambalaya;Rice pudding;Arroz con pollo;Pilaf|pilau;Congee;Bibimbap;Dirty rice;Red beans and rice;Jollof rice;Onigiri;Nasi goreng;Kedgeree;Arancini;Dolmades;Spanish rice;Rice and beans;Gallo pinto;Kheer;Khichdi;Pulao;Tahdig;Koshari;Arroz negro;Risi e bisi;Poke bowl;Donburi;Hainanese chicken rice;Sticky rice;Mango sticky rice;Nasi lemak;Loco moco;Spam musubi`);
L("salad","Name a type of salad","",`Caesar;Greek;Garden salad;Cobb;Chef salad;Potato salad;Pasta salad;Coleslaw;Waldorf;Caprese;Niçoise|nicoise;Wedge salad;Fruit salad;Egg salad;Tuna salad;Chicken salad;Taco salad;Spinach salad;Macaroni salad;Tabbouleh;Fattoush;Panzanella;Kale salad;Quinoa salad;Ambrosia;Three-bean salad;Broccoli salad;Israeli salad;Papaya salad;Seaweed salad;Watergate salad;House salad;Beet salad;Shirazi salad;Olivier salad|russian salad;Crab Louie;Chopped salad`);
L("cooking","Name a cooking method","",`Bake;Fry;Boil;Grill;Roast;Steam;Sauté|saute;Broil;Poach;Simmer;Braise;Stew;Deep fry;Stir fry;Barbecue;Smoke;Microwave;Toast;Sear;Blanch;Pan fry;Air fry;Sous vide;Caramelize;Flambé|flambe;Pressure cook;Slow cook;Cure;Pickle;Ferment;Marinate;Dehydrate;Char;Baste;Confit;Coddle;Parboil`);
L("kitchen","Name a kitchen utensil or gadget","Hand tools, pots and pans.",`Spatula;Whisk;Ladle;Tongs;Spoon;Fork;Knife;Peeler;Grater;Can opener;Rolling pin;Colander;Cutting board;Measuring cup;Measuring spoons;Wooden spoon;Potato masher;Garlic press;Corkscrew;Bottle opener;Pizza cutter;Ice cream scoop;Sieve|strainer;Mixing bowl;Pastry brush;Slotted spoon;Zester|microplane;Mandoline;Kitchen shears|scissors;Salad spinner;Mortar and pestle;Funnel;Baster;Meat thermometer|thermometer;Kitchen timer|timer;Apple corer;Melon baller;Cookie cutter;Piping bag|pastry bag;Egg slicer;Nutcracker;Skewer;Chopsticks;Cleaver;Oven mitt;Trivet;Sifter;Citrus juicer|juicer;Honing steel;Spider strainer;Frying pan|skillet;Saucepan;Wok;Dutch oven;Baking sheet;Muffin tin;Cake pan;Casserole dish;Roasting pan;Stockpot;Griddle`);
L("kitchen","Name a kitchen appliance","",`Refrigerator|fridge;Oven;Microwave;Toaster;Blender;Dishwasher;Stove|range;Coffee maker;Electric kettle|kettle;Toaster oven;Air fryer;Slow cooker|crock pot;Food processor;Stand mixer|mixer;Hand mixer;Instant Pot|pressure cooker;Rice cooker;Freezer;Waffle maker|waffle iron;Juicer;Espresso machine;Popcorn maker;Bread maker;Ice maker;Deep fryer;Panini press|sandwich maker;Garbage disposal;Range hood;Dehydrator;Immersion blender;Wine fridge;Mini fridge;Hot plate;Induction cooktop;Pasta maker;Ice cream maker;SodaStream|soda maker;Smoker;Trash compactor`);
