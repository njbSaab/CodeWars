//!___ 1
// const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
// //!___ 2
//    owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//    }

// };
//!___ 3
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
//!___ 4
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];
//!___ 5
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
//!___ 6
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.price = 5000;
// apartment.tags.push("trusted");
//!___ 7
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//    country: "Jamaica",
//    city:  "Kingston",
// };
//!___ 8
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//  name,
//  price,
//  image,
//  tags,
// };
//!___ 9
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {

//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",

// };

//  console.log(credentials);
// console.log(aptRating);
//!___ 10
// const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };
//  const keys = [];
//  const values = [];
//  // Change code below this line

//  for(const propert in apartment){
//     keys.push(propert);
//     values.push(apartment[propert])
//  }

//  console.log(keys,values);
//!___ 11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//    if(apartment.hasOwnProperty(key)) {
//       keys.push(key);
//       values.push(apartment[key]);
//    }
//   // Change code above this line
// }

// console.log(apartment);

//!___ 12
// const object ={
//    1:1,
//    2:2,
//    3:3,
//    4:4,

// }

// function countProps(object) {
//    let propCount = Object.keys(object).length;
//    // Change code below this line
//    // Change code above this line
//    return propCount;
//  }

// console.log(countProps(object));

//!___ 14
// const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };
//  const values = [];
//  // Change code below this line
//  const keys = Object.keys(apartment);
//  const vals = Object.values(apartment);
//  for(const val of vals) values.push(val)

// console.log(keys, values);

// function countProps(object) {
//    // Change code below this line
// return Object.keys(object).length
//    // Change code above this line
//  }
//  console.log(countProps(apartment));

//!___ 15
// function countTotalSalary(salaries) {
//    return Object.values(salaries).reduce((a,b) => a+b,0)
//  }
//  console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))

//!___ 17
//  const colors = [
//    { hex: "#f44336", rgb: "244,67,54" },
//    { hex: "#2196f3", rgb: "33,150,243" },
//    { hex: "#4caf50", rgb: "76,175,80" },
//    { hex: "#ffeb3b", rgb: "255,235,59" },
//  ];
//  const hexColors = [];
//  const rgbColors = [];

//  for(const key of colors){
//    hexColors.push(key.hex)
//    rgbColors.push(key.rgb)
//  }
//  const hexColors = colors.map(el => el.hex);
//  const rgbColors = colors.map(el => el.rgb);
//  console.log(hexColors, rgbColors);
// Change code below this line

//!___ 18 вернуть значение price по ключу name
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

//  function getProductPrice(productName){
// let price = 0;

// for(const priceOfProd of products){
//  priceOfProd.name === getProductPrice? price = priceOfProd.price : null;
// }
// return price
//  }
//*
//  function getProductPrice(product, name) {
// Change code below this line
//   return parseInt(product.map((e) => e.name.includes(name) ? e.price : 0).filter(e => e>1).join(''))

// Change code above this line
//  }
//  console.log(getProductPrice(products, "Radar"));//1300

//!___ 19 вернуть масив значений по ключу
// function getAllPropValues(propName) {
// Change code below this line
//*
// let res = [];
// products.forEach((el,i,arr) => {
//   let entris = Object.entries(el)
//   res.push(entris.flat().filter((e,i,arr) => arr[i+1] === propName))

// })
// return res.flat();

//*
// return products.map(e=> Object.entries(e))
//                .map(el => el.filter(elem => elem.includes(propName))).flat(2)
//                .filter((e,i) => i%2)

//*
//   return products
//     .map((el) => {
//       let arrEntris = Object.entries(el).flat();
//       return arrEntris.filter((e, i, arr) => arr[i-1] === propName);
//     })
//     .flat();
// }
// console.log(getAllPropValues("quantity"));
//!___ 20 умножить price и quantity если агрумент соответствует name в обьекте
// function calculateTotalPrice(productName) {
// Пиши код ниже этой строки
// if({...products.name} !== productName) return 0

//   const arr = products
//     .map((el, i, arr) => {
//       let res = Object.values(el);
//       return res.filter(
//         (e, indx, array) => array[indx - 1 && indx - 2] === productName
//       );
//     })
//     .filter((e) => e.length)
//     .flat();

//   return arr.length ? arr.reduce((a, b) => a * b) : 0;

// Пиши код выше этой строки
// }
// console.log(calculateTotalPrice("Grp"));

//!___ dest примеры ----------------------
// const books = [
//    {
//      title: "The Last Kingdom",
//      author: "Bernard Cornwell",
//      rating: 8.38,
//    },
//    {
//      title: "Beside Still Waters",
//      author: "Robert Sheckley",
//      rating: 8.51,
//    },
//  ];
//?-------------------------2
// for (const book of books) {
//    const { title, author, rating } = book;

//    console.log(title);
//    console.log(author);
//    console.log(rating);
//  }
//?-------------------------2
// for (const { title, author, rating } of books) {
//    console.log(title);
//    console.log(author);
//    console.log(rating);
//  }
//?-------------------------3
// const user = {
//    name: "Jacques Gluke",
//    tag: "jgluke",
//    stats: {
//      followers: 5603,
//      views: 4827,
//      likes: 1308,
//    },
//  };

//  const {
//    name,
//    tag,
//    stats: { followers, views: userViews, likes: userLikes = 0 },
//  } = user;

//!___ dest -1
// const highTemperatures = {
//    yesterday: 28,
//    today: 26,
//    tomorrow: 33,
//  };
// Change code below this line
// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
//!___dest -2
// const {
//    yesterday: highYesterday,
//    today: highToday,
//    tomorrow: highTomorrow,
//    icon : highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// Change code above this line
//  const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
//  console.log(meanTemperature);

//!___dest -3
//  const colors = [
//    { hex: "#f44336", rgb: "244,67,54" },
//    { hex: "#2196f3", rgb: "33,150,243" },
//    { hex: "#4caf50", rgb: "76,175,80" },
//    { hex: "#ffeb3b", rgb: "255,235,59" },
//  ];

//  const hexColors = [];
//  const rgbColors = [];
//  // Change code below this line

//  for (const {hex, rgb} of colors) {
//    hexColors.push(hex);
//    rgbColors.push(rgb);
//  }

//  console.log(hexColors);

//!___dest -4
// const forecast = {
//    today: {
//      low: 28,
//      high: 32,
//      icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//    },
//    tomorrow: {
//      low: 27,
//      high: 31,
//    },
//  };
// Change code below this line

//  const highToday = forecast.today.high;
//  const lowToday = forecast.today.low;
//  const todayIcon = forecast.today.icon;

//  const highTomorrow = forecast.tomorrow.high;
//  const lowTomorrow = forecast.tomorrow.low;
//  const tomorrowIcon = forecast.tomorrow.icon;

// const {
//   today : {
//    high:highToday,
//    low:lowToday,
//    icon :todayIcon,
//   },
//   tomorrow: {
//    high: highTomorrow,
//    low: lowTomorrow,
//    icon: tomorrowIcon,
//   }
// } = forecast
//!spread
// const scores = [3,4,6,8,10,1,25]
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores)

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore =Math.max(...allScores);
// const worstScore = Math.min(...allScores);;
// console.log(allScores, bestScore, worstScore);

