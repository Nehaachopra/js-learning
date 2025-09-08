let score = 33;

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof(valueInNumber));
// Number operation returns "NaN" if variable converted is not a number eg:33abc or is undefined
// it returns 0 if variable converted is null or false
// it returns 1 if variablle converted is true.

let valueInBoolean = Boolean(score);
console.log(valueInBoolean);
//Boolean operation conversions:
// 1=> true; 0=> false; number>0 => true; number<0 => true
// "" => false; "neha" =>  true

let valueInString = String(score);
console.log(valueInString);

let value = 3;
let negValue = -value;
//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"


//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"