
//?
// function min(a, b){
//    return Math.min(a,b);
//  }

//  console.log(min(1, -2.5));
//  console.log(min(null, 2.5));


//? выкинуть из строки цифры и вернуть в обратном порядке
// function reverseLetter(str) {
//*
   // return [...str].filter(e => isNaN(e)).filter(e => e === e.toLowerCase() && e !== e.toUpperCase()).reverse().join('')

//*
   // return str.split('').filter(x => x.charCodeAt() > 96 && x.charCodeAt() < 123).reverse().join('');  


//  }
//  console.log(reverseLetter("ultr53o?n"));//nortlu
//  console.log(reverseLetter("ab23c"));//cba


//? подсчет колличества входящих символов и заменить их на цифры 
// function freqSeq(str, sep) {
   // const finalArr = []
   // const copyEl = [...str].reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum),{})
   // let keysArr = Object.keys(copyEl)
   // let valArr = Object.values(copyEl)
   // // console.log(keysArr, valArr);

   // let copyStr = [...str].map(e => keysArr.includes(e) ? valArr : 0)
   // .map((e,i,arr) => e.slice(0, [i + 1]))
   // copyStr = copyStr[copyStr.length -1]
   
   // return copyStr

   // e.replace(keysArr.includes(e), valArr)
//-----------------------------------------------

//! reduce  
//*
      // const sTransform = [...str];

      // const sumsLetter = [...str].reduce((sum,n) => {
      //    if(!sum[n]){
      //      (sum[n] = 1);
      //    }else{
      //       sum[n] += 1
      //    }
      //    return sum
      // },{});

      // return sTransform.map(e => sumsLetter[e]).join(sep);

//*
   // const map = [...str].reduce((a,c)=>(a[c] = ++a[c] || 1, a),{})
   // return [...str].map(e=>map[e]).join(sep)

 //! reduce   
   // let s = [...str];
   // let count = s.reduce((sum, letter) => {
   //    sum[letter] ? sum[letter] += 1 : sum[letter] = 1;
   //    return sum
   // },{})
   // return s.map(e => count[e]).join(sep)

//! простой способ посчитать количество вхождений
   // return [...str].map((v, i, arr) => arr.filter(vi => vi === v).length).join(sep);

//*
   // return [...str].map(el => str.split(el).length-1)

//   }

// console.log(freqSeq('hello world', '-'));// '1-1-3-3-2-1-1-2-1-3-1'
// console.log(freqSeq('19999999', ':'));

//! деструктуризация dest
// const rgba = [255, 0, 150]
// const [red, blue, green] = rgba
// const [ , , green] = rgba

// console.log(red, blue, green);


//* посчитать собрать повторы в уникальном экземпляре
// function add(...args) {

//    return [...new Set(args.flat().filter((e,i,arr) => arr.indexOf(e) !== arr.lastIndexOf(e)))] 
//  }

//  console.log(add([1, 3, 2, 4, 5], 1, 8, 2, 7));//[1,2]


//! флат массив обьеденить из многомерных
// var flatten = function (array){
   // return array.flat(1)

   // return [].concat(...array)

   // return array.reduce((a,b) => a.concat(...b) ,[])

   // return array.reduce((a,b) => [...a, ...b], [])

   // return [].concat(...Array.from(array))
//  }

//  const flatten = (array) => array.reduce( (acc, item) => (Array.isArray(item ) ) ? acc = [...acc, ...item] :  acc = [...acc, item], [] );

//  console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]))
 //([1, 2, 3, "a", "b", "c", 1, 2, 3]);

//  console.log(flatten( [[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]))
 // ([3, 4, 5, [9, 9, 9], "a,b,c"]);


//  console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]))
 // ([[3], [4], [5], 9, 9, 8, [1, 2, 3]]);


//* вернуть по абревиатру словa
//! через обьект
 // testCases = [
//    ['dgm', 'disturbing gregarious mustache'],
//    ['lkj', 'literal klingon joke'],
//    ['interesting', 'ingestable newtonian turn eager rant eager stylish turn ingestable newtonian gregarious'],
//    ['codewars', 'confident oscillating disturbing eager weird awesome rant stylish'],
//  ];

//  var makeBackronym = function(str){
//    let firstEl = [];

//    testCases.flat().forEach((el)=> firstEl.push({el}));

//   return firstEl.map((elm, i, arr) => elm.el === str ? arr[++i] : null).filter(e => e)[0].el

//? котировки акции покупка на падени и продажа на максималках посчитать максимальную сумму профита 
// function getMostProfitFromStockQuotes(quotes) {

