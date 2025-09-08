console.log(2 > 1);
// works as expected by returing boolean

console.log("2" > 1);
console.log("1" < 2);
// works by converting string to number

// conversions convert lhs and rhs to same datatype whereas equality operations does not!!

// === does strict check!!! no conversions happen here!!