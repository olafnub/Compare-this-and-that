let submit = document.getElementById("submit");
submit.addEventListener("click", checkEach);

let title1;
let title2;

function checkEach() {
title1 = document.getElementById("firstInputTitle").value;
title2 = document.getElementById("secondInputTitle").value;

  returnBuiltArrays(title1, string1Array, buildArray1);
  returnBuiltArrays(title2, string2Array, buildArray2);
}

let string1 = "This 12, and 12 and, that, same, sure";
let string2 = "and Was, bY Then, Straight 43%, same, sure";
let string1Array = [...string1];
let string2Array = [...string2];
let buildWord = "";
let array1Title = "";
let array2Title = "";
let buildArray1 = [];
let buildArray2 = [];
let similarMatches = [];
let differentMatch = [];
let lock=0;

function returnBuiltArrays(title, stringArray, buildArray) {
    for (let i = 0; i <= stringArray.length; i++) {

    if (stringArray[i] == " " && stringArray[i-1] == ",") {
      
    }
    else if (stringArray[i] != "," && i != stringArray.length) {
      buildWord += stringArray[i];
    }
    else {
    buildArray.push(buildWord.toUpperCase());
    buildWord = "";
    }
  }
  lock++;

  if (lock == 2) {
    compareArray();
  }
} 

let box1 = document.querySelector("#similarMatches pre");
let box2 = document.querySelector("#differentMatches pre");

function compareArray() {
  for (let j = 0; j < buildArray2.length; j++) {
    buildArray1.filter(n => n===buildArray2[j])
      .forEach(n => similarMatches.push(n));
  }
  buildArray1.filter(n => n != similarMatches)
  .forEach(n => differentMatch.push(n));
  

  box1.textContent = similarMatches;
  box2.textContent = differentMatch.join();
}


