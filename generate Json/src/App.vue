<script setup>
import { ref } from "vue";

const rownumber = ref(1);
const rows = ref(500);
const showoutput = ref(false);
const finaloutput = ref("Hello Mother");
const defaultTab = ref(true);
const slugTab = ref(false);
const showAdvanced = ref(false);

const feilds = ref([
  {
    id: 1,
    fieldname: "id",
    type: "rowNumber",
    wordcount: 1,
    rowsarray: 1,
    imagewidth: 640,
    imageheight: 360,
  },
  {
    id: 2,
    fieldname: "name",
    type: "fullname",
    wordcount: 2,
    rowsarray: 1,
  },
  {
    id: 3,
    fieldname: "title",
    type: "string",
    wordcount: 10,
    rowsarray: 1,
    imagewidth: 640,
    imageheight: 360,
  },
  {
    id: 4,
    fieldname: "description",
    type: "string",
    wordcount: 20,
    rowsarray: 1,
  },
]);

const addfield = () => {
  let last = feilds.value[feilds.value.length - 1];
  return feilds.value.push({
    id: feilds.value.length + 1,
    fieldname: last.fieldname,
    type: last.type,
    wordcount: last.wordcount,
    rowsarray: last.rowsarray,
    imagewidth: last.imagewidth,
    imageheight: last.imageheight,
    fullname: last.fullname,
  });
};

const removefield = (index) => {
  if (feilds.value.length > 1) {
    feilds.value.splice(index, 1);
  }
};
const categorygen = () => {
  const text = "movies series food sport work".split(" ");
  let result = text[Math.floor(Math.random() * text.length)];
  return result;
};