//   let maxProf = Math.max(...quotes)
//   let indexProf = quotes.findIndex(e => e === maxProf)

//   maxProf = maxProf * indexProf - quotes.slice(0, indexProf).reduce((a,b) => a + b)
//    return maxProf


// let arrI = [];
// let resArr = []
// quotes.forEach((e,i,arr) => e > arr[i-1] ? arrI.push(i) : 0)
// arrI.forEach((e,i,arr) => {
//   resArr.push(quotes.slice(e-e, e));
// })
//  return resArr.map(e => e.filter((e,i,arr) => e !== Math.max(...arr)))

// let res = 0;

// for(let i = 0; i < q.length; i++){
//    console.log(q[i], q[i-1]);
//    if(q[i] - q[i-1] ) {
//       res += q[i] - q[i-1]
//    }
// }

// return res

//*
// const sum = (a, b) => a + b

// const getMostProfitFromStockQuotes = (quotes, current = 0) => {
//   if (quotes.length < 2) return current 
//   const max = Math.max(...quotes)
//   const maxAt = quotes.indexOf(max)
//   const left = quotes.slice(0, maxAt)
//   const right = quotes.slice(maxAt + 1)
  
//   const profitOnLeft = left
//     .map(a => max - a)
//     .reduce(sum, 0)  
  
//   return getMostProfitFromStockQuotes(right, current + profitOnLeft)
// }


//!! reduce
// return q.reduceRight(
//    ([max, profit], next) =>
//      next > max
//        ? [next, profit]
//        : [max, profit + max - next],
//    [-Infinity, 0]
//  )[1];

//! reduce
// let top=-Infinity;
// return quotes.reduceRight((p,v)=>{
//   if(top<v) top=v;
//   return p+top-v;
// }, 0);

//*
// return quotes.map((_,i) => Math.max(...quotes.slice(i)) - quotes[i])
//              .reduce((x,y) => x + y) 

// }

// function getMostProfitFromStockQuotes(q) {
// let maxProfit = 0; // initialize max
// let lowestPrice = q[0];

// for(let i = 1; i < q.length; i++){
//     let price = q[i];

//     if(price < lowestPrice) lowestPrice = price;
//     let profit = price - lowestPrice;
//     maxProfit = Math.max(profit, maxProfit);

// }
// return maxProfit;


// let maxProfit = 0;
// let lowestPrice  = q[0];
// let min = 0;

// for(let i = 1; i < q.length; i++) {
//   min = Math.min(q[i], min);
//     maxProfit = Math.max(maxProfit, q[i] - min);
// }
// return maxProfit;


// let profit
// let maxProfit = 0

// q.forEach(function(buy, index) {
//     let rest = q.slice(index + 1)       
//     if (rest){
//       let sell = Math.max(...rest)      
//         sell > buy ? profit = sell - buy : null
//          profit > maxProfit ? maxProfit = profit : null    
//   }     
// })  
//  return maxProfit    

// }

// console.log(getMostProfitFromStockQuotes([ 1, 2, 3, 4, 5, 6 ]));//15
// console.log(getMostProfitFromStockQuotes([ 1, 6, 5, 10, 8, 7 ]));//18 [1,6,5] покука - продажи  [10*3]

// console.log(getMostProfitFromStockQuotes([ 1, 2, 10, 3, 2, 7, 3, 2 ]));//26 [1,2] - продажа 10*2 [3,2] - продажа 7*2

//? проверить в массив это массив
// const arrCheck = val => {
//    return val.every((e,i,a) => Array.isArray(e))

//*
// a.every(Array.isArray)

//*
// var def = true;
// for(var i = 0; i < array.length; i++) {
//   def = array[i] instanceof Array ? def : false;
// }

// return def;

//   }
  
//   console.log(arrCheck([]));//true
//   console.log(arrCheck([['string']]));//true
//   console.log(arrCheck([[],{}]));//f
//   console.log(arrCheck([[1],[2],[3]]));//true
//   console.log(arrCheck(['A', 'R', 'R', 'A', 'Y']));//true


//? Найти не последовательное число 
// function missingNo(n) {
  //*
  // return n.sort((a,b) => a-b).map((e,i,a) => {
  //  if(a[a.length -1] !== 100) return 100
  //  if(a[0] !== 0) return 0
  //  else if(e-i>0) return i
  // }).filter(e =>e >= 0)[0]

  //*
  // return n.sort((a,b) => a-b).map((e,i,a) => a[a.length -1] !== 100 ?
  // 100 : e - i > 0 ? i : false).filter(_=>_)[0]


  //*
  // return 5050 - n.reduce((a, b) => a + b, 0)

  //*
  // let resp = []
  // nums.sort((a,b)=> a-b)
  // nums.forEach((num, k) => {
  //   if(num - k === 0) resp.push(num)
  // })
  // return resp.length

  //*
  // return [...Array(101).keys()].filter(x => !nums.includes(x))[0]

  //*
  // nums.sort((a, b) => a - b).find((num, i) => num !== i) - 1
