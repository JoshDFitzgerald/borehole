GROUP("us");
DS("states",`
California|cali|ca #we mex
Texas|tx #so mex conf bar bok
Florida|fl #so atl conf
New York|ny #ne c13 can atl lakes person bpa
Hawaii|hi #we
Alaska|ak #we can
Washington|wa|washington state #we can person bid
Ohio|oh #mw can lakes bky bpa
Georgia|ga #so c13 atl conf person btn
Arizona|az #we mex rocky bco but
Colorado|co #we rocky bok bne bwy but
Nevada|nv #we rocky bid but
Michigan|mi #mw can lakes
Illinois|il #mw lakes miss bmo bky bia
Oregon|or #we bid
Pennsylvania|pa #ne c13 can lakes person
New Jersey|nj #ne c13 atl bpa
Virginia|va #so c13 atl conf person btn bky
North Carolina|nc #so c13 atl conf person btn
Massachusetts|ma|mass #ne ne6 c13 atl
Tennessee|tn #so conf miss bmo bky bar
Louisiana|la #so conf miss person bar
Utah|ut #we rocky bco bid bwy
Montana|mt #we can rocky bid bsd bwy
Kentucky|ky #so miss btn bmo
Alabama|al #so conf btn
Maine|me #ne ne6 can atl
Vermont|vt #ne ne6 can
Minnesota|mn #mw can lakes miss bsd bia
Wisconsin|wi #mw lakes miss bia
Mississippi|ms #so conf miss btn bar
South Carolina|sc #so c13 atl conf person
Oklahoma|ok #so bmo bco bar
Kansas|ks #mw bmo bco bok bne
Missouri|mo #mw miss btn bky bar bok bia bne
Indiana|in #mw lakes bky
Iowa|ia #mw miss bmo bsd bne
Idaho|id #we can rocky but bwy
Wyoming|wy #we rocky bco bid but bsd bne
New Mexico|nm #we mex rocky bco but bok
Connecticut|ct #ne ne6 c13 atl
Maryland|md #so c13 atl person bpa
Arkansas|ar #so conf miss btn bmo bok
Nebraska|ne #mw bmo bco bsd bia bwy
North Dakota|nd #mw can bsd
South Dakota|sd #mw bia bne bwy
West Virginia|wv #so person bky bpa
New Hampshire|nh #ne ne6 c13 can atl
Rhode Island|ri #ne ne6 c13 atl
Delaware|de #so c13 atl person bpa
`);
const ST="states";
ALL("states",ST,"Name a U.S. state","Any of the 50.");
T("states",ST,"Name a state in the Northeast","Census Bureau definition.","ne");
T("states",ST,"Name a state in the Midwest","Census Bureau definition.","mw");
T("states",ST,"Name a state in the South","Census Bureau definition.","so");
T("states",ST,"Name a state in the West","Census Bureau definition.","we");
T("states",ST,"Name a New England state","All six.","ne6");
T("states",ST,"Name one of the original 13 colonies","As states today.","c13");
T("states",ST,"Name a state that borders Canada","Including water borders on the Great Lakes.","can");
T("states",ST,"Name a state with an Atlantic coastline","","atl");
T("states",ST,"Name a state that touches a Great Lake","","lakes");
T("states",ST,"Name a state that joined the Confederacy","The eleven that seceded.","conf");
T("states",ST,"Name a state the Mississippi River touches","As a border or running through.","miss");
T("states",ST,"Name a Rocky Mountain state","The eight Mountain West states.","rocky");
T("states",ST,"Name a state named after a person","Kings, queens, lords and one president.","person");
[["btn","Tennessee"],["bmo","Missouri"],["bky","Kentucky"],["bco","Colorado"],["bid","Idaho"],["but","Utah"],["bsd","South Dakota"],["bpa","Pennsylvania"],["bar","Arkansas"],["bok","Oklahoma"],["bia","Iowa"],["bne","Nebraska"],["bwy","Wyoming"]].forEach(([t,n])=>T("stateborders",ST,`Name a state that borders ${n}`,"Land borders.",t));
LETTERS("stateletters",ST,c=>`Name a U.S. state that starts with ${c}`,"",null,{min:8});
T("stateshape",ST,"Name a U.S. state that ends with the letter A","Like Nevada.",it=>/a$/.test(norm(it.name)));
T("stateshape",ST,"Name a U.S. state that starts with a vowel","A, E, I, O or U.",it=>/^[aeiou]/.test(norm(it.name)));
T("stateshape",ST,"Name a U.S. state with two words in its name","",it=>/ /.test(it.name));
T("stateshape",ST,"Name a U.S. state with five letters or fewer","Like Ohio.",it=>norm(it.name).replace(/ /g,"").length<=5);

