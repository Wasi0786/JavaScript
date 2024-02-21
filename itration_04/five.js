const codeing = ["js", "ruby", "java", "python", "cpp"]

codeing.forEach( function (item) {
    // console.log(item);
} )

codeing.forEach((i) => {
    // console.log(i);
})

function printMe(item){
    // console.log(item);
}

// codeing.forEach(printMe)

// codeing.forEach( (item, index, arr) => {
//       console.log(item, index, arr);
// })



const myCoding = [
    {
        lanName: "javaScript",
        lanFileName: "js"
    },

    {
        lanName: "python",
        lanFileName: "py"
    },

    {
        lanName: "cpp",
        lanFileName: "c++"
    },

    {
        lanName: "c Language",
        lanFileName: "c"
    },
]

myCoding.forEach( (item)=>{
console.log(item.lanName);
} )