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

//! распыление обьекта
// const a = {x:1,y:3,z:4}
// const b = {x:1,y:4,z:5}

// const c = Object.assign({}, a, b);

// const c = {
//    ...a,
//    ...b,
// }
// console.log(c)

// const defaultSettings = {
//    theme: "light",
//    showNotifications: true,
//    hideSideBar: false,
// }
// const mySettings = {
//    theme: "light",
//    showNotifications: false,
//    hideSideBar: true,
// }
// const finalSettings = {
//    ...defaultSettings,
//    ...mySettings,
//    newFunctions: "music"
// }
// console.log(finalSettings);

//! деструктуризация dest
// const playlist = {
//    name: "My favorit musc",
//    secondName: "NameUser",
//    rating: 5,
//    track: ["track-1","track-2","track-3"],
//    trackCount: 3,
//    color: "blue",

//    stats: {
//       followers: 560,
//       views: 485,
//       a: {
//          b: 1,
//          c: 1,
//       }
//    }
// }

// const {
//    name,
//    track,
//    trackCount: numOfTrack,//свойству присвоить другую переменую
//    stats: {
//       followers,
//       a: {
//          b,
//          c,
//          d = 10,
//       }
//    },
//    ...rest
// } = playlist

// console.log(followers);
// console.log(name, track, numOfTrack);

// console.log(rest);

//! деструктуризация обькта в функции после передачи аргумента
// const showProfilInf = (playlist) => {
//    const {name, rating} = playlist //? и в телефункции сделать дест
// }

//*2 вариант в аргументах
// const showProfilInf = ({name,
//                        rating,
//                        track,
//                        trackCount,
//                        color,
//                           ...restProps}) => {
//       console.log(name, rating);
// }
// console.log(showProfilInf(playlist));

//? реальный пример использования дест
// const userProf = {
//    name: "nj",
//    secondName: "saab",
//    avatar: "https://img3.akspic.ru/previews/7/4/2/8/6/168247/168247-kosti_3d-igra_v_kosti_3d-azartnaya_igra-pitevaya_igra-kazino-500x.jpg",
//    mail: "njb@com.ua",
// }

// const makeProfile = userProf => {
//    const {
//       avatar,
//       name,
//       mail,
//       secondName
//    } = userProf;

//    return `<div>
//                <img src="${avatar}" alt="" style="width: 100px;
//                height: 100px;
//                background-repeat: no-repeat;
//                background-position: center;
//                background-size: cover;">
//                <p>${mail}</p>
//                <ul>
//                   <li>${name}</li>
//                   <li>${secondName}</li>
//                </ul>
//             </div>`

// };
//  const markup = makeProfile(userProf);

//  document.body.insertAdjacentHTML("afterbegin", markup)

//* пример сложного обьекта с вложенными обьектами, массивами, методами
// const usName = "Nj";
// const usEmail = "Saab@nj.com";

// const inputName = "color???";
// const inputVal = "black";

// const singUp = {
//   usName,
//   usEmail,
//   age: 30,
//   yearNow: 2022,
//   job: ["Mdlz", "Equator", "Abm"],
//   myWorkCompany: 3,
//   [inputName]: inputVal, //'color???':'black'
//   chageName(newName) {
//    return (this.usName = newName);
//  },

//  getAge(dataBirsdDay) {
//    return this.yearNow - dataBirsdDay;
//  },

//  newJob(job) {
//    this.job.push(job);
//    this.myWorkCompany = this.job.length;
//  },

//   myLernTechnology: {
//     html: {
//       project: 10,
//     },
//     css: {
//       knowleuge: ["flex", "grid", "animations"],
//     },
//     js: {
//       tems: ["data types", "classes"],
//       practic: {
//         codewars: {
//           kata: 260,
//         },
//         goIt: {
//           tasks: 26,
//         },
//         gromCode: {
//           tasks: 64,
//         },
//       },
//       frameWrok: "-",
//     },
//   },

