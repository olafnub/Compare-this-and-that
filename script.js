let names = "This 12, and 12 and, that"
let namesArray = [...names];
let buildWord = "";
let buildArray = [];

namesArray.forEach((x, i) => {
if (x == ",") {
  buildArray.push(buildWord);
  buildWord = "";
  } 
else if (x == " " && namesArray[i-1] == ",") {
        x++;
}
else {
    buildWord += x;
    }
  
 if (i == namesArray.length-1) {
    buildArray.push(buildWord);
  }
  
  });
  checkeEach();
  function checkeEach() {
    buildArray.forEach(x => {
        console.log(x);
    })
  }

// console.log(buildArray);