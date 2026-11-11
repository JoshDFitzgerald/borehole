GROUP("sci");
/* elements: first alias is the symbol. tags: metal nonmetal metalloid noble halogen alkali alkearth trans lanth act gas liquid radio person place myth latin one */
DS("elements",`
Hydrogen|h #nonmetal gas one
Oxygen|o #nonmetal gas one
Carbon|c #nonmetal one
Gold|au #metal trans latin
Iron|fe #metal trans latin
Helium|he #noble nonmetal gas myth
Nitrogen|n #nonmetal gas one
Silver|ag #metal trans latin
Copper|cu #metal trans latin place
Sodium|na #metal alkali latin
Calcium|ca #metal alkearth
Uranium|u #metal act radio myth one
Aluminum|al|aluminium #metal
Lead|pb #metal latin
Neon|ne #noble nonmetal gas
Zinc|zn #metal trans
Potassium|k #metal alkali latin one
Chlorine|cl #halogen nonmetal gas
Mercury|hg #metal trans liquid latin myth
Platinum|pt #metal trans
Magnesium|mg #metal alkearth place
Lithium|li #metal alkali
Sulfur|s|sulphur #nonmetal one
Silicon|si #metalloid
Tin|sn #metal latin
Titanium|ti #metal trans myth
Nickel|ni #metal trans myth
Plutonium|pu #metal act radio myth
Fluorine|f #halogen nonmetal gas one
Iodine|i #halogen nonmetal one
Phosphorus|p #nonmetal one
Argon|ar #noble nonmetal gas
Radon|rn #noble nonmetal gas radio
Cobalt|co #metal trans myth
Chromium|cr #metal trans
Tungsten|w #metal trans latin one
Radium|ra #metal alkearth radio
Krypton|kr #noble nonmetal gas
Xenon|xe #noble nonmetal gas
Bromine|br #halogen nonmetal liquid
Arsenic|as #metalloid
Boron|b #metalloid one
Manganese|mn #metal trans
Beryllium|be #metal alkearth
Cesium|cs|caesium #metal alkali
Barium|ba #metal alkearth
Bismuth|bi #metal
Palladium|pd #metal trans myth
Cadmium|cd #metal trans
Strontium|sr #metal alkearth place
Germanium|ge #metalloid place
Antimony|sb #metalloid latin
Vanadium|v #metal trans myth one
Selenium|se #nonmetal myth
Thorium|th #metal act radio myth
Osmium|os #metal trans
Iridium|ir #metal trans
Molybdenum|mo #metal trans
Gallium|ga #metal place
Indium|in #metal
Rubidium|rb #metal alkali
Zirconium|zr #metal trans
Francium|fr #metal alkali radio place
Polonium|po #metal radio place
Americium|am #metal act radio place
Einsteinium|es #metal act radio person
Curium|cm #metal act radio person
Tellurium|te #metalloid myth
Scandium|sc #metal trans place
Yttrium|y #metal trans place one
Neodymium|nd #metal lanth
Cerium|ce #metal lanth myth
Europium|eu #metal lanth place
Lanthanum|la #metal lanth
Tantalum|ta #metal trans myth
Rhodium|rh #metal trans
Ruthenium|ru #metal trans place
Niobium|nb #metal trans myth
Hafnium|hf #metal trans place
Rhenium|re #metal trans place
Thallium|tl #metal
Astatine|at #halogen radio
Technetium|tc #metal trans radio
Promethium|pm #metal lanth radio myth
Actinium|ac #metal act radio
Protactinium|pa #metal act radio
Neptunium|np #metal act radio myth
Berkelium|bk #metal act radio place
Californium|cf #metal act radio place
Fermium|fm #metal act radio person
Mendelevium|md #metal act radio person
Nobelium|no #metal act radio person
Lawrencium|lr #metal act radio person
Rutherfordium|rf #metal trans radio person
Dubnium|db #metal trans radio place
Seaborgium|sg #metal trans radio person
Bohrium|bh #metal trans radio person
Hassium|hs #metal trans radio place
Meitnerium|mt #metal trans radio person
Darmstadtium|ds #metal trans radio place
Roentgenium|rg #metal trans radio person
Copernicium|cn #metal trans radio person
Nihonium|nh #metal radio place
Flerovium|fl #metal radio person
Moscovium|mc #metal radio place
Livermorium|lv #metal radio place
Tennessine|ts #halogen radio place
Oganesson|og #noble radio person
Praseodymium|pr #metal lanth
Samarium|sm #metal lanth person
Gadolinium|gd #metal lanth person
Terbium|tb #metal lanth place
Dysprosium|dy #metal lanth
Holmium|ho #metal lanth place
Erbium|er #metal lanth place
Thulium|tm #metal lanth place
Ytterbium|yb #metal lanth place
Lutetium|lu #metal lanth place
`);
const EL="elements";
ALL("elements",EL,"Name a chemical element","Any of the 118. Symbols count.");
T("elements",EL,"Name a metal on the periodic table","Symbols count.","metal");
T("elements",EL,"Name a nonmetal","Halogens and noble gases count.","nonmetal|halogen");
T("elements",EL,"Name a noble gas","","noble");
T("elements",EL,"Name a halogen","","halogen");
T("elements",EL,"Name an alkali metal","Group 1.","alkali");
T("elements",EL,"Name an alkaline earth metal","Group 2.","alkearth");
T("elements",EL,"Name a transition metal","Groups 3 to 12.","trans");
T("elements",EL,"Name a lanthanide","The rare earths from lanthanum to lutetium.","lanth");
T("elements",EL,"Name an actinide","Actinium to lawrencium.","act");
T("elements",EL,"Name an element that's a gas at room temperature","","gas");
T("elements",EL,"Name a radioactive element","No stable isotopes.","radio");
T("elements",EL,"Name an element named after a person","","person");
T("elements",EL,"Name an element named after a place","Countries, cities, states, villages.","place");
T("elements",EL,"Name an element named after a planet, moon, god or myth","","myth");
T("elements",EL,"Name an element whose symbol comes from its Latin or German name","Like Fe for iron.","latin");
T("elements",EL,"Name an element with a one-letter symbol","","one");
["C","S","N","B","P","A"].forEach(c=>T("elementsym",EL,`Name an element whose symbol starts with ${c}`,"Name or symbol.",it=>it.alias[0]&&it.alias[0][0].toUpperCase()===c,{min:6}));
LETTERS("elementletters",EL,c=>`Name a chemical element that starts with ${c}`,"",null,{min:8});

