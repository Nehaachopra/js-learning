// singletons when declared using constructors

const mySym = Symbol("key1");


const jsUser = {
    name: "Neha",
    "full name": "Neha Chopra",
    [mySym]: "mykey1",
    age: 18,
    location: "Hiriyur",
    email: "neha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// Object.freeze(jsUser);
// jsUser.email = "neha@gmail.com"
// console.log(jsUser.email);
// console.log(jsUser);


jsUser.greeting  = function () {
    console.log("Hello js user!");
};
jsUser.greetingTwo = function() {
    console.log(`Hello ${this.name}!`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());