// //? переобразование в буль 
// let bool = !!123 //тру
// bool = !!0 // фалс

// //? не строгое сравнение по коду элемента
// let str = "5"
// let num = 5
// let comparison = str == num //true
// comparison = str === num //false

// //? добавление в конец массива элемента
// let arr = [];
// arr[arr.length] = 1
// arr[arr.length] = 2
// arr[arr.length] = 3

// //? создание обьекта из массива
// let obj = "name-nj_age-30"
// let split = obj.split("_")
// let dirtyName = split[0]
// dirtyName = dirtyName.split('-')
// // console.log(dirtyName);

// const objCleanName = {
// [dirtyName[0]]: dirtyName[1]
// }
// // console.log(objCleanName);

// //? удалить,заменить,вставить внутрь массива
// let json = [
//    {name:"NJ", age : 30, work: "IT"},
//    {name:"J", age : 20, work: "I"},
//    {name:"N", age : 40, work: "T"},
//    {name:"Jj", age : 50, work: "ITI"},
//    {name:"NJ", age : 30, work: "IT"},
//    {name:"J", age : 20, work: "I"},
//    {name:"N", age : 40, work: "T"},
//    {name:"Jj", age : 50, work: "ITI"},
// ]

// let splce = json.splice(2,2,
//     {name: "New", age:25, job:"sales"},
//     {name: "New", age:25, job:"sales"},
//     {name: "New", age:25, job:"sales"},)
// // console.log(json);


// const filterObj = json.filter(jobs => (jobs.work))
// console.log(filterObj);

// //? в новый обькт возвращаем только sales и создаем ключ job
// const mapObj = json.map(jobs => ({job: jobs.work}))

// //? глубиное копирования обьекта deepCopy
// let user = {
//    name: 'vasya',
//    age: 31,
//    skils : ["js", "noda"]
// }
// let stringifyUser = JSON.stringify(user)
// console.log(stringifyUser);
// let parseUs = JSON.parse(stringifyUser)
// console.log(parseUs);


// //? замыкание инкапсуляция
// function fn(name, age){
//    let user = {name: name, age: age}

//    return {
//       getAge: function () {
//          return user.age
//       },
//       getName: function (){
//          return user.name
//       },
//       info : function () {
//          return JSON.stringify(user)
//       }
//    }
// }

// let gettersObj = fn("petya", 30)

// console.log(gettersObj.getAge());
// console.log(gettersObj.getName());
// console.log(gettersObj.info());