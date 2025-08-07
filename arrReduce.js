// finding factorial of any num using reduce method 
let arr1 = [6, 5, 4,3,2 ,1 ];

let factorial = arr1.reduce((a, b) => {
    return a * b;
}, ); // initial value is 1 for multiplication if this will 0 the output will also 0

console.log(factorial);