// }

// console.log(missingNo(
//todo   [9, 45, 53, 10,  100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 26, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16]) 
// ); // 26

// console.log(missingNo(
//todo  [9, 45, 53, 10, 26, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16])) //100



//? последовательность элементов в массиве
// const distributeEvenly = (arr) => {

  //!хоршие решение 
  // const uniqArr = [...new Set(arr)]
  // const arrOfTypes = uniqArr.map(e => arr.filter(inner => e === inner))
   //cобрать все повторы в разные массивы

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

//todo ['one', 'two', 'three', 'four', 'one', 'two', 'three', 'one'];



//? разделить массив на подмасивы где длина подсива === ленс, вернуть в реверсе
// function selReverse(array, length) {
  //*
  // let subArr = []
  // for(let i = 0; i < Math.ceil(array.length/length); i++){
  //   //! разделить массив на несколько массивов 
  //    subArr[i] = array.slice((i * length), (i*length) + length)
  // }
  // return subArr

  //*
  // const res = []
  // //! в каждом шаге пушим разделеный массив
  // for(let s =0, e=length; s < array.length; s+= length, e+= length){
  //   res.push(array.slice(s,e))
  // }
  // return res
  
  //*forEach
  // let partsOfArr = []

  // if(length === 0) return array

  // else 
  // array.forEach((_,i) => {
  //    partsOfArr.push(array.slice((i * length), (i*length) + length))
  // });

  // return partsOfArr.filter((e,i,arr) =>{
  //    arr[i].reverse();
  //   return e.length}).flat()

  //*
    // const selReverse = (array, length) => length === 0 ? array: array.length >= 1 ? array.slice(0,length).reverse().concat(selReverse(array.splice(length),length)) : []

  //! reduce + map
    // return array.reduce((acc,n) =>{  
    //   if(acc[0].length < length){
    //     acc[0].push(n)
    //   }else{
    //     acc.unshift([n])
    //   }
    //   return acc
    // },[[]]).reverse()
    // .map(arr => arr.reverse())
    // .reduce((a,b) => [...a, ...b])

    //*reduce
    // return !length? array:Array(Math.ceil(array.length/length)).fill()
    //         .map((_,i)=>i*length).reduce((acc,cur) => {
    //           return acc.concat(array.slice(cur, cur+length).reverse())
    //         },[])

   //* array from
   //  Array.from({length:Math.ceil(arr.length/l)},(a,i)=>arr.slice(i*l,i*l+l).reverse()).reduce((a,b)=>a.concat(b),[]) : arr;
    
  //* чуть другое но тоже разделяет массив на количесво 
  // return [...Array(Math.ceil(array.length/length))].map((_,indx) => array.filter((_,i) => i % length === 0))
// }
// console.log(selReverse([2,4,6,8,10,12,14,16], 3));
//todo [6,4,2,12,10,8,16,14]
// console.log(selReverse([1,2,3,4,5,6], 2));
//todo [2,1,4,3,6,5]
// console.log(selReverse([1,2,3,4,5,6], 0));



//? Умножить число на индекс и само себя size раз
// multiplicationTable = function (size) {
 //*
  // var result = [];

  // for (var i = 0; i < size; i++) {
  //   result[i] = [];
  //   for(var j = 0; j < size; j++) {
  //     result[i][j] = (i + 1) * (j + 1);
  //   }
  // }
  
  // return result


 //*
  //   var result = [];
  //   for (var idx_m = 1; idx_m <= size; idx_m++) {
  //     result.push(elemIncrease(idx_m, size));
  //   }
  //   return result;
  // }

  // function elemIncrease(incrNum, sizeNum) {
  //   var ret = []
  //     , sum = 0;
  //   for (var i = 0; i < sizeNum; i++) {
  //     sum += incrNum;
  //     ret.push(sum);
  //   }
  //   return ret;
  // }

  //*
  // Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>(i+1)*(j+1)))

  //*
  // return Array.from({length: size}, (_,number) => [++number])
  //             .map((_,i) => Array.apply(null, new Array(size))
  //             .map((_,j) => (i+1) * (j+1)))

  //*
//  return Array(size).fill().map((_,i)=> Array(size).fill().map((_,j)=>(1+i)*(1+j)))

 //*
