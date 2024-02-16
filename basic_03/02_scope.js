// It is Globle Scope
// var c = 300;

let a = 100
if (true) { // This is Block Scope
  let a = 10;
  const b = 20;
  var c = 30;
//   console.log( "inner:=",a);
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    let username = "wasi"

    function two(){
    let age = 18
    // console.log(`the name of user is ${username} and age is ${age}`);
    }

    // console.log(age);
    two()
}

one()

// **************** intersting ***********************
console.log(addOne(2));
function addOne(num) {
    return num+1
}

const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(2));