DS("statecaps",`
Boston #ne big
Sacramento #we
Austin #so
Atlanta #so big
Denver #we big
Phoenix #we big
Nashville #so big
Honolulu #we big
Albany #ne
Tallahassee #so
Salt Lake City #we big
Indianapolis #mw big
Springfield #mw
Columbus #mw big
Richmond #so
Raleigh #so
Olympia #we
Juneau #we
Oklahoma City #so big
Baton Rouge #so
Lansing #mw
Harrisburg #ne
Trenton #ne
Hartford #ne
Providence #ne big
Annapolis #so
Montgomery #so
Little Rock #so big
Jackson #so big
Des Moines #mw big
Madison #mw
Saint Paul|st paul #mw
Boise #we big
Santa Fe #we
Carson City #we
Salem #we
Cheyenne #we big
Helena #we
Bismarck #mw
Pierre #mw
Lincoln #mw
Topeka #mw
Jefferson City #mw
Frankfort #so
Charleston #so big
Columbia #so
Dover #so
Concord #ne
Montpelier #ne
Augusta #ne
`);
ALL("statecaps","statecaps","Name a U.S. state capital","Any of the 50.");
T("statecaps","statecaps","Name a state capital in the South","","so");
T("statecaps","statecaps","Name a state capital in the West","","we");
T("statecaps","statecaps","Name a state capital in the Midwest","","mw");
T("statecaps","statecaps","Name a state capital in the Northeast","","ne");
T("statecaps","statecaps","Name a state capital that's also its state's largest city","Like Phoenix.","big");