//  [...Array(size)].map((_, idx) => [...Array(size)].map((_, i) => ++i * (idx + 1)));
// };

// console.log(multiplicationTable(3));
//todo [[1,2,3],[2,4,6],[3,6,9]]


//? удалить пробелы и соеденить слова
// //* вариант с классическим пушом в массив
// function spacey(arr) {
//    let finalArr = [];
//    let spaceCount = 0;
//     arr.map((v, i, a) => {
//      spaceCount += v.length;
   
//      finalArr.push(arr.join("").slice(0, spaceCount));
//    });
//     return finalArr
//  }
 
 //* вариант оптимизирован на три строчки кода
//  function spacey(arr) {
 
//    let spaceCount = 0;
//    return arr.map((v, i, a) => {
//      spaceCount += v.length;
//    return arr.join("").slice(0, spaceCount);
 
//    },[]);
//  }
 
//* еще более оптимизирован
// function spacey(arr){
//    return arr.map((_, i) => arr.slice(0, ++i).join(''))
// }

//! nice
// function spacey(arr){
//    let str = '';
//    return arr.map(e => str +=e)
// }

//! reduce
// function spacey(arr){
// const wordsList = array.reduce(
//    (acc, curr) => {
//      if (acc.length < 1) {
//        return [...acc, curr];
//      }
     
//      const addWord = [...acc, acc[acc.length - 1] + curr];

//      return addWord;
//    }, [],
//  );
 
//  return wordsList;
// }


//  console.log(spacey(["kevin", "has", "no", "space"]));
 // [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
 // console.log(spacey(['this','cheese','has','no','holes']));
 // ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']




 //   //! увеличить массив на n - число аргументы
// function alternate(n, f, s) {
  //* while
  // let arr = [];
  // let count = 0;
  // while (n > count) {
  //   count += 1;

  //   count % 2 === 0 ? arr.push(s) : arr.push(f);
  // }
  // return arr;

  //* for
  // const array = [];
  // for (let i = 0; i < n; i++) {
  //   array.push(i % 2 === 0 ? f : s)
  // }
  // return array;

  //! увеличить массив на n - число аргументы
  // return [...Array(n)].map((_, i)=> i & 1 ? s:f)

  // return Array.from({length: n}, (_,i) => i % 2 ? s : f)

  //   return Array.from({length: n},(v, index) => !(index % 2) ? firstValue : secondValue )

  // return Array.from({length: n}, (_,i) => [firstValue,secondValue][i%2])


// }

// console.log(alternate(5, true, false)); //[true, false, true, false, true]


//? расскинуть числа по возрастанию первое максимальное число с лева в массив следущее макс по возраст в правую часть массива и так до конца
//*
// function makeValley(arr) {
//   function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j + 1] > arr[j]) {
//           [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//         }
//       }
//     }
//     return arr;
//   }

//* альтернатива перебра 
// return [...Array(n)].map((_,i)=>[...Array(n)].map((_,j)=>(i+j)%n+1))
//*

//   let sorted = bubbleSort(arr);
//   let length = arr.length;
//   let res = [];
//   let index = 1;
//   let arrayLeft = 0;
//   let arrayRight = length - 1;

//   while(index < length){
//     res[arrayLeft++] = sorted[index - 1]
//     res[arrayRight--] = sorted[index]
//     index += 2
//   }
//   if(index -1 == length - 1){
//     res[arrayLeft] = sorted[index - 1]
//   }
//   if(length <= 1){
//     return arr
//   }
//   return res
// }

//*
// const makeValley = arr =>
//  [...arr.sort((a,b) => b-a).filter((_,i) => !(i%2)),
//    ...arr.sort((a,b)=> b-a).filter((_,i)=>(i%2)).reverse()]

//*
// function makeValley(arr) {
//   var leftWing = []
//   var rightWing = []
//   arr.sort((a, b) => b - a)
//     .forEach((el, i) => i % 2 == 0 ? leftWing.push(el) : rightWing.unshift(el))
  
//   return [...leftWing, ...rightWing]

//*
// let lwing = [], rwing = [];
// arr.sort((a, b) => b - a).map((n, i) => (i % 2 == 0) ? lwing.push(n) : rwing.push(n));
// return lwing.concat(rwing.reverse());

//*
// return arr.sort( (a,b)=>b-a )
// .filter( (v,i)=>!(i%2) )
// .concat( arr.filter( (v,i)=>i%2 ).reverse() );   

// }


// console.log(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]));
//[17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]);
// console.log(makeValley([20, 7, 6, 2])); // [20, 6, 2, 7]