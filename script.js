const form = document.querySelector("#form");
form.addEventListener('submit', function(event) {
  event.preventDefault();
  getUserInput();
  getArrays();
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

  firstInputList = document.getElementById("firstInputList");
  secondInputList = document.getElementById("secondInputList");

  firstSeperation = document.getElementById("firstSeperation");
  secondSeperation = document.getElementById("secondSeperation");
}

// Arithmetic
let arrayFirst;
function getArrays() {
arrayFirst = firstInputList.value.split(',');
console.log(arrayFirst);
}

// DELETE
document.getElementById("firstInputTitle").value = "Ultimate Sun Protection Lotion";
document.getElementById("secondInputTitle").value = "Lotion SPF 50+ Sunscreen";
document.getElementById("firstSeperation").value = ",";
document.getElementById("secondSeperation").value = ",";