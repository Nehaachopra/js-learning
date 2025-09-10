//const tinderUser = new Object()  => Singleton
const tinderUser = {} // =>  Non Singlton
tinderUser.id = "123abc";
tinderUser.name = "Neha";
tinderUser.isLoggedIn = false;

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Neha",
            lastname: "Chopra"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {
    1:"a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

//const obj3 = { obj1, obj2 } // { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'c', '2': 'd' } }
//const obj3 = Object.assign({}, obj1, obj2) // adding {} in beginning will ensure the concatednated objects are stored in new object and not in obj1!!
const obj3 = { ...obj1, ...obj2}
//console.log(obj3);


const users = [
    {
        name: "Neha",
        id: "neha123"
    }, {
        
    }, {

    }, {

    }
]
//console.log(users[0].name);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    coursename: "js-hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// +++++++ Destructuring Objects +++++++++++++++

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);

// json format
// {
//     "name": "hitesh",
//     "price": "free",
//     "coursename": "js-hindi"
// }