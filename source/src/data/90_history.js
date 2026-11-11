GROUP("hist");
DS("presidents",`
Abraham Lincoln|lincoln #rep c19 died money
George Washington|washington #c18 va money pre50
Barack Obama|obama #dem c21
Donald Trump|trump #rep c21
Joe Biden|biden #dem c21 vp
John F. Kennedy|kennedy|jfk #dem c20 died money
Franklin D. Roosevelt|fdr|franklin roosevelt|roosevelt #dem c20 died money
Ronald Reagan|reagan #rep c20
George W. Bush|w bush|george bush|bush #rep c21
Thomas Jefferson|jefferson #c19 va money pre50 vp
Bill Clinton|clinton #dem c20
Richard Nixon|nixon #rep c20 vp
Theodore Roosevelt|teddy roosevelt #rep c20 vp
Jimmy Carter|carter #dem c20
George H. W. Bush|hw bush|george hw bush|bush sr #rep c20 vp
Dwight D. Eisenhower|eisenhower|ike #rep c20 money
Harry S. Truman|truman #dem c20 vp
Lyndon B. Johnson|lbj|lyndon johnson|johnson #dem c20 vp
John Adams|adams #c18 pre50 vp
Gerald Ford|ford #rep c20 vp
James Madison|madison #c19 va money pre50
James Monroe|monroe #c19 va pre50
Andrew Jackson|jackson #dem c19 money pre50
Ulysses S. Grant|grant #rep c19 oh money
Woodrow Wilson|wilson #dem c20 va money
Herbert Hoover|hoover #rep c20
William Howard Taft|taft #rep c20 oh
John Quincy Adams|jqa|quincy adams #c19 pre50
Calvin Coolidge|coolidge #rep c20 vp
James K. Polk|polk #dem c19 pre50
William McKinley|mckinley #rep c19 oh died money
Andrew Johnson #c19 vp
Warren G. Harding|harding #rep c20 oh died
Grover Cleveland|cleveland #dem c19 money
Millard Fillmore|fillmore #c19 vp
Martin Van Buren|van buren #dem c19 pre50 vp
James A. Garfield|garfield #rep c19 oh died
William Henry Harrison|harrison #c19 va died pre50
Franklin Pierce|pierce #dem c19
James Buchanan|buchanan #dem c19
John Tyler|tyler #c19 va pre50 vp
Benjamin Harrison #rep c19 oh
Zachary Taylor|taylor #c19 va died pre50
Rutherford B. Hayes|hayes #rep c19 oh
Chester A. Arthur|arthur|chester arthur #rep c19 vp
`,{surname:true});
const PZ="presidents";
ALL("presidents",PZ,"Name a U.S. president","Surnames are fine. Shared surnames go to the better-known one.");
T("presidents",PZ,"Name a Republican president","","rep");
T("presidents",PZ,"Name a Democratic president","","dem");
T("presidents",PZ,"Name a president first inaugurated in the 1800s","1801 to 1900.","c19");
T("presidents",PZ,"Name a president first inaugurated in the 1900s","1901 to 2000.","c20");
T("presidents",PZ,"Name a president born in Virginia","Eight of them.","va");
T("presidents",PZ,"Name a president born in Ohio","Seven of them.","oh");
T("presidents",PZ,"Name a president who died in office","Eight of them.","died");
T("presidents",PZ,"Name a president who was vice president first","","vp");
T("presidents",PZ,"Name a president who has appeared on U.S. money","Bills or coins, past or present.","money");
T("presidents",PZ,"Name a president who took office before 1850","","pre50");
L("usgov","Name a U.S. First Lady","Surnames are fine.",`Michelle Obama;Jacqueline Kennedy|jackie kennedy|jackie o;Eleanor Roosevelt;Hillary Clinton;Laura Bush;Nancy Reagan;Melania Trump;Barbara Bush;Martha Washington;Abigail Adams;Dolley Madison;Mary Todd Lincoln;Jill Biden;Rosalynn Carter;Betty Ford;Lady Bird Johnson;Pat Nixon;Mamie Eisenhower;Bess Truman;Edith Wilson;Lou Hoover;Grace Coolidge;Florence Harding;Helen Taft;Edith Roosevelt;Ida McKinley;Frances Cleveland;Caroline Harrison;Lucy Hayes;Julia Grant;Eliza Johnson;Louisa Adams;Elizabeth Monroe;Sarah Polk;Jane Pierce;Abigail Fillmore;Lucretia Garfield;Letitia Tyler;Julia Tyler`,{surname:true});
L("usgov","Name a U.S. vice president","Surnames are fine.",`Kamala Harris;Mike Pence;Joe Biden;Dick Cheney;Al Gore;Dan Quayle;George H. W. Bush;J. D. Vance|jd vance;Walter Mondale;Nelson Rockefeller;Spiro Agnew;Gerald Ford;Hubert Humphrey;Lyndon B. Johnson;Richard Nixon;Alben Barkley;Harry Truman;Henry Wallace;John Nance Garner;Charles Curtis;Charles Dawes;Calvin Coolidge;Thomas Marshall;James Sherman;Charles Fairbanks;Theodore Roosevelt;Garret Hobart;Adlai Stevenson;Levi Morton;Thomas Hendricks;Chester Arthur;William Wheeler;Henry Wilson;Schuyler Colfax;Andrew Johnson;Hannibal Hamlin;John Breckinridge;Aaron Burr;John C. Calhoun|calhoun;Thomas Jefferson;John Adams;Martin Van Buren;Elbridge Gerry;George Clinton;Daniel Tompkins;Richard Mentor Johnson;John Tyler;George Dallas;Millard Fillmore;William R. King`,{surname:true});
L("usgov","Name a U.S. Supreme Court justice, past or present","Surnames are fine.",`Ruth Bader Ginsburg|rbg;Thurgood Marshall;John Roberts;Clarence Thomas;Sonia Sotomayor;Antonin Scalia;Sandra Day O'Connor;Brett Kavanaugh;Amy Coney Barrett;Ketanji Brown Jackson;Elena Kagan;Neil Gorsuch;Samuel Alito;Anthony Kennedy;Stephen Breyer;John Marshall;Earl Warren;Oliver Wendell Holmes;David Souter;John Paul Stevens;Harry Blackmun;William Rehnquist;Warren Burger;Louis Brandeis;Felix Frankfurter;Hugo Black;William O. Douglas;Byron White;Lewis Powell;William Brennan;Roger Taney;Charles Evans Hughes;William Howard Taft;Benjamin Cardozo;Robert H. Jackson;John Jay`,{surname:true});
L("usgov","Name a Founding Father of the United States","Surnames are fine.",`George Washington;Thomas Jefferson;Benjamin Franklin;John Adams;Alexander Hamilton;James Madison;John Jay;Samuel Adams;John Hancock;Patrick Henry;Paul Revere;Thomas Paine;James Monroe;Gouverneur Morris;Roger Sherman;Robert Morris;George Mason;John Marshall;Benjamin Rush;Charles Carroll;Elbridge Gerry;Richard Henry Lee;John Dickinson;Robert Livingston;Caesar Rodney;Button Gwinnett;Rufus King;Charles Pinckney;Oliver Ellsworth;George Wythe;Francis Hopkinson;Josiah Bartlett`,{surname:true});
DS("monarchs",`
Queen Elizabeth II|elizabeth ii|elizabeth 2 #windsor queen
Henry VIII|henry 8|henry the eighth #tudor king
Queen Victoria|victoria #hanover queen
Elizabeth I|elizabeth 1|queen elizabeth i #tudor queen
King Charles III|charles iii|charles 3 #windsor king
William the Conqueror|william i|william 1 #norman king
Richard the Lionheart|richard i|richard 1 #plantagenet king
George III|george 3 #hanover king
Mary, Queen of Scots|mary queen of scots
Bloody Mary|mary i|mary 1|mary tudor #tudor queen
Richard III|richard 3 #york king
Henry V|henry 5 #lancaster king
George VI|george 6 #windsor king
Edward VIII|edward 8 #windsor king
King John|john #plantagenet king
Charles I|charles 1 #stuart king
Charles II|charles 2 #stuart king
James I|james 1 #stuart king
Edward VI|edward 6 #tudor king
Henry VII|henry 7 #tudor king
Lady Jane Grey|jane grey #tudor queen
George V|george 5 #windsor king
Edward VII|edward 7 #windsor king
Anne|queen anne #stuart queen
William III|william 3|william of orange #stuart king
Mary II|mary 2 #stuart queen
James II|james 2 #stuart king
George I|george 1 #hanover king
George II|george 2 #hanover king
George IV|george 4 #hanover king
William IV|william 4 #hanover king
Edward I|edward 1|longshanks #plantagenet king
Edward II|edward 2 #plantagenet king
Edward III|edward 3 #plantagenet king
Henry II|henry 2 #plantagenet king
Henry III|henry 3 #plantagenet king
Richard II|richard 2 #plantagenet king
Henry IV|henry 4 #lancaster king
Henry VI|henry 6 #lancaster king
Edward IV|edward 4 #york king
Edward V|edward 5 #york king
William II|william 2|william rufus #norman king
Henry I|henry 1 #norman king
Stephen #norman king
Alfred the Great
Canute|cnut
Edward the Confessor
`);
ALL("monarchs","monarchs","Name a monarch of England or Britain","Kings and queens from any era. Numbers count.");
T("monarchs","monarchs","Name a Tudor monarch","","tudor");
T("monarchs","monarchs","Name a Stuart monarch of England or Britain","","stuart");
T("monarchs","monarchs","Name a Plantagenet king","Including Lancaster and York.","plantagenet|lancaster|york");
T("monarchs","monarchs","Name a queen who ruled England or Britain in her own right","","queen");
T("monarchs","monarchs","Name a British monarch since 1714","Hanover and Windsor.","hanover|windsor");
L("rulers","Name a Roman emperor","Western or Eastern. Julius Caesar was never emperor.",`Augustus;Nero;Caligula;Tiberius;Claudius;Hadrian;Marcus Aurelius;Constantine|constantine the great;Trajan;Commodus;Vespasian;Titus;Domitian;Caracalla;Diocletian;Septimius Severus;Galba;Otho;Vitellius;Nerva;Antoninus Pius;Lucius Verus;Elagabalus;Severus Alexander;Maximinus Thrax;Philip the Arab;Decius;Valerian;Gallienus;Aurelian;Probus;Julian|julian the apostate;Theodosius;Valentinian;Romulus Augustulus;Justinian`);
L("rulers","Name an Egyptian pharaoh","",`Tutankhamun|king tut|tutankhamen;Ramesses II|ramses ii|ramses|ramesses;Cleopatra;Khufu|cheops;Nefertiti;Akhenaten;Hatshepsut;Thutmose III;Khafre;Menkaure;Djoser;Seti I;Amenhotep III;Narmer|menes;Sneferu;Ptolemy I;Ramesses III;Thutmose I;Psamtik;Taharqa;Sobekneferu;Amenemhat;Senusret;Pepi II;Merneptah;Horemheb;Ay`);
L("rulers","Name a British prime minister","Surnames are fine.",`Winston Churchill;Margaret Thatcher;Tony Blair;Boris Johnson;Theresa May;David Cameron;Gordon Brown;Rishi Sunak;Keir Starmer;Liz Truss;John Major;Harold Wilson;Clement Attlee;Neville Chamberlain;Benjamin Disraeli;William Gladstone;Robert Walpole;William Pitt the Younger|pitt the younger;Anthony Eden;Harold Macmillan;Edward Heath;James Callaghan;Alec Douglas-Home;Stanley Baldwin;Ramsay MacDonald;David Lloyd George;H. H. Asquith|asquith;Arthur Balfour;Lord Salisbury|salisbury;Lord Palmerston|palmerston;Robert Peel;Duke of Wellington|wellington;Lord Liverpool;Spencer Perceval;Lord Melbourne|melbourne;Earl Grey;George Canning;Pitt the Elder;Lord North;Bonar Law;Henry Campbell-Bannerman;Lord Rosebery;Lord John Russell;Lord Aberdeen;Lord Derby`,{surname:true});
L("rulers","Name a Canadian prime minister","Surnames are fine.",`John A. Macdonald|john a macdonald;Pierre Trudeau;Justin Trudeau;Mark Carney;Stephen Harper;Brian Mulroney;Jean Chrétien|chretien;Lester B. Pearson|pearson;John Diefenbaker;William Lyon Mackenzie King|mackenzie king;Wilfrid Laurier;Robert Borden;Paul Martin;Kim Campbell;Joe Clark;John Turner;Louis St. Laurent;R. B. Bennett;Arthur Meighen;Alexander Mackenzie;John Abbott;John Thompson;Mackenzie Bowell;Charles Tupper`,{surname:true});
DS("philosophers",`
Socrates #greek
Plato #greek
Aristotle #greek
Confucius
Friedrich Nietzsche|nietzsche #exist
Immanuel Kant|kant
René Descartes|descartes
Karl Marx|marx
Jean-Paul Sartre|sartre #exist
John Locke|locke
Thomas Hobbes|hobbes
David Hume|hume
Jean-Jacques Rousseau|rousseau
Voltaire
Niccolò Machiavelli|machiavelli
Søren Kierkegaard|kierkegaard #exist
Ludwig Wittgenstein|wittgenstein
Simone de Beauvoir|de beauvoir #exist
Laozi|lao tzu
Sun Tzu
Epicurus #greek
Diogenes #greek
Pythagoras #greek
Heraclitus #greek
Thales #greek
Zeno #greek
Seneca
Marcus Aurelius
Epictetus #greek
Cicero
Saint Augustine|augustine
Thomas Aquinas|aquinas
Baruch Spinoza|spinoza
Gottfried Leibniz|leibniz
John Stuart Mill
Jeremy Bentham|bentham
Arthur Schopenhauer|schopenhauer
Georg Hegel|hegel
Martin Heidegger|heidegger #exist
Albert Camus|camus #exist
Michel Foucault|foucault
Bertrand Russell
Hannah Arendt|arendt
Noam Chomsky|chomsky
Ayn Rand
Francis Bacon
Adam Smith
Edmund Burke
Thomas Paine
Mary Wollstonecraft|wollstonecraft
Plotinus #greek
Parmenides #greek
Democritus #greek
Protagoras #greek
Empedocles #greek
Anaximander #greek
Avicenna|ibn sina
Averroes|ibn rushd
Maimonides
Mencius
Zhuangzi|chuang tzu
Michel de Montaigne|montaigne
Blaise Pascal|pascal
George Berkeley|berkeley
Henry David Thoreau|thoreau
Ralph Waldo Emerson|emerson
William James
John Dewey
Karl Popper|popper
Jacques Derrida|derrida
Slavoj Žižek|zizek
Judith Butler
Peter Singer
John Rawls|rawls
`);
ALL("philosophy","philosophers","Name a famous philosopher","Surnames are fine.");
T("philosophy","philosophers","Name an ancient Greek philosopher","","greek");
T("philosophy","philosophers","Name an existentialist philosopher","Or a forerunner.","exist");
L("explorers","Name a famous explorer","Surnames are fine.",`Christopher Columbus;Marco Polo;Ferdinand Magellan;Vasco da Gama;James Cook|captain cook;Meriwether Lewis|lewis and clark;William Clark;Amerigo Vespucci;Hernán Cortés|hernan cortes;Francisco Pizarro;Leif Erikson;Ernest Shackleton;Roald Amundsen;Robert Falcon Scott;Edmund Hillary;Tenzing Norgay;Francis Drake;Walter Raleigh;Henry Hudson;Jacques Cartier;Samuel de Champlain;Juan Ponce de León|ponce de leon;Hernando de Soto;Vasco Núñez de Balboa|balboa;Bartolomeu Dias;Zheng He;Ibn Battuta;David Livingstone;Henry Morton Stanley;Abel Tasman;John Cabot;Sacagawea;Daniel Boone;Robert Peary;Matthew Henson;Jacques Cousteau;Amelia Earhart;Charles Lindbergh;Francisco de Orellana;Erik the Red;Pedro Álvares Cabral|cabral;Giovanni da Verrazzano;Alexander Mackenzie;Richard Francis Burton;John Hanning Speke;Mungo Park;Fridtjof Nansen;Ranulph Fiennes;Juan Sebastián Elcano|elcano`,{surname:true});
L("activists","Name a civil rights or human rights leader","Any country. Surnames are fine.",`Martin Luther King Jr.|martin luther king|mlk;Rosa Parks;Nelson Mandela;Mahatma Gandhi|gandhi;Malcolm X;Harriet Tubman;Frederick Douglass;John Lewis;Medgar Evers;W. E. B. Du Bois|web du bois|du bois;Booker T. Washington;Sojourner Truth;Thurgood Marshall;Ruby Bridges;Jesse Jackson;Coretta Scott King;Desmond Tutu;Ralph Abernathy;Fannie Lou Hamer;Bayard Rustin;Ida B. Wells;Shirley Chisholm;Angela Davis;Huey P. Newton|huey newton;Stokely Carmichael;A. Philip Randolph;Mary McLeod Bethune;Dorothy Height;Claudette Colvin;James Baldwin;Cesar Chavez;Dolores Huerta;Harvey Milk;Susan B. Anthony;Elizabeth Cady Stanton;Malala Yousafzai|malala;Steve Biko;Emmeline Pankhurst;Aung San Suu Kyi`,{surname:true});
L("ww2","Name a World War II leader or general","Any side. Surnames are fine.",`Winston Churchill;Adolf Hitler;Franklin D. Roosevelt|fdr;Joseph Stalin;Harry Truman;Dwight Eisenhower|ike;Benito Mussolini;Charles de Gaulle;Hirohito;Hideki Tojo;Douglas MacArthur;George Patton;Bernard Montgomery|monty;Erwin Rommel;Chester Nimitz;Omar Bradley;Georgy Zhukov;Neville Chamberlain;Hermann Göring|goering|goring;Heinrich Himmler;Joseph Goebbels;Isoroku Yamamoto;Chiang Kai-shek;Mao Zedong;Philippe Pétain|petain;George Marshall;Josip Broz Tito|tito;Clement Attlee;Rudolf Hess;Karl Dönitz|donitz;Albert Speer;Mark Clark;William Halsey;Jimmy Doolittle;Arthur Harris`,{surname:true});
L("ww2","Name a World War II battle or operation","",`D-Day|normandy|operation overlord|normandy landings;Pearl Harbor;Battle of Britain;Stalingrad;Midway;Battle of the Bulge|bulge;Iwo Jima;Okinawa;Dunkirk;El Alamein;Guadalcanal;Kursk;Battle of Berlin|berlin;Siege of Leningrad|leningrad;Anzio;Monte Cassino;Operation Market Garden|market garden|arnhem;Leyte Gulf;Coral Sea;Battle of the Atlantic;Tobruk;Crete;Sicily|operation husky;Battle of Moscow|moscow;Saipan;Tarawa;Peleliu;Bataan;Fall of Singapore|singapore;Hürtgen Forest|hurtgen forest;Operation Barbarossa|barbarossa;Battle of France;Warsaw Uprising;Imphal;Kohima;Bastogne;Remagen;Philippine Sea`);
L("wars","Name a war the United States has fought","",`Revolutionary War|american revolution|war of independence;Civil War;World War II|ww2|wwii;World War I|ww1|wwi;Vietnam War|vietnam;Korean War;War of 1812;Gulf War;Iraq War;War in Afghanistan|afghanistan;Mexican–American War|mexican american war;Spanish–American War|spanish american war;French and Indian War;Cold War;Philippine–American War;Quasi-War;Barbary Wars;Seminole Wars;Black Hawk War;King Philip's War;Pequot War;American Indian Wars|indian wars;Banana Wars`);
L("empires","Name a historical empire","",`Roman Empire;British Empire;Ottoman Empire;Mongol Empire;Persian Empire;Byzantine Empire;Holy Roman Empire;Aztec Empire;Inca Empire;Spanish Empire;Russian Empire;Austro-Hungarian Empire|austria hungary;Mughal Empire;Egyptian Empire;French Empire|napoleonic empire;German Empire;Japanese Empire;Portuguese Empire;Dutch Empire;Macedonian Empire;Carthaginian Empire;Achaemenid Empire;Sasanian Empire;Assyrian Empire;Babylonian Empire;Akkadian Empire;Hittite Empire;Mali Empire;Songhai Empire;Ghana Empire;Maurya Empire;Gupta Empire;Khmer Empire;Qing dynasty;Ming dynasty;Abbasid Caliphate;Umayyad Caliphate;Carolingian Empire;Ethiopian Empire;Benin Empire;Maratha Empire;Timurid Empire;Seljuk Empire;Parthian Empire;Kushan Empire;Tang dynasty`);
L("empires","Name an ancient civilization","",`Egyptians|ancient egypt;Romans|ancient rome;Greeks|ancient greece;Maya|mayans;Aztecs;Incas;Sumerians;Babylonians;Persians;Ancient China|chinese;Phoenicians;Vikings;Celts;Etruscans;Minoans;Mycenaeans;Assyrians;Hittites;Indus Valley Civilization|harappan;Olmecs;Carthaginians;Nubians|kingdom of kush;Akkadians;Toltecs;Zapotecs;Nabataeans;Khmer;Aksumites|axum;Scythians;Huns;Ancestral Puebloans|anasazi;Moche;Nazca;Mesopotamians`);
L("empires","Name a Chinese dynasty","",`Ming;Qing;Han;Tang;Qin;Song;Yuan;Zhou;Shang;Sui;Xia;Jin;Liao`,{min:6});
L("ships","Name a famous ship","Real ships.",`Titanic;Mayflower;Santa María|santa maria;Bismarck;USS Arizona;Lusitania;Queen Mary;HMS Victory;USS Constitution|old ironsides;Endurance;USS Nautilus|nautilus;Mary Rose;Cutty Sark;Edmund Fitzgerald;Exxon Valdez;Andrea Doria;HMS Bounty|bounty;HMS Beagle|beagle;Endeavour;Golden Hind;Pinta;Niña|nina;Queen Anne's Revenge;Mary Celeste;Vasa;Yamato;USS Enterprise;USS Missouri;HMS Hood;Britannic;Carpathia;Olympic;Queen Elizabeth 2|qe2;Costa Concordia;USS Monitor;CSS Virginia|merrimack;H. L. Hunley;La Amistad|amistad;Kon-Tiki;Calypso;Fram;Terra Nova;Kursk`);
L("nobel","Name a Nobel Peace Prize winner","People, not organizations.",`Martin Luther King Jr.|martin luther king|mlk;Nelson Mandela;Malala Yousafzai|malala;Barack Obama;Mother Teresa;Dalai Lama;Desmond Tutu;Jimmy Carter;Al Gore;Kofi Annan;Theodore Roosevelt;Woodrow Wilson;Mikhail Gorbachev;Lech Wałęsa|lech walesa;Aung San Suu Kyi;Elie Wiesel;Henry Kissinger;Yasser Arafat;Yitzhak Rabin;Shimon Peres;Anwar Sadat;Menachem Begin;F. W. de Klerk|de klerk;Muhammad Yunus;Wangari Maathai;Ellen Johnson Sirleaf;Leymah Gbowee;Juan Manuel Santos;Abiy Ahmed;Denis Mukwege;Nadia Murad;Maria Ressa;Dmitry Muratov;Narges Mohammadi;Albert Schweitzer;Ralph Bunche;Linus Pauling;Andrei Sakharov;Kailash Satyarthi;Lester Pearson;Jane Addams;George Marshall;Willy Brandt;Óscar Arias|oscar arias;Rigoberta Menchú|rigoberta menchu;Shirin Ebadi;Liu Xiaobo;María Corina Machado|maria corina machado`,{surname:true});

