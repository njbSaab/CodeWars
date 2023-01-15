// console.log("start");

// const { reject } = require("async");

// window.setTimeout(function() {
//    console.log("hello");
// },5000)

// function timer1s(){
//    console.log(1);
// }
// function timer2s(){
//    console.log(2);
// }
// function timer3s(){
//    console.log(3);
// }
// function timer4s(){
//    console.log(4);
// }
// setTimeout(timer1s, 1000)
// setTimeout(timer2s, 2000)
// setTimeout(timer3s, 3000)
// setTimeout(timer4s, 4000)
// console.log("end");

//! promis
// console.log("Request data...");

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Preparing data...");
//     const backendData = {
//       server: "aws",
//       port: 2000,
//       status: "working",
//     };
//     resolve(backendData);
//   }, 2000);
// });

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       // reject(data);
//       resolve(data);
//     }, 2000);
// });
//    }).then((clientData) => {
//   console.log("data receved", clientData)
//    })
//    .catch(err => console.error('Error: ', err))
//    .finally(() => console.log("Finally"))



//*
// const sleep = ms =>{
//    return new Promise(resolve => {
//    setTimeout(()=> resolve(), ms)
//    })
// }

// sleep(2000).then(() => console.log("after 2 sec"));
// sleep(3000).then(() => console.log("after 3 sec"));

// Promise.all([sleep(2000), sleep(5000)])
//    .then(() =>{
//       console.log("ALL promises");
//    })

// Promise.race([sleep(2000), sleep(5000)])
//    .then(() =>{
//       console.log("Race promises");
//    })


