// class CarClass {
   
//    constructor(params){
//       this.name = params.name
//       this.model = params.model
//       this.type = params.type
//       this.color = params.color
//       this.volume = params.volume

//    }

//    getCarInfo(){
//       console.log(`
//       ${this.name} ${this.model} 
//       Год выпуска : 2015
//       Разгон до 100км : ${this.howTime()}
//       Расход на 100км: ${this.fuelBensin()}
//       Цвет : ${this.color} 
//       `);
//    }
// }

// class CarCreat extends CarClass{
//    constructor(params) {
//       super(params)
//    }
//    howTime() {
//       const time = (this.volume * 3).toFixed(1)
//       return `${time} second`
//    }
//    fuelBensin() {
//       const fuel = this.volume * 2
//       return `${fuel} liters`
//    }
// }

// // const car = new CarCreat({
// //    name: 'BMW',
// //    model: '3',
// //    type: 'sedan',
// //    volume: '2.0',
// //    color: 'black'
// // })

// // console.log(car.howTime());
// // console.log(car.fuelBensin());
// // console.log(car.getCarInfo());


// class BMW extends CarCreat{
//    constructor(params){
//       console.log(params);
//  super(params)
//       this.name = 'BMW'
//       this.model = '3'
//       this.type = 'sedan'

     
//    }
// }

// class AUDI extends CarCreat{
//    constructor(params){
//       console.log(params);
//    super(params)
//       this.name = 'AUDI'
//       this.model = 'A3'
//       this.type = 'sedan'
//    }
// }



// const audi = new AUDI({
//    transmisson: 'manual',
//    color: 'white',
//    volume: 1.8
// })


// const bmw = new BMW({
//    transmisson: 'auto',
//    color: 'black',
//    volume: 2.4
// })

// bmw.getCarInfo()
// audi.getCarInfo()



// class Ball {
//    constructor(ballType = "regular"){
//       this.ballType = ballType
//    }
// };
// console.log(new Ball().ballType);
// console.log(new Ball("super").ballType);


// const person = new Object({
//    name: "NJ",
//    age: 30,
//    greet: function (){
//       console.log("greet");
//    },
//    logInfo: function (job, salary){
//       console.group(`${this.name} info:`)
//       console.log(`Name is ${this.name}`);
//       console.log(`Age is ${this.age}`);
//       console.log(`Job is ${job}`);
//       console.log(`Salarry is ${salary}`);
//    }
// })
// console.log(person.name);

// Object.prototype.sayHello = function(){
//    console.log("Hello");
// }
// person.sayHello();

// const marina = {
//    name: "Marina",
//    age: 23,
// }

// person.logInfo.bind(marina, "Frontend", "3000")()
// person.logInfo.call(marina, "Frontend", "3000")
// person.logInfo.apply(marina,["Frontend", "3000"])


// const array = [1,2,3,4,5];
// // const multBy = (arr, n) => arr.map(item => item * n);
// //* чтобы не импортировать функцию создается класс с функцией
// Array.prototype.multBy = function(n) {
//    return this.map((item) => item * n)
// }

// console.log(array.multBy(5));


//! замыкание в одной функции замыкамый что-то статическое во второй меняем динамически

// function urlGen(domain){
//    return function(url) {
//       return `https://${url}.${domain}`
//    }
// }

// const comUrl = urlGen('com');
// console.log(comUrl('google'));


// const uaUrl = urlGen('ua');
// console.log(uaUrl('robota'));


// function bind(context, fn) {
//    return function(...arg){
//       fn.apply(context, arg)
//    }
// }

// function logPerson(){
//    console.log(`Persom : ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = { name: "NJ", age: 30, job: 'Frontend engineer'}
// const person2 = { name: "Marina", age: 25, job: 'Frontend engineer'}

// bind(person1, logPerson)()
// bind(person2, logPerson)()




// class Animal {
//    static type = "ANIMAL"

//    constructor(options){
//       this.name = options.name
//       this.age = options.age
//       this.hasTail = options.hasTail
//    }

//    voice(){
//       console.log("IM animal");
//    }

// }

// class Dog extends Animal{
//    static type = "DOG"
//    constructor(options) {
//       super(options)
//       this.collor = options.collor
//       this.size = options.size
//    }
//    voice(){
//       super.voice()
//       console.log("im DOG");
//    }
//    get getInfo(){
//       return this.age * 5
//    }
//    set sizeInfo(sizeNew){
//       this.size = sizeNew
//    }

