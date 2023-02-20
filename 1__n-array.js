
//? вытащить из массивов на каком месте и в каком массиве Х
// const xMarksTheSpot = (input) => {
// let res = []

// для понимания как работает перебор в многомерном мас
// for(let i = 0; i <= input.length; i++){
//    for(let j = i; j <= input.length; j++){
//       if(input[i][j] === val) return res = [[i],[j]]
//       else [] } 
//    }
//    return res


//*
   //  input.forEach((e,i) => {
   //   e.forEach((elem, indx) => {
   //    if(elem === 'x') res.push(i, indx)
   //   })
   //  })

   //  return res.length === 2 ? res : []


//! reduce 
//  return input.reduce((acc, el, i)=> {
//     if(el.includes('x')) acc =[...acc, i, el.indexOf('x')]
//     if(acc.length > 2) acc = [];
//     return acc
//  })



// console.log(xMarksTheSpot
// ([

//    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//    ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
//    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
//  ])); //[4,6]


//  console.log(xMarksTheSpot
//    ([
//       ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//       ['x', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//     ])); [1,0]



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

// function solution(str, ending){
   //str.slice(-ending.length).includes(ending)
   //return str.endsWith(ending)
//   }
//   console.log(solution('sanurai', 'rai'))// true);
//   console.log(solution('abcde', 'abc'))// false);
 
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


// function cupAndBalls(b, arr){
//    const indexArr = [];
//   arr.forEach((elem,indx,a) => {
//      elem.findIndex((e,i) =>{ 
//         if(e === b && i === 0) indexArr.push(indx) 
//       });
//    }); 
   
//    return arr.length > 1 ? indexArr[0] : 1

//    return arr.reduce((b,[x,y]) => x === b ? y : y === b ? x : b ,b)

      // return arr.flat().map((e,i) => (e === b) ? i : false).filter(e => e)[0]
// };

// console.log(cupAndBalls(1,[[2,3],[1,2],[1,2]])); //1
// console.log(cupAndBalls(2,[[1,3],[1,2],[2,1],[2,3]])); //3
// console.log(cupAndBalls(2,[[1,2]])); //1 




//? отнять элементы массивов по индексу и вернуть [мин и макс] число
// function maxMin(arr1,arr2){
//*
// let res = [];
// let arrRevers = arr2.reverse();

// const arr3 = [...arr1, ...arrRevers].forEach((e,i,array) =>{
//   res.push(Math.abs(array[array.length -1 - i] - array[i]));
// })
// res = res.slice(0, arr1.length);

// return [Math.max(...res), Math.min(...res)];

//*
// let difference = arr1.map((e,i) => Math.abs(e - arr2[i]))
// return [Math.max(...difference), Math.min(...difference)];

//*
//  let difference = arr1.reduce((a,b,i) => [...a, Math.abs(b - arr2[i])],[])
//  return [Math.max(...difference), Math.min(...difference)];

//! reudce PRO
// return arr1.reduce(([max, min], v, i) =>
//  ([max = Math.max(Math.abs(v - arr2[i]), max),
//   min = Math.min(Math.abs(v - arr2[i]), min)], [max, min]),
//    [0, Infinity])


//  }
//*
//  function maxMin(arr1,arr2){
//    var diffs = [];
//    for (i = 0; i < arr1.length; i++) {
//      diffs.push(Math.abs(arr1[i]-arr2[i]))
//    }
//    return [Math.max(...diffs), Math.min(...diffs)]
//  }

//  console.log(maxMin([1,3,5],[9,8,7]));// 8,2
//  console.log(maxMin([1,10,100,1000],[0,0,0,0]));// 1000, 1
//  console.log(maxMin([10,20,30,40],[111,11,1,-111]));//151, 9
// [1,3,5]
//  | | |   --->  8, 5, 2
// [9,8,7]


//? двумерный массив увеличить по числу или сумме агрумента
// function explode(x){
   //*
// const res = []

// let y = x.map(e => e === parseInt(e)).every(e => !e);

//  if(y) return 'Void!'
//  else{
//    y = x.filter(Number).reduce((a,b) => a + b, 0)
//      for(let i = 0; i < y; i++){
//      res.push(x)
//   }
//   return res
//  }

//*
// let [a,b] = x;
  
// if(typeof a == "number" && typeof b == "number") return new Array(a+b).fill(x);
// else if(typeof a == "number") return new Array(a).fill(x);
// else if(typeof b == "number") return new Array(b).fill(x);

// return 'Void!';
 
//* filter
// let filtersEl = x.filter(e => typeof(e) === "number")
//  if(filtersEl.length === 0) return "void"

// return Array(filtersEl.reduce((a,b) => a + b,0)).fill(x)

