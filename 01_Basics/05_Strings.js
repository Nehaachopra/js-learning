const nameOne = "Neha";
const numberOne = 35;
console.log(nameOne+ numberOne); // previous version of concatenation
console.log(`My name is ${nameOne}. My number is ${numberOne}`);

const gameName = new String('Nehaa')
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const subGameName = gameName.substring(0, 3); 
console.log(subGameName); //Neh

const subGameName1 = gameName.slice(2,  -2);
console.log(subGameName1); //

const subGameName2 = "        neha    ";
console.log(subGameName2.trim());

const url = "https://neha.com/neha%20chopra" // here %20 is space!!
const modifiedUrl = url.replace("%20", "-");
console.log(url);
console.log(modifiedUrl);
console.log(url.includes("neha"));

const anotherName = "neha-chopra-t"
console.log(anotherName.split('-'))

//escape characters 
// \n - new line
// \t - tab space
// strings are immutatable

