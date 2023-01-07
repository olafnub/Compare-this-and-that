let string1 = "This 12, and 12 and, that";
let string1Array = [...string1];
let buildWord = "";
let buildArray = [];

let array2 = ["this 12, and wa, that12"];

string1Array.forEach((x, i) => {

  if (x != "," || i !=string1Array.length-1) {
    buildWord += x;
  }
  else if (x == " " && string1Array[i-1] == ",") {
    x++;
  }
  else {
  buildArray.push(buildWord);
  buildWord = "";
  }

  });

  checkeEach();
  function checkeEach() {
    buildArray.forEach(x => {
        console.log(x);
    })
  }
