// const myArr = ["js", "cpp", "rb", "swift"]

// const values = myArr.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(values);
// // for each doesn't return!!!

// const myNums = [1,2,3,4,5,6,7,8,9];

// let filteredNums = myNums.filter((num) => (num > 4));

// console.log(filteredNums);

// let mappedNums = myNums.map((num) => num + 10)
// console.log(mappedNums);

const myNums = [1 ,2, 3]
const reduceNums = myNums.reduce((accumulator, currentValue) => {
    console.log(accumulator);
    console.log(`current Value: ${currentValue}`);
    return accumulator + currentValue}
    , 0);
console.log(reduceNums);