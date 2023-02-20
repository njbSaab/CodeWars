
//!-----------------------array cycle перебор----------------------------
//  const names = ['oleg', 'Andrey', 'igor', 'Vel']

//  const mix = ['glo', 25, true, 'okey', '15', null]

//* for

//let sum = 0;
// for(let i = 0; i < num.length; i+=1){
//sum+=number[i]
//}
// for(let i = 0; i < names.length; i+=1){
// names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase()
// }
//
//-----------------------------------------

// let forWords = [];
// for(let i = 0; i < mix.length; i+=1){
//   if(typeof mix[i] === 'string' && isNaN(mix[i])){
//     forWords.push(mix[i])
//   }
//  }

// console.log(forWords);
//----------------------------------------

// for(const name of names){
//   console.log(names);
// }

//* forEach
// let a = [5,6,7,8,9]

// a.forEach((element, index) =>{
//   console.log(index);
//   console.log(element = element * 2);
//   console.log('----');
// })

// names.forEach(function(item, i, arr){
//   arr[i] = item[0].toUpperCase() + item.slice(1).toLocaleLowerCase()
// })
// console.log(names);

//

//* map
// const correctName = names.map(function(item) {
//   return item[0].toUpperCase() + item.slice(1).toLowerCase()
// })

// const correctName = names.map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase()
// )

//  console.log(correctName);

//* filter

// let filterWords = mix.filter((item) => {
//   return typeof item === 'string' && isNaN(item)
// })
// console.log(filterWords);

//*reduce
// const arr = [10, 20, 30, 40, 50]

// const city = ['kiev', 'lvov', 'kiev', 'odesa']
// let sum = arr.reduce(function(acc, item, index){
//   console.log(index);
//    return index;
// }, 0)
// console.log(sum);

// const arr2 = [[123],[456],[789]]

// let arrCopy = arr2.reduce((acc, item)=> acc.concat(item))

// const arCopy = arr2.reduce(function(acc, item){
// return acc.concat(item)
// })
// console.log(arCopy);


//? Умножить все на 2 
//* done
// const maps = (x) => x.map(int => int * 2)

//* done
// function maps(x){

//    var newArr = [];
   
//    x.map(function(y){
//      newArr.push(y*2);
//  });
 
//  return newArr; 
 
//  }


// console.log(maps([1, 2, 3]))// [2, 4, 6]);
// console.log(maps([2, 2, 2]))// [4, 4, 4]);



//? разложить массив по иднексу от 1 и до n числа
// return [...Array(n)].map((_, i)=> i + 1)


//? среднее число
// function betterThanAverage(classPoints, yourPoints){
   // return classPoints.reduce((a, i)=> a + i) / classPoints.length < yourPoints;
   // }
   
   // console.log(betterThanAverage([2, 3], 5));//true 
   // console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));//true 
   // console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))//false
   // console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50))//false
   // console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21))//false
   
   
   
   //! пример среднего числа 
   // let a = [15, 15, 20, 20, 20]
   
   // let b = a.reduce((acc, elem)=>{
   //    acc = acc + elem
   //    return acc 
      
   // })
   // b = b / a.length
   // console.log(b);
   

   //* forEach 
   // function getAverage(marks){
   //    let sum = 0
   //    marks.forEach(i => sum+=i)
   //    return Math.floor(sum /= marks.length);
   //  }


//? найти не последовательно число в массиве 1,2,3-5
// const arr = [1,2,3,5,7,8,9,11] 
//  const arrCopy = arr.filter((e, i) => arr[i] - arr[i-1] > 1 )

   //    for(let i = 0; i < arr.length -1; i++){
   //      if (arr[i + 1] !== arr[i] + 1)
   //          return arr[i + 1]
   //    }
   // return null
   
// console.log(arrCopy);



//? Найти кратное число [2,6] = [2, 4, 6]
//* good code
// function findMultiples(integer, limit) {
//    let res = [];

//    for(let i = integer; i <= limit; i += integer){
//       res.push(i)
//    }

//    return res;
//  }