const fullnamegen = (num = 2) => {
  let result = [];
  let arr = [
    "Jaeden",
    "Caiden",
    "Jonah",
    "Darren",
    "Kaiden",
    "Colten",
    "Lawrence",
    "Cristian",
    "Nasir",
    "Elias",
    "Kameron",
    "Rodrigo",
    "Beckett",
    "Cory",
    "Asher",
    "Alvin",
    "Brock",
    "Ashton",
    "Cesar",
    "Zander",
    "Aiden",
    "Marcel",
    "Darian",
    "Heath",
    "Emmett",
    "Rayan",
    "Ramon",
    "Avery",
    "Zachariah",
    "Jayvion",
    "Leroy",
    "Chase",
    "Armando",
    "Martin",
    "Yosef",
    "Jasper",
    "Benjamin",
    "Gaven",
    "Brendan",
    "Antwan",
    "Dorian",
    "Anton",
    "Beckham",
    "Brett",
    "Kenyon",
    "Titus",
    "Gabriel",
    "Dalton",
    "Jamarcus",
    "Leonardo",
    "Lawson",
    "Vance",
    "Trey",
    "Eli",
    "Dennis",
    "Albert",
    "Junior",
    "Landyn",
    "Jamal",
    "Jared",
    "Terrence",
    "Malachi",
    "Isaias",
    "Darryl",
    "Arturo",
    "Talan",
    "Troy",
    "Colby",
    "Marco",
    "Jamar",
    "Kade",
    "Ernesto",
    "Hudson",
    "Dereon",
    "Cole",
    "Brenden",
    "Ezequiel",
    "Angelo",
    "Case",
    "Nickolas",
    "Kadyn",
    "Aidan",
    "Reuben",
    "Quincy",
    "Antonio",
    "Isai",
    "Bradyn",
    "Terry",
    "Alexander",
    "Felipe",
    "Jadon",
    "Danny",
    "Gordon",
    "Erick",
    "Jorden",
    "Messiah",
    "Gianni",
    "Jesse",
    "Dax",
    "Addison",
    "Stanley",
    "Camren",
    "Theodore",
    "Abraham",
    "Russell",
    "Yusuf",
    "Calvin",
    "Aydan",
    "Milton",
    "Rafael",
    "Patrick",
    "Pablo",
    "Connor",
    "Makai",
    "Diego",
    "Maxim",
    "Leonidas",
    "Draven",
    "Uriah",
    "Louis",
    "Semaj",
    "Zackery",
    "Gavyn",
    "Mauricio",
    "Demarion",
    "Dominick",
    "Maxwell",
    "Marques",
    "Andrew",
    "Antoine",
    "Conrad",
    "Zane",
    "Emiliano",
    "Jay",
    "Lane",
    "Collin",
    "Ricky",
    "Lamont",
    "Ronan",
    "Landon",
    "Cortez",
    "Alexis",
    "Omar",
    "Jaydon",
    "Lamar",
    "Saul",
    "Ben",
    "Hamza",
    "Gerardo",
    "Howard",
    "Keith",
    "Spencer",
    "Emmanuel",
    "Nolan",
    "Tommy",
    "Maximilian",
    "Jovanny",
    "Charlie",
    "Declan",
    "Rowan",
    "Zayden",
    "Dominik",
    "Jason",
    "Raphael",
    "Devin",
    "Hezekiah",
    "Christian",
    "Leo",
    "Ayden",
    "Greyson",
    "Lucian",
    "Brody",
    "Donald",
    "Brady",
    "Kaleb",
    "Jaxon",
    "Orlando",
    "Seth",
    "Curtis",
    "Drew",
    "Marcelo",
    "Keshawn",
    "Izaiah",
    "Sterling",
    "Jacob",
    "Rolando",
    "Michael",
    "Roberto",
    "Edward",
    "Cason",
    "Nathan",
    "Bailey",
    "Luke",
    "Xavier",
    "Gael",
    "Johnny",
    "Zack",
    "Kane",
    "Phillip",
    "Darien",
    "Nelson",
    "Zachery",
    "Darion",
    "Adrien",
    "Timothy",
    "Kael",
    "Dario",
    "Ezekiel",
    "Hugh",
    "Damon",
    "Bryson",
    "Elliott",
    "King",
    "Emerson",
    "Nick",
    "Zaid",
    "Allen",
    "Jamarion",
    "Mathias",
    "Kash",
    "Chandler",
    "Kolby",
    "Leon",
    "Aarav",
    "Jermaine",
    "Ellis",
    "Alonzo",
    "Wyatt",
    "Cullen",
    "Jakob",
    "Ivan",
    "Evan",
    "Noel",
    "Tate",
    "Carter",
    "Sheldon",
    "Carlo",
    "Ronald",
    "Dangelo",
    "Alfred",
    "Aedan",
    "Clinton",
    "Roy",
    "Chace",
    "Rishi",
    "George",
    "Brennan",
    "Andre",
    "Emanuel",
    "Jadyn",
    "Jaylen",
    "Finley",
    "Jax",
    "Jarrett",
    "Colton",
    "Isiah",
    "Kyson",
    "Myles",
    "Konner",
    "Terrance",
    "Cael",
    "Sonny",
    "Kaeden",
    "Frank",
    "Ernest",
    "Brenton",
    "Agustin",
    "Ethan",
    "Savion",
    "Leandro",
    "Parker",
    "Jovany",
    "Derek",
    "Malik",
    "Ignacio",
    "Lincoln",
    "Keyon",
    "Bridger",
    "Robert",
    "Johan",
    "Joe",
    "Jonas",
    "Raymond",
    "Gage",
    "Chaim",
    "Abdiel",
    "Matias",
    "Tobias",
    "Bronson",
    "Izayah",
    "Tyrell",
    "Cayden",
    "Luca",
    "Darwin",
    "Toby",
    "Chris",
    "Lance",
    "Muhammad",
    "Randall",
    "Jaquan",
    "Dillan",
    "Dante",
    "Tanner",
    "Ty",
    "Skylar",
    "Rogelio",
    "Noah",
    "Luciano",
    "Rene",
    "Andreas",
    "Kenny",
    "Desmond",
    "Malaki",
    "Dillon",
    "Adonis",
    "Kristian",
    "Griffin",
    "Gideon",
    "Maximillian",
    "Mateo",
    "Issac",
    "Jeffery",
    "Urijah",
    "Joaquin",
    "Ahmed",
    "Pranav",
    "Cassius",
    "Ryker",
    "Trent",
    "Fernando",
    "Kyler",
    "Julien",
    "Waylon",
    "Randy",
    "Devan",
    "Johnathan",
    "Jackson",
    "Abdullah",
    "Manuel",
    "Yadiel",
    "Simeon",
    "Camron",
    "Edgar",
    "Slade",
    "Dominique",
    "Jayce",
    "Ishaan",
    "Ramiro",
    "Kody",
    "Payton",
    "Bennett",
    "Rylee",
    "Marcus",
    "Jagger",
    "Braden",
    "Deandre",
    "Aryan",
    "Jaxson",
    "Zain",
    "Devyn",
    "Erik",
    "Samir",
    "Efrain",
    "Cyrus",
    "Demarcus",
    "Houston",
    "Bentley",
    "Quinn",
    "Fisher",
    "Ibrahim",
    "Ezra",
    "Nikhil",
    "Paul",
    "Hunter",
    "James",
    "Lyric",
    "Adan",
    "Krish",
    "Mark",
    "Sebastian",
    "Kyle",
    "Yahir",
    "Wayne",
    "Layton",
    "Yurem",
    "Nikolai",
    "Ace",
    "Tristian",
    "Mike",
    "Soren",
    "Hayden",
    "Quinten",
    "Immanuel",
    "Arjun",
    "Remington",
    "Ruben",
    "Tucker",
    "Amare",
    "Leonard",
    "Rodolfo",
    "Milo",
    "Blaze",
    "Brian",
    "Jesus",
    "Giovanny",
    "Nathanial",
    "Osvaldo",
    "Gary",
    "Leonel",
    "Davon",
    "Zion",
    "Damari",
    "Cannon",
    "Gilberto",
    "Frederick",
    "Irvin",
    "Wesley",
    "Kevin",
    "Cornelius",
    "Karson",
    "Damian",
    "Maximo",
    "Roman",
    "Miles",
    "Jayvon",
    "Bo",
    "Salvador",
    "Aaron",
    "Neil",
    "Nikolas",
    "Eugene",
    "Enzo",
    "Hugo",
    "Reilly",
    "Ryan",
    "Malcolm",
    "Jairo",
    "Teagan",
    "Oliver",
    "Shawn",
    "Damarion",
    "Jaime",
    "Harold",
    "Tristen",
    "Rigoberto",
    "Bernard",
    "Joshua",
    "Riley",
    "Brandon",
    "Jamie",
    "Shaun",
    "Fletcher",
    "Lucas",
    "Duncan",
    "Zavier",
    "Alberto",
    "Reid",
    "Prince",
    "Jovanni",
    "Sullivan",
    "Isaiah",
    "Harley",
    "Ronin",
    "Chance",
    "Jamari",
    "Wade",
    "Daniel",
    "Alexzander",
    "Travis",
    "Deangelo",
    "Rudy",
    "Dakota",
    "Adam",
    "Reynaldo",
    "Richard",
    "Zachary",
    "Giancarlo",
    "Dawson",
    "Reed",
    "Eric",
    "Misael",
    "Jack",
    "Taylor",
    "Coleman",
    "Jan",
    "Eliezer",
    "Mathew",
    "Makhi",
    "Kai",
    "Gerald",
    "Jadiel",
    "Amir",
    "Pierce",
    "Julius",
    "Niko",
    "Octavio",
    "Arnav",
    "Kamden",
    "Kamari",
    "Clay",
  ];
  for (let i = 0; i < num; i++) {
    result.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  return result.join(" ");
};

const textgen = (wordcount) => {
  let result = [];
  let text =
    " resink transversomedial pharyngopathy postmineral myelosyphilis silverer evincement phrygium punnigram imminution environmental sleepify nope wauken indignance knotwort apocodeine escortee dogwatch eaglewood unbrotherliness mulse dermobranchiata typhic poststertorous indevout anatomicopathologic unimpenetrable hoggy urrhodin Dioecia unchapter nonumbilicate zwitterionic apportionable ferulic statefulness pharyngotonsillitis Mimulus recce mutinously reboant marshwort lupoid chromatophilic lauder nirles esthesiometer semisocial unbeing kangaroo takosis inconvertibility anesthetist rumorproof thoracoscopy euphorbium bizet song dolichocephali platemaker vesicupapular electroforming dilatingly meethelp loincloth avowably counterindicate treacliness Epigonus airmark polarography precomposition lemography Apinage Taal logology probeer randomization poditic individualize castigate Biloculina overscrub koolah weetless erased layery discontinuee anaphylatoxin unwounded personalism howitzer hexahydroxy koku reamer tonguiness microgametocyte baba ludefisk novelwright swinehull Odonata indefinable faineance nidologist supracargo beriberic betso archheart snary Viminal Pygopodidae acetylenediurein asphalt preimpress fountainlet bejel unpictorially heliophyte chimopeelagic warison antivaccinist overtwine preremove nerval bufonite eradicator turtling winrace psychographic impalpably amygdalase Octogynia brimming grist casave brazilein afluking meliceris portative unsteck Madelon barramunda optotechnics metapterygium unromanticalness Jacobinism pricklingly blameless elderhood committeewoman comicocynical aggrate stentoronic flatwise bipyridyl untastable aegerian unmistrusted quadrigamist Meleagrinae helvite neuralist Swietenia unpleadable colorably mogilalism consequently atamasco inhospitality noncarnivorous counterruin gryposis ringe displeasedly incenter gallycrow whincow repudiationist unagile chaplain bekerchief subproduct pointingly Physonectae bumpingly hateful endogenous facticide velours carmoisin reaccomplish protistic recuperance tech withywind Galen Slavistic escropulo deglutination hydramnios Amphion beguilement glottiscope propagation entrancement disbelief goatlike Tanyoan thecium deforciant coachwhip enviableness duroquinone smirchy whisky forcing homosystemic underact autosyndesis sybaritism scorching testiere nonporphyritic cephalhematoma oxyquinoline azo scrimshorn unreeling burnt kilocycle lactenin Decimus patter jetbead Pygidium bitterroot thoke septated trinodal qualitied gotten unclassable Akhissar wholewise curse organophyly teleseme heptitol whitehass asclepiadeous labionasal presumptuous triketo thrombolymphangitis spokeswomanship unprejudicial ungoverned nonrectangular pleocrystalline slurbow unhandsome scoliotic phreatophyte criminalistics imitability zygozoospore nonliability disafforestation epigenetic Aves schistaceous verbomania epitenon proscriber histology propulsion elaidinic driftless upcover duteous distasteful dermatoxerasia Kaibartha spydom tonsor paedogenesis anticipatory unastonished Blackbeard gradient metachemistry caravan circumnutate infract adenia louse koel tributyrin lifey Desmidiaceae vinelet ingrowth uniovulate toying nonretentive conjunct pinnaglobin vastity appendicle redecline trekker hereby dicatalexis slackerism inaxon tribase cryptostome nonpresbyter breezily opusculum methought yarl fringent forsooth plicater balneotherapeutics uredosporic perceptive embouchure heterolysis imperence perfervidness pobs thorax perikronion charlatanic Bonapartism whilom outferret kelty macrospore predisposedly squawk extrafoliaceous inveteracy obtect decoyer Pelecaniformes dodecane gambet electrodynamism henter sunless burroweed busket trepidatory fermerer prewound thrifty twibil amateur myasthenia goave toolmark ornithon geminately unrhymed Serridentines presbyopia unoperably preventer salten grimily conduplicated theomania gyromagnetic antimycotic malacanthid sensationistic vibraculoid eater zig bordello hounding outweary hoyle nonrendition potlike surflike rubification dulcifluous Saturnalian unconfidence Apneumona hedgy subharmonic undisputed monotypic pontifex Phalarism precursive uncock echinoderm antu rollick natricine presuperintendence pinnaclet precondemnation Atheriogaea volumescope Austrophilism stinking wildness noncoloring spaying somniloquy xi hierogrammatical winer ironback tarnside lampers handcraft glossophagine philophilosophos nonconcludent overaccumulate disbutton kinetomer thermostimulation stenogastric ovoviviparously recept firetop roughroot Muncerian prefiction Ovinae reactivity oncin pointer absolve unaccommodatingly telson ayelp rebegin unhomely Octavian scope Pentelic revocability juvenal spinobulbar erinaceous hield anaglyph strongylid strangling kala fibroplastic adactyl Pauline undispellable Frederick amylopsin informative Sisseton roominess unsurpassableness painstaker saturator laryngoscopical stereophotographic washbasin functionarism absorbability enscroll scunner masting lionet unbumptious stockishness prechemical nonmythical apache force isomastigate orthophosphate Palaeomastodon brachypyramid abscession acquisitum reputationless praisefully grama trapped Somal disturn menorrhagia faltering Yquem invective Hafgan isobarbaloin phototrichromatic ectomorphy rollickingness preponderance nonprobable counterreckoning unenforcedly Saratogan minienize limby lovelorn presartorial Chaetophoraceae intenable satisfying columnization brotulid interenjoy subtriplicated Vaudois Dioscorea Brachiata unpunishable Latvian siccity blossomtime Castalia dephlegmator apagogically Aglypha withdrawment hemoproctia unfailableness inventorial Pyrrhic barbiturate undetermination osteoscope lutulence Rajah tortricoid subglacially porwigle complacent archagitator sterigmatic hydrocycle misliken powerhouse manumission Dardistan oosporic vestal baller heterochronic flyless cuboidal adenology miscellaneous imperceptibly decohesion Babel thaliacean underivable misexample hypersophisticated Cucurbitaceae cherubic esophagotomy Suomic staghorn hysteric quadrumane keratocentesis middlings alley Delicious chymotrypsin cancroid aweary capersome Ashkenazim ventripotential Chlamydoselachus dithioic weeze ruck overhover stabulate littleneck duplone bulkhead niellated bellite samsara diligentness scritch amuck studbook guijo certifiableness tormentful milliare repromulgate synesthesia whitecoat osmometric periductal psorospermosis purificator untrochaic Jeremian copulate ratable dislodgement proferment evangelary overdevotedly lickspittling atrocity supracaudal uncompassionate nonsparking shaftfoot attemperation unentrance mispossessed dumpy strangership hygrodeik foundery scenic purchase scorch preaffiliation Cossaean tungstate hecte ureometer syllabatim wireless Zapoteco notarikon acroasphyxia endosalpingitis humpback unwist pedigerous peacemaking foremasthand annodated multicarinated Elaps seedbox loaferish proprietage Eumenes monochlor decarhinus ambry hemarthrosis echopractic Hamamelidoxylon schoolcraft scillipicrin Klanswoman glyceride dacryocystotomy muscose whau introductoriness propaedeutical pensived subarmor ichthyotomy Caesardom alkylic urethrorrhea platybrachycephalous disapprovingly sportsmanlike normoblastic scowlingly undervegetation glycogelatin antiprohibitionist intersex anthropophagistic garawi Lecanium incorporeal enfeeble iracund meteorogram transitoriness abbot guttural osteoid treader doxy os adephagan antiegotism tropeic deiformity Mackinaw confederationist foundership chondriomere hammerdress licentiate blossomhead basos Nazariteship pentapolis threefoldness archpresbyter houselet citronade collaborationism macromeric hendecoic Biblicism insulance karyomitoic Kekchi dural condensedness reavow stith coky mayfish uncongenial virucidal Acrydium cyanidation foliature unfructuously gold fractionally sparkless conceptional kettledrummer inventory knoxvillite indeformable Honduran beennut unelementary epicranial Anopla Anselm strabismical declarative agricultural abdominous Hansardization profanely untwisted tipstaff prederivation scrollwise unrefusingly soulfulness spyfault raiseman beroll oscheoplasty Lentibulariaceae onagraceous Nora eellike semiupright Tatary ninut baseball unifoliolate nextly shamefacedly unharbor omphaloncus sweatband premake hook fitchee sendable xyloid Lin preindication alpine planarioid mastlike servitude patterny goffering unfrightened genderer cafeneh forthwith intermenstruum bluggy buzylene faceteness Placophora mispleading sniffly dredge neurocity terminable trest stythe pitchometer breaker glossarize macrosymbiont perisphere torse garter ring bedstring hawserwise pyrocellulose soho silklike ateleological kinematic nectariferous freezer Byronic congressionist dandruffy Balkar tonsillectome crooningly hypodorian interregnum mystificatory flanched nonimmigrant ophthalmomalacia unhero meningocortical apologizer Jatulian nystagmus bailer worldling preadjunct deprivative babblishly ganglioid themeless gastrohelcosis housewifeliness psychoanalyzer pyelolithotomy ethmoid cyclomania cyathium fiduciary upher ethnize hexastemonous echinodermic sigillarian grubbiness overeducate flyflap tart statometer sixpence Capernaitish Delsartean celery astragalus overjoyful synactic unexceptionably Orobanche driblet rampire Mil wellington unepic pondage octocentenary Ansel unmackly nonfermentative silk angiolith sparrer frigorify preofficially bridle princeps pentathionic doltishness trunkless Idiosepiidae autohypnotization lingenberry nonsetting prescapula proagrarian nonlover bumbaste aischrolatreia tupanship proctoclysis basilweed counternoise interparietale Saccobranchiata tonga iceland mandelic monkeyish fanon sled taxine rattlingly monolithic oxbiter scelerat primitivism grapnel recreative plumbum enthusiastical stomachlessness busher uninsured unobjective collyrium aspheterism mantology monk troolie ghaist unplebeian fusible unjagged lazaret childlike Sid dihydroxy extractible hammy impetition rissel principalness parsonage yogoite extratension bombastic reblow Phajus merchantableness Dyophysitism attainability mycomycete unequated exalate rerun pneumonic supersympathy commenceable borele telemetric muskellunge eutropic Actaeon consentiently deferment microdrawing behammer Acacian guanaco unkillable eave empyrean nondivergent dubitatingly existentially pelvisternum Siva Birkenhead sneeshing Inodes worriedness outdraft squandermania ".split(
      " "
    );
  for (let i = 0; i < wordcount; i++) {
    result.push(text[Math.floor(Math.random() * text.length)]);
  }
  return result.join(" ");
};

const numbergen = (numbercount) => {
  let result = [];
  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numbercount; i++) {
    result.push(nums[Math.floor(Math.random() * nums.length)]);
  }
  return result.join("");
};

