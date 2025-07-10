let arr1 = [32,54,6,8, 5, 0 , 9,8,4,2]
 
console.log(arr1.some(function even(num) {
    return num % 2 === 0;
})); // Output: true

{
let arr1 = [32,54,6,8, 5, 9, 0 ,8,4,2]
console.log(arr1.every(function even(num) {
    return num % 2 === 0;
})); // Output: false


}