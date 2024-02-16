
// ** Immdeately invokes Function Expressions (IIFE)


(function one(){
console.log(`DB Connected`);
})();


((user) => {
    console.log(`DB Connected two := ${user}`);
})("Wasi");