//   myProjectProgressive(num) {
//      return this.myLernTechnology.html.project + num
//   },
//   cssAddStek(stek){
//     this.myLernTechnology.css.knowleuge.push(stek)
//   },
//   jsPractics(where) {
//      if (where.includes('codewars')) return this.myLernTechnology.js.practic.codewars.kata + 1;
//      if (where.includes('goIt')) return this.myLernTechnology.js.practic.goIt.tasks + 1;
//      if (where.includes('gromCode')) return this.myLernTechnology.js.practic.gromCode.tasks + 1
//   },
//   frameWrok(str) {
//      return this.myLernTechnology.js.frameWrok = str;
//   }
// };
// console.log(typeof singUp);
// console.log(singUp.getAge(30));
// console.log(singUp.chageName("naj"));
// console.log(singUp.newJob("frontend studio"));
// console.log(singUp.myProjectProgressive(1));
// console.log(singUp.cssAddStek("Sass"));
// console.log(singUp.jsPractics("codewars"));
// console.log(singUp.frameWrok("angular"));

// console.log(singUp);
// singUp.fmail = "man";

//* пример массива обьекта доступы по ключам и значениям
// const friends = [
//   { name: "Polina", online: true},
//   { name: "Vita", online: false},
//   { name: "Vicktor", online: false},
//   { name: "Puma", online: true},
// ]

// const getName = allFredns => {
//   const namesArray = [];
//   const whoIsOnline = [];
//   const apsent = [];

//   allFredns.forEach(el => {
//       namesArray.push(el.name);
//       if(el.online) whoIsOnline.push(el.name)
//       if(!el.online) apsent.push(el.name)
//   });
//    return apsent

//   return allFredns.filter(el => el.online? el.name : 0)
//   return allFredns.map(el => el.online? el.name : false)

// }
// console.log(getName(friends));

//* пример обьекта по типу корзины
// const cart = {
//    items: [],
//    getItems() {
//       return this.items
//    },

//    add(product) {
//       // console.table(this.items);
//       for(const item of this.items){
//          if(item.name === product.name) {
//             item.quantity +=1
//             return;
//          }
//       }
//       const newProd = {
//          ...product,
//          quantity: 1,
//       }

//        this.items.push(newProd)
//    },
//    remove(productName){
//       const {items} = this;
//       // console.log(items);
//       [...productName].forEach((el,i,arr) => {
//       //   console.log(el === productName);
//          if(el===productName) items.splice(i, 1)
//      })
//    },
//    clear(){
//       return this.items = []

//    },

//    countTotalPrice(){
//       // let total = 0;
//       // this.items.forEach(el => {
//       //    total+=el.price
//       // })
//       // return total

//       const arr = this.items;
//       return arr.map(el => el.price * el.quantity).reduce((a,b) => a+b)
//    },

//    increaseQuatity(productName){},
//    increaseQuatity(productName) {},
// };

// cart.add({ name: "😃", price: 50});
// cart.add({ name: "😭", price: 60});
// cart.add({ name: "😭", price: 60});
// cart.add({ name: "😭", price: 60});
// cart.add({ name: "😡", price: 70});
// cart.add({ name: "😡", price: 70});
// cart.add({ name: "🥶", price: 80});

// // console.log(cart.remove('😭'));
// // cart.clear();

// console.log("TOTAL price -", cart.countTotalPrice());
// console.table(cart.getItems());

//! Object create
// const person = Object.create(
//   {},
//   {
//     name: {
//       value: "NJ",
//       enumerable: true,
//       writable: true,
//       configurable: true,
//     },
//     birthYear: {
//       value: 1992,
//       enumerable: false,
//       writable: false,
//       configurable: false,
//     },
//     age: {
//       get() {
//         return new Date().getFullYear() - this.birthYear
//       },
//       set(val) {
//          console.log("Set age", val);
//       }
//     },
//   }
// );

