// there are 2 types of datatypes - primitives and non primitives
// primitives - string, number, boolean, null, undefined, symbol, bigInt
// non-primitive or references - arrays, objects, functions

// JS is dynamic language (because you do not have to define the datatype of variabe!!)

//datatype => typeof
//number=>number
//null=>object
//undefined=> undefined
//symbol=> symbol
//array=> object
// function=> function
//object=> object


// primitives use stack memory
// non-primitives use heap memory

//stack memory working(call by value)
let oneName = "Neha"
let anotherName = oneName;
anotherName = "Swayam"

console.log(oneName); //Neha
console.log(anotherName); //Swayam


//heap memory working(call by reference)
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne;
userTwo.upi = "userTwo@ybl"

console.log(userOne.upi); // userTwo@ybl