const form = document.querySelector("#form");
form.addEventListener('submit', function(event) {
  event.preventDefault();
  getUserInput();
  getArrays();
  getSimilar();
  getDiffference();
  removeSeperation();
  outputResults();
  document.forms[0].reset();
})
let firstInputTitle;
let secondInputTitle;
let firstInputList;
let secondInputList;
let firstSeperation;
let secondSeperation;

function getUserInput() {
  firstInputTitle = document.getElementById("firstInputTitle");
  secondInputTitle = document.getElementById("secondInputTitle");

  firstInputList = document.getElementById("firstInputList").value;
  secondInputList = document.getElementById("secondInputList").value;

  firstSeperation = document.getElementById("firstSeperation").value;
  secondSeperation = document.getElementById("secondSeperation").value;
}

// Switch to arrays
let arrayFirst;
let arraySecond;
function getArrays() {

let cappitalizeString1 = firstInputList.toUpperCase();
let cappitalizeString2 = secondInputList.toUpperCase();

let intoArray1 = cappitalizeString1.split(firstSeperation).sort();
let intoArray2 = cappitalizeString2.split(secondSeperation).sort();

arrayFirst = intoArray1.map(x => x.trim());
arraySecond = intoArray2.map(x => x.trim());
}

// Compare similar
let buildSimilar = [];
let buildDifferent = [];
function getSimilar() {
    arrayFirst.filter(x => arraySecond.includes(x))
    .forEach(x => buildSimilar.push(x));
}
// Compare difference
function getDiffference() {
  arrayFirst.filter(x => !arraySecond.includes(x))
    .forEach(x => buildDifferent.push(x));
}

// Check for non char in beginning
function removeSeperation() {
  if (buildSimilar[0] === "") {
    buildSimilar.shift();
  }
  else if (buildDifferent[0] == "") {
    buildDifferent.shift();
  }
}
// Output for user
let similarMatches = document.querySelector("#similarMatches pre");
let differentMatches = document.querySelector("#differentMatches pre");

function outputResults() {
  similarMatches.textContent = buildSimilar;
  differentMatches.textContent = buildDifferent;
}


// DELETE
document.getElementById("firstInputTitle").value = "Ultimate Sun Protection Lotion";
document.getElementById("secondInputTitle").value = "Lotion SPF 50+ Sunscreen";
document.getElementById("firstSeperation").value = ",";
document.getElementById("secondSeperation").value = ",";
document.getElementById("firstInputList").value = "ITANIUM DIOXIDE 9.1% , Sunscreen ZINC OXIDE 19.3% , Sunscreen INACTIVE INGREDIENTS:DIMETHICONE, WATER, BUTYLENE GLYCOL, GLYCERIN, DIISOPROPYL SEBACATE, POLYMETHYL METHACRYLATE, HYDROGENATED POLYDECENE, PEG-10 DIMETHICONE, CYCLOMETHICONE, PEG-9 POLYDIMETHYLSILOXYETHYL DIMETHICONE, BIS-BUTYLDIMETHICONE POLYGLYCERYL-3, PEG-6, TRIMETHYLSILOXYSILICATE, PEG-32, PEG/PPG-14/7 DIMETHYL ETHER, SCUTELLARIA BAICALENSIS ROOT EXTRACT, RUBUS IDAEUS (RASPBERRY) FRUIT EXTRACT, ALOE BARBADENSIS LEAF EXTRACT, THYMUS SERPILLUM EXTRACT, ALUMINUM DISTEARATE, ALUMINUM HYDROXIDE, HYDROGEN DIMETHICONE, ISOSTEARIC ACID, DISTEARDIMONIUM HECTORITE, HYDRATED SILICA, SODIUM METAPHOSPHATE, TRIETHOXYCAPRYLYLSILANE, STEARIC ACID, DEXTRIN PALMITATE, DISTEARYLDIMONIUM CHLORIDE, TOCOPHEROL, SYZYGIUM JAMBOS LEAF EXTRACT,"