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