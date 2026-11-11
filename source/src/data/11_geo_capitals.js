GROUP("geo");
DS("capitals",`
Paris #eu
London #eu
Washington, D.C.|washington|washington dc|dc #na
Tokyo #as
Rome #eu
Berlin #eu
Madrid #eu
Beijing|peking #as
Moscow #eu
Ottawa #na
Canberra #oc
Mexico City #na
Cairo #af
Athens #eu
Dublin #eu
Lisbon #eu
Amsterdam #eu
Vienna #eu
Brussels #eu
Stockholm #eu
Oslo #eu
Copenhagen #eu
Seoul #as
New Delhi|delhi #as
Bangkok #as
Buenos Aires #sa
Helsinki #eu
Warsaw #eu
Prague #eu
Budapest #eu
Bern|berne #eu
Brasília|brasilia #sa
Lima #sa
Havana #na
Nairobi #af
Reykjavík|reykjavik #eu
Santiago #sa
Bogotá|bogota #sa
Caracas #sa
Ankara #as eu
Tehran #as
Baghdad #as
Riyadh #as
Islamabad #as
Kabul #as
Hanoi #as
Manila #as
Jakarta #as
Kuala Lumpur #as
Singapore #as
Wellington #oc
Kyiv|kiev #eu
Pyongyang #as
Taipei #as
Kathmandu #as
Dhaka #as
Damascus #as
Beirut #as
Amman #as
Doha #as
Abu Dhabi #as
Kingston #na
Quito #sa
Montevideo #sa
Pretoria #af
Cape Town #af
Rabat #af
Algiers #af
Tunis #af
Tripoli #af
Addis Ababa #af
Accra #af
Abuja #af
Khartoum #af
Kampala #af
Kinshasa #af
Dakar #af
Bucharest #eu
Sofia #eu
Belgrade #eu
Zagreb #eu
Kuwait City #as
Muscat #as
Manama #as
Ulaanbaatar|ulan bator #as
Astana|nur sultan #as
Tashkent #as
Panama City #na
San José|san jose #na
Asunción|asuncion #sa
La Paz #sa
Sucre #sa
Phnom Penh #as
Vientiane #as
Luxembourg #eu
Monaco #eu
Vatican City|vatican #eu
Valletta #eu
Nicosia #eu as
Tallinn #eu
Riga #eu
Vilnius #eu
Minsk #eu
Bratislava #eu
Ljubljana #eu
Sarajevo #eu
Tirana #eu
Skopje #eu
Podgorica #eu
Chișinău|chisinau #eu
Pristina #eu
Tbilisi #as eu
Yerevan #as eu
Baku #as eu
Vaduz #eu
San Marino #eu
Andorra la Vella #eu
Kigali #af
Dodoma #af
Lusaka #af
Harare #af
Luanda #af
Maputo #af
Windhoek #af
Gaborone #af
Antananarivo #af
Mogadishu #af
Bamako #af
Niamey #af
Ouagadougou #af
Yamoussoukro #af
Monrovia #af
Freetown #af
Conakry #af
Bissau #af
Banjul #af
Nouakchott #af
Lomé|lome #af
Porto-Novo|porto novo #af
Yaoundé|yaounde #af
Libreville #af
Malabo #af
Bangui #af
N'Djamena|ndjamena #af
Juba #af
Asmara #af
Djibouti #af
Bloemfontein #af
Brazzaville #af
Lilongwe #af
Maseru #af
Mbabane #af
Port Louis #af
Victoria #af
Moroni #af
Praia #af
São Tomé|sao tome #af
Gitega #af
Bishkek #as
Dushanbe #as
Ashgabat #as
Sana'a|sanaa #as
Naypyidaw|nay pyi taw #as
Thimphu #as
Malé|male #as
Bandar Seri Begawan #as
Dili #as
Sri Jayawardenepura Kotte|kotte #as
Georgetown #sa
Paramaribo #sa
Managua #na
Tegucigalpa #na
San Salvador #na
Guatemala City #na
Belmopan #na
Port-au-Prince|port au prince #na
Santo Domingo #na
Nassau #na
Bridgetown #na
Port of Spain #na
Castries #na
St. George's|saint georges #na
Roseau #na
Kingstown #na
Basseterre #na
St. John's|saint johns #na
Port Moresby #oc
Suva #oc
Apia #oc
Nuku'alofa|nukualofa #oc
Port Vila #oc
Honiara #oc
Tarawa|south tarawa #oc
Palikir #oc
Ngerulmud #oc
Majuro #oc
Funafuti #oc
Yaren #oc
`);
ALL("capitals","capitals","Name a national capital city","Any country's capital.");
T("capitals","capitals","Name a capital city in Europe","","eu");
T("capitals","capitals","Name a capital city in Asia","","as");
T("capitals","capitals","Name a capital city in Africa","Some countries have more than one.","af");
T("capitals","capitals","Name a capital city in South America","Bolivia has two.","sa");
T("capitals","capitals","Name a capital city in North America, Central America or the Caribbean","","na");
T("capitals","capitals","Name a capital city in Oceania","","oc");
LETTERS("capletters","capitals",c=>`Name a national capital that starts with ${c}`,"Any country's capital city.");
