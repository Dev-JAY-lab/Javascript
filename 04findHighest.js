let arr= [ 3, 5, 3, 1, 199, 82, 80, 83, 4,] 
function findhighestValue(arr) {
    let max = arr[0];
    for(let i =1; i < arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }

    }
    return max;
}
console.log(findhighestValue(arr)); 