//? Гласные заменить на код букв в массиве
// function isVow(a){
//    const vowels = ['a', 'e', 'i', 'o', 'u'];
//    return a.map(code => vowels.includes(String.fromCharCode(code)) ? String.fromCharCode(code) : code )
//    }
   
// isVow = x => x.map(y => /[aeiou]/.test(String.fromCharCode(y)) ? String.fromCharCode(y) : y)


//? удалить дубли 
// function distinct(a) {

   //*
   // return [...new Set(a)];
   // distinct = a => Array.from(new Set(a));

   //*
   //a.filter((item, index) => a.indexOf(item) === index);


//  }
//! форичем
//  function distinct(a) {
//    let res = [];
//    a.forEach( el => !res.includes(el) ? res.push(el) : 0);
//    return res;
//  }

//! редюс
//  function distinct(a) {
//    return a.reduce((acc,rec)=>{
//    return(!acc.includes(rec))?[...acc,rec]:acc
//    },[])
//  }

//  console.log(distinct([1])); 
//  console.log(distinct([1,1,2])); 

//! nice code
//const goals = (...a) => a.reduce((s, v) => s + v, 0);
//  console.log(goals(5,5,5));

//? повторить предложение количеством num 1 sheep...2 sheep...3 sheep...
// var countSheep = function (num){
//!  return [...Array(num)].map((_, i)=> `${[i + 1]} shep...`).join('')

//!   return [...Array(num)].reduce((pre, _, idx) => pre + `${++idx} sheep...`, ``);
//  }

//  console.log( countSheep(0));
//  console.log( countSheep(1));//1 sheep...
//  console.log( countSheep(2));//1 sheep...2 sheep...
//  console.log( countSheep(5));//1 sheep...2 sheep...3 sheep...



//! целочисленный квадратный корен sqrt - проверка на квадрат Number.isInteger
// const squareOrSquareRoot = array => array.map((x) => Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x ** 2)
 
//  console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]));


//? средние число сравнить с таблицой баллов абс
//! nice code
//getGrade=(...a)=>(x=a.reduce((p,c)=>p+c,0)/a.length,['A','B','C','D','F'][x<60?4:x<70?3:x<80?2:x<90?1:0])


// console.log
// (getGrade (95,90,93),
//  getGrade(100,85,96))


//? задача fizzbuzz число делится либо 3, либо на 5, или на 3 и 5
// function fizzbuzz(n) {

//    let res = [];
//       for(let i = 1; i <= n; i++){
//          if(i % 3 == 0 && i % 5 == 0) res.push('FizzBuzz')
//             else if(i % 3 == 0) res.push('Fizz')
//             else if(i % 5 == 0) res.push('Buzz')
//          else res.push(i)
//    }   
//    // return res
//*
//    return [...Array(n + 1).keys()].slice(1).map((x) => x % 15 === 0 ?
//    'FizzBuzz':
//    x%3===0?'Fizz':
//    x%5===0?'Buzz':
//    x)
  
// }
 
// console.log(fizzbuzz(10));


//? умножить массив каждый одельно и отнять результат одного от другого
 //*
//  const findDifference =  (a, b) => {
//     let res = a.reduce((x,y) => x * y) - b.reduce((x,y) => x * y)
//     return Math.abs(res)
//  }
 
//* 
// const findDifference = (a, b) =>  Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
 

//! nice code
// function volume(c) {
//    return c.reduce((x, y) => x * y);
//  }
 
//  function findDifference(a, b) {
//    return Math.abs(volume(a) - volume(b));
//  }

// console.log(findDifference([3, 2, 5], [1, 4, 4]));
// console.log(findDifference([2, 2, 2


//? Найти число [2, 1, 10]/9 --> (10 - 2) + (2 - 1) = 8 + 1 = 9
//!sort
// function sumOfDifferences(arr) {
//    // return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }

// const sumOfDifferences = arr => arr
//   .sort((a, b) => b - a)
//   .map((a, i) => a - arr[i + 1] || 0)
//   .reduce((a, b) => a + b, 0);


