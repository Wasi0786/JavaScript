// console.log("W");
// console.log("A");
// console.log("S");
// console.log("I");

function sayMyName() {
  console.log("W");
  console.log("A");
  console.log("S");
  console.log("I");
}

// sayMyName()

function addTwoNumbers(num1,num2){
    return num1 + num2
//   console.log(num1+num2);
}

const result = addTwoNumbers(3,4)
// console.log("Result... ",result);

function logingUserMessage(username = "sam"){
    if (!username) {
        console.log("please enter user name");
    }
    return `${username} just Logged In`
}

console.log(logingUserMessage()); 
