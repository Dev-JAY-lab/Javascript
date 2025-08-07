// This code defines a faulty calculator that randomly chooses between two sets of operations.
// Depending on the random value, it will either perform correct or incorrect operations.

let random = Math.random();
if (random < 0.1) {
    function sum (a ,b) {
        return a + b;
        
    }
    function sub (a ,b) {
        return a - b;
        
    }
    function multi(a ,b) {
        return a * b;
        
    }
    function div (a ,b) {
        return a / b;
        
    }
} else {
      function sum (a ,b) {
        return a - b;
        
    }
    function sub (a ,b) {
        return a + b;
        
    }
    function multi(a ,b) {
        return a / b;
        
    }
    function div (a ,b) {
        return a * b;
        
    }



} 
//calling the functions
// and printing the results
let a = sum(5, 3);
let b = sub(5, 3);  
let c = multi(5, 3);
let d = div(5, 3);
//console.log("Sum: " + a);
// console.log("Sub: " + b);
// console.log("multi: " + c);
// console.log("div: " + d);
// console.log("Random value: " + random);
console.log ( `Sum:${a}  ,  subtraction is: ${b} ,   multiply is: ${c}  ,  devide is: ${d}  ,  random value is: ${random}` );
// one liner for passing variables