// function sumOfDifferences(arr) {
//    let sorted = arr.sort((a, b) => b - a)
//    let sum = 0;
//    for (let i = 0; i < sorted.length - 1; i++) {
//      sum += (arr[i] - arr[i + 1]);
//    }
//    return sum;
//  }

// console.log(sumOfDifferences([1, 2, 10]));
// console.log(sumOfDifferences([-1, -2, -3]));



//! переобразовать число в массив 
// const digitize = n => n.toString()
//                       .split``
//                       .reverse()
//                       .map(Number)


//  function digitize(n) {
// return String(n).split('').map(Number).reverse()
// }


//! решение через Аrray.from
// function digitize(n) {
   // return Array.from(String(n), Number).reverse();
   
//  }
                     
//  console.log(digitize(35231));//[1,3,2,5,3]


//? ------------------редюс посчитать пизитивные числа
//   function positiveSum(arr){
//*
//   return arr.reduce((acc, item) => {
//       if (item > 0) return acc += item;
   
//       return acc;
//    }, 0)

//! nice
// return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);

//*
   // return arr.reduce((acc, item) => item > 0 ? acc += item : acc, 0)


//   return  arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
//  }
//  console.log(positiveSum([1, -2, 3, 4, 5])); //13
//  console.log(positiveSum([-1,-2,-3,-4,-5])); //0
// console.log(positiveSum([])); //0



//? реверс массива
//*
// const reverseSeq = n => [...Array(n)].map((_,i) => i+1).reverse()

//*  Array.from
// const reverseSeq = length => Array.from({length}, ()=> length--)
 // console.log(reverseSeq(5));// [5,4,3,2,1,0]


//? Удаление дублей
 // function mergeArrays(arr1, arr2) {
   //*
   //   return [...new Set([...arr1, ...arr2])].sort((a, b) => a-b)
   
   //* arrayFrom
   // return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
   
   //* 
   // return [...arr1, ...arr2].filter((e, i, a)=> a.indexOf(e) === i).sort((a,b) => a-b)
   // }
   
   
   // console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));
   // console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]));


//? посчитать сумму елементов в квадрате
// function squareSum(n){
//   return n.map((e) => e**2).reduce((a, b) => a + b, 0)

// return n.reduce((a,b)=> a+(b*b), 0)
// }
// console.log(squareSum([1,2]));
// console.log(squareSum([0, 3, 4, 5]))
// console.log(squareSum([]))



//? Найти самое маленько число
//  function findSmallestInt(args) {
   //   return args.reduce((a,b) => a < b ? a : b) 

   //*
   // return Math.min(...args)
   // }
 
//  console.log(findSmallestInt([78,56,232,12,18]));//12
//  console.log(findSmallestInt([78,56,232,412,228]))// 56
//  console.log(findSmallestInt([78,56,232,12,0]));// 0


//? если в массиве 0 гуд отдать "фаил", если 1 и больше отдать "пуликац", и больше 2х серия
// function well(x){
   //*
   //  const res = x.filter((e) =>  e.includes("good")).length;
   //  return res >  2 ? 'I smell a series!' :
   //         res >= 1 ? 'Publish!' : 'Fail!'
   
   //* alt 
   // return x.filter((e) =>  e.includes("good")).length < 1 ? 'Fail' : x > 2 ? 'i smell' : 'publ'

   //* good крутой выход на тернарник 
   //  return x.includes('good') ? x.filter((e) =>  e.includes("good")).length < 3 ? 'publ' : 'i small' : 'fail'

   //* reduce
   //  return x.includes('good') ? x.reduce((a, b) => a + ( b === "good"), 0) < 3 ? 'publ' : 'i small'  : 'fail'
   // }

//! nice code
// const well = (x) =>
//    (e => e ? e > 2 ? `i smell` : `publ` : `fail`)
//    (x.filter((e) => e === "good").length)

//  console.log(well(["bad","bad","bad","good","good","bad"])); // publ
//  console.log(well(['bad', 'bad', 'bad', 'bad'])); // f
//  console.log(well(["bad","good","bad","good","bad","bad", "good","good","good","good"])); // i small



