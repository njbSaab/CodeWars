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


