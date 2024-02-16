const marvel_heroes = ["thore", "Ironman", "Spiderman"]
const dc_heroes = ["batman", "Superman" ,"flash"]


// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);  Combines two or more arrays. concat method returns a new array without modifying any existing arrays.

const allNewHeroes = [...dc_heroes,...marvel_heroes]
// console.log(allNewHeroes);

const anotherArray = [1,2,3,[4,5,6],7,[8,9,[10,11,12]]]
// console.log(anotherArray.flat(Infinity));

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"));
// console.log(Array.from({name:"Hitesh"})); // intersting


let a = 100
let b = 200
let c = 300

console.log(Array.of(a,b,c));