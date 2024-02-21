
//*************** */ for of loop **************

const arr = [1,2,3,4]
for (const num of arr) {
    // console.log(num);
}


const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(greet);
}



// ********* Maps ********

const map = new Map()

map.set('IN', "India")
map.set('Usa', "America")
map.set('Fr', "France")
map.set('Fr', "France")

console.log(map);4

for (const [key, value] of map) {
    // console.log(key, "and ", value);
}