GROUP("myth");
L("greekgods","Name a god or goddess from Greek mythology","Olympians, Titans, primordials and minor deities.",`Zeus;Poseidon;Hades;Athena|athene;Aphrodite;Apollo;Ares;Hermes;Hera;Artemis;Dionysus|dionysos;Hephaestus|hephaistos;Demeter;Eros;Persephone|kore;Kronos|cronus|cronos;Nike;Gaia|gaea;Hestia;Pan;Nemesis;Hecate|hekate;Helios;Uranus|ouranos;Rhea;Selene;Eos;Morpheus;Hypnos;Thanatos;Iris;Nyx;Tyche;Hebe;Eris;Asclepius|asklepios;Eileithyia`);
L("gods","Name a Roman god or goddess","",`Jupiter;Venus;Mars;Neptune;Mercury;Juno;Minerva;Apollo;Diana;Vulcan;Pluto;Cupid;Bacchus;Saturn;Ceres;Vesta;Janus;Aurora;Fortuna;Faunus;Proserpina;Luna;Sol;Terra;Victoria;Bellona;Flora;Somnus;Caelus;Orcus;Dis Pater;Pomona;Quirinus;Liber;Juventas;Concordia`);
L("gods","Name a figure from Norse mythology","Gods, giants and creatures.",`Thor;Odin;Loki;Freya|freyja;Frigg;Baldur|balder;Tyr;Heimdall;Hel;Freyr|frey;Njord;Fenrir;Jormungandr|midgard serpent;Sleipnir;Ymir;Bragi;Idun|idunn;Vidar;Vali;Hodr|hod;Skadi;Sif;Ullr;Forseti;Mimir;Surtr|surt;Aegir;Ran;Hermod;Gefjon;Eir;Sol;Mani;Nott`);
L("gods","Name a god or goddess from ancient Egypt","",`Ra|re;Osiris;Isis;Anubis;Horus;Set|seth;Thoth;Bastet|bast;Hathor;Sekhmet;Ptah;Amun|amun ra|amon;Sobek;Nut;Geb;Shu;Tefnut;Nephthys;Maat;Khnum;Aten;Bes;Taweret;Khonsu;Atum;Apophis|apep;Ammit;Hapi;Neith;Wadjet;Serket;Mut;Montu;Min;Khepri;Seshat`);
L("gods","Name a Hindu deity","",`Vishnu;Shiva;Brahma;Ganesha|ganesh;Krishna;Rama;Lakshmi;Hanuman;Kali;Durga;Parvati;Saraswati;Indra;Agni;Surya;Varuna;Yama;Kartikeya|murugan|skanda;Ganga;Sita;Radha;Vayu;Kama;Chandra;Narasimha;Shakti;Balarama;Garuda;Nandi;Ayyappa;Jagannath;Venkateswara;Annapurna`);
L("creatures","Name a mythical creature","From any culture's myths and folklore.",`Dragon;Unicorn;Mermaid;Phoenix;Griffin|gryphon;Centaur;Minotaur;Pegasus;Werewolf;Vampire;Gorgon|medusa;Cyclops;Hydra;Kraken;Sphinx;Fairy;Troll;Goblin;Elf;Dwarf;Giant;Ogre;Yeti|abominable snowman;Bigfoot|sasquatch;Loch Ness Monster|nessie;Chupacabra;Banshee;Leprechaun;Gnome;Pixie;Satyr|faun;Harpy;Siren;Basilisk;Chimera;Cerberus;Kitsune;Thunderbird;Wendigo;Golem;Genie|djinn|jinn;Zombie;Hippogriff;Manticore;Cockatrice;Wyvern;Selkie;Kelpie;Nymph;Dryad;Naiad;Sea serpent;Roc;Jersey Devil;Mothman;Kappa;Tengu;Valkyrie;Nemean lion;Charybdis;Scylla;Typhon;Bunyip;Qilin;Naga;Rakshasa;Jackalope;Behemoth;Leviathan;Hellhound;Changeling;Boogeyman`);
L("heroes","Name a hero or figure from Greek mythology","Mortals and demigods, not gods.",`Hercules|heracles;Achilles;Odysseus|ulysses;Perseus;Theseus;Jason;Orpheus;Ajax;Hector;Paris;Helen of Troy|helen;Agamemnon;Menelaus;Bellerophon;Atalanta;Pandora;Prometheus;Narcissus;Icarus;Daedalus;Oedipus;Medea;Penelope;Patroclus;Aeneas;Cassandra;Ariadne;Midas;Sisyphus;Tantalus;Pygmalion;Psyche;Echo;Antigone;Electra;Telemachus;Castor;Pollux;Cadmus;Arachne;Andromeda;Europa;Leda;Danaë|danae`);
L("heroes","Name a character, place or object from Arthurian legend","",`King Arthur|arthur;Merlin;Lancelot;Guinevere;Excalibur;Camelot;Holy Grail|the grail;Gawain;Galahad;Percival|parsifal;Mordred;Morgan le Fay;Lady of the Lake;Tristan;Isolde;Round Table;Bedivere;Kay;Uther Pendragon|uther;Avalon;Gareth;Bors;Elaine;Nimue|viviane;Igraine;Fisher King;Green Knight;Lamorak;Ector;Pellinore`);
DS("bible",`
Genesis #ot
Exodus #ot
Revelation|revelations #nt
Psalms #ot
Matthew #nt
John|gospel of john #nt
Mark #nt
Luke #nt
Proverbs #ot
Job #ot
Acts|acts of the apostles #nt
Romans #nt
Isaiah #ot
Daniel #ot
Jonah #ot
Ruth #ot
Esther #ot
Leviticus #ot
Deuteronomy #ot
Numbers #ot
Joshua #ot
Judges #ot
Ecclesiastes #ot
Song of Songs|song of solomon #ot
1 Corinthians|corinthians|first corinthians #nt
Galatians #nt
Ephesians #nt
Hebrews #nt
James #nt
Jeremiah #ot
Ezekiel #ot
1 Samuel|samuel|first samuel #ot
1 Kings|kings|first kings #ot
Philippians #nt
Colossians #nt
1 Peter|peter|first peter #nt
Lamentations #ot
Nehemiah #ot
Ezra #ot
2 Corinthians|second corinthians #nt
1 Timothy|timothy|first timothy #nt
1 Thessalonians|thessalonians|first thessalonians #nt
2 Samuel|second samuel #ot
2 Kings|second kings #ot
1 Chronicles|chronicles|first chronicles #ot
2 Chronicles|second chronicles #ot
Titus #nt
1 John|first john #nt
Hosea #ot
Joel #ot
Amos #ot
Micah #ot
Malachi #ot
Zechariah #ot
2 Timothy|second timothy #nt
2 Peter|second peter #nt
2 Thessalonians|second thessalonians #nt
Jude #nt
Philemon #nt
2 John|second john #nt
3 John|third john #nt
Habakkuk #ot
Zephaniah #ot
Haggai #ot
Nahum #ot
Obadiah #ot
`);
ALL("bible","bible","Name a book of the Bible","Protestant canon. Numbers count.");
T("bible","bible","Name a book of the Old Testament","","ot");
T("bible","bible","Name a book of the New Testament","","nt");
L("faith","Name one of Jesus's apostles","The Twelve, plus Matthias and Paul.",`Peter|simon peter;John;Judas Iscariot|judas;Matthew;Thomas|doubting thomas;Andrew;James|james son of zebedee;Paul;Philip;Bartholomew|nathanael;Thaddeus|jude;Simon the Zealot|simon;James son of Alphaeus|james the less;Matthias`);
L("faith","Name a religion or religious movement","",`Christianity;Islam;Hinduism;Buddhism;Judaism;Sikhism;Taoism|daoism;Shinto;Confucianism;Jainism;Zoroastrianism;Baháʼí Faith|bahai;Mormonism|latter day saints|lds;Catholicism;Protestantism;Eastern Orthodoxy|orthodox christianity;Scientology;Paganism;Wicca;Rastafari|rastafarianism;Druidry|druidism;Unitarian Universalism;Jehovah's Witnesses;Quakerism|quakers;Amish;Mennonites;Methodism;Baptists;Lutheranism;Anglicanism;Presbyterianism;Pentecostalism;Sufism;Cao Dai;Falun Gong;Santería|santeria;Vodou|voodoo;Candomblé|candomble;Shamanism;Animism;Hare Krishna|iskcon;Seventh-day Adventism|adventists;Christian Science;Kabbalah;Zen`);
