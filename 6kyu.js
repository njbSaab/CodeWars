
// function smartSum(...arg){
   //*
   // return arg.flat(Infinity).reduce((a,b) => a+b)

   //*
   // return arg.reduce((sum, next) => sum + (Number(next) ? next : smartSum(...next)),0)
   //*
   // const args = Array.from(arguments).toString().split(',');
   // let sum = 0;
   // // пропускаю через цикл
   // for (let i = 0; i < args.length; i++) {
   //      //записываю в сум сумму всех елементов массива
   //       sum = sum + +args[i];
   // }
   // return sum;
// }
// console.log(smartSum(1,2));// 3)
// console.log(smartSum([1,2],3)) //6
// console.log(smartSum(1,2,3,[4,5],6)) //21
// console.log(smartSum(1,2,[[3,4],5],6)) //21


//? логика лайков в фейсбуке
// function likes(names) {
   //*
   // if(names.length < 1) return'no one likes this'
   // else if(names.length === 1) return `${[...names]} likes this`
   // else if(names.length === 2) return `${[...names][0]} and ${[...names][1]} likes this`
   // else if(names.length === 3) return `${[...names][0]}, ${[...names][1]} and ${[...names][2]} likes this`
   // else {
   //    return `${[...names][0]}, ${[...names][1]} and ${[...names].length -2} likes this`
   // }

   //! obj
   // return {
   //    0: 'no one likes this',
   //    1: `${names[0]} likes this`, 
   //    2: `${names[0]} and ${names[1]} like this`, 
   //    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
   //    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
   //  }[Math.min(4, names.length)]

   //*switch
   // switch(names.length) {
   //    case 0:
   //      return 'no one likes this';
   //    case 1:
   //      return `${names[0]} likes this`;
   //    case 2:
   //      return `${names[0]} and ${names[1]} like this`;
   //    case 3:
   //      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
   //    default:
   //      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
   //  }
//  }

//  console.log(likes([]));//, 'no one likes this'
//  console.log(likes(['Peter']));//,  'Peter likes this';
//  console.log(likes(['Jacob', 'Alex']));//,'Jacob and Alex like this'
//  console.log(likes(['Max', 'John', 'Mark', 'Mark']));//,Alex, Jacob and 2 others like this'
//  console.log(likes(['Max', 'John', 'Mark', 'Mark', 'Mark', 'Mark']));//,Alex, Jacob and 4 others like this'
//  console.log(likes(['Max', 'John', 'Mark', 'Mark', 'Mark', 'Mark', 'Mark', 'Mark', 'Mark', 'Mark', 'Mark', 'Mark']));//,Alex, Jacob and 10 others like this'

//? удаление дублей
// var uniqueInOrder=function(iterable){
   //*
   // return [...iterable].filter((e,i, arr) => e !== arr[i+1])
   //*
   // var res = [];
   // for (var i = 0; i < iterable.length; i++) {
   //   if (iterable[i] != iterable[i+1]) res.push(iterable[i]);
   // }
   // return res;

   //! очень интересное применение редюс
//    return Array.prototype.reduce.call(iterable, function(a,b){
//          if (a[a.length-1] !== b) a.push(b); return a;
//       },
//        [])
//  }

//  console.log(uniqueInOrder('AAAABBBCCDAABBB'));// ['A','B','C','D','A','B'])
// console.log(uniqueInOrder('ABBCcAD')); //['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder([1,2,2,3,3])); //[1,2,3]
      
      
//? палиндром стр
// function palindrome(str) {
   //*
   // return str.toLowerCase()
   // .split('')
   // .filter(e => e.toLowerCase() !== e.toUpperCase() ?
   //                                 e : Number(e)? e : e === "0" ?
   //                                 e : false)
   // .every((e,i,arr) => e === arr[arr.length-1-i])


   // return  str.toLowerCase().split('').filter((e,i,a) => {
   //    if(e === "0") return e
   //    if(Number(e)) return e
   //    else if(e.toLowerCase() !== e.toUpperCase()) return e
   // }).every((e,i,arr) => e === arr[arr.length-1-i])
//  }

//  console.log(palindrome("101"));//true
//  console.log(palindrome("911"));//false
//  console.log(palindrome("RotaTor"));//true
//  console.log(palindrome("A man, a plan, a canal - Panama"));//true
//  console.log(palindrome("Under_scores; Serocsrednu"));//true
//  console.log(palindrome("Abba Zabba, you're myZaaba Abba"));//false


//! генератор 
// function* generator(a, b) {
//    function* newGen(x){
//      let y = 1;
//      while (y <= 10){
//        yield `${x} x ${y} = ${x*y}`
//        y++;
//      }
//    }
   
//    for (let i=a; i <=b; i++ ){
//      yield newGen(i);
//    }
//  }


// generate(1, 3) 
// // generator 1
// '1 x 1 = 1'
// '1 x 2 = 2'
// '1 x 3 = 3'
// '1 x 4 = 4'
// '1 x 5 = 5'
// '1 x 6 = 6'
// '1 x 7 = 7'
// '1 x 8 = 8'
// '1 x 9 = 9'
// '1 x 10 = 10'

// // generator 2
// '2 x 1 = 2'
// '2 x 2 = 4'
// '2 x 3 = 6'
// '2 x 4 = 8'
// '2 x 5 = 10'
// '2 x 6 = 12'
// '2 x 7 = 14'
// '2 x 8 = 16'
// '2 x 9 = 18'
// '2 x 10 = 20'

// // generator 3
// '3 x 1 = 3'
// '3 x 2 = 6'
// '3 x 3 = 9'
// '3 x 4 = 12'
// '3 x 5 = 15'
// '3 x 6 = 18'
// '3 x 7 = 21'
// '3 x 8 = 24'
// '3 x 9 = 27'
// '3 x 10 = 30'

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
// console.log(getMostProfitFromStockQuotes([ 1, 6, 5, 10, 8, 7 ]));//18

// console.log(getMostProfitFromStockQuotes([ 1, 2, 10, 3, 2, 7, 3, 2 ]));//26