// function makeTask(data) {
//    const completed = false;
//    const category = "General";
//    const priority = "Normal";
//    // Change code below this line
//     return {completed, category, priority, ...data}
//    // Change code above this line
//  }

//  console.log(makeTask({priority: "Low", text: "Choose shampoo"}));

// function add(...args) {
//    // return args.filter((e,_,arr) => e > arr[0]).reduce((a,b) => a+b,0)
//    return [...new Set(args.flat().filter((e,i,arr) => arr.indexOf(e) !== arr.lastIndexOf(e)))]
//  }

//  console.log(add([1, 3, 2, 4, 5], 1, 8, 2, 7));
//  console.log(add([1, 2, 2, 4, 5], 1, 8, 2, 7));
//  console.log(add([1, 2, 3, 4, 5], 1, 8, 2, 7));

//!Методы
// const bookShelf = {
// Change code below this line
// books: ["The last kingdom", "Нaze", "The guardian of dreams"],
// getBooks() {
//   return "Returning all books";
// },
// addBook(bookName) {
//   return `Adding book ${bookName}`;
// },
// Change code above this line
// removeBook(bookName){
//    return `Deleting book ${bookName}`
// },
// updateBook(oldName, newName){
//    return this.books.map(elem => elem.indexOf(oldName) === 0 ? elem.replace(oldName,newName) : elem)
// },
// updateBook(oldName, newName) {
// Change code below this line
//* задача 2 по методам должен поменяться массив books
// После вызова метода bookShelf.updateBook("Haze", "Dungeon chronicles"), значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// После вызова метода bookShelf.updateBook("The last kingdom", "Dune"), значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]