DS("scientists",`
Albert Einstein #phys nobel
Isaac Newton #phys math astro
Charles Darwin #bio
Marie Curie #phys chem nobel female
Galileo Galilei|galileo #phys astro
Nikola Tesla #phys
Stephen Hawking #phys astro
Louis Pasteur #bio chem med
Nicolaus Copernicus|copernicus #astro
Johannes Kepler #astro
Gregor Mendel #bio
Alexander Fleming #bio med nobel
Ada Lovelace #math female
Alan Turing #math
Carl Sagan #astro
Richard Feynman #phys nobel
Niels Bohr #phys nobel
Max Planck #phys nobel
Michael Faraday #phys chem
James Clerk Maxwell #phys
Dmitri Mendeleev #chem
Rosalind Franklin #chem bio female
Jane Goodall #bio female
Archimedes #math phys
Pythagoras #math
Euclid #math
Neil deGrasse Tyson #astro
Edwin Hubble #astro
Erwin Schrödinger|schrodinger #phys nobel
Werner Heisenberg #phys nobel
J. Robert Oppenheimer|robert oppenheimer|oppenheimer #phys
Enrico Fermi #phys nobel
Ernest Rutherford #phys chem nobel
J. J. Thomson|jj thomson #phys nobel
Antoine Lavoisier #chem
Robert Boyle #chem
John Dalton #chem
Linus Pauling #chem nobel
James Watson #bio nobel
Francis Crick #bio nobel
Edward Jenner #med
Hippocrates #med
Florence Nightingale #med female
Jonas Salk #med
Sigmund Freud #med
Ivan Pavlov #bio med nobel
Carl Linnaeus #bio
Alexander von Humboldt|humboldt #bio
Rachel Carson #bio female
Barbara McClintock #bio female nobel
Dorothy Hodgkin #chem female nobel
Lise Meitner #phys female
Katherine Johnson #math female
Grace Hopper #math female
Emmy Noether #math female
Hypatia #math astro female
Caroline Herschel #astro female
William Herschel #astro
Tycho Brahe #astro
Christiaan Huygens #phys astro
Blaise Pascal #math phys
René Descartes|descartes #math
Leonhard Euler|euler #math
Carl Friedrich Gauss|gauss #math
Bernhard Riemann #math
Pierre de Fermat|fermat #math
Gottfried Leibniz|leibniz #math
Srinivasa Ramanujan|ramanujan #math
John von Neumann #math
Kurt Gödel|godel #math
Charles Babbage #math
Claude Shannon #math
Paul Dirac #phys nobel
Wolfgang Pauli #phys nobel
Peter Higgs #phys nobel
Subrahmanyan Chandrasekhar|chandrasekhar #astro phys nobel
Vera Rubin #astro female
Henrietta Swan Leavitt|henrietta leavitt #astro female
Cecilia Payne-Gaposchkin|cecilia payne #astro female
Annie Jump Cannon #astro female
Jocelyn Bell Burnell #astro female
Chien-Shiung Wu #phys female
Robert Hooke #phys bio
Antonie van Leeuwenhoek|van leeuwenhoek|leeuwenhoek #bio
Andreas Vesalius #med
William Harvey #med
Joseph Lister #med
Robert Koch #bio med nobel
Alfred Russel Wallace #bio
Mary Anning #bio female
Alfred Wegener #geo
André-Marie Ampère|ampere #phys
Alessandro Volta|volta #phys chem
Georg Ohm #phys
Heinrich Hertz #phys
Wilhelm Röntgen|roentgen|rontgen #phys nobel
Henri Becquerel #phys nobel
Pierre Curie #phys nobel
Amedeo Avogadro #chem phys
Fritz Haber #chem nobel
Humphry Davy #chem
Svante Arrhenius #chem nobel
`,{surname:true});
ALL("scientists","scientists","Name a famous scientist","Surnames are fine.");
T("scientists","scientists","Name a famous physicist","","phys");
T("scientists","scientists","Name a famous chemist","","chem");
T("scientists","scientists","Name a famous biologist or naturalist","","bio");
T("scientists","scientists","Name a famous mathematician","","math");
T("scientists","scientists","Name a famous astronomer","","astro");
T("scientists","scientists","Name a famous female scientist or mathematician","","female");
T("scientists","scientists","Name a scientist who won a Nobel Prize","Physics, chemistry or medicine.","nobel");
L("inventors","Name a famous inventor","Surnames are fine.",`Thomas Edison;Alexander Graham Bell;Nikola Tesla;Wright brothers|orville wright|wilbur wright|wright;Benjamin Franklin;Henry Ford;Johannes Gutenberg;James Watt;Eli Whitney;Samuel Morse;Guglielmo Marconi;Leonardo da Vinci|da vinci;Steve Jobs;Tim Berners-Lee;George Washington Carver;Alfred Nobel;Louis Braille;John Logie Baird;Karl Benz;Rudolf Diesel;Elisha Otis;Isaac Singer;Charles Goodyear;Cyrus McCormick;George Westinghouse;Hedy Lamarr;Garrett Morgan;Madam C. J. Walker|madam cj walker;Philo Farnsworth;Willis Carrier;Les Paul;Dean Kamen;James Dyson;Thomas Newcomen;George Stephenson;Richard Arkwright;Samuel Colt;King C. Gillette|gillette;Levi Strauss;Josephine Cochrane;Mary Anderson;Margaret Knight;Igor Sikorsky;Lewis Latimer;Joseph Swan;Archimedes`,{surname:true});
L("ology","Name a field of study ending in -ology","",`Biology;Geology;Psychology;Zoology;Ecology;Sociology;Anthropology;Archaeology;Meteorology;Cardiology;Dermatology;Neurology;Oncology;Paleontology;Theology;Technology;Mythology;Criminology;Entomology;Ornithology;Seismology;Volcanology;Cosmology;Ophthalmology;Radiology;Pathology;Pharmacology;Immunology;Toxicology;Virology;Microbiology;Gynecology;Urology;Hematology;Endocrinology;Gastroenterology;Epidemiology;Physiology;Histology;Embryology;Genealogy;Etymology;Ichthyology;Herpetology;Mammalogy;Primatology;Mycology;Musicology;Egyptology;Astrology;Numerology;Horology;Campanology;Speleology;Hydrology;Glaciology;Climatology;Petrology;Mineralogy;Cytology;Phonology;Morphology;Ideology;Terminology;Nephrology;Audiology;Rheumatology;Anesthesiology;Kinesiology;Oenology|enology;Ufology`);
L("phobias","Name a phobia","The -phobia word. Like arachnophobia.",`Arachnophobia;Claustrophobia;Acrophobia;Agoraphobia;Xenophobia;Hydrophobia;Aerophobia|aviophobia;Trypophobia;Nyctophobia;Ophidiophobia;Coulrophobia;Glossophobia;Mysophobia|germophobia;Triskaidekaphobia;Hemophobia;Trypanophobia;Emetophobia;Thanatophobia;Cynophobia;Ailurophobia;Entomophobia;Apiphobia|melissophobia;Astraphobia;Autophobia;Nomophobia;Philophobia;Gamophobia;Hexakosioihexekontahexaphobia;Arachibutyrophobia;Hippopotomonstrosesquippedaliophobia;Pogonophobia;Chronophobia;Dentophobia;Iatrophobia;Necrophobia;Phasmophobia;Pyrophobia;Thalassophobia;Megalophobia;Chionophobia;Heliophobia;Selenophobia;Technophobia;Somniphobia;Atychiphobia;Ergophobia;Sociophobia;Ornithophobia;Musophobia;Ichthyophobia;Omphalophobia;Phobophobia`);
L("nutrients","Name a vitamin or dietary mineral","",`Vitamin C|c|ascorbic acid;Vitamin D|d;Calcium;Iron;Vitamin A|a;Vitamin B12|b12;Potassium;Magnesium;Zinc;Vitamin E|e;Vitamin K|k;Vitamin B6|b6;Sodium;Folate|folic acid|vitamin b9|b9;Iodine;Biotin|vitamin b7|b7;Niacin|vitamin b3|b3;Riboflavin|vitamin b2|b2;Thiamine|vitamin b1|b1;Selenium;Phosphorus;Copper;Manganese;Pantothenic acid|vitamin b5|b5;Chromium;Fluoride;Molybdenum`);
L("medicine","Name a medical specialty","",`Cardiology;Dermatology;Pediatrics;Neurology;Oncology;Orthopedics;Psychiatry;Radiology;General surgery|surgery;Obstetrics;Gynecology;Ophthalmology;Anesthesiology;Emergency medicine;Family medicine;Internal medicine;Gastroenterology;Urology;Endocrinology;Nephrology;Pulmonology;Rheumatology;Hematology;Immunology|allergy and immunology;Infectious disease;Geriatrics;Pathology;Plastic surgery;Neurosurgery;Otolaryngology|ent;Podiatry;Sports medicine;Nuclear medicine;Palliative care;Neonatology;Dentistry`);
L("disease","Name an infectious disease","",`Flu|influenza;Common cold|cold;COVID-19|covid|coronavirus;Measles;Chickenpox;Mumps;Tuberculosis|tb;Malaria;Polio;Smallpox;HIV|aids;Ebola;Cholera;Rabies;Tetanus;Whooping cough|pertussis;Hepatitis;Strep throat;Pneumonia;Rubella;Diphtheria;Typhoid;Yellow fever;Dengue|dengue fever;Zika;Plague|bubonic plague|black death;Leprosy;Lyme disease;Salmonella;E. coli|e coli;Mononucleosis|mono;Meningitis;Shingles;Norovirus;Scarlet fever;SARS;MERS;Anthrax;Syphilis;Gonorrhea;Chlamydia;Herpes;HPV;Rotavirus;Hand, foot and mouth disease;West Nile virus;Typhus;Mpox|monkeypox;RSV;Impetigo;Ringworm;Giardia;Toxoplasmosis`);
L("body","Name a bone in the human body","Common names are accepted.",`Femur|thigh bone;Skull|cranium;Rib|ribs;Tibia|shin bone|shinbone;Humerus;Spine|vertebra|vertebrae|backbone|spinal column;Pelvis|hip bone|hip;Radius;Ulna;Fibula;Clavicle|collarbone|collar bone;Jaw|mandible|jawbone;Sternum|breastbone;Scapula|shoulder blade;Patella|kneecap;Coccyx|tailbone;Phalanges|phalanx;Metacarpals|metacarpal;Sacrum;Maxilla;Metatarsals|metatarsal;Carpals|carpal;Tarsals|tarsal;Calcaneus|heel bone;Stapes|stirrup;Talus|ankle bone;Incus|anvil;Malleus|hammer;Hyoid;Zygomatic|cheekbone;Scaphoid;Sphenoid;Ethmoid;Lacrimal;Vomer`);
L("body","Name an organ of the human body","",`Heart;Brain;Lungs|lung;Liver;Kidneys|kidney;Stomach;Skin;Small intestine|intestines;Large intestine|colon;Pancreas;Spleen;Gallbladder;Bladder;Appendix;Esophagus;Thyroid;Eyes|eye;Tongue;Uterus|womb;Ovaries|ovary;Prostate;Adrenal glands|adrenal gland;Tonsils;Trachea|windpipe;Larynx|voice box;Diaphragm;Rectum;Thymus;Pituitary gland|pituitary;Pineal gland;Ureter;Urethra;Testes|testicles;Duodenum;Bone marrow;Lymph nodes;Salivary glands;Pharynx;Epiglottis;Placenta;Cervix;Ears|ear`);
L("body","Name a muscle","Muscle names or groups.",`Biceps;Triceps;Quadriceps|quads;Hamstrings|hamstring;Abdominals|abs;Deltoids|delts;Pectorals|pecs;Gluteus maximus|glutes;Calves|gastrocnemius|calf;Trapezius|traps;Latissimus dorsi|lats;Obliques;Heart|cardiac muscle;Diaphragm;Soleus;Rotator cuff;Hip flexors;Adductors;Abductors;Rhomboids;Sartorius;Rectus abdominis;Transverse abdominis;Erector spinae;Serratus anterior;Tibialis anterior;Masseter;Temporalis;Sternocleidomastoid;Gluteus medius;Piriformis;Psoas|iliopsoas;Brachialis;Brachioradialis;Tongue;Orbicularis oculi;Frontalis;Platysma;Infraspinatus;Supraspinatus;Teres major`);
L("body","Name a part of the body you can see from the outside","",`Head;Hand;Foot;Arm;Leg;Eye;Ear;Nose;Mouth;Finger;Toe;Knee;Elbow;Shoulder;Neck;Hair;Back;Chest;Stomach|belly|tummy;Lips;Teeth;Tongue;Chin;Cheek;Forehead;Eyebrow;Eyelash;Eyelid;Wrist;Ankle;Heel;Hip;Thigh;Calf;Shin;Thumb;Palm;Knuckle;Fingernail|nail;Toenail;Waist;Belly button|navel;Armpit;Jaw;Temple;Nostril;Earlobe;Scalp;Skin;Buttocks|butt|bum;Groin;Sole;Instep;Pinky;Index finger;Ring finger;Middle finger;Big toe;Collarbone;Throat;Adam's apple|adams apple;Dimple;Kneecap;Torso;Abdomen;Lap;Nape`);
L("body","Name a part of the brain","",`Cerebrum;Cerebellum;Brainstem|brain stem;Frontal lobe;Temporal lobe;Parietal lobe;Occipital lobe;Hippocampus;Amygdala;Hypothalamus;Thalamus;Medulla oblongata|medulla;Pons;Corpus callosum;Pituitary gland;Pineal gland;Cerebral cortex|cortex;Prefrontal cortex;Basal ganglia;Midbrain;Broca's area|brocas area;Wernicke's area|wernickes area;Limbic system;Ventricles`);
L("body","Name a part of the eye","",`Pupil;Iris;Cornea;Retina;Lens;Sclera;Optic nerve;Eyelid;Eyelash;Tear duct;Macula;Conjunctiva;Vitreous humor;Aqueous humor;Fovea;Choroid;Ciliary body;Rods;Cones`);

