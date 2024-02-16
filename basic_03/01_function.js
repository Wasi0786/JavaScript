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

// const result = addTwoNumbers(3,4)
// console.log("Result... ",result);

function logingUserMessage(username = "sam"){
    if (!username) {
        console.log("please enter user name");
    }
    return `${username} just Logged In`
}

// console.log(logingUserMessage()); 

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,230,450,15,515,12,2));


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 266
// }
// )


const myNewArray = [100,200,100,600]

function returnSecondValue(getAarry){
   return getAarry[1]
}

// console.log(returnSecondValue(myNewArray) );
// console.log(returnSecondValue([50,10,40,50]));