//  const booksCopy = this.books.map(elem => elem.indexOf(oldName) === 0 ?
//                elem.replace(oldName,newName) : elem)

// this.books = booksCopy;

// return this.books.map(elem => elem.indexOf(oldName) ? this.books.splice() : elem)
//    },

//  };

// bookShelf.updateBook("Нaze", "Dungeon chronicles");
//  console.log(bookShelf.books);
// bookShelf .updateBook("The last kingdom", "Dune");
// console.log(bookShelf.books);

//*
// const atTheOldToad = {
//    // Change code below this line
//    books: ["How time", "New Life", "diary programmer"],
//    updateBook(oldName, newName){
//       const indexOlName = this.books.indexOf(oldName)
//       this.books[indexOlName] = newName
//       return this.books
//    },
//    potions: ["Speed potion", "Dragon breath", "Stone skin"],
//    getPotions(){
//       return this.potions
//    },
//    addPotion(potionName){
//    this.potions.push(potionName)
//    },
//    removePotion(potionName) {
//       const indexOfName  = this.potions.indexOf(potionName);
//       this.potions.splice(indexOfName, 1);
//       // const removeArr = this.potions.filter((_,i) => i !== indexOfName)
//       // return this.potions = removeArr;
//     },
//    updatePotionName(oldName, newName){
//       const indxName = this.potions.indexOf(oldName);
//       this.potions[indxName] = newName;
//    }
//  };
//  console.log(atTheOldToad.addPotion("gogo"));
//  console.log(atTheOldToad.updatePotionName("Speed potion", "newName"));
//  console.log(atTheOldToad.removePotion("gogo"));

//  console.log(atTheOldToad.getPotions());

//*
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const copyElem = [];

//     this.potions.forEach((el) => {
//       if (el.name.includes(newPotion.name)) copyElem.push(newPotion);
//     });

//     if (copyElem.length > 0)
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     else this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const arr = [];

//     this.potions.forEach((el, i) => {
//       if (el.name !== potionName.name) {
//         arr.push(el);
//       }
//     });
//     if (this.potions.length === arr.length) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     this.potions = arr;
//   },
//   updatePotionName(oldName, newName) {
//     const finalArr = [];
//     const auditNameInArr = this.potions
//       .map((el) => el.name === oldName)
//       .filter((e) => e).length;

//     if (auditNameInArr === 0) {
//       return `Potion ${oldName} is not in inventory!`;
//     } else {
//       this.potions.forEach((el) => {
//         if (el.name === oldName) {
//           el.name = newName;
//           finalArr.push(el);
//         } else finalArr.push(el);
//       });
//       this.potions = finalArr;
//     }
//   },

// };
//  console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
//  console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 780 }));
//  console.log(atTheOldToad.removePotion({ name: "Speed potion", price: 780 }));
// console.log(
//    atTheOldToad.updatePotionName("CC", "Invulnerability potion")
// );
// console.log(atTheOldToad.getPotions());