//? посчитать возраст собаки и кота в человека год 
// var humanYearsCatYearsDogYears = function(humanYears) {
//    return [humanYears,
//       (humanYears - 1 ? 16 : 11) + 4 * humanYears,
//       (humanYears - 1 ? 14 : 10) + 5 * humanYears]
//  }
//  console.log(humanYearsCatYearsDogYears(1));  // [1, 15, 15]
//  console.log(humanYearsCatYearsDogYears(2));  // [2, 24, 24]
//  console.log(humanYearsCatYearsDogYears(10)); // [10, 56, 64]


//? в массиве не соблюдается последовательность перебора
// function pipeFix(n){
   //*
    // return Array.from({length: n[n.length - 1]}, (_,i) => n[0] + i)

   //* 
   // let first = n[0];
   // let last = n[n.length-1];
   
   // const arr = [];
   // for(let i = first; i <= last; i++) {
   //   arr.push(i);
   // }
   // return arr;
//! алернатива
// const arr = [];
//     for(let i = n[0]; i <= n[n.length-1]; i++) {
//       arr.push(i);
//     }
//     return arr;

//! map
   // return [...Array(n[n.length - 1])].map((_,i) => n[0] + i)
//! алернатива
   // return Array(n.pop() - n[0] + 1).fill(0).map((_, i) => i + 1)

//}
// console.log(pipeFix([1,2,3,5,6,8,9])); [1,2,3,4,5,6,7,8,9]


// console.log((10 * 1.1 ** (20 - 11)).toFixed(2));


// function howMuchWater(water, load, clothes){
//    if(clothes / 2 > load) return 'Too much clothes'
//    else if (load > clothes) return 'Not enough clothes'
//    return (water * 1.1 ** (clothes - load)).toFixed(2) + ''
//  }

// console.log(howMuchWater(10,10,20))



//* вычислить сумму массиво и умножить на 20
// let sunday = [6737, 7244, 5776, 9826, 7057, 9247], monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603],
// tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157],
// wednesday = [6353, 9605, 5464, 9752, 9915, 7446],
// thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6341],
// friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411],
// saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927]

// const stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday];

// function stairsIn20(s){
   //! flat обьеденяет массивы
   // return s.flat().reduce((a, b) => a + b, 0) * 20

   // return s.map((e) => (e.reduce((a, b)=> a + b))).reduce((x, y) => x + y) * 20

   // return 20 * s.reduce((a, b)=> a + b.reduce((x, y)=> x + y, 0), 0)
//  }

//  console.log(stairsIn20([stairs]));


 
//! переобразование числа в массив через Array.from
// function nextPal(val) {
//    return Array.from(String(val), Number)
//    }

//    console.log(nextPal(191));
//    console.log(nextPal(202));


// function dontGiveMeFive(start, end){
  //*
  // return Array.from(Array(end-start+1),(e,i)=>i+start)
  // .filter((e)=>(''+e).indexOf('5')===-1)
  // .length;

  //*
  // return [...Array(end - start + 1).keys()].map(el => el + start).filter(el => ![...(el.toString())].includes("5")).length

  //*
  // return Array(end-start+1).fill().map((e,i)=>start+i).filter(e=>e.toString().indexOf("5")===-1).length

  //*
  // [...new Array((e - s) + 1)]

// }

// console.log(dontGiveMeFive(1,9));//8
// console.log(dontGiveMeFive(4,17));//12

//? Числовой палиндром
// function nextPal(val) {
   //! Переобразование набер в массив
//    let characters = Array.from(String(val), Number)
   // let isPalindrome = true

   //! создать интерированный массив из числа
   // Array.from({length : n}, (x,i) => i + 1)

  
   //* Вариант без переменной isPalindrome сразу фалсе или тру
   // for(let i = 0; i <= characters.length; i++){
   //    if( characters[i] !== characters[characters.length - 1 - i])
   //       return false
   //    }

   //* Вариант с переменной но синтаксис получше
   // characters.forEach((element, i)=> {
   //    if(element !== characters[characters.length - 1 - i])
   //    isPalindrome = false
   // });

      // return isPalindrome
   // }

   // console.log(nextPal(19191));
   // console.log(nextPal(2022));
   // console.log(nextPal(20002));
   // console.log(nextPal(2021));




   //? вернуть кол раз самого частого повторяющиеся значение 
