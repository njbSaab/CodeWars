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

// function toCamelCase(str) {
//*
// let res = ""

//    for(let letter of str){
//       if(letter.toUpperCase() === letter.toLowerCase()) letter = " ";
//       res +=letter
//    }

// res = res.split(' ').map((e,i,a) => e[0].toUpperCase() + e.slice(1)).join('')
// return res[0].toLowerCase() +res.slice(1)

//* for
// let capitalize = (str) => str[0].toUpperCase() + str.slice(1)
// let strArr

// if(str === ""){
//    return ""
// }
// if(str.indexOf("-") !== -1) strArr = str.split("-")
// else strArr = str.split("_")

// let camelCaseStr = strArr[0]

// for(let i = 1; i < strArr.length; i++){
//    camelCaseStr += capitalize(strArr[i])

// }
// return camelCaseStr
//*
// let arr = str.split('');
// for(i = 0; i < arr.length; i++){
//   let letter = arr[i];
//   if(letter == '_' || letter == '-') {
//     arr[i + 1] = arr[i + 1].toUpperCase();
//     arr[i] = '';
//   }
// }
// return arr.join('');

//*map
//   if (!str) return str;
//   const contains = str.includes("-") ? "-" : "_";
//   let camalCase = str
//     .split(contains)
//     .map((str, i) => {
//       if (i === 0) return str;
//       return str[0].toUpperCase() + str.slice(1);
//     })
//     .join("");
//   return camalCase;

//*
// let dash = "-_"

// return str.split('').map((e,i,a) => {
//    if(dash.indexOf(e) > -1) return "";
//    else if(dash.indexOf(a[i-1]) > -1) return e.toUpperCase()
//    else return e
// }).join('')

//*
// let arr = str.split("-").join(".").split("_").join(".").split(".");
// let first = arr.shift();
// let c = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
// return first + c.join('');
// }

// console.log(toCamelCase("the_stealth_warrior")); // theStealthWarrior
// console.log(toCamelCase("The-Stealth-Warrior")); // TheStealthWarrior
// console.log(toCamelCase("A-B-C")); //ABC
// console.log(toCamelCase(""));

//? Найти не последовательную букву из алфавита
// function findMissingLetter(arr){
//*
// let alphabet ='abcdefghijklmnopqrstuvwxyz'
// let arrInLower = arr.join('').toLowerCase()

//  let indxElem = [...alphabet].map((e,i,a) => arrInLower.indexOf(e)>=0 ? i : void 0).filter(e => e >= 0).filter((elem, indx, arr) => arr[indx+1] - elem > 1)[0] + 1

// return arr[0] === arr[0].toUpperCase()  ? alphabet[indxElem].toUpperCase():alphabet[indxElem]

//! CharCode
// let i=arr[0].charCodeAt();
// arr.map(x=>  x.charCodeAt()==i?i++:i);
// return String.fromCharCode(i);

//*
// return String.fromCodePoint(array.map(x => x.codePointAt(0)).find((current,index,array) => index && current-array[index-1] > 1)-1)

//! indexOF
// const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// const start = alphabet.indexOf(arr[0]);
// return alphabet.slice(start, start + arr.length).find(el => !arr.includes(el));

//! indexOF

//   const a = (arr[0] === arr[0].toLowerCase())
//   ? 'abcdefghijklmnopqrstuvwxyz'
//   : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// const range = a.slice(a.indexOf(arr[0]), a.indexOf(arr[arr.length -1]) + 1);

// return [...range].filter(char => arr.indexOf(char) === -1).join('');
// }

// console.log(findMissingLetter(['a','b','c','d','f']));//e
// console.log(findMissingLetter(['O','Q','R','S']));//P

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

//чуть другое но тоже разделяет массив на количесво
// return [...Array(Math.ceil(array.length/length))].map((_,indx) => array.filter((_,i) => i % length === 0))
// }
// console.log(selReverse([2,4,6,8,10,12,14,16], 3));
//[6,4,2,12,10,8,16,14]
// console.log(selReverse([1,2,3,4,5,6], 2));
//[2,1,4,3,6,5]
// console.log(selReverse([1,2,3,4,5,6], 0));

//? вставить анд между двумя словами если их два и больше, если 1 словo вернуть словo если нет слова вернуть ''
// function formatWords(words){
//! сделать заготовку isNotEmpty убрать все пустые
//  const isNotEmpty = x => !!x
//  return words.filter(isNotEmpty)

//*
//  if (words === null) return ''
//  const arrWords = words.filter(_=>_)
//   if(arrWords.length < 1) return ""
//   if(arrWords.length === 1) return arrWords[0]
//   const lastWord = arrWords[arrWords.length-1]
//     return `${arrWords.slice(0,-1).join(', ')} and ${lastWord}`

//*
// if (!words || words.length < 1) {
//   return ''
// } else {
//    return  words
//   .filter(Boolean)
//   .join(', ')
//   .split('').reverse().join('')
//   .replace(' ,', ' dna ')
//   .split('').reverse().join('')
// }

//*
// if (words === [] || words === null) return "";
// words = words.filter(function(n){ return n !== '' })
// return words.map(function(a, i){  if (i == words.length-2)  return a + " and";  return a + ","  }).join(" ").slice(0, -1);

// }
// console.log(formatWords(['','','andrew']));
// console.log(formatWords(['ninja', 'samurai', 'ronin']));
// console.log(formatWords(['ninja', '', 'ronin']));
// console.log(formatWords(['ninja']));
// console.log(formatWords(['one', 'two', '']));
// console.log(formatWords(['one']));
//  console.log(formatWords(null));
// console.log(formatWords(['']));
// console.log(formatWords([]));

//? Поднять букву начиная с заглавной +1 по индексу
// function wave(str){
//* мой вариант не подходит у меня учитывает отступ и сбивается индекс
// return Array.from({length:str.length}, (_,i) => str)
//             .map((e,i) => [...e]
//             .map((el,indx) => i === indx ? el.toUpperCase():el)
//             .join('')
//             )

//* стандартный вариант как если поднять заглавную тольок здесь кадлую
// return [...str].map((elm,i) => str.slice(0,i) + elm.toUpperCase() + str.slice(i+1)).filter(x => x!= str)

//*
// let waveArr = [];
// for(let i = 0; i < str.length; i++) {
//   let letter = str[i];
//   if (letter === " ") {
//! если надо пропустить continue
//     continue;
//   } else {
//     waveArr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1))
//   }
// }
// return waveArr;

//! reduce
// const wave = str => str.split("").reduce((acc, val, i, [...arr]) => {
//   if(val === " ") return acc;
//   arr[i] = arr[i].toUpperCase();
//   acc.push(arr.join(""));
//   return acc;
// }, []);
// }

// console.log(wave('two words'));
// ["Hello", "hEllo", "heLlo", "helLo", "hellO"];

// Should return: 'Two words,tWo words,twO words,two Words,two wOrds,two woRds,two worDs,two wordS':
//  expected

//  [ 'Two words', 'tWo words', 'twO words', 'two words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS' ]
//   to deeply equal
//   [ 'Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS' ]


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
//[[1,2,3],[2,4,6],[3,6,9]]