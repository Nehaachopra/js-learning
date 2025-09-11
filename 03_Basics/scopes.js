function newFunction () {
    let firstname = "Neha";
    console.log(firstname);
}

//console.log(firstname); => reference error

// let a = 300;
// if (true) {
//     a = a+ 400
// }
// console.log(a); // 700

// let a = 100
// if (true) {
//     let a = 60;
//     console.log(`Inner: ${a}`); => 60
// }
// console.log(`Outer: ${a}`);=> 100

function one () {
    const username = "neha"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    two();
}
//one();


//console.log(addOne(5)); //works well
function addOne(num) {
    return num + 1;
}

//addTwo(5); //error due to hoisting!!
const addTwo =  function(num) {
    return num +2;
}


// const user = {
//     username: "Neha",
//     price: 999,

//     welcomeMessage: function () {
//         console.log(`${this.username}, Welcome to website`);
//         console.log(this); //returns object
//     }
// }
//  user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();
//console.log(this); => {}

// const user = {
//     username: "Neha",
//     price: 999,

//     welcomeMessage: () => {
//         console.log(`${this.username}, Welcome to website`);
//         console.log(this); //returns {}
//     }
// }
//  user.welcomeMessage();

const addTwoVersion2 = (num1, num2) => {
    return num1 + num2
}

console.log(addTwoVersion2(1, 10));

//const addTwoVersion3 = (num1, num2) => num1 + num2
// const addTwoVersion3 = (num1, num2) => (num1 + num2)
const addTwoVersion3 = (num1, num2) => ({username: "Neha"})
console.log(addTwoVersion3(10, 3));