const arraygen = (wordcount, rowsnum) => {
  let result = [];
  for (let i = 0; i < rowsnum; i++) result.push(textgen(wordcount));
  return result;
};

const imagegen = (width = 640, height = 360) => {
  let bgcolors = ["277BC0", "554994", "FEC260", "2A0944", "FF1E00", "59CE8F"];
  return `https://via.placeholder.com/${width}x${height}/${
    bgcolors[Math.floor(Math.random() * bgcolors.length)]
  }/fff.png`;
};

const generate = (repeatnum) => {
  rownumber.value = 1;
  let final = [];
  let result = {};
  let obj = [...feilds.value];

  for (let x = 0; x < repeatnum; x++) {
    for (let i = 0; i < obj.length; i++) {
      let type = {
        rowNumber: rownumber.value,
        number: numbergen(obj[i].wordcount),
        string: textgen(obj[i].wordcount),
        fullname: fullnamegen(obj[i].wordcount),
        array: arraygen(obj[i].wordcount, obj[i].rowsarray),
        image: imagegen(obj[i].imagewidth, obj[i].imageheight),
        category: categorygen(),
      };
      result[obj[i].fieldname] = type[obj[i].type];
    }

    final.push(result);
    rownumber.value++;

    result = {};
  }
  finaloutput.value = JSON.stringify(final, undefined, 4);
};
const makecopy = () => {
  navigator.clipboard.writeText(finaloutput.value);
};
const makeslug = () => {
  let co = JSON.parse(finaloutput.value);
  co.forEach((ele) => (ele.slug = ele.title.replaceAll(" ", "-")));
  finaloutput.value = JSON.stringify(co, undefined, 2);
};
const darkmode = ref(false);
const switchmode = () => {
  darkmode.value = !darkmode.value;
  document.body.classList.toggle("darkmode");
};
</script>

