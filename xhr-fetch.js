// const reqURL = "https://jsonplaceholder.typicode.com/users";

// const xhr = new XMLHttpRequest();

// xhr.open("GET", reqURL);

// xhr.responseType = "json";

// xhr.onload = () => {
//   if (xhr.status >= 400) console.error(xhr.response);
//   else {
//     console.log(xhr.response);
//   }
//   // console.log(JSON.parse(xhr.response));
// };

// xhr.onerror = () => {
//   console.log(xhr.onerror);
// };

// xhr.send();

//? 2 вариант через промисы
// function sendReq(method, url, body = null) {
//    return new Promise((resolve, reject) =>{
//       const xhr = new XMLHttpRequest()

//       xhr.open(method, url)

//       xhr.responseType = 'json'
//       xhr.setRequestHeader('Content-Type', 'application/json')
//       xhr.onload = () => {
//          if(xhr.status >= 400) {
//             reject(xhr.response)
//          }else{
//             resolve(xhr.response)
//          }
//       }
//       xhr.onerror = () => {
//          reject(xhr.response)
//       }

//       xhr.send(JSON.stringify(body))
//    })
// }

// // sendReq('GET', reqURL)
// //    .then(data => console.log(data))
// //    .catch(err => console.log(err))
// const body = { name: "NJ", age: 30}

// sendReq('POST', reqURL, body)
//    .then(data => console.log(data))
//    .catch(err => console.log(err))




//!   fetch
// function sendReq(method, url, body = null){
//    return fetch(url)
// }
// sendReq('GET', reqURL)
//    .then(data => console.log(data))
//    .catch(err => console.log(err))


// const body = { name: "NJ", age: 30}