// }

// const dog = new Dog({
//    name: "Dog",
//    age: 2,
//    hasTail: true,
//    collor: "white",
// })

// class Wolf extends Dog {
//    static type = "WOLF"

//    constructor(options){
//       super(options)
//       this.unit = options.unit,
//       this.myNewWeigth = options.myNewWeigth

//    }
//    get ageInfo(){
//       return this.age * 10
//    }
//    get info(){
//       return this.myNewWeigth + this.unit
//    }

// }

// const wolf = new Wolf({
//    name: "Wolf",
//    age: 4,
//    hasTail: true,
//    collor: "mix of gray and brown with buffy facial markings and undersides",
//    size: "large",
//    myNewWeigth: "30", 
//    unit: "kg",

// })
// console.log(wolf.getInfo);
// class Cat extends Animal {
//    static type = "CAT"

//    constructor(options) {
//       super(options)
//       this.collor = options.collor
//    }

//    voice() {
//       super.voice()
//       console.log("I am cat");
//    }

//    get ageInfo() {
//       return this.age * 7
//    }
//    set ageInfo(newAge){
//       this.age = newAge
//    }

// } 

// const cat = new Cat({
//    name: "Cat",
//    age: 7,
//    hasTail: true,
//    collor: "black",
// });


// class Tiger extends Cat{
//    static type = "TIGER"

//    constructor(options) {
//       super(options)
//       this.size = options.size;
//       this.features = options.features;
//       this.class = options.class;
//       this.myWeigth = options.myWeigth;
//       this.unit = options.unit;
//    }
//    voice(){
//       super.voice()
//      console.log("Im a large cat");
//    }
//    get ageInfo(){
//       return this.age * 4
//    }
//    get info(){
//       return this.myWeigth + this.unit
//    }
//    set myNewWeigth(newWeigth){
//       this.myWeigth = newWeigth;
//    }
// }

// const tiger = new Tiger({
//    name: "Tiger",
//    age: 6,
//    hasTail: true,
//    collor: "standard orange with black stripes",
//    class: {
//       kindOfAnimal: "predator",
//       whatHeEat: "meet",
//    },
//    features: {
//       hasA: "big teeath",
//       paws: "sharp claws"
//    },
//    size: "larg",
//    myWeigth: "10",
//    unit: "kg",

// })
// console.log(tiger);
// // console.log(tiger.info);
// // console.log(Animal);
// // console.log(cat.ageInfo = 8)



















//! MAP,SET
//!______________________________MAP______________________________
// const obj = {
//    name: "nJ",
//    age: 30,
//    job: 'frontend'
// }

// const arr = [
//    ['name', 'nj'],
//    ['age', '30'],
//    ['job', 'frontend'],
// ]

// const map = new Map(arr);


// map.set('newField', 1)
// map.set(obj, 'value of obj')
// map.delete('job')

// console.log(map);
// console.log(map.get(obj));
// console.log(map.has('job'));
// console.log(map.size);

//? forf

// for(let [key, value] of map){
//    console.log('key---->',key, 'val---->',value);
// }

// for(let key of map.keys()){
//    console.log('key---->',key);
// }

// for(let value of map.values()){
//    console.log('val---->',value);
// }

// map.forEach((val,key) =>{
//    console.log('val---->',val,'key---->',key);
// })

// const arrMap = [...map]
// console.log(arrMap);

// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj);

//? practic

// const users =[
// {name: "NJ"},
// {name: "Anton"},
// {name: "Sscage"},
// ]

// const visits = new Map()

// visits.set(users[0], new Date())
//       .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//       .set(users[2], new Date(new Date().getTime() + 5000 * 60))

// const lastVisit = user => visits.get(user)

// console.log(lastVisit(users[2]));
//!______________________________SET______________________________
// const uniqVal = arr => [...new Set(arr)] // Array.from(new Set))
// console.log(uniqVal([1,1,3,4,5,6,6,7,7,7,7,7,7,8]));



//!______________________________ metods
//*
// Number.prototype.toString = function() {return "" + this;}
// Array.prototype.toString = function() {return "[" + this.join(",") + "]";}
// Boolean.prototype.toString = function() {return "" + this;}
// Object.prototype.toString = function() {return "" + this;}

//*
// Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString =
// function() { return JSON.stringify(this); }

//*
// [Boolean, Number, Array].forEach( obj => obj.prototype.toString = function(){ return JSON.stringify(this) } );
