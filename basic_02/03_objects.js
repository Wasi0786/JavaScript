// singleton
//Object.create

// object literals

const sym = Symbol("key1")

const jsUser = {
  name: "wasi",
  "full Name":"Wasi ahmad",
  age: 21,
  [sym]: "mykey1",
  email: "wasi@google.com",
  isLoggedin: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log(jsUser[sym]);

// jsUser.email = "ali@google.com"
// console.log(jsUser.email);
// Object.freeze(jsUser)
// jsUser.email = "Wasi@gmail.com"
// console.log(jsUser.email);

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

// console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`hello js user i am, ${this.name}`);
}

console.log(jsUser.greeting2());