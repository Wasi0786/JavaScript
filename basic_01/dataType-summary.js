// *************** Primirive ***************
// 7 types: string, number , boolean, null, undefined, bigint, symbol


const scroe = 100;
const scoreVal = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 4548468484844854565454n

//Refrence (Non Primitive)

// Array, Object, Functions

const array = ["wasi" , "ali", " saheb"]

const myObj = {
    name:"wasi",
    age: 21
}
 
const myFunction= function() {
console.log("hello world");
}

// console.log(typeof bigNumber);

// console.log("array..." +  typeof array);






// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "Wasi Coding"

let anotherName = myYoutubeName;
anotherName = "ali Coding"

// console.log(myYoutubeName);
// console.log(anotherName);


// **********************************
 
let userOne = {
    name: "Wasi",
    age: 22
}

let userTwo = userOne
userOne.age = 20

console.log(userOne)
console.log(userTwo);