DS("uscities",`
Los Angeles|la #ca
San Francisco|sf|san fran #ca
San Diego #ca
Sacramento #ca
San Jose #ca
Oakland #ca
Fresno #ca
Long Beach #ca
Palm Springs #ca
Santa Barbara #ca
Anaheim #ca
Malibu #ca
Pasadena #ca
Berkeley #ca
Santa Monica #ca
Bakersfield #ca
Riverside #ca
Santa Cruz #ca
Napa #ca
Beverly Hills #ca
Irvine #ca
Burbank #ca
Monterey #ca
Stockton #ca
Palo Alto #ca
Modesto #ca
Huntington Beach #ca
San Bernardino #ca
Santa Clara #ca
Carmel|carmel by the sea #ca
Cupertino #ca
Chula Vista #ca
Redding #ca
Eureka #ca
Temecula #ca
Houston #tx
Dallas #tx
Austin #tx
San Antonio #tx
Fort Worth #tx
El Paso #tx
Galveston #tx
Corpus Christi #tx
Lubbock #tx
Arlington #tx va
Plano #tx
Waco #tx
Amarillo #tx
Laredo #tx
Midland #tx
Odessa #tx
Abilene #tx
Brownsville #tx
Beaumont #tx
College Station #tx
Irving #tx
Frisco #tx
McAllen #tx
Denton #tx
Round Rock #tx
Tyler #tx
Killeen #tx
Miami #fl
Orlando #fl
Tampa #fl
Jacksonville #fl
Tallahassee #fl
Key West #fl
Fort Lauderdale #fl
St. Petersburg|saint petersburg|st pete #fl
Daytona Beach|daytona #fl
Naples #fl
Pensacola #fl
Gainesville #fl
Sarasota #fl
Boca Raton #fl
West Palm Beach #fl
Palm Beach #fl
Clearwater #fl
Fort Myers #fl
Miami Beach #fl
St. Augustine|saint augustine #fl
Destin #fl
Panama City #fl
Kissimmee #fl
Hialeah #fl
Ocala #fl
Lakeland #fl
Cape Coral #fl
Melbourne #fl
New York City|nyc|new york #ny
Buffalo #ny
Albany #ny ga
Rochester #ny mn
Syracuse #ny
Yonkers #ny
Ithaca #ny
Niagara Falls #ny
Utica #ny
Binghamton #ny
Schenectady #ny
White Plains #ny
Saratoga Springs #ny
Poughkeepsie #ny
Troy #ny
New Rochelle #ny
Lake Placid #ny
Cooperstown #ny
Elmira #ny
Columbus #oh ga
Cleveland #oh
Cincinnati #oh
Toledo #oh
Akron #oh
Dayton #oh
Youngstown #oh
Canton #oh
Sandusky #oh
Parma #oh
Kent #oh
Athens #oh ga
Lorain #oh
Mansfield #oh
Lima #oh
Springfield #oh il ma mo
Philadelphia|philly #pa
Pittsburgh #pa
Harrisburg #pa
Allentown #pa
Erie #pa
Scranton #pa
Hershey #pa
Lancaster #pa
Gettysburg #pa
Reading #pa
Bethlehem #pa
State College #pa
Wilkes-Barre #pa
York #pa
Altoona #pa
Punxsutawney #pa
Williamsport #pa
Johnstown #pa
Chicago #il
Peoria #il az
Naperville #il
Rockford #il
Aurora #il co
Joliet #il
Champaign #il
Evanston #il
Urbana #il
Bloomington #il mn
Decatur #il
Elgin #il
Carbondale #il
Schaumburg #il
Moline #il
Oak Park #il
Detroit #mi
Grand Rapids #mi
Lansing #mi
Ann Arbor #mi
Flint #mi
Kalamazoo #mi
Traverse City #mi
Dearborn #mi
Saginaw #mi
Marquette #mi
Mackinac Island #mi
Sault Ste. Marie|sault ste marie|sault saint marie #mi
Muskegon #mi
Holland #mi
Battle Creek #mi
East Lansing #mi
Warren #mi
Charlotte #nc
Raleigh #nc
Durham #nc
Greensboro #nc
Asheville #nc
Wilmington #nc
Chapel Hill #nc
Winston-Salem #nc
Fayetteville #nc
Cary #nc
Boone #nc
Kitty Hawk #nc
High Point #nc
Greenville #nc
Atlanta #ga
Savannah #ga
Augusta #ga
Macon #ga
Marietta #ga
Valdosta #ga
Alpharetta #ga
Roswell #ga
Brunswick #ga
Phoenix #az
Tucson #az
Scottsdale #az
Flagstaff #az
Mesa #az
Tempe #az
Sedona #az
Yuma #az
Glendale #az
Chandler #az
Prescott #az
Tombstone #az
Gilbert #az
Lake Havasu City #az
Page #az
Denver #co
Colorado Springs #co
Boulder #co
Aspen #co
Fort Collins #co
Vail #co
Pueblo #co
Durango #co
Breckenridge #co
Grand Junction #co
Telluride #co
Golden #co
Steamboat Springs #co
Greeley #co
Lakewood #co
Seattle #wa
Spokane #wa
Tacoma #wa
Olympia #wa
Bellevue #wa
Vancouver #wa
Everett #wa
Redmond #wa
Yakima #wa
Bellingham #wa
Walla Walla #wa
Kirkland #wa
Pullman #wa
Leavenworth #wa
Forks #wa
Port Angeles #wa
Boston #ma
Cambridge #ma
Worcester #ma
Salem #ma or
Plymouth #ma mn
Lowell #ma
Quincy #ma
Nantucket #ma
Provincetown #ma
Lexington #ma
Concord #ma
New Bedford #ma
Amherst #ma
Somerville #ma
Gloucester #ma
Northampton #ma
Fall River #ma
Brockton #ma
Newark #nj
Jersey City #nj
Atlantic City #nj
Trenton #nj
Princeton #nj
Hoboken #nj
Camden #nj
Paterson #nj
New Brunswick #nj
Elizabeth #nj
Asbury Park #nj
Cape May #nj
Edison #nj
Morristown #nj
Montclair #nj
Wildwood #nj
Toms River #nj
Richmond #va
Virginia Beach #va
Norfolk #va
Alexandria #va la
Charlottesville #va
Williamsburg #va
Roanoke #va
Newport News #va
Chesapeake #va
Fredericksburg #va
Lynchburg #va tn
Hampton #va
Blacksburg #va
Harrisonburg #va
Fairfax #va
Leesburg #va
Nashville #tn
Memphis #tn
Knoxville #tn
Chattanooga #tn
Gatlinburg #tn
Pigeon Forge #tn
Clarksville #tn
Murfreesboro #tn
Franklin #tn
Jackson #tn
Johnson City #tn
Oak Ridge #tn
Kingsport #tn
Bristol #tn
Milwaukee #wi
Madison #wi
Green Bay #wi
Kenosha #wi
Racine #wi
Appleton #wi
Oshkosh #wi
Eau Claire #wi
La Crosse #wi
Wausau #wi
Sheboygan #wi
Janesville #wi
Wisconsin Dells #wi
Waukesha #wi
Minneapolis #mn
Saint Paul|st paul #mn
Duluth #mn
St. Cloud|saint cloud #mn
Mankato #mn
Moorhead #mn
Edina #mn
Eden Prairie #mn
Winona #mn
Brainerd #mn
Kansas City #mo
St. Louis|saint louis #mo
Branson #mo
Jefferson City #mo
Columbia #mo
Independence #mo
Joplin #mo
St. Joseph|saint joseph #mo
Hannibal #mo
Cape Girardeau #mo
Lee's Summit|lees summit #mo
Rolla #mo
New Orleans|nola #la
Baton Rouge #la
Shreveport #la
Lafayette #la
Lake Charles #la
Monroe #la
Metairie #la
Houma #la
Natchitoches #la
Kenner #la
Bossier City #la
Portland #or
Eugene #or
Bend #or
Medford #or
Corvallis #or
Ashland #or
Astoria #or
Beaverton #or
Hood River #or
Gresham #or
Hillsboro #or
Cannon Beach #or
Klamath Falls #or
Newport #or
Las Vegas|vegas #nv
Reno #nv
Henderson #nv
Carson City #nv
North Las Vegas #nv
Sparks #nv
Elko #nv
Boulder City #nv
Laughlin #nv
Virginia City #nv
Mesquite #nv
Ely #nv
Winnemucca #nv
Salt Lake City #ut
Provo #ut
Park City #ut
Ogden #ut
St. George|saint george #ut
Moab #ut
Orem #ut
Logan #ut
Sandy #ut
West Valley City #ut
Lehi #ut
Cedar City #ut
Bountiful #ut
Anchorage #ak
Juneau #ak
Fairbanks #ak
Sitka #ak
Ketchikan #ak
Nome #ak
Kodiak #ak
Wasilla #ak
Skagway #ak
Homer #ak
Seward #ak
Valdez #ak
Utqiagvik|barrow #ak
Honolulu #hi
Hilo #hi
Kailua #hi
Lahaina #hi
Kailua-Kona|kona #hi
Kahului #hi
Lihue #hi
Pearl City #hi
Wailuku #hi
Kaneohe #hi
Kapolei #hi
Hana #hi
`);
[["ca","California"],["tx","Texas"],["fl","Florida"],["ny","New York State"],["oh","Ohio"],["pa","Pennsylvania"],["il","Illinois"],["mi","Michigan"],["nc","North Carolina"],["ga","Georgia"],["az","Arizona"],["co","Colorado"],["wa","Washington State"],["ma","Massachusetts"],["nj","New Jersey"],["va","Virginia"],["tn","Tennessee"],["wi","Wisconsin"],["mn","Minnesota"],["mo","Missouri"],["la","Louisiana"],["or","Oregon"],["nv","Nevada"],["ut","Utah"],["ak","Alaska"],["hi","Hawaii"]].forEach(([t,n])=>T("uscities","uscities",`Name a city or town in ${n}`,"Cities, towns and villages.",t));

