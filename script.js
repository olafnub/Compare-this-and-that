let string1 = "This 12, and 12 and, that";
let string1Array = [...string1];
let buildWord = "";
let buildArray = [];

let array2 = ["this 12, and wa, that12"];

  for (let i = 0; i <= string1Array.length; i++) {

  if (string1Array[i] == " " && string1Array[i-1] == ",") {
    
  }
  else if (string1Array[i] != "," && i != string1Array.length) {
    buildWord += string1Array[i];
  }
  else {
  buildArray.push(buildWord.toUpperCase());
  buildWord = "";
  }
}


  checkeEach();
  function checkeEach() {
    buildArray.forEach(x => {
        console.log(x);
    })
  }
