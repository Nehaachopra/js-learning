const month = 3;
switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log('Defaut case match');
        break;
}

// falsy values
// false, 0, -0, bigInt, "", null, undefined, NaN

//truthy values
//[], "0", 'false', " ", {}, function() {}

//nullish coalescing operator (??)
let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
//val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;
console.log(val1);

//terniary operator
const iceTeaPrice = 100
iceTeaPrice >= 100 ? console.log("less than 101") : console.log("more than 100");