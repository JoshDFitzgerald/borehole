GROUP("sports");
/* teams: nfl nba mlb nhl · afc nfc east west al nl · nyname la chi tx fl ca can · animal */
DS("teams",`
Dallas Cowboys|cowboys #nfl nfc tx
New England Patriots|patriots|pats #nfl afc
Green Bay Packers|packers #nfl nfc
Pittsburgh Steelers|steelers #nfl afc
Kansas City Chiefs|chiefs #nfl afc
San Francisco 49ers|49ers|niners|forty niners #nfl nfc ca
Philadelphia Eagles|eagles #nfl nfc animal
Chicago Bears|bears #nfl nfc chi animal
New York Giants #nfl nfc nyname
Denver Broncos|broncos #nfl afc animal
Seattle Seahawks|seahawks #nfl nfc animal
Las Vegas Raiders|raiders #nfl afc
Miami Dolphins|dolphins #nfl afc fl animal
Buffalo Bills|bills #nfl afc
Baltimore Ravens|ravens #nfl afc animal
New York Jets #nfl afc nyname
Los Angeles Rams|rams #nfl nfc la ca animal
Minnesota Vikings|vikings #nfl nfc
New Orleans Saints|saints #nfl nfc
Tampa Bay Buccaneers|buccaneers|bucs #nfl nfc fl
Detroit Lions|lions #nfl nfc animal
Atlanta Falcons|falcons #nfl nfc animal
Cincinnati Bengals|bengals #nfl afc animal
Cleveland Browns|browns #nfl afc
Los Angeles Chargers|chargers #nfl afc la ca
Indianapolis Colts|colts #nfl afc animal
Washington Commanders|commanders #nfl nfc
Arizona Cardinals #nfl nfc animal
Carolina Panthers #nfl nfc animal
Tennessee Titans|titans #nfl afc
Houston Texans|texans #nfl afc tx
Jacksonville Jaguars|jaguars|jags #nfl afc fl animal
Los Angeles Lakers|lakers #nba west la ca
Boston Celtics|celtics #nba east
Chicago Bulls|bulls #nba east chi animal
Golden State Warriors|warriors|golden state #nba west ca
New York Knicks|knicks #nba east nyname
Miami Heat|heat #nba east fl
San Antonio Spurs|spurs #nba west tx
Cleveland Cavaliers|cavaliers|cavs #nba east
Philadelphia 76ers|76ers|sixers #nba east
Dallas Mavericks|mavericks|mavs #nba west tx
Houston Rockets|rockets #nba west tx
Brooklyn Nets|nets #nba east
Los Angeles Clippers|clippers #nba west la ca
Phoenix Suns|suns #nba west
Milwaukee Bucks|bucks #nba east animal
Denver Nuggets|nuggets #nba west
Toronto Raptors|raptors #nba east can animal
Oklahoma City Thunder|thunder|okc #nba west
Utah Jazz|jazz #nba west
Portland Trail Blazers|trail blazers|blazers #nba west
Detroit Pistons|pistons #nba east
Orlando Magic|magic #nba east fl
Atlanta Hawks|hawks #nba east animal
Minnesota Timberwolves|timberwolves|wolves #nba west animal
Indiana Pacers|pacers #nba east
Sacramento Kings #nba west ca
Memphis Grizzlies|grizzlies #nba west animal
Charlotte Hornets|hornets #nba east animal
New Orleans Pelicans|pelicans #nba west animal
Washington Wizards|wizards #nba east
New York Yankees|yankees #mlb al nyname
Boston Red Sox|red sox #mlb al
Los Angeles Dodgers|dodgers #mlb nl la ca
Chicago Cubs|cubs #mlb nl chi animal
St. Louis Cardinals|saint louis cardinals #mlb nl animal
San Francisco Giants #mlb nl ca
New York Mets|mets #mlb nl nyname
Atlanta Braves|braves #mlb nl
Houston Astros|astros #mlb al tx
Philadelphia Phillies|phillies #mlb nl
Chicago White Sox|white sox #mlb al chi
Detroit Tigers|tigers #mlb al animal
Seattle Mariners|mariners #mlb al
Texas Rangers #mlb al tx
Toronto Blue Jays|blue jays #mlb al can animal
Baltimore Orioles|orioles #mlb al animal
San Diego Padres|padres #mlb nl ca
Los Angeles Angels|angels|anaheim angels #mlb al la ca
Athletics|oakland athletics|as|a's #mlb al
Cleveland Guardians|guardians #mlb al
Minnesota Twins|twins #mlb al
Milwaukee Brewers|brewers #mlb nl
Cincinnati Reds|reds #mlb nl
Pittsburgh Pirates|pirates #mlb nl
Kansas City Royals|royals #mlb al
Colorado Rockies|rockies #mlb nl
Arizona Diamondbacks|diamondbacks|dbacks #mlb nl animal
Miami Marlins|marlins #mlb nl fl animal
Tampa Bay Rays|rays #mlb al fl animal
Washington Nationals|nationals|nats #mlb nl
Montreal Canadiens|canadiens|habs #nhl east can
Toronto Maple Leafs|maple leafs|leafs #nhl east can
Boston Bruins|bruins #nhl east animal
Chicago Blackhawks|blackhawks #nhl west chi
Detroit Red Wings|red wings #nhl east
New York Rangers #nhl east nyname
Pittsburgh Penguins|penguins #nhl east animal
Philadelphia Flyers|flyers #nhl east
Edmonton Oilers|oilers #nhl west can
Los Angeles Kings #nhl west la ca
Vegas Golden Knights|golden knights #nhl west
Tampa Bay Lightning|lightning #nhl east fl
Colorado Avalanche|avalanche|avs #nhl west
New York Islanders|islanders #nhl east nyname
New Jersey Devils|devils #nhl east
Washington Capitals|capitals|caps #nhl east
Vancouver Canucks|canucks #nhl west can
Calgary Flames|flames #nhl west can
St. Louis Blues|blues|saint louis blues #nhl west
Dallas Stars|stars #nhl west tx
Florida Panthers #nhl east fl animal
Anaheim Ducks|ducks #nhl west la ca animal
San Jose Sharks|sharks #nhl west ca animal
Ottawa Senators|senators #nhl east can
Buffalo Sabres|sabres #nhl east
Minnesota Wild|wild #nhl west
Nashville Predators|predators|preds #nhl west
Carolina Hurricanes|hurricanes|canes #nhl east
Winnipeg Jets #nhl west can
Columbus Blue Jackets|blue jackets #nhl east
Seattle Kraken|kraken #nhl west
Utah Mammoth|mammoth #nhl west animal
`,{surname:true});
const TM="teams";
T("teams",TM,"Name an NFL team","Current franchises. Nickname alone is fine.","nfl");
T("teams",TM,"Name an NBA team","Current franchises.","nba");
T("teams",TM,"Name a Major League Baseball team","Current franchises.","mlb");
T("teams",TM,"Name an NHL team","Current franchises.","nhl");
T("teams",TM,"Name an AFC team","NFL's American Football Conference.","afc");
T("teams",TM,"Name an NFC team","NFL's National Football Conference.","nfc");
T("teams",TM,"Name an NBA Eastern Conference team","","nba&east");
T("teams",TM,"Name an NBA Western Conference team","","nba&west");
T("teams",TM,"Name an American League baseball team","","al");
T("teams",TM,"Name a National League baseball team","","nl");
T("teams",TM,"Name an NHL Eastern Conference team","","nhl&east");
T("teams",TM,"Name an NHL Western Conference team","","nhl&west");
T("teamcity",TM,"Name a big-four pro team with New York in its name","NFL, NBA, MLB or NHL.","nyname");
T("teamcity",TM,"Name a big-four pro team based in greater Los Angeles","","la");
T("teamcity",TM,"Name a big-four pro team from Chicago","","chi");
T("teamcity",TM,"Name a big-four pro team from Texas","","tx");
T("teamcity",TM,"Name a big-four pro team from Florida","","fl");
T("teamcity",TM,"Name a big-four pro team from California","","ca");
T("teamcity",TM,"Name a big-four pro team based in Canada","","can");
T("teamcity",TM,"Name a big-four pro team named after an animal","","animal");
T("teamcity",TM,"Name a big-four pro team whose nickname doesn't end in S","Like the Heat.",it=>!/s$/i.test(it.name.replace(/[^a-z ]/gi,"").trim()));
L("soccerclubs","Name an MLS team","Current clubs.",`LA Galaxy|galaxy;Inter Miami;Seattle Sounders|sounders;LAFC|los angeles fc;Atlanta United;Portland Timbers|timbers;New York Red Bulls|red bulls;New York City FC|nycfc;Toronto FC;Orlando City;Columbus Crew|crew;Chicago Fire|fire;D.C. United|dc united;New England Revolution|revolution|revs;Philadelphia Union|union;Sporting Kansas City|sporting kc;Real Salt Lake|rsl;Colorado Rapids|rapids;FC Dallas;Houston Dynamo|dynamo;San Jose Earthquakes|earthquakes;Vancouver Whitecaps|whitecaps;CF Montréal|cf montreal;Minnesota United;Nashville SC;FC Cincinnati;Austin FC;Charlotte FC;St. Louis City SC|st louis city;San Diego FC`);
L("teamsmore","Name a WNBA team","Current teams.",`Las Vegas Aces|aces;New York Liberty|liberty;Indiana Fever|fever;Chicago Sky|sky;Phoenix Mercury|mercury;Seattle Storm|storm;Minnesota Lynx|lynx;Connecticut Sun|sun;Los Angeles Sparks|sparks;Atlanta Dream|dream;Washington Mystics|mystics;Dallas Wings|wings;Golden State Valkyries|valkyries;Toronto Tempo|tempo;Portland Fire`);
L("soccerclubs","Name a club that has played in the English Premier League","Any season since 1992.",`Manchester United|man united|man utd;Liverpool;Arsenal;Chelsea;Manchester City|man city;Tottenham Hotspur|tottenham|spurs;Newcastle United|newcastle;Everton;West Ham United|west ham;Aston Villa;Leeds United|leeds;Leicester City|leicester;Southampton;Wolverhampton Wanderers|wolves;Crystal Palace;Brighton & Hove Albion|brighton;Fulham;Brentford;Nottingham Forest;Bournemouth;Burnley;Sunderland;Blackburn Rovers|blackburn;Middlesbrough;Norwich City|norwich;Watford;Stoke City|stoke;West Bromwich Albion|west brom;Sheffield United;Bolton Wanderers|bolton;Ipswich Town|ipswich;Luton Town|luton;Queens Park Rangers|qpr;Derby County|derby;Birmingham City;Wigan Athletic|wigan;Hull City;Swansea City|swansea;Cardiff City;Portsmouth;Charlton Athletic|charlton;Coventry City|coventry;Reading;Sheffield Wednesday;Huddersfield Town;Blackpool;Wimbledon;Oldham Athletic;Barnsley;Bradford City;Swindon Town`);
L("soccerclubs","Name a Spanish football club","",`Real Madrid;Barcelona|barca;Atlético Madrid|atletico madrid;Sevilla;Valencia;Villarreal;Real Sociedad;Athletic Bilbao|athletic club;Real Betis|betis;Celta Vigo;Espanyol;Getafe;Osasuna;Mallorca;Rayo Vallecano;Deportivo La Coruña|deportivo;Málaga|malaga;Real Zaragoza;Granada;Alavés|alaves;Las Palmas;Girona;Cádiz|cadiz;Levante;Elche;Real Valladolid;Almería|almeria;Sporting Gijón;Real Oviedo;Leganés|leganes;Eibar;Racing Santander`);
L("soccerclubs","Name an Italian football club","",`Juventus|juve;AC Milan|milan;Inter Milan|inter;Roma;Napoli;Lazio;Fiorentina;Atalanta;Torino;Bologna;Sampdoria;Genoa;Parma;Udinese;Sassuolo;Cagliari;Lecce;Hellas Verona|verona;Empoli;Monza;Palermo;Bari;Brescia;Como;Salernitana;Spezia;Venezia;Chievo`);
L("soccerclubs","Name a German football club","",`Bayern Munich|bayern;Borussia Dortmund|dortmund|bvb;Bayer Leverkusen|leverkusen;RB Leipzig|leipzig;Schalke 04|schalke;Werder Bremen;Hamburger SV|hamburg;Borussia Mönchengladbach|gladbach|monchengladbach;VfB Stuttgart|stuttgart;Eintracht Frankfurt|frankfurt;VfL Wolfsburg|wolfsburg;1. FC Köln|koln|cologne;Hertha BSC|hertha berlin;Union Berlin;Hoffenheim;Mainz 05|mainz;SC Freiburg|freiburg;FC Augsburg|augsburg;Hannover 96;1. FC Nürnberg|nurnberg;Kaiserslautern;St. Pauli;Fortuna Düsseldorf;VfL Bochum|bochum;Heidenheim;Darmstadt`);
L("soccerclubs","Name a French football club","",`Paris Saint-Germain|psg;Marseille|olympique de marseille;Lyon|olympique lyonnais;Monaco;Lille;Nice;Rennes;Bordeaux;Saint-Étienne|saint etienne;Nantes;Lens;Montpellier;Toulouse;Strasbourg;Reims;Auxerre;Lorient;Brest;Metz;Le Havre;Angers;Sochaux;Bastia;Paris FC`);
L("players","Name a famous soccer player","Men or women. Surnames are fine.",`Lionel Messi;Cristiano Ronaldo|ronaldo|cr7;Pelé|pele;Diego Maradona;Neymar;Kylian Mbappé|mbappe;David Beckham;Zinedine Zidane;Ronaldinho;Johan Cruyff;Erling Haaland;Wayne Rooney;Thierry Henry;Mohamed Salah;Ronaldo Nazário|r9|ronaldo nazario;Kaká|kaka;Luka Modrić|modric;Andrés Iniesta|iniesta;Xavi;Sergio Ramos;Robert Lewandowski;Kevin De Bruyne;Harry Kane;Zlatan Ibrahimović|zlatan|ibrahimovic;Gianluigi Buffon;Paolo Maldini;Franz Beckenbauer;George Best;Bobby Charlton;Eusébio|eusebio;Alfredo Di Stéfano|di stefano;Ferenc Puskás|puskas;Lev Yashin;Michel Platini;Marco van Basten;Gerd Müller|gerd muller;Roberto Baggio;Steven Gerrard;Frank Lampard;Didier Drogba;Samuel Eto'o|etoo;Luis Suárez|suarez;Karim Benzema;Vinícius Júnior|vinicius junior|vini jr;Jude Bellingham;Lamine Yamal;Pedri;Son Heung-min|son;Virgil van Dijk;Manuel Neuer;Iker Casillas;Andrea Pirlo;Francesco Totti;Fernando Torres;Carles Puyol;Rivaldo;Romário|romario;Ruud Gullit;Dennis Bergkamp;Arjen Robben;Gareth Bale;Eden Hazard;Paul Pogba;Antoine Griezmann;Mia Hamm;Megan Rapinoe;Alex Morgan;Marta;Abby Wambach;Alexia Putellas;Aitana Bonmatí|bonmati;Christine Sinclair;Sam Kerr;Landon Donovan;Christian Pulisic;Ryan Giggs;Eric Cantona;Alan Shearer;Gary Lineker`,{surname:true});
L("players","Name a famous basketball player","NBA or WNBA. Surnames are fine.",`Michael Jordan;LeBron James|lebron;Kobe Bryant|kobe;Stephen Curry|steph curry;Shaquille O'Neal|shaq|oneal;Magic Johnson;Larry Bird;Kareem Abdul-Jabbar|kareem|abdul jabbar;Wilt Chamberlain;Bill Russell;Kevin Durant;Tim Duncan;Dennis Rodman;Allen Iverson;Dwyane Wade;Giannis Antetokounmpo|giannis;Nikola Jokić|jokic;Luka Dončić|luka|doncic;Hakeem Olajuwon;Scottie Pippen;Charles Barkley;Karl Malone;John Stockton;Dirk Nowitzki|dirk;Kevin Garnett;Kawhi Leonard;James Harden;Russell Westbrook;Chris Paul;Dwight Howard;Carmelo Anthony;Vince Carter;Tracy McGrady;Yao Ming;Patrick Ewing;Isiah Thomas;Julius Erving|dr j;Jerry West;Oscar Robertson;Elgin Baylor;Moses Malone;David Robinson;Paul Pierce;Ray Allen;Reggie Miller;Steve Nash;Jason Kidd;Gary Payton;Kyrie Irving;Anthony Davis;Joel Embiid;Jayson Tatum;Victor Wembanyama|wemby;Shai Gilgeous-Alexander|sga;Ja Morant;Damian Lillard;Klay Thompson;Draymond Green;Caitlin Clark;Diana Taurasi;Sue Bird;Lisa Leslie;A'ja Wilson|aja wilson;Candace Parker;Pete Maravich|pistol pete;Bob Cousy;Manute Bol;Muggsy Bogues;Spud Webb`,{surname:true});
L("players","Name an NFL quarterback, past or present","Surnames are fine.",`Tom Brady;Peyton Manning;Patrick Mahomes;Joe Montana;Aaron Rodgers;Drew Brees;Brett Favre;Dan Marino;John Elway;Eli Manning;Josh Allen;Lamar Jackson;Joe Burrow;Russell Wilson;Ben Roethlisberger;Troy Aikman;Terry Bradshaw;Steve Young;Joe Namath;Johnny Unitas;Jalen Hurts;Dak Prescott;Matthew Stafford;Kirk Cousins;Philip Rivers;Michael Vick;Cam Newton;Roger Staubach;Warren Moon;Jim Kelly;Fran Tarkenton;Bart Starr;Kurt Warner;Tony Romo;Matt Ryan;Jared Goff;Justin Herbert;C. J. Stroud|cj stroud;Caleb Williams;Jayden Daniels;Tua Tagovailoa|tua;Baker Mayfield;Trevor Lawrence;Kyler Murray;Joe Flacco;Derek Carr;Jim McMahon;Doug Flutie;Randall Cunningham;Steve McNair;Donovan McNabb;Ken Stabler;Jim Plunkett;Colin Kaepernick;Tim Tebow;Sam Darnold;Bo Nix;Drake Maye;Brock Purdy;Jordan Love`,{surname:true});
L("players","Name a famous baseball player","Surnames are fine.",`Babe Ruth;Jackie Robinson;Derek Jeter;Mickey Mantle;Hank Aaron;Willie Mays;Ken Griffey Jr.|ken griffey|griffey;Barry Bonds;Lou Gehrig;Shohei Ohtani|ohtani;Aaron Judge;Ted Williams;Roberto Clemente;Pete Rose;Cal Ripken Jr.|cal ripken|ripken;Ty Cobb;Joe DiMaggio;Nolan Ryan;Mike Trout;Albert Pujols;Alex Rodriguez|a rod;David Ortiz|big papi;Sandy Koufax;Cy Young;Yogi Berra;Stan Musial;Randy Johnson;Mariano Rivera;Ichiro Suzuki|ichiro;Pedro Martínez|pedro martinez;Greg Maddux;Roger Clemens;Mark McGwire;Sammy Sosa;Tony Gwynn;Rickey Henderson;Johnny Bench;Reggie Jackson;Mookie Betts;Clayton Kershaw;Bryce Harper;Juan Soto;Satchel Paige;Honus Wagner;José Altuve|jose altuve;Chipper Jones;Frank Thomas;Ernie Banks;Tom Seaver;Bob Gibson;Mike Piazza;Ryne Sandberg;Fernando Valenzuela;Vladimir Guerrero;Manny Ramirez;Buster Posey;Freddie Freeman;Paul Skenes;Justin Verlander;Max Scherzer;Jacob deGrom`,{surname:true});
L("players","Name a famous tennis player","Surnames are fine.",`Serena Williams|serena;Roger Federer;Rafael Nadal|rafa;Novak Djokovic;Venus Williams|venus;Andre Agassi;Pete Sampras;Steffi Graf;Billie Jean King;John McEnroe;Björn Borg|bjorn borg;Martina Navratilova;Andy Murray;Maria Sharapova;Chris Evert;Jimmy Connors;Carlos Alcaraz;Jannik Sinner;Naomi Osaka;Coco Gauff;Iga Świątek|iga swiatek;Aryna Sabalenka;Monica Seles;Arthur Ashe;Boris Becker;Ivan Lendl;Rod Laver;Martina Hingis;Kim Clijsters;Justine Henin;Ashleigh Barty;Stan Wawrinka;Andy Roddick;Lleyton Hewitt;Marat Safin;Juan Martín del Potro|del potro;Daniil Medvedev;Alexander Zverev;Stefanos Tsitsipas;Dominic Thiem;Caroline Wozniacki;Simona Halep;Petra Kvitová|kvitova;Emma Raducanu;Taylor Fritz;Frances Tiafoe;Ben Shelton;Jessica Pegula;Elena Rybakina;Anna Kournikova;Gabriela Sabatini;Margaret Court;Evonne Goolagong;Stefan Edberg;Mats Wilander;Gustavo Kuerten;Yannick Noah;Li Na;Nick Kyrgios`,{surname:true});
L("players","Name a famous golfer","Surnames are fine.",`Tiger Woods|tiger;Jack Nicklaus;Arnold Palmer;Phil Mickelson;Rory McIlroy;Scottie Scheffler;Gary Player;Ben Hogan;Bobby Jones;Seve Ballesteros|seve;Jordan Spieth;Brooks Koepka;Dustin Johnson;Bryson DeChambeau;Sergio García|sergio garcia;Ernie Els;Vijay Singh;Nick Faldo;Greg Norman;Tom Watson;Lee Trevino;Fred Couples;Payne Stewart;Jon Rahm;Justin Thomas;Xander Schauffele;Collin Morikawa;Hideki Matsuyama;Annika Sörenstam|annika sorenstam;Lorena Ochoa;Nelly Korda;Lydia Ko;Babe Didrikson Zaharias|babe zaharias;Nancy Lopez;Michelle Wie;John Daly;Bubba Watson;Rickie Fowler;Adam Scott;Padraig Harrington;Sam Snead;Walter Hagen;Byron Nelson;Shane Lowry;Viktor Hovland;Ludvig Åberg|ludvig aberg`,{surname:true});
L("players","Name a famous boxer","Surnames are fine.",`Muhammad Ali;Mike Tyson;Floyd Mayweather;Manny Pacquiao;Sugar Ray Leonard;Joe Frazier;George Foreman;Rocky Marciano;Joe Louis;Evander Holyfield;Lennox Lewis;Sugar Ray Robinson;Oscar De La Hoya;Canelo Álvarez|canelo|canelo alvarez;Tyson Fury;Anthony Joshua;Jack Dempsey;Larry Holmes;Marvin Hagler;Thomas Hearns;Roberto Durán|roberto duran;Julio César Chávez|julio cesar chavez;Bernard Hopkins;Roy Jones Jr.|roy jones;Wladimir Klitschko;Vitali Klitschko;Oleksandr Usyk;Deontay Wilder;Jake Paul;Naoya Inoue;Gennady Golovkin|ggg;Terence Crawford;Laila Ali;Claressa Shields;Katie Taylor;Amanda Serrano;Buster Douglas;Sonny Liston;Jack Johnson;Joe Calzaghe;Ricky Hatton;Prince Naseem Hamed|naseem hamed;Shane Mosley;Gervonta Davis;Ryan Garcia`,{surname:true});
L("players","Name a Formula 1 driver, past or present","Surnames are fine.",`Lewis Hamilton;Michael Schumacher;Ayrton Senna;Max Verstappen;Sebastian Vettel;Fernando Alonso;Niki Lauda;Alain Prost;Kimi Räikkönen|kimi raikkonen;Charles Leclerc;Lando Norris;Nigel Mansell;Jackie Stewart;Jenson Button;Juan Manuel Fangio;Mika Häkkinen|mika hakkinen;Damon Hill;Graham Hill;Nico Rosberg;Keke Rosberg;Daniel Ricciardo;Carlos Sainz;Sergio Pérez|sergio perez|checo;George Russell;Oscar Piastri;Valtteri Bottas;Jim Clark;Stirling Moss;James Hunt;Emerson Fittipaldi;Nelson Piquet;Jochen Rindt;Mario Andretti;Gilles Villeneuve;Jacques Villeneuve;Mark Webber;Rubens Barrichello;David Coulthard;Felipe Massa;Pierre Gasly;Esteban Ocon;Yuki Tsunoda;Lance Stroll;Kevin Magnussen;Nico Hülkenberg|nico hulkenberg;Alex Albon;Kimi Antonelli;Oliver Bearman;Jack Brabham;Alberto Ascari`,{surname:true});
L("players","Name a famous hockey player","Surnames are fine.",`Wayne Gretzky;Mario Lemieux;Sidney Crosby;Alexander Ovechkin|ovi;Bobby Orr;Gordie Howe;Connor McDavid;Mark Messier;Jaromír Jágr|jaromir jagr;Patrick Roy;Maurice Richard|rocket richard;Steve Yzerman;Martin Brodeur;Brett Hull;Bobby Hull;Teemu Selänne|teemu selanne;Joe Sakic;Nicklas Lidström|nicklas lidstrom;Ray Bourque;Dominik Hašek|dominik hasek;Patrick Kane;Jonathan Toews;Auston Matthews;Nathan MacKinnon;Leon Draisaitl;Cale Makar;Evgeni Malkin;Pavel Datsyuk;Henrik Lundqvist;Carey Price;Marc-André Fleury|marc andre fleury;Zdeno Chára|zdeno chara;Phil Esposito;Guy Lafleur;Jean Béliveau|jean beliveau;Mike Bossy;Paul Coffey;Chris Chelios;Eric Lindros;Peter Forsberg;Jarome Iginla;Steven Stamkos;Erik Karlsson;Nikita Kucherov;Jack Hughes;Connor Bedard;Matthew Tkachuk;Kirill Kaprizov`,{surname:true});
L("players","Name a famous Olympian","Surnames are fine.",`Michael Phelps;Usain Bolt;Simone Biles;Carl Lewis;Jesse Owens;Nadia Comăneci|nadia comaneci;Katie Ledecky;Mark Spitz;Florence Griffith Joyner|flo jo;Jackie Joyner-Kersee;Michael Johnson;Shaun White;Mary Lou Retton;Caitlyn Jenner;Eric Heiden;Bonnie Blair;Apolo Ohno;Lindsey Vonn;Mikaela Shiffrin;Ryan Lochte;Missy Franklin;Allyson Felix;Sydney McLaughlin-Levrone|sydney mclaughlin;Mondo Duplantis|armand duplantis;Eliud Kipchoge;Mo Farah;Paavo Nurmi;Larisa Latynina;Greg Louganis;Dara Torres;Gabby Douglas;Aly Raisman;Kerri Strug;Ian Thorpe;Cathy Freeman;Chloe Kim;Eileen Gu;Yuzuru Hanyu;Nathan Chen;Kristi Yamaguchi;Tara Lipinski;Michelle Kwan;Scott Hamilton;Dorothy Hamill;Katarina Witt;Sonja Henie;Jim Thorpe;Steve Redgrave;Chris Hoy;Bradley Wiggins;Léon Marchand|leon marchand;Noah Lyles;Sha'Carri Richardson|shacarri richardson;Shelly-Ann Fraser-Pryce;Faith Kipyegon;Sifan Hassan;Rebeca Andrade`,{surname:true});