<template>
  <header>
    <div class="container">
      <a href="/" class="logoimage"
        ><img src="./assets/logo.svg" alt="" /> Json Generate</a
      >
      <button @click="switchmode" :class="{ darkmodebtn: !darkmode }">
        <svg
          v-if="darkmode"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
          />
        </svg>
        <svg
          v-if="!darkmode"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
          />
        </svg>
      </button>
    </div>
  </header>
  <div class="container">
    <div class="btns">
      <button
        class="btn-blue"
        @click="
          showoutput = !showoutput;
          generate(rows);
        "
      >
        generate
      </button>
    </div>
    <button class="add-field btn-blue" @click="addfield">+</button>
    <div class="fields">
      <div class="field-header">
        <h3>Field Name</h3>
        <h3>type</h3>
        <h3>options</h3>
      </div>
      <ul class="field-content">
        <li v-for="(feild, index) in feilds" :key="feild.id">
          <input
            type="text"
            v-model="feild.fieldname"
            placeholder="Name of Feild"
          />
          <select v-model="feild.type">
            <option value="rowNumber">Row Number</option>
            <option value="number">Number</option>
            <option value="string">String</option>
            <option value="array">Array</option>
            <option value="image">Image</option>
            <option value="category">Category</option>
            <option value="fullname">Full Name</option>
          </select>
          <input
            v-model="feild.wordcount"
            type="text"
            placeholder="num of words"
            v-if="
              feild.type != 'rowNumber' &&
              feild.type != 'image' &&
              feild.type != 'category'
            "
            title="number of words"
          />
          <input
            type="text"
            v-model="feild.rowsarray"
            v-if="feild.type == 'array'"
            placeholder="num of array"
            title="number of array"
          />
          <input
            type="text"
            v-model="feild.imagewidth"
            v-if="feild.type == 'image'"
            placeholder="Width"
            title="image width"
          />
          <input
            type="text"
            v-model="feild.imageheight"
            v-if="feild.type == 'image'"
            placeholder="Height"
            title="image Height"
          />
          <button class="delete" @click="removefield(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
    <transition name="bounce">
      <div class="output_section" v-if="showoutput">
        <div class="overlay" @click="showoutput = !showoutput"></div>
        <div class="out">
          <h3>Preview</h3>
          <div class="btns f-center">
            <button
              v-if="showAdvanced"
              @click="
                generate(rows);
                defaultTab = true;
                slugTab = false;
              "
              class="btn-blue tab-btn"
              :class="{ active: defaultTab }"
            >
              Default
            </button>
            <button
              v-if="showAdvanced"
              title="Must be a 'title' and 'slug'"
              @click="
                makeslug();
                defaultTab = false;
                slugTab = true;
              "
              class="btn-dark tab-btn"
              :class="{ active: slugTab }"
            >
              With Slug
            </button>

            <label title="To Make Slug for url " v-if="!showAdvanced"
              ><input type="checkbox" v-model="showAdvanced" /> Make Slug</label
            >
          </div>
          <textarea spellcheck="false" v-model="finaloutput"></textarea>
          <div class="btns">
            <button class="btn-teal" @click="makecopy">
              copy to clipboard
            </button>
            <button class="btn-blue" @click="showoutput = !showoutput">
              Close
            </button>
          </div>
        </div>
      </div>
    </transition>
    <div class="foot">
      <hr />
      <div>
        <label for="rows"># Rows: </label>
        <input type="text" id="rows" v-model="rows" placeholder="rows" />
      </div>
    </div>
  </div>
  <footer>
    <div class="container">
      <p>Made With Love by <span>Abdallah M.Shaltout</span></p>
    </div>
  </footer>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