L("space","Name a planet, dwarf planet or moon in our solar system","Named bodies only.",`Mars;Earth;Jupiter;Saturn;Venus;Mercury;Neptune;Uranus;Pluto;The Moon|moon|luna;Titan;Europa;Io;Ganymede;Callisto;Ceres;Phobos;Deimos;Triton;Enceladus;Charon;Eris;Makemake;Haumea;Miranda;Oberon;Titania;Rhea;Iapetus;Mimas;Dione;Tethys;Hyperion;Ariel;Umbriel;Nereid;Proteus;Amalthea;Dysnomia`);
L("space","Name a constellation","Any of the 88.",`Orion;Ursa Major|great bear|big dipper|plough;Ursa Minor|little bear|little dipper;Cassiopeia;Scorpius|scorpio;Leo;Gemini;Taurus;Cancer;Virgo;Libra;Sagittarius;Capricornus|capricorn;Aquarius;Pisces;Aries;Cygnus;Lyra;Aquila;Pegasus;Andromeda;Perseus;Draco;Hercules;Centaurus;Crux|southern cross;Canis Major;Canis Minor;Boötes|bootes;Corona Borealis;Cepheus;Auriga;Ophiuchus;Hydra;Lupus;Phoenix;Carina;Vela;Puppis;Columba;Lepus;Monoceros;Eridanus;Cetus;Delphinus;Sagitta;Vulpecula;Lacerta;Triangulum;Camelopardalis;Lynx;Leo Minor;Coma Berenices;Corvus;Crater;Sextans;Antlia;Pyxis;Serpens;Scutum;Corona Australis;Ara;Telescopium;Indus;Grus;Tucana;Pavo;Octans;Apus;Chamaeleon;Musca;Circinus;Triangulum Australe;Norma;Volans;Dorado;Pictor;Reticulum;Horologium;Caelum;Fornax;Sculptor;Microscopium;Piscis Austrinus;Hydrus;Mensa;Equuleus;Canes Venatici`);
L("space","Name a star","Individual stars, including our own.",`Sun;Sirius;Polaris|north star;Betelgeuse;Rigel;Vega;Alpha Centauri;Proxima Centauri;Arcturus;Antares;Aldebaran;Canopus;Capella;Altair;Deneb;Spica;Pollux;Castor;Regulus;Fomalhaut;Procyon;Bellatrix;Mintaka;Alnitak;Alnilam;Mira;Algol;Achernar;Hadar;Barnard's Star|barnards star;Tau Ceti;Epsilon Eridani;Wolf 359;Eta Carinae;VY Canis Majoris;UY Scuti;Alcyone;Mizar;Dubhe;Thuban;Shaula;Saiph;Denebola;Albireo;TRAPPIST-1`);
L("space","Name a galaxy","",`Milky Way;Andromeda;Triangulum;Large Magellanic Cloud;Small Magellanic Cloud;Whirlpool Galaxy|whirlpool;Sombrero Galaxy|sombrero;Pinwheel Galaxy|pinwheel;Black Eye Galaxy;Cartwheel Galaxy;Messier 87|m87;Centaurus A;Cigar Galaxy;Sunflower Galaxy;Tadpole Galaxy;Antennae Galaxies|antennae`);
L("astronauts","Name an astronaut or cosmonaut","Surnames are fine.",`Neil Armstrong;Buzz Aldrin;Yuri Gagarin;John Glenn;Sally Ride;Alan Shepard;Michael Collins;Chris Hadfield;Valentina Tereshkova;Scott Kelly;Mae Jemison;Jim Lovell;Christa McAuliffe;Gus Grissom;Peggy Whitson;Tim Peake;Mark Kelly;Gene Cernan;Ed White|edward white;Alexei Leonov;Pete Conrad;Alan Bean;John Young;Charlie Duke;Harrison Schmitt;Edgar Mitchell;David Scott;James Irwin;Frank Borman;Bill Anders;Deke Slayton;Scott Carpenter;Wally Schirra;Gordon Cooper;Guion Bluford;Eileen Collins;Ellen Ochoa;Judith Resnik;Ronald McNair;Kalpana Chawla;Story Musgrave;Jessica Meir;Christina Koch;Sunita Williams|suni williams;Butch Wilmore;Yang Liwei;Rakesh Sharma;Helen Sharman;Thomas Pesquet;Samantha Cristoforetti;Koichi Wakata;Reid Wiseman;Victor Glover;Jeremy Hansen;Bob Behnken;Doug Hurley`,{surname:true});
L("space","Name a space mission, spacecraft or telescope","",`Apollo 11;Apollo 13;Voyager 1;Voyager 2;Hubble Space Telescope|hubble;James Webb Space Telescope|james webb|jwst|webb;International Space Station|iss;Sputnik;Challenger;Columbia;Discovery;Atlantis;Endeavour;Curiosity;Perseverance;Opportunity;Spirit;Sojourner|pathfinder;Ingenuity;Cassini;Juno;New Horizons;Galileo;Pioneer 10;Viking 1;Gemini;Mercury;Artemis;Skylab;Mir;Vostok 1;Kepler;Chandra;Spitzer;Rosetta;Philae;Hayabusa;Chang'e|change;Chandrayaan;Mangalyaan;Parker Solar Probe;OSIRIS-REx;DART;Space Shuttle;Starship;Falcon 9;Saturn V;Crew Dragon|dragon;Orion;Soyuz;Venera;Magellan;MESSENGER;Dawn;Tiangong;Europa Clipper;Psyche;Lucy`);
L("zodiac","Name a sign of the Western zodiac","",`Leo;Scorpio;Aries;Gemini;Virgo;Taurus;Libra;Cancer;Pisces;Sagittarius;Aquarius;Capricorn`,{min:6});
L("zodiac","Name an animal of the Chinese zodiac","",`Dragon;Tiger;Rat;Snake;Monkey;Horse;Ox;Rabbit;Dog;Pig;Rooster;Goat|sheep|ram`,{min:6});

