const form = document.querySelector("#form");
form.addEventListener('submit', function(event) {
  event.preventDefault();
  getUserInput();
  getArrays();
  getSimilar();
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
let intoArray1 = firstInputList.split(firstSeperation).sort();
let intoArray2 = secondInputList.split(secondSeperation).sort();

arrayFirst = intoArray1.map(x => x.trim());
arraySecond = intoArray2.map(x => x.trim());
}

// Compare similar
let buildSimilar = [];
let buildDifferent = [];
function getSimilar() {
  for (let i = 0; i < arraySecond.length; i++) {
    arrayFirst.filter(n => n === arraySecond[i]).forEach(x => {
      buildSimilar.push(x);
    })
    debugger;
}
  
}

// DELETE
document.getElementById("firstInputTitle").value = "Ultimate Sun Protection Lotion";
document.getElementById("secondInputTitle").value = "Lotion SPF 50+ Sunscreen";
document.getElementById("firstSeperation").value = ",";
document.getElementById("secondSeperation").value = ",";