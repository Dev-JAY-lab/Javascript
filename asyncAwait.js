function fatchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data recived ✅"),
      resolve("Data printing...")

    }, 1000);
  })

}

async function getData() {
  console.log("Processing data...")
  const data = await fatchdata()
  console.log(data);

}
getData()


function name(fullname) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(fullname)
      resolve()
    }, 1500);
  })
}




async function nameOut() {
    await name("JAY")
    await name("Age = 29")
    await name("MUMBAI")

  }
  nameOut()



// setTimeout(() => {
//     clearInterval(set)

// }, 15000);

// let set = setInterval(() => {
//     console.log("JAY");


// }, 2000);


// ex 1 w
// let promise= new Promise((resolve, reject) => {
//     let i=false
//     if (i===true) {
//         resolve("Exicuted")

//     } else {
//         reject("Not Exicuted")

//     }
// })
// promise.then((data) => {
//     console.log(data);
// }
// ).catch((err) => {
//     console.log(err);
// })

// // ex 2 
// let mpromise =  new Promise(function(resolve , reject ){
//      let success = true
//      if(success==true){
//         resolve("task done")
//      } else{
//         reject("not done")
//      }
// })


// promise.then((result)=>{
//    console.log(result);

// }).catch((error)=>{
//   console.log(error);

// })


// //ex 3
// let myPromise = new Promise(function(resolve, reject) {
//   let a = 10;
//   let b = 10;

//   if (a === b) {
//     resolve(" Values are equal");
//   } else {
//     reject("Values are not equal");
//   }
// });

// myPromise
//   .then(function(result) {
//     console.log(result);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });


// //   ex 4
// function delayedMessage() {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve("This message is delayed by 2 seconds");
//     }, 2000);
//   });
// }

// delayedMessage().then(function(msg) {
//   console.log(msg);
// });



















