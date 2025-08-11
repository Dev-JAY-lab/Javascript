// this code shows how  you can sort value using sort method and forof loop  
let a=[ 33, 22, 55, 45, 1 ,4 , 8, 1,2,43 ,,5,5,]
let sortd= a.sort((a,b)=>{
    return a-b
})
for (const element of sortd) {
    console.log(element);
}