DS("sports",`
Soccer|association football|futbol #ball team olympic
Basketball #ball team olympic
Baseball #ball team
American football|football|gridiron #ball team
Tennis #ball racket olympic
Golf #ball olympic target
Ice hockey|hockey #team winter
Volleyball #ball team olympic
Swimming #water olympic
Boxing #combat olympic
Cricket #ball team
Rugby #ball team olympic
Track and field|athletics #olympic
Gymnastics #olympic
Cycling #olympic
Skiing #winter
Snowboarding #winter
Wrestling #combat olympic
Badminton #racket olympic
Table tennis|ping pong #racket ball olympic
Lacrosse #ball team
Softball #ball team
Figure skating #winter
Surfing #water olympic
Skateboarding #olympic
Bowling #ball target
Archery #target olympic
Fencing #combat olympic
Judo #combat olympic
Karate #combat
Taekwondo #combat olympic
MMA|mixed martial arts #combat
Rowing #water olympic
Sailing #water olympic
Diving #water olympic
Water polo #water ball team olympic
Handball #ball team olympic
Field hockey #ball team olympic
Equestrian|horse riding #olympic
Horse racing
Formula 1|f1 #motor
NASCAR #motor
Motocross #motor
Rally racing|rally #motor
IndyCar #motor
Darts #target
Snooker #target ball
Pool|billiards #target ball
Curling #winter target team
Bobsled|bobsleigh #winter
Luge #winter
Skeleton #winter
Speed skating #winter
Biathlon #winter target
Ski jumping #winter
Cross-country skiing #winter
Rock climbing|climbing #olympic
Triathlon #olympic
Weightlifting #olympic
Shooting #target olympic
Canoeing|kayaking #water olympic
Polo #ball team
Squash #racket ball
Racquetball #racket ball
Pickleball #racket ball
Padel #racket ball
Dodgeball #ball team
Kickball #ball team
Ultimate frisbee|ultimate #team
Disc golf #target
Croquet #ball target
Bocce #ball target
Cornhole #target
Water skiing #water
Wakeboarding #water
Kitesurfing #water
Windsurfing #water olympic
Paddleboarding #water
Skydiving
Bungee jumping
Hang gliding
Parkour
BMX #olympic
Mountain biking #olympic
Sumo #combat
Kickboxing #combat
Muay Thai #combat
Jiu-jitsu|bjj #combat
Rodeo
Jai alai #ball racket
Sepak takraw #ball team
Hurling #ball team
Gaelic football #ball team
Australian rules football|aussie rules #ball team
Netball #ball team
Kabaddi #team
Bandy #winter team
Breaking|breakdancing #olympic
Modern pentathlon #olympic
Artistic swimming|synchronized swimming #water olympic
Trampoline #olympic
Arm wrestling #combat
Tug of war #team
Cheerleading #team
Snowmobiling #winter motor
Fishing
`);
ALL("sports","sports","Name a sport","");
T("sports","sports","Name a ball sport","","ball");
T("sports","sports","Name a team sport","","team");
T("sports","sports","Name a sport played with a racket or paddle","","racket");
T("sports","sports","Name a Summer Olympic sport","","olympic");
T("sports","sports","Name a winter sport","","winter");
T("sports","sports","Name a water sport","","water");
T("sports","sports","Name a combat sport","","combat");
T("sports","sports","Name a target sport","Aim at something.","target");
T("sports","sports","Name a motorsport","","motor");
L("sportsmore","Name a martial art","",`Karate;Judo;Taekwondo;Kung fu;Jiu-jitsu|brazilian jiu jitsu|bjj;Boxing;Muay Thai;Aikido;Krav Maga;Kickboxing;Wrestling;Capoeira;Tai chi;Kendo;Sumo;Wing Chun;Hapkido;Jeet Kune Do;Sambo;Savate;Silat;Eskrima|arnis|kali;Kyokushin;Shaolin;Ninjutsu;Iaido;Systema;Lethwei;Pankration;Vovinam;Kalaripayattu`);
L("olympics","Name a city that has hosted the Summer Olympics","1896 to 2024.",`London;Paris;Los Angeles|la;Tokyo;Beijing;Rio de Janeiro|rio;Sydney;Atlanta;Athens;Barcelona;Moscow;Seoul;Montreal;Munich;Mexico City;Rome;Berlin;Melbourne;Amsterdam;Helsinki;Stockholm;St. Louis|saint louis;Antwerp`);
L("olympics","Name a city that has hosted the Winter Olympics","Through 2026.",`Lake Placid;Salt Lake City;Calgary;Vancouver;Sochi;PyeongChang;Beijing;Turin|torino;Nagano;Lillehammer;Sapporo;Innsbruck;St. Moritz|saint moritz;Squaw Valley|palisades tahoe;Oslo;Sarajevo;Albertville;Grenoble;Milan|milano;Cortina d'Ampezzo|cortina;Chamonix;Garmisch-Partenkirchen`);
L("positions","Name a position in American football","",`Quarterback;Running back;Wide receiver;Tight end;Linebacker;Center;Cornerback;Safety;Kicker;Offensive tackle|tackle;Guard;Defensive end;Fullback;Punter;Defensive tackle;Nose tackle;Long snapper;Holder;Kick returner|returner;Nickelback;Slot receiver`);
L("positions","Name a baseball position","",`Pitcher;Catcher;Shortstop;First base|first baseman;Second base|second baseman;Third base|third baseman;Center field|center fielder;Left field|left fielder;Right field|right fielder;Designated hitter|dh;Closer;Relief pitcher|reliever`);
L("positions","Name a soccer position","",`Goalkeeper|goalie;Striker;Defender;Midfielder;Forward;Winger;Center back|centre back;Fullback|full back;Left back;Right back;Sweeper|libero;Wing back;Attacking midfielder;Defensive midfielder;False nine`);
L("terms","Name a golf term","",`Birdie;Eagle;Bogey;Par;Hole in one|ace;Albatross;Putt;Drive;Chip;Fairway;Green;Rough;Bunker|sand trap;Tee;Caddie;Handicap;Mulligan;Slice;Hook;Divot;Fore;Wedge;Iron;Driver;Putter;Wood;Double bogey;Condor;Fringe;Dogleg;Hazard;Links;Scramble;Stroke;Pitch;Gimme;Yips;Back nine;Front nine;Shank`);
L("terms","Name a tennis term","",`Ace;Deuce;Love;Advantage;Serve;Volley;Lob;Backhand;Forehand;Drop shot;Smash|overhead;Let;Fault;Double fault;Break point;Match point;Set point;Tiebreak;Rally;Baseline;Slice;Topspin;Grand Slam;Break;Net;Game;Set;Unforced error;Passing shot;Bagel`);
L("terms","Name a baseball term","",`Home run|homer;Strike;Strikeout;Inning;Bunt;Grand slam;Double;Triple;Single;Walk;RBI;Stolen base|steal;Foul ball;Fly ball;Pop fly;Ground ball|grounder;Double play;Triple play;No-hitter;Perfect game;Shutout;Error;Balk;Curveball;Fastball;Slider;Changeup;Knuckleball;Sinker;Bullpen;Dugout;On-deck circle;Batter's box;Mound;Sacrifice fly;Pinch hitter;Walk-off;Seventh-inning stretch;Infield fly rule;Squeeze play;Hit and run`);
L("terms","Name a basketball term","",`Dunk|slam dunk;Layup;Three-pointer|three pointer;Free throw;Rebound;Assist;Block;Steal;Turnover;Foul;Traveling|travel;Double dribble;Alley-oop;Jump shot;Fast break;Pick and roll;Triple-double;Double-double;Air ball;Buzzer beater;Crossover;Fadeaway;Hook shot;Post up;Box out;Technical foul;Shot clock;Flagrant foul;Sixth man;Swish;And-one;Euro step;Bank shot;Jump ball;Inbound;Zone defense;Full-court press;Goaltending`);
L("terms","Name an American football term","",`Touchdown;Field goal;Interception;Fumble;Sack;Safety;First down;Punt;Kickoff;Blitz;Hail Mary;Two-point conversion;Extra point;Onside kick;Holding;Offside;Pass interference;False start;Huddle;Audible;Snap;End zone;Red zone;Scramble;Screen pass;Play action;Shotgun;Pick six;Touchback;Fair catch;Quarterback sneak;Spike;Delay of game;Encroachment;Roughing the passer;Two-minute warning;Pocket;Spiral`);
L("trophies","Name a famous sports trophy or award","",`Stanley Cup;Lombardi Trophy|vince lombardi trophy;Heisman Trophy|heisman;Larry O'Brien Trophy;World Cup trophy|fifa world cup trophy;Ryder Cup;Claret Jug;Green Jacket;Davis Cup;America's Cup;Ballon d'Or|ballon dor;Commissioner's Trophy;FA Cup;Webb Ellis Cup;Grey Cup;Cy Young Award;Conn Smythe Trophy;Hart Trophy;Calcutta Cup;The Ashes|ashes urn;Borg-Warner Trophy;Wanamaker Trophy;Jules Rimet Trophy;Golden Boot;Bledisloe Cup;Solheim Cup;Presidents Cup;Venus Rosewater Dish;Maurice Podoloff Trophy;Bill Russell Trophy`);
L("venues","Name a famous sports stadium or venue","",`Yankee Stadium;Wembley Stadium|wembley;Fenway Park;Wrigley Field;Madison Square Garden|msg;Old Trafford;Camp Nou;Santiago Bernabéu|bernabeu;Anfield;Dodger Stadium;Lambeau Field;Rose Bowl;Maracanã|maracana;Allianz Arena;Soldier Field;AT&T Stadium;MetLife Stadium;Arrowhead Stadium;SoFi Stadium;Mercedes-Benz Stadium;Lord's|lords;Melbourne Cricket Ground|mcg;San Siro;Signal Iduna Park|westfalenstadion;Emirates Stadium;Stamford Bridge;Etihad Stadium;Tottenham Hotspur Stadium;Estadio Azteca|azteca;Hard Rock Stadium;Caesars Superdome|superdome;Crypto.com Arena|staples center;TD Garden;United Center;Oracle Park;Petco Park;Camden Yards;Citi Field;Coors Field;Lucas Oil Stadium;Michigan Stadium|the big house;Ohio Stadium|the horseshoe;Indianapolis Motor Speedway;Daytona International Speedway;Augusta National;St Andrews;Wimbledon|all england club;Roland Garros;Arthur Ashe Stadium|flushing meadows;Croke Park;Murrayfield;Twickenham;Stade de France;Bird's Nest|beijing national stadium;Allegiant Stadium;Lumen Field;Levi's Stadium;Gillette Stadium;Lincoln Financial Field;Rogers Centre;Bell Centre`);
L("f1","Name a Formula 1 team, past or present","",`Ferrari;Mercedes;Red Bull;McLaren;Williams;Aston Martin;Alpine;Haas;Racing Bulls|alphatauri|toro rosso;Sauber|kick sauber|alfa romeo;Audi;Cadillac;Lotus;Renault;Brabham;Tyrrell;Benetton;Jordan;BAR;Brawn GP|brawn;Minardi;Toyota;Honda;Jaguar;Force India;Ligier;Arrows;Manor;Caterham;Marussia`);
