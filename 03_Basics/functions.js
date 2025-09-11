// function gets ececuted only when () added to its name!!k

// function sayMyName(name) => here name is a parameter
// sayMyName("Neha") => here Neha is an argument!!
// after return, no line of code within a function gets executed!!

//rest operator
// function calculateCartPrice(...num1) {
//     return num1
// }
//console.log(calculateCartPrice(100, 300 ,700)); // [100, 300, 700]

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(100, 300 ,700)); // [700];

const user = {
    username: "neha",
    price: 200
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} & Price is ${anyObject.price}`)
}

handleObject(user)

const myNewArr = ["pink", "blue", "yelllow"];
function stateColors(anyArray) {
    console.log(`color 1 is ${anyArray[0]} and color 3 is ${anyArray[2]}`);
}
stateColors(myNewArr);