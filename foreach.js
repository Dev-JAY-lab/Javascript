let a=[ 1,2,43 ,,5,5,]
let sortd= a.sort((a,b)=>{
    return a-b
})
for (const element of sortd) {
    console.log(element);
}