//! отличный способо через Array.from
// const num = x.filter(e => !isNaN(e))
// return num.length ? Array.from(Array(num.reduce((a,b) => a + b)), y => x) : 'Void'

//*
// const result = Array.from({length: arr.filter(x => x === +x).reduce((a,b) => a+b, 0)}, x => arr)
// return arr.some(x => x === +x) ? result : 'Void!'
// }

//! вариант с деструктуризацией
// const explode = ({0:a, 1:b, 0:{0:x}, 1:{0:y}}) => x && y ? 'Void!' : Array((+a | 0) + (+b | 0)).fill([a,b])

// console.log(explode(['a', 3]));// [['a', 3], ['a', 3], ['a', 3]]
// console.log(explode([9, 3]));// [[9, 3], [9, 3]...9]
// console.log(explode(['a', 'b']));//'Void'
// console.log(explode(['a', 0]));//[]





//? Собрать линии в двумерном массиве и подсчитать сумму очков
// function calculateWin(lines){
   // let verticalLine = []
   // let leftTop = []
   // let leftBot = []
   // let rigthTop = []
   // let rigthBot = []


   // lines.forEach((e,i,arr) => {
   //    leftTop.push(e[i]),
   //    leftBot.push( arr[arr.length -1 -i][i])
   //    rigthTop.push(e.reverse()[i])
   //    rigthBot.push(e.reverse()[arr.length -1 +i])
   //  })
   //  verticalLine = [[...leftTop], [...rigthTop],[...leftBot], [...rigthBot]]

// verticalLine = verticalLine.map((e,i) => i === 1 ? e.map((_) => e.reverse())[0] : e)

// verticalLine = verticalLine.map((e,i) =>(i%2==1)?  e.splice(1,3) : e)
// verticalLine = [[...verticalLine[0], ...verticalLine[1]], [...verticalLine[2], ...verticalLine[3]]]

// const reduceSum = arg => lines.map((el,i,a) => el.filter((e,inx,arr) => arr[inx-1] === arr[inx +1]).length+2).filter(e => e > 2).map(e=> {
//    if(e===3) return 50
//    if(e===4) return 150
//    if(e===5) return 300
// }).reduce((a,b) => a+b)

// return reduceSum(verticalLine)

// let res = []
// lines.forEach((e,ind,arr) => {
//    for(let i = 0; i < e.length; i++){
//       for(let j = 1; j < e.length; j++){
//         if(e[i] === e[j]) res.push(e[i]);
//       }
//    }
//  })
//  return res

//*every
// const calc = l => {
//    if (l.every(v => v === l[0])) return 300
//    else if (l.slice(0, 4).every(v => v === l[0])) return 150
//    else if (l.slice(0, 3).every(v => v === l[0])) return 50
//    else return 0
//  }
//  let points = 0
//  lines.forEach(line => {
//    points += calc(line)
//  })
//  points += calc([lines[2][0], lines[1][1], lines[0][2], lines[1][3], lines[2][4]])
//  points += calc([lines[0][0], lines[1][1], lines[2][2], lines[1][3], lines[0][4]])
//  return points

//*foreEach
// let result = 0;

// lines
// .forEach((n, i) => n
// .forEach((m, j) => {
//    if (j === 0) {
//       m === n[1] && m === n[2] ? (result += 50, m === n[3]) ? (result += 100, m === n[4]) ? result += 150 : '' : '' : '';
//       if (i === 0) {
//          m === lines[1][1] && m === lines[2][2] ? (result += 50, m === lines[1][3]) ? (result += 100, m === lines[0][4]) ?	result += 150 : '' : '' : '';
//       };
//       if (i === 2) {
//          m === lines[1][1] && m === lines[0][2] ? (result += 50, m === lines[1][3]) ? (result += 100, m === lines[2][4]) ? result += 150 : '' : '' : '';
//       };
//    }
// }));
// return result;

// }


// console.log(calculateWin([["Q","Q","Q","Q","Q"],//300
//                          ["10","Q","Q","Q","A"], //50
//                          ["Q","A","A", "J","Q"]]));//150

// console.log(calculateWin([["10","10","10","Q","Q"]
//                          ,["9", "9", "9", "9","A"]
//                          ,["K", "K", "K", "K","K"]]))//500




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
//   [9, 45, 53, 10,  100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 26, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16]) 
// ); // 26

// console.log(missingNo(
//   [9, 45, 53, 10, 26, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16])) //100



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
//[6,4,2,12,10,8,16,14]
// console.log(selReverse([1,2,3,4,5,6], 2));
//[2,1,4,3,6,5]
// console.log(selReverse([1,2,3,4,5,6], 0));
