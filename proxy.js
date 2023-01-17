//* obj
// const person = {
//    name: 'NJ',
//    age: 30,
//    job: 'Frontend'
// }

// const { filter } = require("async")

// const op = new Proxy(person, {
//    get(target, prop) {
//       console.log(`Getting prop ${prop}`);
//       return target[prop]
//    },
//    set(target, prop, val){
//       if(prop in target){
//          target[prop] = val
//       }else{
//          throw new Error(`No ${prop} field in target`)
//       }
//    },
//    has(target, prop){
//       return ['age', 'job'].includes(prop)
//    },
//    deleteProperty(target,prop){
//       console.log('Deleting', prop);
//       delete target[prop]
//       return true
//    }
// })

//* func
// const log = text => `Log: ${text}`;

// const fp = new Proxy(log, {
//    apply(target, thisArg, args){
//       console.log('calling');

//      return target.apply(thisArg, args).toUpperCase()
//    }
// });


//* class
// class Person{
//    constructor(name, age){
//       this.name = name
//       this.age = age
//    }
// }

// const PersonProxy = new Proxy(Person, {
//    construct(target, arg) {
//       console.log('Constr...')
      
//       return new Proxy(new target(...arg), {
//          get(t, prop){
//             console.log(`Getting prop "${prop}"`);
//             return t[prop]
//          }
//       })
//    }
// })

// const p = new PersonProxy('Maxim', 30)



// const withDefVal = (target, defVal = 0) => {
//    return new Proxy(target, {
//       get: (obj, prop) => (prop in obj ? 
//          obj[prop] : defVal)
//    })
// }

// const position = withDefVal({
//    x: 24,
//    y:42
// }, 0)

//! скрытие полей в обьекте через прокси 
// const withHiddenProps = (target, prefix = '_') => {
//   return new Proxy(target, {
//      has: (obj,prop) => prop in obj && !prop.startsWith(prefix),ownKeys: obj => Reflect.ownKeys(obj)
//      .filter(p => !p.startsWith(prefix)),
//      get: (obj, prop, receiver) => (prop in receiver) 
//      ? obj[prop] : void 0
//   })
// }

// const data = withHiddenProps({
//    name: "NJ",
//    age: 30,
//    _uid: '12345'
// })


//! оптимизация 
// const userData = [
//    {id: 1, name: 'Nj', job: 'frontend', age: 30},
//    {id: 2, name: 'Marina', job: 'fullstack', age: 27},
//    {id: 3, name: 'ALex', job: 'marketing', age: 24},
//    {id: 4, name: 'Angela', job: 'sales', age: 20},
// ]



// const IndexedArray = new Proxy(Array, {
//    construct(target, [arg]) {
//       const index = {}
//       arg.forEach(element => (index[element.id] = element))
      
//       return new Proxy(new target(...arg), {
//          get(arr, prop){
//             switch (prop) {
//                case 'push' : 
//                return element => {
//                   index[element.id] = item
//                   arr[prop].call(arr, item)
//                }
//                case 'findById': 
//                return id => index[id]
//                default:
//                   return arr[prop]
//             }
//          }
//       })      
//    }
// })

// const users =  new IndexedArray([
//    {id: 1, name: 'Nj', job: 'frontend', age: 30},
//    {id: 2, name: 'Marina', job: 'fullstack', age: 27},
//    {id: 3, name: 'ALex', job: 'marketing', age: 24},
//    {id: 4, name: 'Angela', job: 'sales', age: 20},
// ])
