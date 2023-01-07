let names = "This, and, that"
let namesArray = [...names];
let buildWord = "";
let buildArray = [];

namesArray.forEach((x, i) => {
	if (x == ",") {
  buildArray.push(buildWord);
  buildWord = "";
  } 
  else if (x == " ") {
  x++;
  }
  else {
  buildWord += x;
  }
 if (i == namesArray.length-1) {
    buildArray.push(buildWord);
  }
  
  });


console.log(buildArray);