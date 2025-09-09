let myDate = new Date()
// console.log(myDate.toString()); // Tue Sep 09 2025 07:32:14 GMT+0000
// console.log(myDate.toDateString()); //Tue Sep 09 2025
// console.log(myDate.toISOString());//2025-09-09T07:32:14.853Z
// console.log(myDate.toLocaleDateString());//9/9/2025
// console.log(myDate.toLocaleString()); //9/9/2025, 7:34:17 AM
// console.log(myDate.toLocaleTimeString()); //7:34:56 AM

// let myCreatedDate = new Date(2025, 10,12);//November
// let myCreatedDate = new Date(2025, 10,12, 13,29,50);
// let myCreatedDate = new Date("2025-10-12");// october
let myCreatedDate = new Date("10-12-2025");
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getHours());

newDate.toLocaleString('default', {
    weekday: "long"
})