// this code will return this output a hollow reactangle
// +++++
// +   +
// +   +
// +++++


let n=4;
let m=5;

for(let i =1; i<=n; i++){
    let str=""
    for(let j =1 ; j<=m;j++){
     if(i == 1 ||  j==1 || i==n || j==m ){
        str+="+"
     }else{
        str+= " "
     }
    }
    console.log(str);
    
}