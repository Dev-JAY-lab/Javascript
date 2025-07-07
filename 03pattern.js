
// printing this pattern using nested for loop


// + + + 
// + + 
// + 
// + 
// + + 
// + + + 



for(let i =3; i>=1; i--){
    let str= ""
    for(let j=1; j<=i; j++){
        str += "+ ";
    }
    console.log(str)
}
for(let i =1; i<=3; i++){
    let str= ""
    for(let j=1; j<=i; j++){
        str += "+ ";
    }
    console.log(str)
}