L("usbig","Name one of the 30 most populous U.S. cities","City proper population.",`New York City|nyc|new york;Los Angeles|la;Chicago;Houston;San Francisco|sf;Philadelphia|philly;Phoenix;Dallas;San Diego;Boston;Seattle;Washington, D.C.|washington|dc;Denver;San Antonio;Austin;Las Vegas|vegas;Detroit;Nashville;San Jose;Jacksonville;Fort Worth;Charlotte;Columbus;Indianapolis;Portland;Baltimore;Memphis;Oklahoma City;Louisville;El Paso`);

L("parks","Name a U.S. national park","Any of the 63.",`Yellowstone;Yosemite;Grand Canyon;Zion;Glacier;Great Smoky Mountains|smoky mountains|great smokies;Rocky Mountain|rocky mountains;Arches;Grand Teton|tetons;Acadia;Everglades;Joshua Tree;Death Valley;Bryce Canyon|bryce;Olympic;Mount Rainier|rainier;Sequoia;Denali;Shenandoah;Badlands;Redwood|redwoods;Carlsbad Caverns;Mammoth Cave;Hawaii Volcanoes|hawaii volcanoes;Crater Lake;Big Bend;Canyonlands;Capitol Reef;Petrified Forest;Mesa Verde;Kings Canyon;Saguaro;Glacier Bay;Haleakala;Hot Springs;Great Sand Dunes;Wind Cave;Theodore Roosevelt;Voyageurs;Isle Royale;Indiana Dunes;Cuyahoga Valley;New River Gorge;Congaree;Biscayne;Dry Tortugas;Channel Islands;Lassen Volcanic|lassen;Pinnacles;North Cascades;Black Canyon of the Gunnison|black canyon;Great Basin;Guadalupe Mountains;White Sands;Katmai;Kenai Fjords;Wrangell-St. Elias|wrangell st elias|wrangell saint elias;Gates of the Arctic;Kobuk Valley;Lake Clark;Gateway Arch;Virgin Islands;National Park of American Samoa|american samoa`);
L("parks","Name a national park in California","Nine of them.",`Yosemite;Joshua Tree;Death Valley;Sequoia;Redwood|redwoods;Kings Canyon;Channel Islands;Lassen Volcanic|lassen;Pinnacles`);
L("parks","Name a national park in Alaska","Eight of them.",`Denali;Glacier Bay;Katmai;Kenai Fjords;Wrangell-St. Elias|wrangell st elias;Gates of the Arctic;Lake Clark;Kobuk Valley`);
L("uslandmark","Name a famous U.S. landmark or monument","Built structures, not natural features.",`Statue of Liberty;Golden Gate Bridge;Mount Rushmore;Empire State Building;White House;Lincoln Memorial;Washington Monument;Hoover Dam;Space Needle;Gateway Arch|st louis arch;Hollywood Sign;Brooklyn Bridge;Times Square;Alcatraz;Liberty Bell;Capitol Building|us capitol|united states capitol;Pentagon;Las Vegas Strip|the strip;Independence Hall;Vietnam Veterans Memorial;Jefferson Memorial;Chrysler Building;Willis Tower|sears tower;Graceland;One World Trade Center|freedom tower;Rockefeller Center;Central Park;Grand Central Terminal|grand central;Martin Luther King Jr. Memorial;Crazy Horse Memorial;Fenway Park;Wrigley Field;Pike Place Market;Alamo|the alamo;Bunker Hill Monument;Flatiron Building;Cloud Gate|the bean;Biltmore Estate;Monticello;Mount Vernon;Hearst Castle;Griffith Observatory;French Quarter;Fort Sumter;Plymouth Rock;Paul Revere House;Arlington National Cemetery;Kennedy Space Center;Walk of Fame|hollywood walk of fame;Coit Tower;Transamerica Pyramid;Stone Mountain`);
L("usnick","Name a nickname of a U.S. city","Like the Big Apple.",`The Big Apple;Windy City;City of Angels;Sin City;Motor City|motown;Big Easy;City of Brotherly Love;Music City;Emerald City;Mile High City;Space City;Steel City;Beantown;Magic City;Gotham;Big D;Charm City;Rose City;Queen City;Twin Cities;City by the Bay;Crescent City;Gateway City|gateway to the west;The Hub;Hotlanta;Live Music Capital of the World;City of Lakes;Biggest Little City in the World;Bluff City;Cream City;Bayou City;Alamo City;Rocket City;Mill City;River City`);
