const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

const myArr = ["js", "cpp", "rb", "swift"]
for (const key in myArr) {
    console.log(myArr[key]);
}

const map = new Map();
map.set('IN', 'India')
map.set( 'USA', 'United States Of America')
map.set( 'FR', 'France')

for (const key in map) {
    console.log(key);
} //maps not iterabe in for in!!!

function printMe(item) {
    console.log(item);
}
myArr.forEach(printMe);

myArr.forEach((item, index, array) => {
    console.log(item, index, array);
})

const myCoding = [
    {
        languageName: "javascript",
        languagFileName: "js"
    },
    {
        languageName: "cpp",
        languagFileName: "c++"
    },
    {
        languageName: "ruby",
        languagFileName: "rb"
    }

]

myCoding.forEach((obj) => {
    console.log(obj.languageName);
});
