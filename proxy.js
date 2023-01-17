//* obj
// const person = {
//    name: 'NJ',
//    age: 30,
//    job: 'Frontend'
// }

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



const withDefVal = (target, defVal = 0) => {
   return new Proxy(target, {
      get: (obj, prop) => (prop in obj ? 
         obj[prop] : defVal)
   })
}

const position = withDefVal({
   x: 24,
   y:42
}, 0)


const withHiddenProps = (target, prefix = '_') => {
   console.log(object);
}