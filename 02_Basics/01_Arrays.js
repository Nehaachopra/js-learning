const myArr = [0, 1, 2, 3, 4, 5];
const myArr1 = new Array(6,7,8,9);

//array methods
myArr.push(6);
myArr.pop(6);
myArr.unshift(9); //adds it at first and shifts rest to right
myArr.shift() // removes first element of array
myArr.includes(9); // false;
myArr.indexOf(2); //2

const newArr = myArr.join();//converts array to string
// console.log(myArr);
// console.log(newArr);

const myn1 = myArr.slice(1, 3);
// console.log("A ", myArr);
// console.log(myn1);

const myn2 = myArr.splice(1,3);
// console.log("B " , myArr);
// console.log(myn2);

const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHeroes = ["Superman","Flash", "Batman"];

//marvelHeros.push(dcHeroes);
// const dcMarvelHeroes = marvelHeroes.concat(dcHeroes);
// console.log(dcMarvelHeroes);

const allNewHeroes = [...marvelHeroes, ...dcHeroes ];
console.log(allNewHeroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const usableAnotherArray = anotherArray.flat(Infinity);
console.log(usableAnotherArray);

console.log(Array.isArray("neha"));
console.log(Array.from("neha"));
console.log(Array.from({name: "neha"})); // specify whether you need whether keys need to be in array or values!!!

let score1 = 100
let score2 = 200
console.log(Array.of(score1, score2));