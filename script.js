let string1 = "This 12, and 12 and, that";
let string1Array = [...string1];
let buildWord = "";
let buildArray = [];

let array2 = ["this 12, and wa, that12"];

string1Array.forEach((x, i) => {
if (x == ",") {
  buildArray.push(buildWord);
  buildWord = "";
  } 
else if (x == " " && string1Array[i-1] == ",") {
        x++;
}
else {
    buildWord += x;
    }
  
 if (i == string1Array.length-1) {
    buildArray.push(buildWord);
  }
  
  });
  checkeEach();
  function checkeEach() {
    buildArray.forEach(x => {
        console.log(x);
    })
  }
