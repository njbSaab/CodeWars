//* theory

// let firstPart= "likes";

// const usInfo = {
//    name: 'Nj',
//    age: 30,
//    [firstPart]: true, //получить значение переменной
//    0: 1, //можно символы использовать
//    adress:{
//       city: "Kiev",
//       street: 'Solomyanskaya'
//    },
//    stek:['html', 'css', 'js']

// }
// console.log(usInfo[firstPart]);
// console.log(usInfo.adress.city);
// console.log(usInfo.stek);

// let key = "name";
// console.log(usInfo[key]);

//! получить значение в переменную
// function info(name, age){
//    return {
//       name: name,
//       age: age,
//    }
// }
// let user = info('njb', 30)
// console.log(user);


//! добавить в обьект
// usInfo.secondName = 'Saab'
// console.log(usInfo);

//! cоздать 
// usInfo.adress.number = 37
// usInfo.stek.push('angular')
// usInfo['like js'] = true

//! удалить 
// delete usInfo.adress.street
// delete usInfo.secondName
// usInfo.stek.pop()
// usInfo.stek.shift()

//! изменить
// usInfo.age = 31
// usInfo.adress.city = 'Lviv'

//! копировать обьект
// let us = Object.assign({}, usInfo)
// us.age = 18

//! ccылается на обьект но все меняется
// let usCopy = us
// usCopy.age = 35;

//todo ------------------ цыкл по обьектам
// for(key in usInfo){
   // console.log('ключ --->',key,'значение --->',usInfo[key]);   
// }

//!           --------THIS---------
//* this привязывется к конкретному параментру и это более надежнно
//* автоматически создает обьект 
//* this работает без return это происходит автоматически
// const user = {
//    name: 'nj',
//    age: 30,
//    "learn js": true,

//  showInfo() {
//       console.log(`${this.name}, ${this.age}`);
//    }
// }
//    console.log(user);
//    user.showInfo()

//! функция конструктор обьектов пишется с большой буквы
// function UserInfo(name){
//    this.name = name;
//    this.age = 30;
// }

// console.log(new UserInfo('Njb'));

//! методы массиво в обьекте
// const user = {
//       name: 'nj',
//       age: 30,
//       "learn js": true,
// } 

//*    КЛЮЧИ из обьекта в массив
// let keys = Object.keys(user)
// console.log(keys);


//*    ЗНАЧЕНИЕ из обьекта в массив
// let val = Object.values(user)
// console.log(val);

//*   МАСИВЫ [КЛЮЧИ - ЗНАЧЕНИЕ] из обьекта в массив
// let ent = Object.entries(user)
// console.log(ent);

// ent.map(([index, item]) => console.log(index, item))

//* добавление свойства если не надо к нему доступ
// Object.defineProperty(user, 'pass', {
//    value: 'TT 207 098',
//    enumerable: true //активизация свойства
// })
// console.log(user);

// // put your code here
// const product = {
//   id: 223,
//   name: "Mercedes",
//   isAvaulable: true,
//   price: 100000,
//   color: "black",
//   storeAddres: null,
// };

// const productName = product.name;
// console.log(product.name)
// const storeAddres = product.storeAddres;
// console.log(product.storeAddres)

// product.deliveryOptions = ['Новая почта', 'Укр почта', 'Самовывоз', ]
// console.log(product)

// function getKeys(obj) {
//   const arr = [];
//   for (const key in product) {
//     console.log(product[key]);
//     arr.push(product[key]);
//   } return console.log(arr)
// }
// getKeys(product);

// function getKeys(obj) {
//   const arr = [];
//   for (const key in product) {
//     console.log(key);
//     arr.push(key);
//   } return console.log(arr)
// }
// getKeys(product);

// function getKeys(obj) {
//   const keys = Object.keys(product);
//   const arrayKeys = [];
//   for (const key of keys) {
//     arrayKeys.push(key);
//   }
//   return console.log(arrayKeys);
// }
// getKeys();


// function getValues(obj) {
//   const valueProduct = Object.values(product);
//   return console.log(valueProduct);
//   // const arr = []
//   // for(key in product){
//   //     console.log(key);
//   //     console.log(product[key]);
//   //     arr.push(product[key])
//   // }console.log(arr);
// }
// getValues(product);

// const name = 'FMCG'
// const number = 10

// const client = {
//     name: 'alco',
//     number,
// }

// const byer = client;
// byer.soName = 'Saab'
// client.cost = 300;
// console.log(byer);
// console.log(client);

// console.log(byer === client);

// function copyObj(obj) {
//   const copyObject = {};

//   for(const key in product ) {
//     copyObject[key] = product[key]
//   }
//   console.log(copyObject);
//   return copyObject;

// }

// copyObj(product)
// product.testField = 'test'
// console.log(product);

//1 переобразовать их в массив по ключам
//2 перебрать масив
//3 достать ключи и свойства
//4 клонировать обьекты или создать новые обьекты
//5 создать массив запушить в обьекты


//* переобразование массива
// const user = {
//   name: 'NJ',
//   age: 30,
//   salary: 26,
// }

// console.log(user);

// let objKeys = Object.keys(user)
// console.log(objKeys);

// let objVal = Object.values(user)
// console.log(objVal);

// let objEntries = Object.entries(user)
// console.log(objEntries);

//* exampl--------------------lenght
// const arr = [50, 60, 70, 80]
// console.log(arr.length);

// const x = [{ a: 1, }, { b: 2, }, { c: 50, }, { d: 60, }]

// const y = [...x]

// console.log(x);
// console.log(y);

// x[0].a = 1000

//*  распыление обьекта
// const a = { x: 1, y: 2 }
// const b = { x: 0, z: 3 }
// const d = { x: 5000, }

// const c = Object.assign({}, a, b)

// const c = {
//     ...a,
//     c: 100,
//     ...b,
//     x: 1000,
//     ...d
// }
// console.log(c);

//* spread распыление на примере настройки темы

// const defaultSettings = {
//     theme: 'light',
//     showNotifications: true,
//     hideSidebar: false,
// }

// const userSettings = {
//     showNotifications: false,
//     hideSidebar: true,
// }

// const finalSettings = {
//     ...defaultSettings,
//     ...userSettings,
// }
// console.log(finalSettings);

//* dest деструктуризация obj
// const playlist = {
//     name: 'My favorite tracklist',
//     rating: 5,
//     tracks: ['track-01', 'track-02', 'track-03'],
//     trackCount: 3,
// }

// const { rating, name, tracks, trackCount: numberOfTrack = 1, author = 'user' } = playlist
// console.log(rating);
// console.log(name);
// console.log(tracks);
// console.log(playlist);

//* dest деструктуризация arr[]
// const arr = [100, 200, 300]
// const [red, green, blue] = arr
// const [red, , blue] = arr
// console.log(red, blue);

// const authors = {
//     kiwi: 4,
//     poly: 5,
//     ajax: 7,
//     mango: 6,
// }
// ?-----1
//const rating = Object.values(authors)
// console.log(Math.max(...rating)); //используем распыление

// ?-----2
// const keys = Object.keys(authors);
// for(const key of keys) {
//     console.log(key);
//     console.log(authors[key]);
//     let maxNum = 0;
//     if(maxNum <= authors[key] ){
//         maxNum = authors[key]
//     }console.log(maxNum);
// }

//?------3
// const entries = Object.entries(authors)
// for(const [name, rating] of entries){
//     console.log(name, rating);
// }

