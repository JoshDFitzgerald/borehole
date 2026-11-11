GROUP("music");
const SONGS={
 "The Beatles":"Hey Jude;Let It Be;Yesterday;Come Together;Here Comes the Sun;Help!;Twist and Shout;I Want to Hold Your Hand;All You Need Is Love;Yellow Submarine;Strawberry Fields Forever;Penny Lane;A Hard Day's Night;Eleanor Rigby;Something;Blackbird;In My Life;Get Back;Love Me Do;She Loves You;Lucy in the Sky with Diamonds;Ticket to Ride;Can't Buy Me Love;While My Guitar Gently Weeps;Revolution;Norwegian Wood;Paperback Writer;Day Tripper;Here, There and Everywhere;Octopus's Garden;Sgt. Pepper's Lonely Hearts Club Band;With a Little Help from My Friends;The Long and Winding Road;Hello, Goodbye;I Am the Walrus;Michelle;Drive My Car;Nowhere Man;Helter Skelter;Ob-La-Di, Ob-La-Da;Back in the U.S.S.R.;All My Loving;Eight Days a Week;Across the Universe;A Day in the Life;Golden Slumbers;I Saw Her Standing There",
 "Queen":"Bohemian Rhapsody;We Will Rock You;We Are the Champions;Don't Stop Me Now;Another One Bites the Dust;Under Pressure;Somebody to Love;Radio Ga Ga;Killer Queen;I Want to Break Free;Fat Bottomed Girls;Crazy Little Thing Called Love;The Show Must Go On;Bicycle Race;A Kind of Magic;Who Wants to Live Forever;You're My Best Friend;I Want It All;Flash;Innuendo;Love of My Life;Seven Seas of Rhye;Hammer to Fall;These Are the Days of Our Lives;Tie Your Mother Down;Now I'm Here;Spread Your Wings;Save Me;Princes of the Universe;Too Much Love Will Kill You",
 "Michael Jackson":"Thriller;Billie Jean;Beat It;Smooth Criminal;Man in the Mirror;Black or White;Bad;Don't Stop 'Til You Get Enough;Rock with You;The Way You Make Me Feel;Remember the Time;Heal the World;Earth Song;You Are Not Alone;Wanna Be Startin' Somethin';Human Nature;P.Y.T. (Pretty Young Thing)|pyt;Dirty Diana;Off the Wall;They Don't Care About Us;Scream;Ben;Leave Me Alone;In the Closet;Jam;Dangerous;Speed Demon;Liberian Girl;Will You Be There;You Rock My World;Blood on the Dance Floor;Another Part of Me",
 "Elvis Presley":"Hound Dog;Jailhouse Rock;Love Me Tender;Suspicious Minds;Can't Help Falling in Love;Heartbreak Hotel;Blue Suede Shoes;All Shook Up;Don't Be Cruel;Burning Love;In the Ghetto;Return to Sender;It's Now or Never;Are You Lonesome Tonight?;A Little Less Conversation;Viva Las Vegas;Always on My Mind;Teddy Bear;Blue Christmas;Good Luck Charm;(You're the) Devil in Disguise|devil in disguise;Way Down;Wear My Ring Around Your Neck;Stuck on You;Kentucky Rain;An American Trilogy;That's All Right;Blue Hawaii;Guitar Man;Crying in the Chapel;Moody Blue",
 "ABBA":"Dancing Queen;Mamma Mia;Waterloo;Fernando;Take a Chance on Me;The Winner Takes It All;Gimme! Gimme! Gimme! (A Man After Midnight)|gimme gimme gimme;Super Trouper;Money, Money, Money;Chiquitita;SOS;Knowing Me, Knowing You;Voulez-Vous;I Have a Dream;Thank You for the Music;Does Your Mother Know;Lay All Your Love on Me;The Name of the Game;Honey, Honey;Ring Ring;One of Us;Summer Night City;Angeleyes;Head over Heels;I Do, I Do, I Do, I Do, I Do;Under Attack;When All Is Said and Done;Eagle;Hasta Mañana;Slipping Through My Fingers;Our Last Summer",
 "Madonna":"Like a Virgin;Like a Prayer;Material Girl;Vogue;Holiday;Papa Don't Preach;La Isla Bonita;Express Yourself;Into the Groove;Hung Up;Music;Frozen;Ray of Light;Open Your Heart;Lucky Star;Borderline;Crazy for You;Cherish;Justify My Love;Take a Bow;4 Minutes;Don't Cry for Me Argentina;Live to Tell;Beautiful Stranger;Who's That Girl;True Blue;Erotica;Secret;Dress You Up;Causing a Commotion;Celebration;Give It 2 Me",
 "Taylor Swift":"Shake It Off;Love Story;Blank Space;You Belong with Me;Anti-Hero;Cruel Summer;We Are Never Ever Getting Back Together;Bad Blood;Look What You Made Me Do;Style;All Too Well;Cardigan;Willow;Lover;ME!;Delicate;I Knew You Were Trouble;22;Fearless;Mine;Our Song;Teardrops on My Guitar;Wildest Dreams;Out of the Woods;Enchanted;Mean;Back to December;Fortnight;Karma;Lavender Haze;Bejeweled;Exile;August;Betty;Champagne Problems;Gorgeous;The Man;Paper Rings;Getaway Car;Red;Begin Again;Sparks Fly;White Horse;Tim McGraw;Picture to Burn;The Fate of Ophelia",
 "Beyoncé":"Crazy in Love;Single Ladies (Put a Ring on It)|single ladies;Halo;Irreplaceable;Formation;Drunk in Love;Run the World (Girls)|run the world;If I Were a Boy;Love On Top;Sorry;Hold Up;Déjà Vu|deja vu;Baby Boy;Naughty Girl;Partition;XO;Beautiful Liar;Sweet Dreams;Diva;Countdown;Best Thing I Never Had;Break My Soul;Cuff It;Texas Hold 'Em;Freedom;Love Drought;Daddy Lessons;7/11;Flawless;Listen;Ring the Alarm;Me, Myself and I;Video Phone;16 Carriages;Alien Superstar",
 "Elton John":"Tiny Dancer;Rocket Man;Your Song;Candle in the Wind;Bennie and the Jets;I'm Still Standing;Crocodile Rock;Don't Go Breaking My Heart;Can You Feel the Love Tonight;Circle of Life;Goodbye Yellow Brick Road;Sacrifice;Saturday Night's Alright for Fighting;Daniel;Philadelphia Freedom;Don't Let the Sun Go Down on Me;Levon;Mona Lisas and Mad Hatters;Someone Saved My Life Tonight;I Guess That's Why They Call It the Blues;Nikita;Sad Songs (Say So Much);Blue Eyes;Island Girl;Honky Cat;Cold Heart;The Bitch Is Back;Funeral for a Friend;Little Jeannie;Believe;Something About the Way You Look Tonight",
 "The Rolling Stones":"(I Can't Get No) Satisfaction|satisfaction;Paint It Black;Sympathy for the Devil;Gimme Shelter;Start Me Up;Jumpin' Jack Flash;Brown Sugar;Angie;You Can't Always Get What You Want;Wild Horses;Honky Tonk Women;Ruby Tuesday;Beast of Burden;Miss You;Under My Thumb;Get Off of My Cloud;Tumbling Dice;Let's Spend the Night Together;19th Nervous Breakdown;Mother's Little Helper;Emotional Rescue;Waiting on a Friend;Harlem Shuffle;Mixed Emotions;As Tears Go By;Lady Jane;Street Fighting Man;Dead Flowers;Happy;Doom and Gloom;Rocks Off;Shattered",
 "Led Zeppelin":"Stairway to Heaven;Whole Lotta Love;Kashmir;Immigrant Song;Black Dog;Rock and Roll;Ramble On;Good Times Bad Times;Dazed and Confused;When the Levee Breaks;Going to California;Over the Hills and Far Away;Babe I'm Gonna Leave You;Heartbreaker;Since I've Been Loving You;The Ocean;D'yer Mak'er;Fool in the Rain;All My Love;Misty Mountain Hop;Communication Breakdown;Houses of the Holy;Trampled Under Foot;The Rain Song;Achilles Last Stand;In My Time of Dying;Thank You;Tangerine;Gallows Pole;The Battle of Evermore;No Quarter",
 "Nirvana":"Smells Like Teen Spirit;Come as You Are;Lithium;Heart-Shaped Box;In Bloom;All Apologies;Polly;Breed;Dumb;About a Girl;The Man Who Sold the World;Where Did You Sleep Last Night;Something in the Way;Drain You;Lounge Act;On a Plain;Stay Away;Aneurysm;Sliver;You Know You're Right;Pennyroyal Tea;Serve the Servants;Scentless Apprentice;Dive;Molly's Lips;Been a Son;Love Buzz;Negative Creep;School",
 "Prince":"Purple Rain;When Doves Cry;Kiss;1999;Little Red Corvette;Raspberry Beret;Let's Go Crazy;I Wanna Be Your Lover;Cream;Diamonds and Pearls;The Most Beautiful Girl in the World;Sign o' the Times;Alphabet St.;U Got the Look;Batdance;Controversy;Delirious;I Would Die 4 U;Pop Life;Gett Off;Nothing Compares 2 U;7;Thieves in the Temple;Erotic City;Darling Nikki;Take Me with U;Mountains;If I Was Your Girlfriend;Adore",
 "Bob Dylan":"Like a Rolling Stone;Blowin' in the Wind;The Times They Are a-Changin';Knockin' on Heaven's Door;Mr. Tambourine Man;All Along the Watchtower;Tangled Up in Blue;Subterranean Homesick Blues;Don't Think Twice, It's All Right;Lay Lady Lay;Hurricane;Make You Feel My Love;Just Like a Woman;Rainy Day Women #12 & 35;Positively 4th Street;It Ain't Me Babe;A Hard Rain's a-Gonna Fall;Shelter from the Storm;Forever Young;Visions of Johanna;Desolation Row;Maggie's Farm;Masters of War;Gotta Serve Somebody;Simple Twist of Fate;I Shall Be Released;Highway 61 Revisited;Ballad of a Thin Man;Things Have Changed;Murder Most Foul",
 "Bruce Springsteen":"Born in the U.S.A.|born in the usa;Born to Run;Dancing in the Dark;Thunder Road;Glory Days;Hungry Heart;I'm on Fire;The River;Streets of Philadelphia;Badlands;Atlantic City;Jungleland;Rosalita;Brilliant Disguise;Tenth Avenue Freeze-Out;My Hometown;Cover Me;Secret Garden;Human Touch;The Rising;Racing in the Street;Darkness on the Edge of Town;Tougher Than the Rest;Pink Cadillac;Blinded by the Light;Spirit in the Night;4th of July, Asbury Park (Sandy)|sandy;Wrecking Ball;Land of Hope and Dreams",
 "Bon Jovi":"Livin' on a Prayer;You Give Love a Bad Name;It's My Life;Wanted Dead or Alive;Bad Medicine;Always;Bed of Roses;Runaway;Have a Nice Day;Who Says You Can't Go Home;Blaze of Glory;Keep the Faith;Lay Your Hands on Me;I'll Be There for You;Born to Be My Baby;Never Say Goodbye;This Ain't a Love Song;Thank You for Loving Me;Everyday;Dry County;In These Arms;Someday I'll Be Saturday Night;Misunderstood;We Weren't Born to Follow;Living in Sin",
 "Whitney Houston":"I Will Always Love You;I Wanna Dance with Somebody;Greatest Love of All;How Will I Know;I'm Every Woman;Saving All My Love for You;Didn't We Almost Have It All;I Have Nothing;Run to You;My Love Is Your Love;It's Not Right but It's Okay;So Emotional;Where Do Broken Hearts Go;One Moment in Time;Exhale (Shoop Shoop);I'm Your Baby Tonight;All the Man That I Need;Queen of the Night;Heartbreak Hotel;When You Believe;Step by Step;I Believe in You and Me;You Give Good Love;Million Dollar Bill;I Look to You",
 "Drake":"Hotline Bling;God's Plan;One Dance;In My Feelings;Started from the Bottom;Hold On, We're Going Home;Passionfruit;Nice for What;Take Care;Headlines;Best I Ever Had;Find Your Love;Marvins Room;Over;Forever;Successful;The Motto;Worst Behavior;Jumpman;Controlla;Toosie Slide;Laugh Now Cry Later;Way 2 Sexy;Rich Flex;Jimmy Cooks;Massive;Fake Love;Nonstop;Life Is Good;Money in the Grave;First Person Shooter;Family Matters;Search & Rescue;Nokia",
 "Rihanna":"Umbrella;Diamonds;We Found Love;Only Girl (In the World)|only girl;Work;Rude Boy;Disturbia;Don't Stop the Music;SOS;Pon de Replay;Shut Up and Drive;Take a Bow;What's My Name?;S&M;Where Have You Been;Stay;Bitch Better Have My Money;Needed Me;Love on the Brain;Unfaithful;Hate That I Love You;Russian Roulette;Te Amo;Man Down;Cheers (Drink to That);Lift Me Up;Kiss It Better;FourFiveSeconds;California King Bed",
 "Adele":"Hello;Rolling in the Deep;Someone Like You;Set Fire to the Rain;Skyfall;Easy on Me;When We Were Young;Chasing Pavements;Make You Feel My Love;Send My Love (To Your New Lover);Rumour Has It;Water Under the Bridge;Turning Tables;Hometown Glory;Love in the Dark;All I Ask;Oh My God;Daydreamer;Million Years Ago;I Drink Wine;Don't You Remember;One and Only;Lovesong;Remedy;River Lea;Hold On;To Be Loved",
 "Ed Sheeran":"Shape of You;Perfect;Thinking Out Loud;Photograph;The A Team;Castle on the Hill;Bad Habits;Shivers;Galway Girl;Sing;Lego House;Don't;I See Fire;Happier;Give Me Love;Afterglow;Eyes Closed;Supermarket Flowers;Dive;Tenerife Sea;I Don't Care;Beautiful People;South of the Border;Overpass Graffiti;Azizam;Sapphire;Drunk;You Need Me, I Don't Need You;Kiss Me;Celestial;Small Bump;Bloodstream",
 "Eminem":"Lose Yourself;The Real Slim Shady;Without Me;Stan;Mockingbird;Not Afraid;Love the Way You Lie;Rap God;My Name Is;Cleanin' Out My Closet;Sing for the Moment;When I'm Gone;Like Toy Soldiers;The Way I Am;Superman;Just Lose It;Beautiful;The Monster;Berzerk;River;Godzilla;Houdini;Venom;Killshot;Shake That;We Made You;Crack a Bottle;'Till I Collapse;Guilty Conscience",
 "Frank Sinatra":"My Way;New York, New York|theme from new york new york;Fly Me to the Moon;Strangers in the Night;That's Life;The Way You Look Tonight;I've Got You Under My Skin;Come Fly with Me;Something Stupid;It Was a Very Good Year;Summer Wind;Luck Be a Lady;The Best Is Yet to Come;Witchcraft;All the Way;Young at Heart;Night and Day;Love and Marriage;I Get a Kick Out of You;The Lady Is a Tramp;High Hopes;Chicago;Cycles;You Make Me Feel So Young;In the Wee Small Hours of the Morning;Learnin' the Blues;Pennies from Heaven;One for My Baby;Nice 'n' Easy;My Kind of Town",
 "Johnny Cash":"Ring of Fire;Folsom Prison Blues;I Walk the Line;A Boy Named Sue;Hurt;Man in Black;Jackson;Get Rhythm;Cry! Cry! Cry!;One Piece at a Time;Sunday Mornin' Comin' Down;Ghost Riders in the Sky;I've Been Everywhere;The Man Comes Around;Big River;Hey Porter;Don't Take Your Guns to Town;Five Feet High and Rising;Daddy Sang Bass;Personal Jesus;San Quentin;Understand Your Man;Ragged Old Flag;Flesh and Blood;Orange Blossom Special;Pickin' Time;Tennessee Flat Top Box;Guess Things Happen That Way",
 "Fleetwood Mac":"Dreams;Go Your Own Way;Landslide;Rhiannon;Don't Stop;The Chain;Everywhere;Little Lies;Gypsy;Sara;Tusk;Say You Love Me;You Make Loving Fun;Never Going Back Again;Seven Wonders;Hold Me;Big Love;Songbird;Albatross;Black Magic Woman;Oh Well;Silver Springs;Second Hand News;Over My Head;Monday Morning;Man of the World;Need Your Love So Bad;Family Man",
 "Billy Joel":"Piano Man;Uptown Girl;We Didn't Start the Fire;Just the Way You Are;Only the Good Die Young;My Life;Scenes from an Italian Restaurant;She's Always a Woman;Vienna;It's Still Rock and Roll to Me;Movin' Out (Anthony's Song)|movin out;Big Shot;Allentown;The River of Dreams;Tell Her About It;New York State of Mind;Honesty;You May Be Right;Pressure;The Longest Time;Keeping the Faith;An Innocent Man;Captain Jack;The Stranger;Goodnight Saigon;A Matter of Trust;Lullabye (Goodnight, My Angel)|lullabye;Say Goodbye to Hollywood;Summer, Highland Falls;Leningrad",
 "Stevie Wonder":"Superstition;Sir Duke;Isn't She Lovely;I Just Called to Say I Love You;Signed, Sealed, Delivered I'm Yours;You Are the Sunshine of My Life;Higher Ground;Living for the City;Part-Time Lover;My Cherie Amour;I Wish;Uptight (Everything's Alright)|uptight;For Once in My Life;Master Blaster (Jammin');Overjoyed;Lately;Ribbon in the Sky;Boogie On Reggae Woman;Fingertips;Don't You Worry 'Bout a Thing;As;Happy Birthday;Do I Do;I Was Made to Love Her;That Girl;Yester-Me, Yester-You, Yesterday;Golden Lady;Knocks Me Off My Feet;Send One Your Love",
 "Bob Marley":"One Love;No Woman, No Cry;Three Little Birds;Redemption Song;Is This Love;Buffalo Soldier;Get Up, Stand Up;Could You Be Loved;Jamming;Stir It Up;I Shot the Sheriff;Exodus;Waiting in Vain;Natural Mystic;Iron Lion Zion;Sun Is Shining;Lively Up Yourself;Satisfy My Soul;Punky Reggae Party;War;Concrete Jungle;Trenchtown Rock;Small Axe;Duppy Conqueror;Soul Rebel;Coming in from the Cold;Zimbabwe;Turn Your Lights Down Low;Positive Vibration;Kaya"
};
Object.keys(SONGS).forEach(a=>L("songs",`Name a song by ${a}`,"Song titles. Small wording differences are fine.",SONGS[a]));

