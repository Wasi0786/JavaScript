// ******************** Arrays ********************

const myArr = [0,1,2,3,4,5]
const myHeroes = ["Shaktiman",  "Superman"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[1]);


// *********** Array Methods **************

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0) add Element in 0 index
// myArr.shift()  remove element from the first index

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(typeof newArr);
// console.log(myArr);


// ******** slice, splice ***********

console.log("A", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C", myArr);