// const promiseOne = new Promise(function (resolve, reject) {
//     //Do an async task!
//     //Database calls, Cryptography, Network calls
//     setTimeout(function() {
//         console.log("Async task is complete");
//         resolve();
//     }, 1000);
// });

// promiseOne.then(function() {
//     console.log("promise consumed")
// });

// new Promise(function (resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task 2 is complete!");
//         resolve()
//         }, 1000)
// }).then(function () {
//     console.log("Promise 2 consumed!");
// })

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function() {
//         resolve({username: "Neha", email: "neha@google.com"})
//         }, 1000)
// });

// promiseThree.then(function (user) {
//     console.log(user);
// }) 

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function() {
//         let error = false;
//         if (!error) {
//             resolve({username: "Neha", email: "neha@google.com"})
//         }
//         else {
//             reject("ERROR: Something's wrong!!")
//         }
//     }, 1000)
// });

// promiseFour
// .then(function (user) {
//     console.log(user);
//     return user.username;
// })
// .then(function(username) {
//     console.log(username);
// })
// .catch(function(error) {
//     console.log(error);
// })
// .finally(function() {
//     console.log("The promise is either resolved or rejected!");
// })
//console.log(username);


// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function() {
//         let error = true;
//         if (!error) {
//             resolve({username: "Neha", password: "123"})
//         }
//         else {
//             reject("ERROR: Something's wrong!!")
//         }
//     }, 1000)
// });

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);   
//     } catch (error) {
//         console.log(error)
//     }
// }
// // consumePromiseFive();

// async function fetchUserNames() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json();
//         console.log(data);   
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// fetchUserNames()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})