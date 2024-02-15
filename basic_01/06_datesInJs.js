// Dates 

let myDate = new Date()
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 23)
// let myCreateDate = new Date(2023, 0, 23,4,4)
// let myCreateDate = new Date("2023-01-23")
let myCreateDate = new Date("02-15-2024")
// console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate  = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getDay());


let newdate =  newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(newdate);