DS("dinos",`
Tyrannosaurus rex|t rex|trex|tyrannosaurus #cret carn
Triceratops #cret herb
Velociraptor|raptor #cret carn
Stegosaurus #jur herb
Brachiosaurus #jur herb
Spinosaurus #cret carn
Ankylosaurus #cret herb
Diplodocus #jur herb
Allosaurus #jur carn
Brontosaurus #jur herb
Apatosaurus #jur herb
Parasaurolophus #cret herb
Pachycephalosaurus #cret herb
Iguanodon #cret herb
Dilophosaurus #jur carn
Gallimimus #cret
Giganotosaurus #cret carn
Carnotaurus #cret carn
Argentinosaurus #cret herb
Baryonyx #cret carn
Compsognathus #jur carn
Deinonychus #cret carn
Oviraptor #cret
Protoceratops #cret herb
Plateosaurus #tri herb
Coelophysis #tri carn
Herrerasaurus #tri carn
Eoraptor #tri
Maiasaura #cret herb
Edmontosaurus #cret herb
Hadrosaurus #cret herb
Corythosaurus #cret herb
Styracosaurus #cret herb
Therizinosaurus #cret herb
Utahraptor #cret carn
Microraptor #cret carn
Archaeopteryx #jur
Megalosaurus #jur carn
Ceratosaurus #jur carn
Camarasaurus #jur herb
Kentrosaurus #jur herb
Amargasaurus #cret herb
Suchomimus #cret carn
Albertosaurus #cret carn
Gorgosaurus #cret carn
Daspletosaurus #cret carn
Tarbosaurus #cret carn
Acrocanthosaurus #cret carn
Carcharodontosaurus #cret carn
Troodon #cret carn
Stygimoloch #cret herb
Euoplocephalus #cret herb
Nodosaurus #cret herb
Psittacosaurus #cret herb
Lambeosaurus #cret herb
Mamenchisaurus #jur herb
Dreadnoughtus #cret herb
Patagotitan #cret herb
Saltasaurus #cret herb
Cryolophosaurus #jur carn
Yutyrannus #cret carn
Ornithomimus #cret
Struthiomimus #cret
Chasmosaurus #cret herb
Centrosaurus #cret herb
Pachyrhinosaurus #cret herb
Nigersaurus #cret herb
Ouranosaurus #cret herb
Majungasaurus #cret carn
`);
ALL("dinos","dinos","Name a dinosaur","Genus names. Pterosaurs and sea reptiles don't count.");
T("dinos","dinos","Name a meat-eating dinosaur","","carn");
T("dinos","dinos","Name a plant-eating dinosaur","","herb");
T("dinos","dinos","Name a dinosaur from the Cretaceous period","","cret");
T("dinos","dinos","Name a dinosaur from the Jurassic period","","jur");
L("dinos","Name a prehistoric flying or swimming reptile","Not technically dinosaurs.",`Pterodactyl|pterodactylus;Pteranodon;Plesiosaur|plesiosaurus;Mosasaurus|mosasaur;Ichthyosaur|ichthyosaurus;Quetzalcoatlus;Elasmosaurus;Liopleurodon;Dimorphodon;Rhamphorhynchus;Kronosaurus;Nothosaurus`);