//*
// function mostFrequentItemCount(collection) {
// if(collection.length > 0) {
//    let countItem = collection.reduce((a, b) => (a[b] = (a[b] || 0)+1, a), {})
//    return Object.values(countItem).reduce((a, b) => a < b ? b : a)

// }
// return 0
// }

//* 
//    let countItem = c.reduce((a, b) => (a[b] = (a[b] || 0)+1, a), {})
 //   return Object.values(countItem).sort().slice(-1).join('') * 1

//шпаргалка
//    return Object.values(countItem).reduce((a, b) => a < b ? b : a)
      // if (a < b ) {
      //    return b
      // } else {
      //    return a
      // } 
//! поиск входящий индекс
// return c.filter((e) => c.indexOf(e) === 0)

//! через мап и фильтр и редюсе
// function mostFrequentItemCount(coll){
//   return coll.map(x=>coll.filter(y=> x==y)).reduce((a, b) => b > a ? a : b).length
// }

//! через мап и фильтр
// function mostFrequentItemCount(coll) {
//    return coll.length ? Math.max(...coll.map((x) => coll.filter((y) => y == x).length)) : 0
// }

// console.log(mostFrequentItemCount([3, -1, -1]));//2
// console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));//5
// console.log(mostFrequentItemCount([]));//5

//  console.log(mostFrequentItemCount(['a', 'b', 'c', 'd', 'a', 'e', 'f',]))
// console.log(mostFrequentItemCount([1, 2, 3, 4, 1, 5, 6, 1, 2, 3, 2, 3, 2, 3]))

//! эрэй фром сделать итерацию
// Array.from({length: n}, (_, i) => i+1).reduce((x, y) => x + y);

//! сумма треугольника через эрэй фром 
// const sumTriangularNumbers = n => n > 0 ? Array.from(Array(n), (_, i) => (i + 1) * (i + 2) / 2).reduce((s, e) => s + e) : 0;




//? реверс массива без метода отнять индекс от себя развернуть массив
// reverse = function(array) {
//  let reversArr = [];
//*
//  for(let i = array.length; i--;){
//    // array[i];
//     reversArr.push(array[i])
//  }

//  return reversArr


//! reduce
//   return array.reduce(function(a,b) 
//   { return [b].concat(a) } 
//   ,[])

// return array.reduce((a,b) =>[b, ...a], [])

//! map
   //   return array.map((e,i) => array[array.length - 1 - i])
//  }

//  console.log(reverse([1,2,3])) // [3,2,1] ;
//  console.log(reverse([1,null,14,"two"])) // ["two",14,null,1]


// ? умножить элемент больше на менше
//todo метод поп удаляем последний элемент после умножения
// function minSum(arr) {
   //*
//   return arr.sort((a,b) => a-b).reduce((a,b) => a + b * (arr.pop()), 0)

   //*
// return arr.sort((a,b) => a-b).slice(0, arr.length/2).reduce((a,b,i) => a +=b * arr[arr.length - i -1], 0)

   //*
// return arr.sort((a, b) => a - b)
//    .map((e, i, array) => e * array[array.length -1 - i])
//    .filter((e, i, array) => i < array.length / 2)
//    .reduce((a,b) => a + b)

   //*
// let sorted = arr.sort((a,b) => a-b);               
// let sum = 0;

// for (let i=0; i<arr.length/2; i++){
//   sum += sorted[i] * sorted[sorted.length - (1 + i)]; 
// }
// return sum;


//*
// let sum = 0
// let array = arr.sort((a,b) => a - b)

// while(array.length) sum += array.pop() * array.shift()

// return sum
// }

//  console.log(minSum([5,4,2,3]));//22
//  console.log(minSum([12,6,10,26,3,24]));//342
//  console.log(minSum([9,2,8,7,5,4,0,6]));//74



//! умножить число х само на себя у-раз
// function squares(x,y) {

   //* 
