
// const tinderUser = new Object()
const tinderUser = {}  

tinderUser.id = "123abc"
tinderUser.name = "Wasi Ahamad"
tinderUser.isLogged = false 

// console.log((tinderUser));

const regularUser = {
    email: "Wasi@gmail.com",
    fullName: {
        firstName: "Wasi",
        lastName: "Ahmad"
    }
}

// console.log(regularUser.fullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

// const obj4 = {obj1,obj2,obj3}
// const obj4 = Object.assign({}, obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);


const user = [
    {
        id: 1,
        email: "Wasi@facebook.com"
    },
    {
        id: 2,
        email: "ali@facebook.com"
    },
    {
        id: 3,
        email: "sahbe@facebook.com"
    },
    {
        id: 4,
        email: "razi@facebook.com"
    },
    
]
// console.log(user[3].email); 
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedi'));
