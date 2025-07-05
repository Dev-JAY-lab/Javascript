// const num=20;
// const num2=30;
// var result;
// function calculate(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         case "%":
//             result = num1 % num2;
//             break;
//         default:
//             break;
//     }
// }
// calculate(num, num2, "+");
// console.log(result);







//calculator
const num = 20;
const num2 = 30;
let result;
function calculate(num, num2, result) {
    switch (result) {
        case "+":
            console.log(num + num2);
         
            break;
            case "-":
            console.log(num - num2);
         
            break;
            case "*":
            console.log(num * num2);
         
            break;
            case "/":
            console.log(num / num2);
         
            break;
    
        default: 
        console.log("Invalid operator");
            break;
    }
    
}
calculate(num, num2,"+");