//    const arr = [];
//    if(y === 1){
//       return [x]
//    }
//    for(let i = 0; i < y - 1; i++){
//       if(i === 0) {
//          arr.push(x)
//       }
//       arr.push(x *= x)
//    }
//  return arr

  //* Array from
  // return Array.from({length: y}, (v, k) => Math.pow(x, Math.pow(2, k)))

  //! nice code
   //return Array.from({length:y}, (_, i) => (x*=x));

   //* 
  //return [...Array((y > 0) * y)].map((_, i) => x ** 2 ** i )



// }
// console.log(squares(2, 5));//2/4/8/16/256
// console.log(squares(3, 3));//3,9,81
// console.log(squares(5, 3));//5,25,625







//! сделать заготовку isNotEmpty убрать все пустые
//  const isNotEmpty = x => !!x
//  return words.filter(isNotEmpty)

//!________________________переобразование строк и числе в массив

//!  через Array.from цифры
// function nextPal(val) {
//    return Array.from(String(val), Number)
//    }

//    console.log(nextPal(191));


//! массив в длину аргумента 
// function modifyMultiply (str,loc,num) {

   // return Array(num).fill(str.split(' ')[loc]).join('-')
//?  альтернатива целое слово
   //  return [...Array(num)].fill(str.split(' ')[loc]).join('-')

   // Array.from(Array(n), _ => s.split` `[l]).join`-`;


//? по буквам 
   //  return [...`${str}`]

   // return Array.from(str)
   // }

   // console.log(modifyMultiply ("This is a string",3,5)); //string-string-string-string-string

//! собрать дубли 
//? последовательность элементов в массиве   
// const distributeEvenly = (arr) => {

  //!хоршие решение 
  // const uniqArr = [...new Set(arr)]
  // const arrOfTypes = uniqArr.map(e => arr.filter(inner => e === inner))
  // //cобрать все повторы в разные массивы

  // return arr.map((item,i) => arrOfTypes.map(el => el[i]))
  //           //разбить по индексу все повторы последовольно
  //           .reduce((a,b) => [...a, ...b])
  //           //конкат массива
  //           .filter(e => e)

  //! сложное решение собрать в обьект все дубли
  // const arr = Object.values(array.reduce((acc, e) => ({...acc, [e]: (acc[e] || []).concat(e)}),{}))
  // return Array.from({length: Math.max(...arr.map(({length}) => length))}).reduce((acc, _, i) => [...acc, ...arr.map(e => e[i]).filter(Boolean)] ,[])


  //! собрать дубли 
  //* forEach
  // let obj={};
  // arr.forEach(o=>obj[o]=(obj[o]||0)+1);

  // arr.forEach(x => {
  //   if (!(x in temp) ) temp[x] = 0;
  //   temp[x]++;
  // });

  // const map = {};
  // array.forEach(item => {
  //   if (map[item]) map[item].push(item);
  //   else map[item] = [item];


  // count = {} 
  // array.forEach(function (ele) {
  //   if (ele in count) {
  //     count[ele] += 1
  //   } else {
  //     count[ele] = 1 
  //   }
  // })
  

  //* reduce
  // let counts = arr.reduce((m,v) => (m[v] = 1 + (m[v] || 0), m), {})

  // const x = array.reduce((a,b) => {
  //   a[b] ? a[b]++ : a[b] = 1
  //   return a;
  // },{});

  // let counts = xs.reduce((a,x) => (a[x] = (a[x] || 0) + 1, a), {});
  //*for of
  // const counts = {}

  // for (const item of array) {
  //   counts[item] = (counts[item] || 0) + 1
  // }

  //*for 
  //  const obj = {};
  
  //  for( let i = 0; i < arr.length; i++ ) {    
  //    obj[arr[i]] !== undefined ? obj[arr[i]] = obj[arr[i]] + 1 : obj[arr[i]] = 0;
  //  }

// };
// console.log(distributeEvenly(['one', 'one', 'two', 'two', 'three', 'three', 'four', 'one']));

// ['one', 'two', 'three', 'four', 'one', 'two', 'three', 'one'];