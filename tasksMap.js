//! задача 1
//1) сделать функцию filterUserByNumber с аргументом элементом массива user и
// агрументом strTel передается в функцю
//2) через метод фильтр вернуть элемнт массив tel
//3) вытянуть значение с полем обьекта номер
//4) переобразовать значение tel в строку
//5) сделать проверку строки с полем обьекта номер
//6) если аргумент функц strTel  совпадает с tell вернуть элементи массива которые совпадаю

// function filterUsersByNumber(users, telNumber) {
//   let result = users.filter((element) => {
//     element.tel.toString();
//     if (element.tel.toString().includes(telNumber)) {
//       return element; 
//     }
//   });
//   console.log(result);
//   return result;
// }

// filterUsersByNumber(users, 380);
// filterUsersByNumber(users, 38097);
// filterUsersByNumber(users, 38063);
// filterUsersByNumber(users, '380976660606');
//! задача 2
//? Сделать функц которая фильтрует список юзеров с 2мя аргументами 1- cписок юзуров,
//? 2- возразраст по какому фильтронуть больше или меньше

// алг
//1- Функц filterUsersByAge где 1-аргумент users это массив из обьекто
// а 2-аргумент возраст пользователя 
//2- фильтровать массив методом map => получить доступ 
// к свойству обьекта age 
//3- Сравнить возраст в массиве users и в ageUser
//4- Вернуть все обьекты в массиве user кто больше или меньше 

// function filterUsersByAge(users, ageUser) {
//    let res = users.filter((elem) => {
//       if(elem.age > ageUser){
//          return elem
//       }
//    });
//    console.log(res);
//    return res
// }

// const users = [
//   {
//     name: "Nj",
//     id: 333,
//     tel: 380930001122,
//     age: 33,
//   },
//   {
//     name: "Antony",
//     id: 777,
//     tel: 380667777777,
//     age: 24,
//   },
//   {
//     name: "Sis-admin",
//     id: 999,
//     tel: 380970000001,
//     age: 15,
//   },
//   {
//     name: "Beldinu boshki",
//     id: 555,
//     tel: 380506660606,
//     age: 50,
//   },
//   {
//     name: "Chidra",
//     id: 666,
//     tel: 380676660606,
//     age: 8,
//   },
// ];


// filterUsersByAge(users, 55)
// filterUsersByAge(users, 49)
// filterUsersByAge(users, 22)
// filterUsersByAge(users, 3)

 

//! Задача 3
//?  Функц которая умножает юзер ид на заданый второй аргумент
//? вернул мутированный массив  

// алг
//1- Функц UresIdMiltiply где 1й_аргумент users это массив из обьектов
//  2й_аргумент multiplyNumber число на которое необходимо умножить
//2 - foreach пройти массив методом получить доступ к свойству обьекта  id
//3 - Вернуть все обьекты в массиве user перемноженные

// let sort = (a,b) => a-b;

// function uresIdMiltiply(users, multiplyNumber) {
//    let res = users.map(element => {
//       return element.id * multiplyNumber;
//     }, {});
   
//     res.sort(sort)
//     console.log(res);
//     return res
// }

// const users = [
//   {
//     name: "Nj",
//     id: 10,
//     tel: 380930001122,
//     age: 33,
//   },
//   {
//     name: "Antony",
//     id: 5,
//     tel: 380667777777,
//     age: 24,
//   },
//   {
//     name: "Sis-admin",
//     id: 12,
//     tel: 380970000001,
//     age: 15,
//   },
//   {
//     name: "Beldinu boshki",
//     id: 3,
//     tel: 380506660606,
//     age: 50,
//   },
//   {
//     name: "Chidra",
//     id: 14,
//     tel: 380676660606,
//     age: 8,
//   },
// ];

// uresIdMiltiply(users, 2)