// person.name = "JN"; //true
// person.birthYear = 2000; //false

// delete person.name; //true
// delete person.birthYear; //false

// person.age = 100;

// console.log(person);
// console.log(person.name);
// console.log(person.birthYear);
// console.log(person.age);


//? посчитать средний участников в обьекте балл босса бал х2 в зависимости от количества балла вернуть ответ
// function outed(meet, boss){
//*
// let points = Object.values(meet)
// let pointBoss = Object.entries(meet)

// pointBoss = pointBoss.find(e => e.includes(boss)).slice(-1).join('')*1
// return (points.reduce((a,b) => a + b) + pointBoss) / points.length > 5 ?
//   'Nice Work Champ!' : 'Get Out Now!'

//* оптимизирован
// let points = Object.values(meet)
// return (Object.values(meet).reduce((a,b) => a + b) +
//        Object.entries(meet).find(e => e.includes(boss)).slice(-1)*1 ) / points.length > 5 ? 
//        'Nice Work Champ!' : 'Get Out Now!'

//* for of
// let sum = 0;
// for (let i of Object.values(meet)) {
//   sum += i;   
// }
// return (sum + meet[boss]) / Object.values(meet).length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';

//! reduce
// let names = Object.keys(meet)
// let score = names.reduce((s,v) => s + meet[v], 0) + meet[boss]
// return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!'

// }

//! reduce PRO
// const outed = (meet,boss,key = Object.keys(meet)) => 
//   key.reduce((prev,curr) => prev + meet[curr] * (boss == curr ? 2 : 1) ,0) / key.length > 5 ?
//       'Nice Work Champ!' : 'Get Out Now!'

// console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'));//'Get Out Now!'

// console.log(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'));//'Nice Work Champ!'


//? посчитать количество баллов согласно должностям boredomPoints

//*
// function boredom(staff, key = Object.values(staff)){
//   const boredomPoints = {'accounts': 1,'finance': 2,'canteen': 10,'regulation' : 3,'trading' : 6,'change' : 6,'IS' : 8,'retail' : 5,'cleaning' : 4,'pissing about' : 25,
//   } 
//    const res = key.reduce((a,b) => a + boredomPoints[b] ,0) 
//    return res <= 80 ? 'kill me now' :  res > 80 && res < 100 ? 'i can handle this' : 'party time!!'
// }

//* через map
// function boredom(staff) {
//    var teams = { 'accounts'      : 1,
//                  'finance'       : 2 ,
//                  'canteen'       : 10, 
//                  'regulation'    : 3, 
//                  'trading'      : 6, 
//                  'change'        : 6,
//                  'IS'            : 8,
//                  'retail'        : 5,
//                  'cleaning'      : 4,
//                  'pissing about' : 25}

//    score = Object.keys(staff)

//    return score.map(key => teams[staff[key]]).reduce((a,b) => a+b)
// }

//! reduce PRO
// const boredom = staff => 
// (val => val <= 80 ? `kill me now` : val >= 100 ? `party time!!` : `i can handle this`)
// (Object.values(staff).reduce((a, b) => a + {accounts: 1, finance: 2, canteen: 10, regulation: 3, trading: 6, change: 6, IS: 8, retail: 5, cleaning: 4, 'pissing about': 25}[b],0))


// console.log(boredom({tim: 'change', jim: 'accounts',
// randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
// laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
// mr: 'finance' }))// 'kill me now'
// console.log(boredom({ tim: 'IS', jim: 'finance',
// randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
// katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
// alex: 'regulation', john: 'accounts', mr: 'canteen' }));// 'i can handle this'
// console.log(boredom({ tim: 'accounts', jim: 'accounts',
// randy: 'pissing about', sandy: 'finance', andy: 'change',
// katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
// john: 'retail', mr: 'pissing about' }));// 'party time!!'