DS("rocks",`
Granite #ign
Marble #meta
Limestone #sed
Sandstone #sed
Basalt #ign
Obsidian #ign
Slate #meta
Pumice #ign
Shale #sed
Coal #sed
Chalk #sed
Quartzite #meta
Gneiss #meta
Schist #meta
Flint #sed
Conglomerate #sed
Breccia #sed
Gabbro #ign
Diorite #ign
Andesite #ign
Rhyolite #ign
Scoria #ign
Tuff #ign
Peridotite #ign
Mudstone #sed
Siltstone #sed
Chert #sed
Travertine #sed
Soapstone #meta
Serpentinite #meta
Phyllite #meta
Anthracite #meta
Hornfels #meta
Eclogite #meta
Amphibolite #meta
Porphyry #ign
Pegmatite #ign
Dacite #ign
Granodiorite #ign
Coquina #sed
Rock salt #sed
Tufa #sed
Migmatite #meta
`);
ALL("rocks","rocks","Name a type of rock","Rocks, not minerals.");
T("rocks","rocks","Name an igneous rock","","ign");
T("rocks","rocks","Name a sedimentary rock","","sed");
T("rocks","rocks","Name a metamorphic rock","","meta");
L("minerals","Name a mineral","",`Quartz;Feldspar;Mica;Calcite;Diamond;Talc;Gypsum;Pyrite|fools gold;Halite|salt;Graphite;Fluorite;Garnet;Topaz;Corundum;Hematite;Magnetite;Malachite;Azurite;Olivine;Galena;Apatite;Beryl;Tourmaline;Turquoise;Jade|jadeite|nephrite;Opal;Muscovite;Biotite;Hornblende;Kaolinite;Cinnabar;Sphalerite;Chalcopyrite;Cassiterite;Rutile;Zircon;Spinel;Staurolite;Kyanite;Sulfur;Gold;Silver;Copper;Bauxite;Dolomite`);
L("minerals","Name a mineral on the Mohs hardness scale","The ten reference minerals.",`Diamond;Talc;Quartz;Topaz;Gypsum;Calcite;Corundum;Fluorite;Apatite;Orthoclase|feldspar|orthoclase feldspar`,{min:6});
L("gems","Name a gemstone","",`Diamond;Ruby;Emerald;Sapphire;Pearl;Amethyst;Opal;Topaz;Jade;Garnet;Turquoise;Aquamarine;Onyx;Peridot;Citrine;Tanzanite;Tourmaline;Moonstone;Lapis lazuli;Jasper;Alexandrite;Zircon;Morganite;Agate;Amber;Coral;Spinel;Tiger's eye|tigers eye;Malachite;Rose quartz;Bloodstone;Carnelian;Chrysoberyl;Kunzite;Iolite;Sunstone;Labradorite;Jet;Sodalite;Larimar;Rhodochrosite;Chrysoprase;Sardonyx`);
L("gems","Name a birthstone","Any month, traditional or modern.",`Diamond;Ruby;Emerald;Sapphire;Garnet;Amethyst;Opal;Pearl;Topaz;Aquamarine;Peridot;Turquoise;Citrine;Tanzanite;Moonstone;Alexandrite;Tourmaline;Bloodstone;Spinel;Zircon;Sardonyx`);
L("weather","Name a type of cloud","",`Cumulus;Cirrus;Stratus;Cumulonimbus;Nimbus;Nimbostratus;Altostratus;Altocumulus;Cirrostratus;Cirrocumulus;Stratocumulus;Mammatus;Lenticular;Shelf cloud;Wall cloud;Noctilucent;Pileus;Roll cloud;Kelvin-Helmholtz|fluctus;Asperitas`);
L("weather","Name a weather phenomenon","",`Rain;Snow;Hail;Tornado;Hurricane;Thunderstorm;Lightning;Fog;Sleet;Drizzle;Blizzard;Typhoon;Cyclone;Monsoon;Drought;Heat wave;Frost;Dew;Rainbow;Wind;Flood;Sandstorm|dust storm;Haboob;Ice storm;Freezing rain;Derecho;Waterspout;Dust devil;Mist;Smog;Polar vortex;Graupel;Virga;Squall;Gale;Sun shower;Thundersnow;Microburst;Whiteout;Chinook;El Niño|el nino;Heat lightning;Black ice;Rime`);
DS("units",`
Meter|metre #len si
Inch #len
Foot|feet #len
Mile #len
Yard #len
Centimeter|centimetre #len
Kilometer|kilometre #len
Millimeter|millimetre #len
Gram #mass
Kilogram #mass si
Pound #mass
Ounce #mass
Ton #mass
Stone #mass
Liter|litre #vol
Gallon #vol
Quart #vol
Pint #vol
Cup #vol
Teaspoon #vol
Tablespoon #vol
Fluid ounce #vol
Milliliter|millilitre #vol
Second #time si
Minute #time
Hour #time
Day #time
Week #time
Month #time
Year #time
Decade #time
Century #time
Millennium #time
Millisecond #time
Nanosecond #time
Fortnight #time
Celsius|centigrade #temp
Fahrenheit #temp
Kelvin #temp si
Rankine #temp
Calorie #energy
Joule #energy
Kilowatt-hour|kwh #energy
BTU #energy
Electronvolt #energy
Watt #power
Horsepower #power
Volt #elec
Ampere|amp #elec si
Ohm #elec
Coulomb #elec
Farad #elec
Hertz #freq
Newton #force
Pascal #pressure
Bar #pressure
PSI #pressure
Atmosphere #pressure
Byte #data
Bit #data
Kilobyte #data
Megabyte #data
Gigabyte #data
Terabyte #data
Petabyte #data
Nibble #data
Exabyte #data
Acre #area
Hectare #area
Square foot #area
Square mile #area
Light-year|light year #len
Parsec #len
Astronomical unit #len
Nautical mile #len
Knot #speed
Fathom #len
Furlong #len
League #len
Hand #len
Cubit #len
Micrometer|micron #len
Angstrom #len
Nanometer #len
Carat #mass
Grain #mass
Milligram #mass
Tonne|metric ton #mass
Hundredweight #mass
Troy ounce #mass
Bushel #vol
Peck #vol
Barrel #vol
Cubic meter #vol
Hogshead #vol
Candela #si
Mole #si
Lumen
Decibel
Radian
Tesla
Lux
Sievert
Becquerel
`);
ALL("units","units","Name a unit of measurement","Any kind.");
T("units","units","Name a unit of length or distance","","len");
T("units","units","Name a unit of weight or mass","","mass");
T("units","units","Name a unit of volume","","vol");
T("units","units","Name a unit of time","","time");
T("units","units","Name a unit of digital storage","","data");
T("units","units","Name a unit used in electricity, energy or power","","elec|energy|power");
T("units","units","Name an SI base unit","The seven of them.","si");
L("units","Name a metric prefix","Like kilo.",`Kilo;Mega;Giga;Milli;Micro;Centi;Nano;Tera;Deci;Pico;Peta;Exa;Deca|deka;Hecto;Femto;Atto;Zetta;Yotta;Zepto;Yocto;Ronna;Quetta;Ronto;Quecto`);
L("physics","Name one of the six simple machines","",`Lever;Pulley;Wheel and axle;Inclined plane|ramp;Screw;Wedge`,{min:6});
L("physics","Name a form of energy","Or an energy source.",`Kinetic;Potential;Solar;Thermal|heat;Electrical;Nuclear;Chemical;Wind;Light|radiant;Sound;Mechanical;Gravitational;Elastic;Magnetic;Hydroelectric|hydro;Geothermal;Tidal`);
L("math","Name a branch of mathematics","",`Algebra;Geometry;Calculus;Trigonometry;Statistics;Arithmetic;Probability;Number theory;Topology;Linear algebra;Differential equations;Combinatorics;Set theory;Logic;Graph theory;Game theory;Abstract algebra;Real analysis|analysis;Complex analysis;Discrete mathematics|discrete math;Numerical analysis;Differential geometry;Group theory;Cryptography;Fractal geometry;Category theory;Chaos theory;Knot theory;Operations research`);
L("math","Name a 2D or 3D shape","",`Circle;Square;Triangle;Rectangle;Oval;Star;Heart;Pentagon;Hexagon;Octagon;Rhombus|diamond;Trapezoid|trapezium;Parallelogram;Sphere;Cube;Cylinder;Cone;Pyramid;Ellipse;Crescent;Cross;Kite;Semicircle;Prism;Heptagon;Nonagon;Decagon;Dodecagon;Torus;Tetrahedron;Octahedron;Dodecahedron;Icosahedron;Cuboid;Quadrilateral;Hendecagon;Annulus`);
L("tech","Name a programming language","",`Python;Java;JavaScript;C;C++|cpp;C#|c sharp|csharp;Ruby;PHP;Swift;Go|golang;Rust;Kotlin;TypeScript;SQL;R;MATLAB;Perl;Scala;Haskell;Lua;Dart;Objective-C;Visual Basic|vb;Fortran;COBOL;Pascal;Assembly;Lisp;BASIC;Julia;Elixir;Erlang;Clojure;F#|f sharp;Groovy;Prolog;Smalltalk;Ada;Scratch;Bash|shell;PowerShell;Delphi;OCaml;Zig;Solidity;Crystal;Nim;Racket;Scheme;Logo;APL;Elm;Simula;ALGOL;Forth;Raku`);
L("tech","Name a part of a computer","Inside the box or plugged into it.",`CPU|processor;RAM|memory;Hard drive|hard disk|hdd;SSD|solid state drive;Motherboard;Graphics card|gpu;Power supply|psu;Keyboard;Mouse;Monitor|screen;Fan|cooling fan;Case;Sound card;Network card;Webcam;Speakers;Microphone;USB port;Heat sink;Optical drive|dvd drive|cd drive;Printer;Scanner;Router;Modem;Touchpad|trackpad;CMOS battery;Thermal paste;Chipset;Flash drive|usb stick|thumb drive;External hard drive;Docking station;Headphones`);
L("tech","Name a file extension","Like .pdf.",`.pdf;.jpg|jpeg;.doc;.docx;.png;.mp3;.mp4;.txt;.gif;.exe;.zip;.html;.csv;.xls;.xlsx;.ppt;.pptx;.mov;.wav;.avi;.css;.js;.py;.json;.xml;.svg;.psd;.iso;.rar;.dmg;.apk;.bmp;.tiff;.webp;.mkv;.flac;.rtf;.md;.sql;.java;.php;.heic;.ai;.dll;.bat;.sh;.tar;.gz`);
