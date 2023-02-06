//! квадратний корень и проверка на целое число 
// var isSquare = function(n){
   // return Number.isInteger(Math.sqrt(n));

   // return Math.sqrt(n) % 1 === 0
//  }


//  console.log(isSquare(-1));
//  console.log(isSquare(3));

//? cумма в кубе 
// function sumCubes(n){
   //*
   // let sumInCube = 0
   // for(let i = 1; i <= n; i++){
   //    sumInCube += i**3
   // }
   // return sumInCube

   //*
   // return (n * (n + 1) / 2) ** 2;

   //*
   // [...Array(n + 1).keys()].reduce((r, i) => r + i ** 3);

   //*
   // Array.from({length: n}, (_,i)=> i+1).map(el => el**3).reduce((a, b)=> a+b, 0)

   //*
   // let sum = 0;
   // while(n > 0) {
   //   sum += n**3;
   //   n--;
   // }
   // return sum;
 
//  }

//  console.log(sumCubes(2));//9   1+8
//  console.log(sumCubes(3));//36  1+8+27


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



                        