DS("instruments",`
Guitar #string
Piano #key orch
Drums #perc
Violin #string orch
Trumpet #brass orch
Flute #wood orch
Saxophone|sax #wood
Cello #string orch
Bass guitar|bass #string
Clarinet #wood orch
Harp #string orch
Trombone #brass orch
Ukulele #string
Harmonica #wood
Banjo #string
Accordion #key
Tuba #brass orch
Viola #string orch
Double bass|upright bass|contrabass #string orch
French horn|horn #brass orch
Oboe #wood orch
Bassoon #wood orch
Xylophone #perc orch
Tambourine #perc
Triangle #perc orch
Cymbals #perc orch
Organ #key
Synthesizer|keyboard|synth #key
Mandolin #string
Bagpipes #wood
Recorder #wood
Piccolo #wood orch
Timpani|kettledrum #perc orch
Glockenspiel #perc orch
Harpsichord #key
Sitar #string
Bongos #perc
Congas #perc
Maracas #perc
Castanets #perc
Cowbell #perc
Marimba #perc
Vibraphone #perc
Snare drum #perc orch
Bass drum #perc orch
Gong|tam tam #perc orch
Steel drum|steelpan #perc
Djembe #perc
Didgeridoo
Kazoo
Ocarina #wood
Pan flute|panpipes #wood
Lute #string
Lyre #string
Zither #string
Dulcimer #string
Celesta #key orch
English horn|cor anglais #wood orch
Bass clarinet #wood orch
Contrabassoon #wood orch
Cornet #brass
Flugelhorn #brass
Euphonium #brass
Sousaphone #brass
Bugle #brass
Mellophone #brass
Baritone horn #brass
Tubular bells|chimes #perc orch
Cajón|cajon #perc
Tabla #perc
Taiko #perc
Washboard #perc
Theremin
Melodica #key
Clavichord #key
Pipe organ #key
Shamisen #string
Koto #string
Erhu #string
Balalaika #string
Bouzouki #string
Oud #string
Kalimba|thumb piano #perc
Hurdy-gurdy #string
Bodhrán|bodhran #perc
Tin whistle|penny whistle #wood
Fife #wood
Shakuhachi #wood
Duduk #wood
Pedal steel guitar #string
Handpan|hang drum #perc
Keytar #key
`);
ALL("instruments","instruments","Name a musical instrument","");
T("instruments","instruments","Name a stringed instrument","","string");
T("instruments","instruments","Name a woodwind instrument","Including reeds and flutes.","wood");
T("instruments","instruments","Name a brass instrument","","brass");
T("instruments","instruments","Name a percussion instrument","","perc");
T("instruments","instruments","Name a keyboard instrument","","key");
T("instruments","instruments","Name an instrument in a symphony orchestra","","orch");
L("genres","Name a music genre","",`Rock;Pop;Jazz;Hip hop|rap;Country;Classical;Blues;R&B|rhythm and blues;Reggae;Electronic|edm;Heavy metal|metal;Punk;Folk;Soul;Funk;Disco;Gospel;Techno;House;Indie;Alternative;Grunge;K-pop;Reggaeton;Salsa;Opera;Swing;Bluegrass;Ska;Trance;Dubstep;Drum and bass;Ambient;Emo;Hard rock;Soft rock;New wave;Synth-pop;Trap;Lo-fi;Motown;Doo-wop;Rockabilly;Latin;Bossa nova;Samba;Flamenco;Tango;Zydeco;Afrobeats|afrobeat;Dancehall;Grime;Drill;UK garage|garage;Death metal;Black metal;Thrash metal;Progressive rock|prog rock;Psychedelic rock;Shoegaze;Post-punk;Britpop;J-pop;Polka;Mariachi;Calypso;Klezmer;Americana;Celtic;A cappella;Gregorian chant;New age;Industrial;Hyperpop;Bachata;Cumbia;Merengue;Highlife`);
DS("composers",`
Wolfgang Amadeus Mozart|mozart #classical
Ludwig van Beethoven|beethoven #classical romantic
Johann Sebastian Bach|bach #baroque
Frédéric Chopin|chopin #romantic
Pyotr Ilyich Tchaikovsky|tchaikovsky #romantic
Antonio Vivaldi|vivaldi #baroque
George Frideric Handel|handel #baroque
Johannes Brahms|brahms #romantic
Joseph Haydn|haydn #classical
Richard Wagner|wagner #romantic
Claude Debussy|debussy #modern
Franz Schubert|schubert #romantic
Giuseppe Verdi|verdi #romantic
Franz Liszt|liszt #romantic
Giacomo Puccini|puccini #romantic
Igor Stravinsky|stravinsky #modern
Felix Mendelssohn #romantic
Sergei Rachmaninoff|rachmaninoff|rachmaninov #romantic modern
Johann Strauss II|johann strauss #romantic
Richard Strauss #modern
Antonín Dvořák|dvorak #romantic
Edvard Grieg|grieg #romantic
Gustav Mahler|mahler #romantic
Maurice Ravel|ravel #modern
Robert Schumann #romantic
Gioachino Rossini|rossini #romantic
George Gershwin|gershwin #modern
Leonard Bernstein|bernstein #modern
Aaron Copland|copland #modern
Gustav Holst|holst #modern
Edward Elgar|elgar #romantic
Sergei Prokofiev|prokofiev #modern
Dmitri Shostakovich|shostakovich #modern
Jean Sibelius|sibelius #romantic modern
Erik Satie|satie #modern
Camille Saint-Saëns|saint saens #romantic
Georges Bizet|bizet #romantic
Modest Mussorgsky|mussorgsky #romantic
Nikolai Rimsky-Korsakov|rimsky korsakov #romantic
Henry Purcell|purcell #baroque
Georg Philipp Telemann|telemann #baroque
Claudio Monteverdi|monteverdi #baroque
Domenico Scarlatti|scarlatti #baroque
Johann Pachelbel|pachelbel #baroque
Arcangelo Corelli|corelli #baroque
Jean-Philippe Rameau|rameau #baroque
Christoph Willibald Gluck|gluck #classical
Antonio Salieri|salieri #classical
Luigi Boccherini|boccherini #classical
Muzio Clementi|clementi #classical
Niccolò Paganini|paganini #romantic
Hector Berlioz|berlioz #romantic
Jacques Offenbach|offenbach #romantic
Charles Gounod|gounod #romantic
Gabriel Fauré|faure #romantic
Bedřich Smetana|smetana #romantic
Anton Bruckner|bruckner #romantic
Alexander Borodin|borodin #romantic
Clara Schumann #romantic
Fanny Mendelssohn #romantic
Philip Glass #modern
John Williams #modern
Hans Zimmer #modern
Ennio Morricone|morricone #modern
John Cage #modern
Steve Reich #modern
Arvo Pärt|arvo part #modern
Arnold Schoenberg|schoenberg #modern
Samuel Barber #modern
Béla Bartók|bartok #modern
Benjamin Britten|britten #modern
Ralph Vaughan Williams|vaughan williams #modern
Carl Orff|orff #modern
Francis Poulenc|poulenc #modern
György Ligeti|ligeti #modern
Olivier Messiaen|messiaen #modern
Charles Ives #modern
Scott Joplin #modern
Hildegard of Bingen
`);
ALL("composers","composers","Name a classical composer","Surnames are fine.");
T("composers","composers","Name a Baroque composer","Roughly 1600 to 1750.","baroque");
T("composers","composers","Name a composer from the Classical era","Roughly 1750 to 1820.","classical");
T("composers","composers","Name a Romantic-era composer","Roughly 1820 to 1910.","romantic");
T("composers","composers","Name a composer of the 20th or 21st century","Including film composers.","modern");
L("stage","Name an opera or operetta","",`The Magic Flute;Carmen;La Traviata;The Marriage of Figaro;Madama Butterfly|madame butterfly;La Bohème|la boheme;Tosca;Aida;Rigoletto;Don Giovanni;The Barber of Seville;Turandot;Otello;Nabucco;Fidelio;Tristan und Isolde;The Ring Cycle|der ring des nibelungen|ring cycle;Die Walküre|die walkure;Lohengrin;Parsifal;Eugene Onegin;Porgy and Bess;Pagliacci;Cavalleria Rusticana;Salome;Der Rosenkavalier;Dido and Aeneas;L'Orfeo|orfeo;Così fan tutte|cosi fan tutte;Lucia di Lammermoor;L'elisir d'amore;Norma;Faust;Samson and Delilah;The Pearl Fishers;Hansel and Gretel;Boris Godunov;Peter Grimes;Wozzeck;Nixon in China;Einstein on the Beach;The Mikado;H.M.S. Pinafore;The Pirates of Penzance;Die Fledermaus;Orpheus in the Underworld`);
L("stage","Name a Broadway or West End musical","",`Hamilton;The Phantom of the Opera|phantom;Les Misérables|les mis|les miserables;Wicked;The Lion King;Chicago;Cats;Rent;Grease;The Sound of Music;West Side Story;Mamma Mia!;Annie;Hairspray;Dear Evan Hansen;The Book of Mormon;Fiddler on the Roof;Oklahoma!;My Fair Lady;Jersey Boys;Mary Poppins;Beauty and the Beast;Aladdin;Frozen;Hadestown;Into the Woods;Sweeney Todd;A Chorus Line;Cabaret;Evita;Jesus Christ Superstar;Joseph and the Amazing Technicolor Dreamcoat;Miss Saigon;Kinky Boots;Matilda;Mean Girls;Six;Come From Away;Waitress;Moulin Rouge!;Little Shop of Horrors;The Music Man;Guys and Dolls;Hello, Dolly!;South Pacific;The King and I;Carousel;Spamalot;The Producers;Avenue Q;In the Heights;Spring Awakening;Next to Normal;Company;Funny Girl;Godspell;Hair;Pippin;Anything Goes;42nd Street;Annie Get Your Gun;Kiss Me, Kate;Shrek the Musical;School of Rock;Beetlejuice;The Wiz;Dreamgirls;Once;Fun Home;The Outsiders;Hell's Kitchen;Maybe Happy Ending;MJ the Musical;& Juliet;Starlight Express;Sunset Boulevard;Blood Brothers;Billy Elliot;Footloose;Legally Blonde;Heathers;Rock of Ages;The Rocky Horror Show`);
L("acts","Name a boy band","",`Backstreet Boys;NSYNC|nsync|*nsync;One Direction;New Kids on the Block;BTS;Jonas Brothers;Boyz II Men;The Jackson 5|jackson five;Take That;Westlife;Boyzone;98 Degrees;Big Time Rush;The Wanted;5 Seconds of Summer|5sos;New Edition;Menudo;Hanson;O-Town;Why Don't We;EXO;Stray Kids;Seventeen;BIGBANG;Super Junior;Blue;East 17;Five;B2K;112;Color Me Badd;LFO;Busted;McFly;JLS;Bay City Rollers;The Osmonds;NCT;TXT;ENHYPEN;CNCO;The Vamps`);
L("acts","Name a girl group","",`Spice Girls;Destiny's Child;TLC;The Supremes;Little Mix;Fifth Harmony;Pussycat Dolls;BLACKPINK;The Ronettes;En Vogue;Salt-N-Pepa;The Pointer Sisters;Bananarama;All Saints;Sugababes;Girls Aloud;The Bangles;The Go-Go's;Wilson Phillips;SWV;Xscape;Danity Kane;3LW;Dream;The Shirelles;The Andrews Sisters;Martha and the Vandellas;The Chordettes;The Shangri-Las;Atomic Kitten;TWICE;Girls' Generation;Red Velvet;ITZY;NewJeans;aespa;LE SSERAFIM;(G)I-DLE|gidle;Wonder Girls;KATSEYE;Haim;The Runaways;Sister Sledge;The Three Degrees;Eternal;B*Witched;Mis-Teeq;The Saturdays;The Chicks|dixie chicks`);
L("acts","Name a rapper","",`Eminem;Jay-Z;Kanye West|ye|kanye;Drake;Kendrick Lamar;Snoop Dogg;Tupac|2pac;The Notorious B.I.G.|biggie|biggie smalls;Lil Wayne;Nicki Minaj;50 Cent;Dr. Dre;Ice Cube;Nas;Travis Scott;Cardi B;J. Cole;Post Malone;Lil Nas X;Missy Elliott;Megan Thee Stallion;Pitbull;Ludacris;Nelly;LL Cool J;Busta Rhymes;Ice-T;Lil Jon;T.I.;Future;Lil Baby;Doja Cat;Tyler, the Creator;A$AP Rocky|asap rocky;Childish Gambino;Chance the Rapper;Mac Miller;Logic;Juice WRLD;XXXTentacion;Lil Uzi Vert;21 Savage;Young Thug;Gucci Mane;Rick Ross;Wiz Khalifa;Big Sean;Macklemore;Queen Latifah;Lauryn Hill;MC Hammer;Vanilla Ice;André 3000|andre 3000;Method Man;DMX;Eazy-E;Flavor Flav;Coolio;Yasiin Bey|mos def;Common;Lil' Kim;Eve;Latto;GloRilla;Ice Spice;Polo G;Roddy Ricch;Lil Durk;Pusha T;Jack Harlow;Doechii;Playboi Carti;Kid Cudi;Stormzy;Dave;Skepta`);
L("acts","Name a country music singer or band","",`Dolly Parton;Johnny Cash;Garth Brooks;Willie Nelson;Shania Twain;Carrie Underwood;Luke Bryan;Blake Shelton;Tim McGraw;Faith Hill;Kenny Chesney;Reba McEntire|reba;George Strait;Keith Urban;Luke Combs;Morgan Wallen;Chris Stapleton;Miranda Lambert;Alan Jackson;Brad Paisley;Kenny Rogers;Loretta Lynn;Patsy Cline;Hank Williams;Merle Haggard;Waylon Jennings;Toby Keith;Zac Brown Band|zac brown;Jason Aldean;Kacey Musgraves;Lainey Wilson;Zach Bryan;Florida Georgia Line;Lady A;Rascal Flatts;The Chicks|dixie chicks;Thomas Rhett;Sam Hunt;Kane Brown;Cody Johnson;Jelly Roll;Brooks & Dunn;Martina McBride;Trisha Yearwood;Wynonna Judd;The Judds;Glen Campbell;John Denver;Charley Pride;Randy Travis;Dwight Yoakam;Vince Gill;Alison Krauss;LeAnn Rimes;Kelsea Ballerini;Maren Morris;Darius Rucker;Eric Church;Dierks Bentley;Little Big Town;Sugarland;Old Dominion;Billy Ray Cyrus;Clint Black;Travis Tritt;Conway Twitty;Tammy Wynette;George Jones;Emmylou Harris;Tanya Tucker;Megan Moroney;Ella Langley;Riley Green;Bailey Zimmerman`);
L("acts","Name a rock band","",`The Beatles;Queen;Led Zeppelin;The Rolling Stones;Pink Floyd;AC/DC|acdc;Nirvana;U2;Guns N' Roses;Metallica;The Who;Aerosmith;Red Hot Chili Peppers;Foo Fighters;Fleetwood Mac;Eagles;The Doors;Coldplay;Green Day;Bon Jovi;Kiss;Van Halen;Journey;Linkin Park;Pearl Jam;Radiohead;The Beach Boys;Def Leppard;Lynyrd Skynyrd;Oasis;The Clash;Ramones;Black Sabbath;Deep Purple;The Kinks;Creedence Clearwater Revival|ccr;Boston;Foreigner;Rush;Kansas;Styx;Heart;Blondie;Talking Heads;R.E.M.|rem;The Police;Dire Straits;The Cure;Arctic Monkeys;The Killers;Muse;Imagine Dragons;Maroon 5;Weezer;Blink-182;Fall Out Boy;Paramore;My Chemical Romance;The Strokes;The White Stripes;Kings of Leon;Soundgarden;Alice in Chains;Stone Temple Pilots;The Smashing Pumpkins;Rage Against the Machine;System of a Down;Evanescence;Nickelback;Creed;3 Doors Down;Matchbox Twenty;Goo Goo Dolls;Third Eye Blind;The Black Keys;Cream;Grateful Dead;Jefferson Airplane;ZZ Top;The Allman Brothers Band;Toto;Chicago;Genesis;Yes;Jethro Tull;The Velvet Underground;Sex Pistols;Joy Division;Duran Duran;INXS;Tears for Fears;The Smiths;Pixies;Sonic Youth;Måneskin|maneskin;Greta Van Fleet;Tame Impala;Nine Inch Nails;Hootie & the Blowfish;Dave Matthews Band;Phish`);
L("acts","Name a heavy metal band","",`Metallica;Black Sabbath;Iron Maiden;Slayer;Megadeth;Judas Priest;Motörhead|motorhead;Pantera;Slipknot;Anthrax;Def Leppard;Mötley Crüe|motley crue;Dio;Korn;Tool;System of a Down;Avenged Sevenfold;Disturbed;Rammstein;Dream Theater;Lamb of God;Mastodon;Gojira;Ghost;Sepultura;Opeth;Death;Cannibal Corpse;Testament;Exodus;Venom;Mercyful Fate;Manowar;Twisted Sister;Quiet Riot;Ratt;Poison;Skid Row;Whitesnake;Scorpions;Accept;Helloween;Nightwish;Sabaton;Bring Me the Horizon;Deftones;Machine Head;Trivium;Killswitch Engage;Bullet for My Valentine;Five Finger Death Punch;Lordi;Babymetal`);
L("acts","Name a female pop star","Solo artists.",`Madonna;Beyoncé|beyonce;Taylor Swift;Lady Gaga;Rihanna;Britney Spears;Mariah Carey;Whitney Houston;Adele;Katy Perry;Ariana Grande;Celine Dion;Jennifer Lopez|jlo;Christina Aguilera;Billie Eilish;Dua Lipa;Selena Gomez;Miley Cyrus;Shakira;Kylie Minogue;Cher;Janet Jackson;Pink|p!nk;Kelly Clarkson;Olivia Rodrigo;Sabrina Carpenter;Demi Lovato;Gwen Stefani;Avril Lavigne;Sia;Lorde;Alicia Keys;Doja Cat;Lizzo;Camila Cabello;Halsey;Ellie Goulding;Jessie J;Meghan Trainor;Paula Abdul;Cyndi Lauper;Tina Turner;Diana Ross;Gloria Estefan;Donna Summer;Chappell Roan;Charli XCX;SZA;Tate McRae;Nelly Furtado;Fergie;Kesha|ke$ha;Carly Rae Jepsen;Natasha Bedingfield;Hilary Duff;Mandy Moore;Jessica Simpson;Toni Braxton;Annie Lennox;Robyn;Björk|bjork;Raye;Gracie Abrams;Addison Rae;Rosé|rose`);
L("acts","Name a singer famous by just one name","",`Madonna;Prince;Beyoncé|beyonce;Rihanna;Adele;Cher;Shakira;Drake;Eminem;Usher;Sting;Bono;Seal;Enya;Sade;Björk|bjork;Lorde;Sia;Pink|p!nk;Lizzo;Dido;Moby;Shaggy;Nelly;Akon;Ne-Yo|neyo;Pitbull;Ciara;Brandy;Monica;Aaliyah;Ashanti;Kesha;Halsey;Zayn;Yanni;Liberace;Selena;Donovan;Morrissey;Raye;Rosalía|rosalia;Doechii;SZA;Duffy;Jewel;Lulu;Fergie;Charo`);
L("acts","Name a Motown artist","",`Stevie Wonder;Marvin Gaye;Diana Ross;The Supremes;The Temptations;Smokey Robinson;The Miracles;The Jackson 5|jackson five;Michael Jackson;Lionel Richie;The Commodores;Four Tops;Martha and the Vandellas;Gladys Knight & the Pips|gladys knight;The Marvelettes;Mary Wells;Rick James;Boyz II Men;Tammi Terrell;The Isley Brothers;Jr. Walker & the All Stars;The Contours;Edwin Starr;The Spinners;Teena Marie;DeBarge;Rare Earth;Kim Weston;Jimmy Ruffin;David Ruffin;Eddie Kendricks`);
L("acts","Name a jazz musician","",`Louis Armstrong;Miles Davis;Duke Ellington;John Coltrane;Ella Fitzgerald;Billie Holiday;Charlie Parker;Dizzy Gillespie;Thelonious Monk;Count Basie;Benny Goodman;Nina Simone;Herbie Hancock;Dave Brubeck;Chet Baker;Sarah Vaughan;Charles Mingus;Art Blakey;Stan Getz;Sonny Rollins;Wynton Marsalis;Bill Evans;Oscar Peterson;Glenn Miller;Cab Calloway;Fats Waller;Jelly Roll Morton;Django Reinhardt;Ornette Coleman;Cannonball Adderley;Lester Young;Coleman Hawkins;Art Tatum;Chick Corea;Pat Metheny;Kenny G;Diana Krall;Norah Jones;Harry Connick Jr.;Esperanza Spalding;Kamasi Washington;Nat King Cole;Tony Bennett;Sidney Bechet;Max Roach;Buddy Rich;Gene Krupa;Wes Montgomery;Lionel Hampton;Dexter Gordon`,{surname:true});
L("holidaysongs","Name a Christmas song or carol","",`Jingle Bells;Silent Night;White Christmas;Rudolph the Red-Nosed Reindeer;All I Want for Christmas Is You;Last Christmas;Feliz Navidad;Deck the Halls;Joy to the World;O Holy Night;Frosty the Snowman;Let It Snow! Let It Snow! Let It Snow!|let it snow;Santa Claus Is Comin' to Town;Jingle Bell Rock;Rockin' Around the Christmas Tree;Have Yourself a Merry Little Christmas;The Christmas Song|chestnuts roasting on an open fire;We Wish You a Merry Christmas;The Little Drummer Boy|little drummer boy;Away in a Manger;O Come, All Ye Faithful;Hark! The Herald Angels Sing;The Twelve Days of Christmas;Winter Wonderland;It's the Most Wonderful Time of the Year;Sleigh Ride;Blue Christmas;A Holly Jolly Christmas;It's Beginning to Look a Lot Like Christmas;Silver Bells;Baby, It's Cold Outside;Do They Know It's Christmas?;Happy Xmas (War Is Over);Wonderful Christmastime;Santa Baby;Here Comes Santa Claus;Mary's Boy Child;God Rest Ye Merry, Gentlemen;O Christmas Tree;The First Noel;Angels We Have Heard on High;What Child Is This?;Up on the Housetop;Grandma Got Run Over by a Reindeer;Mele Kalikimaka;I Saw Mommy Kissing Santa Claus;Christmas (Baby Please Come Home);Fairytale of New York;Underneath the Tree;Run Rudolph Run;Carol of the Bells;Do You Hear What I Hear?;It Came Upon the Midnight Clear;O Little Town of Bethlehem;Good King Wenceslas;We Three Kings;Little Saint Nick;You're a Mean One, Mr. Grinch;Step Into Christmas;Merry Christmas Everyone;Driving Home for Christmas;Mistletoe;Christmas Tree Farm`);
L("rhymes","Name a nursery rhyme","",`Twinkle, Twinkle, Little Star;Humpty Dumpty;Mary Had a Little Lamb;Baa, Baa, Black Sheep;Old MacDonald Had a Farm;Hickory Dickory Dock;Jack and Jill;Itsy Bitsy Spider|incy wincy spider;Row, Row, Row Your Boat;London Bridge Is Falling Down;Ring a Ring o' Roses|ring around the rosie;Hey Diddle Diddle;Little Miss Muffet;Little Bo-Peep;Rock-a-bye Baby;Three Blind Mice;The Wheels on the Bus;Pat-a-Cake;This Little Piggy;Mary, Mary, Quite Contrary;Old Mother Hubbard;Jack Be Nimble;Little Jack Horner;Hot Cross Buns;Pop Goes the Weasel;Georgie Porgie;Sing a Song of Sixpence;Ding Dong Bell;Hush, Little Baby;The Grand Old Duke of York;Rain, Rain, Go Away;Little Boy Blue;Polly Put the Kettle On;Old King Cole;Peter Piper;Peter, Peter, Pumpkin Eater;There Was an Old Woman Who Lived in a Shoe;One, Two, Buckle My Shoe;Five Little Monkeys;If You're Happy and You Know It;Head, Shoulders, Knees and Toes;The Farmer in the Dell;Here We Go Round the Mulberry Bush;I'm a Little Teapot;Oranges and Lemons;Wee Willie Winkie;Simple Simon;Lavender's Blue;Bingo;Five Little Ducks;Ten Green Bottles;Doctor Foster;Tom, Tom, the Piper's Son;Diddle Diddle Dumpling;Jack Sprat;Goosey Goosey Gander;Yankee Doodle;Ladybird, Ladybird;Pease Porridge Hot;Rub-a-dub-dub`);
L("musicterms","Name an Italian music term for tempo, dynamics or style","Like allegro.",`Allegro;Forte;Piano;Andante;Adagio;Crescendo;Largo;Presto;Staccato;Legato;Fortissimo;Pianissimo;Diminuendo|decrescendo;Moderato;Vivace;Lento;Fermata;A cappella;Coda;Da capo;Ritardando;Accelerando;Rubato;Mezzo forte;Mezzo piano;Sforzando;Dal segno;Fine;Tempo;Tutti;Solo;Cadenza;Glissando;Pizzicato;Tremolo;Vibrato;Arpeggio;Sostenuto;Dolce;Cantabile;Grave;Prestissimo;Larghetto;Allegretto;Andantino;Marcato;Tenuto;Ostinato`);
L("dance","Name a style of dance","",`Ballet;Tap;Salsa;Tango;Hip hop;Waltz;Jazz;Breakdancing|breaking;Swing;Ballroom;Contemporary;Line dancing;Square dancing;Flamenco;Belly dancing;Cha-cha;Foxtrot;Samba;Rumba;Mambo;Merengue;Bachata;Charleston;Jive;Lindy hop;Polka;Irish dance|irish step dancing;Clogging;Krumping;Popping;Locking;Voguing;Twerking;The Twist;Disco;Macarena;Moonwalk;Electric Slide;Cumbia;Paso doble;Quickstep;Bolero;Zumba;Pole dance;Bollywood;Kathak;Bharatanatyam;Hula;Haka;Capoeira;Modern;Kizomba;Cancan;Conga;Limbo;The Floss;The Worm;The Robot;Morris dance`);
