// Immediatey Invoked Function Expressions (IIFE)
// to keep function unpolluted from global scope, these are used!!

// Named iife
(function child() {
    console.log(`DB Connected`);
}) ();

// Non named iife
((name) => {
    console.log(`DB Connected ${name}`);
})('Neha'); /// always remember to end with semi colons or ellse our code wil not know when an iife ends!!
