//todo                   7kuy
//? Поднять все гласные в верхний регистр
// function swap (string) {

//      const vowels = ['aeiou']
//*
//   const res = []

//   for(let letter of string){
//     if(vowels.includes(letter)) {
//        res.push(letter.toUpperCase())
//     } else {
//        res.push(letter)
//     }
//   }
//   return res.join('')

//*
//   return string.split('')
//                .map((e) => vowels.includes(e) ?
//                e.toUpperCase() : e).join``

//  }

//  console.log(swap('HelloWorld'))//HEllOWOrld
//  console.log(swap('Sunday'))//SUndAy
//  console.log(swap('ABRACADABRA'))//ABRACADABRA
//  console.log(swap('aBRaCaDaBRa'))//"ABRACADABRA"

//? отделить цифри от букв
// function findMiddle(str){
//   let res = []
//   str.split('').forEach((e, i) =>  parseInt(e) ? res.push(e) : e)
//   return res.length % 2 == 0 ?res.slice(1, -1).reduce((a,c,i) => a + c) : 0
// //   .filter((e, i) => i.length % 2 == 1 ? false : res.slice(1, -1))

// }

// console.log(findMiddle('s7d5jd9'))
// console.log(findMiddle('58jd9fgh/fgh7s.,sdf'))

// const squareOrSquareRoot = array => array.map((x) => Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x ** 2)

//  console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]));

//? задача fizzbuzz число делится либо 3 либо на 5 либо и так и так
// function fizzbuzz(n) {
//*my
//    let res = []
//       for(let i = 1; i <= n; i++){
//          if(i % 3 == 0 && i % 5 == 0) res.push('FizzBuzz')
//          else if(i % 3 == 0) res.push('Fizz')
//          else  if (i % 5 == 0) res.push('Buzz')
//          else res.push(i)
//    }
// return res

//! nice code
// return [...Array(n + 1).keys()].slice(1).map((x) => x % 15 === 0 ?
// 'FizzBuzz':
// x%3===0?'Fizz':
// x%5===0?'Buzz':
// x)

// }

//console.log(fizzbuzz(10));
// console.log(fizzbuzz(3));
// console.log(fizzbuzz(8));
//  console.log(fizzbuzz(80));

//? удалить все гласные из строки
// function disemvowel(str) {
//    const vow = 'aeiouAEIOU'
//    return [...str].filter((e) => !vow.includes(e)).join``
//  }

// function disemvowel(str) {
//    var vowels = ['a', 'e', 'i', 'o', 'u'];

//    return str.split('').filter(function(el) {
//      return vowels.indexOf(el.toLowerCase()) == -1;
//    }).join('');
//  }

// console.log(disemvowel("This website is for losers LOL!")) //"Ths wbst s fr lsrs LL!"));

//? посчитать гласные
//*
// function getCount(str) {
//    const vawles = 'aeiou'

//    return [...str]
//    .filter((x) => vawles.includes(x)).length
//  }

//! reduce
// function getCount(str) {
//    var vowelsCount = 0;

//    vowelsCount = str.split("").reduce((total,item)=>{
//      if(["a","e","i","o","u"].includes(item))
//        total += 1;
//      return total}, 0);

//    return vowelsCount;
//  }
//    console.log(getCount("abracadabra"));// 5)

//? посчитать кольца
// function olympicRing(a){
//    const letter = 'AaOogGPpBbdeRD'

//    let res = [...a].filter((e) => letter.includes(e)).length / 2;
//    return res  <  0 ? 'Not even a medal!' :
//           res === 2 ? 'Bronze' :
//           res === 3 ? 'Silver' : 'Gold'
// }

//! reduce
// const olympicRing = a =>
//   (val => val <= 1 ? `Not even a medal!` : val < 3 ? `Bronze!` : val < 4 ? `Silver!` : `Gold!`)
//   ([...a].reduce((pre, val) => pre + [`a`,`b`,`d`,`e`,`g`,`o`,`p`,`q`,`A`,`D`,`O`,`P`,`Q`,`R`].includes(val) + (val ===`B`) * 2 , 0) / 2 ^ 0);

// console.log(olympicRing('wHjMudLwtoPGocnJ'));
// console.log(olympicRing('iScmoSJsiYmiwZiEau'));

//? из гласных сделать 1 из не гласных 0
//*
// function vowelOne(s){
//    const vawles = "AaEeIiOoUu"
//    return [...s].map((e) => vawles.includes(e) ? 1 : 0).join``
// }
// console.log(vowelOne("vowelOne")); //"01010101"
// console.log(vowelOne("123, arou")); //"000001011"

//? вырезать н количество чисел больших
//*
// function largest(n,xs){
//    return n > 0 ? xs.sort((a, b) => a - b).slice(- n) : []

// }

//*
// let largest = (n, xs) =>
//   xs
//     .sort((a, b) => b - a)
//     .filter((e, i) => i < n)
//     .reverse();

// console.log(largest(7,[9,1,50,22,3,13,2,63,5]));//[3, 5, 9, 13, 22, 50, 63])
// console.log(largest(3,[5,1,5,2,3,1,2,3,5]))//[5,5,5]
// console.log(largest(0,[5,1,5,2,3,1,2,3,5]))//[5,5,5]

// function getCurrentHand(arr) {

//    return [...new Set(arr.slice(0, arr.length - 4))].filter(x => !arr.slice(-4).includes(x))
// }

// console.log(getCurrentHand(['Hog Rider','Earthquake','Archer Queen','Giant Skeleton','Fire Spirit','Cannon'])) // => ['Hog Rider', 'Earthquake']

//? сделать регистр букв наоборт
// String.prototype.toAlternatingCase =
// function method(arg){
//    return arg.split``.map((e) => e === e.toUpperCase()? e.toLowerCase() : e.toUpperCase()).join``
//  }

//    String.prototype.toAlternatingCase = function () {
//      return this.split``.map((e) => e === e.toUpperCase()? e.toLowerCase() : e.toUpperCase()).join``
// }
// console.log("hello world".toAlternatingCase());
// console.log("HeLlO wORlD".toAlternatingCase());
// console.log("HELLO WORLD".toAlternatingCase());

//? достать числа из массива
// function filter_list(l) {
//*
// return l.filter((e) => e === Number(e))
//! более правильный подход
// return l.filter(e => Number.isInteger(e));
//! самый правильный подход
// l.filter(Number.isInteger);
//  }

//  console.log(filter_list([1,2,'a','b'])); //[1,2]
//  console.log(filter_list([1,2,'a','b', 0, 15, '11', '1'])); //[1,2,0,15,11,1]

// const processData = (data) => data[0].reduce((a, b) => a - b) *  data[1].reduce((a, b) => a - b) * data[2].reduce((a, b) => a - b)

//? вычетание чисел внутри массива и результат между собой перемножить массивы
// function processData(data){
//*
// let res = []
// data.forEach(el => el.reduce((a, b) => res.push(a - b)));
//  return res.reduce((a, b) => a * b)

//! Nice code
// return data.reduce((a, [b, c]) => a * (b - c), 1)

//! Best practic
// return data.reduce((a, b) => a * (b[0] - b[1]), 1)

//! Map
// return data.map(e => e[0] - e[1]).reduce((x, y) => x * y)

//  }

// console.log(processData([[2, 5], [3, 4], [8, 7]]));//3
// console.log(processData([[2, 9], [2, 4], [7, 5]]));//28

//? Числовой палиндром
// function nextPal(val) {
//! Переобразование набер в массив
//    let characters = Array.from(String(val), Number)
// let isPalindrome = true

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

// console.log(nextPal(19191));// console.log(nextPal(2022));// console.log(nextPal(20002));//console.log(nextPal(2021));

// function nextPal(val){
//*
// for(let i = val + 1; true; i++){
//   if([...String(i)].reverse().join('') == i)
//   return i
// }
// }

// console.log(nextPal(11));// 22
// console.log(nextPal(188));// 191

//? Найти простое число вернуть фалс
// function isPrime(n) {

// if(n < 2){
//    return false
// }
// for(let i = 2; i < n; i++){

//    if(n % i === 0) return false
// }
// return true
//  }

// function isPrime(n) {
//    if (n < 2) return false
// const arr = Array.from({length:n}, (x,i)=> i + 1)
// return arr.filter(item => n % item === 0).length > 2 ? false : true

//  return Array.from({length : n}, (x,i) => i + 1).filter((e => n % e === 0)).length > 2 ? false : true
//  }
//  console.log(isPrime(11))
//  console.log(isPrime(0))
//   console.log(isPrime(12))
//  console.log(isPrime(571))
//  console.log(isPrime(573))

// function eqSumPowdig(hMax, exp) {
//    let res = [];
//    for(let i = 2; i<= hMax; i++){
//     let sum = [...String(i)].reduce((a,b) => a + (+b) **exp, 0)
//     if(sum == i) res.push(i)
//    }
//    return res
//  }

//  console.log(eqSumPowdig(200, 3)); //[153]
//  console.log(eqSumPowdig(400, 3));  //[153, 370, 371]

//? ближнее не парное число
// function nextNumb(val) {
// for(let i = val + 1; i < 99999999999; i++){
//   if(new Set([...String(i)]).size == [...String(i)].length && i % 2 && i % 3 === 0){
//      return i
//   }
// }
// return 'There is no possible number that fulfills those requirements'
// }

// console.log(nextNumb(12));//15
// console.log(nextNumb(13));//15
// console.log(nextNumb(99));//105

//? вывести индекс массива где лежит число
// const arr = [[1,2,3,4,5,6,7], [8,9,10,11,12,13,14], [15,16,17,18,19,20,21]];

// function guessTheCard(audience) {
//    let res = arr.flat().filter((a,b) => a === audience).join('')

//    return parseInt(res) > 7 && parseInt(res) < 15 ? 1 : parseInt(res) > 14 ? 3 : 0

//    }

// console.log(guessTheCard())

// ? Анаграмма
// const isAnagram = function(test, original) {
//  let sortedFirstWord = test.toLowerCase().split('').sort().join('')

//  let sortedSecondWord = original.toLowerCase().split('').sort().join('')

// console.log(sortedFirstWord === sortedSecondWord)
// };

// // console.log(isAnagram("foefet", "toffee")); //true
// console.log(isAnagram("Buckethead", "DeathCubeK"));// true
// console.log(isAnagram("dumble", "bumble")); // false

// const arr = ['e', 'a', 'b', 'd']

// function sortArray(abc){
//    return abc.sort()
// }
// console.log(sortArray(arr));

//? вырезать egg со слова
// переменная result для обрезанных строк без символов 'egg'
// цыкл вайл проверка нахождений 'egg' в обрезанном слове
// в теле цыкл присвоить переменной result уже присвоить обрезаное
// пока индекс не равен -1
// вернуть result за цыклом

//*
// const unscrambleEggs = word => word.replace(/egg/g, '')

//*
// function unscrambleEggs(word){
//    return word.split("egg").join("")
//  }
// "code here");unscrambleEggs("FeggUNegg KeggATeggA"),"FUN KATA");
//  console.log(unscrambleEggs("FeggUNeggegg eggKeggATeggAeggeggegg"))// "code here");unscrambleEggs("FeggUNegg KeggATeggA"),"FUN KATA");

//! kyes
// function sortDict(dict) {
//   return Object.entries(dict).map(([keys, values])=> parseInt(keys) || parseInt(keys)  ? [+keys, values] : [keys, values])
//   .sort(([, valuesA],[, valuesB]) => valuesB - valuesA)
//  }

// console.log(sortDict({1:3,2:2,3:1}))
//  console.log(sortDict({'a':3,'b':2,'c':1}));

// function testit(a,b){
//    let res = 0;
//    let i = 0;

//    if(i <= 0) {
//        do {
//    res = a + b
//       i = i + 1
//   }
//    while(i <= 3)
//    } else res = a * b

//    console.log('i--',i);
//    //    if(i > 3)
//    //   return res = a * b
//    return res

//*
// return a | b
// }
//  console.log(testit(1,1));
//  console.log(testit(1,2));
//  console.log(testit(1,3));
//  console.log(testit(2,3));
//  console.log(testit(3,3));
//  console.log(testit(4,3));

// function derDieDas(wort){
//    let valwes = 'aeiouäöüAEIOUÄÖÜ';
//    let count = 0;

//     Array.from(wort).forEach((x) =>valwes.includes(x)? count ++ : wort)
//    // if(count === 0) return wort
//    // if(count >= 1 && count < 2) return `das ${wort}`
//    // if(count >= 2 && count < 4) return `die ${wort}`
//    // if(count > 3 ) return `der ${wort}`

//    return  count >= 2 && count < 4 ?
//          `die ${wort}` : count >= 0 && count < 2 ?
//          `das ${wort}` : `der ${wort}`
//   }

//! super code
// const f = w => w.split('').filter(c=> 'aeiouäöü'.includes(c.toLowerCase())).length, derDieDas = w => `${['das', 'die', 'der'][ (f(w)>1) + (f(w)>3) ]} ${w}`

// console.log(derDieDas('Suppenhuhn'));//die
// console.log(derDieDas('Ofenkartoffel'));//der
// console.log(derDieDas('Fisch'));//das
// console.log(derDieDas('Kndl'));// kndl
// console.log(derDieDas('F'));// F
// console.log(derDieDas(''));//

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

//? опредилить высокосный год
// function isLeapYear(year) {
//    // return !((year % 4) || (!(year % 100) && (year % 400)))

//    return year % 400
//  }
//  console.log(isLeapYear(2013));
//  console.log(isLeapYear(2000), ' ---- tr');//tre
//  console.log(isLeapYear(2010),);
//  console.log(isLeapYear(1234));
//  console.log(isLeapYear(1984),' ---- tr');//tre
//  console.log(isLeapYear(2010));

// function solution(nums){
//*
// return nums !== null ? nums.sort((a,b)=> a - b) : []

//*
// return (nums || []).sort((a,b)=>a-b)

// }
// console.log(solution([1,2,3,10,5]));
// console.log(solution([20, 2, 10]));
// console.log(solution([2, 20, 10]));
// console.log(solution([]));
// console.log(solution(null));

// function numberJoy(n) {
// *
// let x  = Array.from(String(n), Number).reduce((x,y) => x + y)
// let y = Array.from(String(x)).reverse().join('')*1
// return x * y === n

// const x  = Array.from(String(n)).reduce((x,y) => x + +y, 0)
// const y = Array.from(String(x)).reverse().join('')*1
//   return x * y === n

//! в одну строчку
// return (x =[...""+ n].reduce((a,b) => +b+a, 0))*[...""+x].reverse().join('')===n
// }

//* по сложнее движуха
// const numberJoy = n =>
// (val => val * [...`${val}`].reverse().join('') === n)
// ([...`${n}`].reduce((x,y) => x + +y, 0));

// console.log(numberJoy(1997));//false
// console.log(numberJoy(1998));//false
// console.log(numberJoy(1729));//tr
// console.log(numberJoy(81));//tr
// console.log(numberJoy(1458));//tr
// console.log(numberJoy(1));//tr

//

//? количество каждой буквы
//todo  вся загвостка что цифры сортируются и обычным путем не добится результата по этому используется СЕТ как основной экземпляр

//* nice code
// const orderedCount = text =>
// [...new Set([...text])].map(e => [e, text.split(e).length - 1])

//* Hard core code
//  const orderedCount = s => Array.from(s.split('').reduce((a, b) => a.set(b, a.has(b)? a.get(b) + 1 : 1), new Map()))

//*
// const orderedCount = function (text) {

// const hashSet = [...new Set(text.split(''))];
// const hashMap = {};
// const answer = [];

// for(let i = 0; i < text.length; i++){
//    const ch = text[i];
//    if(!hashMap[ch]) hashMap[ch] = 0;
//    hashMap[ch] +=1
// }

// hashSet.forEach((el) =>{
//    answer.push[el, hashMap]
// })

// return answer

//* optimal
// const arr = [...new Set([...text])]
// return arr.map(el => [el, [...text].filter(e => e === el).length]);

//* варианты для обычных решение без загвосток с сетом
// const count = {};

//  text.split('').forEach(e => {
//  count[e] = count[e]? (count[e] + 1) : 1
// })

// return Object.entries(count)

//*
// const histogram = {};

// for(let i in text){
//    histogram[text[i]] = (histogram[text[i]] || 0)+1
// }
// return histogram

//*
// return Object.entries(obj=[...text].reduce((a, b) => (a[b] = (a[b] || 0)+1, a), {}))
// return text.split('').reduce((a,b) => (a[b] = (arr.push(a[b]) || 0) +1, a), {})

//  }

// console.log(orderedCount("abracadabra"));
// console.log(orderedCount("Code Wars"));
// console.log(orderedCount("233312"));
// console.log(orderedCount("5514477"));

// function spoonerize(words) {
//*
//    const firstWord = words.split(' ').splice(0, words.includes(' ')).join('')
//    const secondWord = words.split(' ').slice(words.includes(' ')).join('')

//   return `${firstWord.replace(firstWord[0], secondWord[0])} ${secondWord.replace(secondWord[0], firstWord[0])}`

//! 1 аргумент разделить в массив на два элемента
// let [a, b] = words.split(" ");
// [a, b] = [b[0] + a.slice(1), a[0] + b.slice(1)];

// return [a, b].join(" ");

//* через map правда замудренно
// return words.split(" ").map((w, i) => w = words.split(" ")[i == 0 ? 1 : 0][0] + w.substr(1)).join(" ");
// }

// console.log(spoonerize("nit picking")); //pit nicking
// console.log(spoonerize("wedding bells"));

// const solution = (start, finish, difference = finish - start) => Math.floor(difference/3) + difference % 3

// console.log(solution(2, 5));

//? Шахматы
// R2/N2/B2/Q1/K1
// function doTest(arg){
// //    const arr = [...arg]

//    // if (arr.indexOf("R") < arr.indexOf("K") && arr.lastIndexOf("R") > arr.indexOf("K")) {
//    //    if (arr.indexOf("B") % 2 != arr.lastIndexOf("B") % 2) {
//    //      return true
//    //    }
//    //  }
//     return arg.indexOf('B') & 1
// }

// console.log(doTest("RNBQKBNR"));//tr
// console.log(doTest("QNNBBRKR"));//tr
// console.log(doTest("QRNNBBRK"));// false);
// console.log(doTest("QNBNBRKR"));// false);

// function openOrSenior(data){
//    // return data.map((e) =>  e[0] >= 55 && e[1] > 7 ? 'Senior' : 'Open')

//    return data.map(([age, hang]) =>( age > 55 && hang > 7) ? 'SS' : 'Oop')
//  }

//  console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])); //['Oop', 'Oop', 'Oop', 'SS']
//  console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])); // ['Oop', 'Oop', 'Oop', 'Oop']
//  console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])); // ['SS', 'Oop', 'Oop', 'Oop']

// function solution(frank, sam, tom)
// {
//   return frank.reduce((a,b) => a + b) >= sam.reduce((a,b) => a + b) && frank.reduce((a,b) => a + b) >= tom.reduce((a,b) => a + b);
// }

// // ,sam.reduce((a,b) => a + b,  tom.reduce((a,b) => a + b))
// // console.log(solution([2, 5, 8, 11], [1, 4, 7, 10] , [0, 3, 6, 9]));
// console.log(solution([0,2,5,9], [3,5,7,8] , []));
// // console.log(solution([5, 6, 7, 8], [1, 2, 3, 4], [0, 9, 10, 11]));

//! доступ к аргументам функции
// const args_count = (...theArgs) => theArgs.length
// const args_count = (...x) => x.length

//! старый синтаксис
// function args_count() {
//    return arguments.length;
//  }

// console.log(args_count(1, 2));
// console.log(args_count('A', 'B', 'C'));
// console.log(args_count(["foo", "bar"]));
// console.log(args_count());

// const wallpaper =(l, w, h)=> ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
// [l && h && w ? Math.ceil(2 * h * (l + w)/ 5.2 * 1.15) : 0]

//  console.log(wallpaper(6.3, 4.5, 3.29)), //'16');
//  console.log(wallpaper(7.8, 2.9, 3.29)),// '16');
//  console.log(wallpaper(6.3, 5.8, 3.13)), //'17');
//  console.log(wallpaper(6.1, 6.7, 2.81)), //'16');
//  console.log(wallpaper(0, 5.6, 3.20));

// function londonCityHacker(journey) {
//    let res = 0

// journey.forEach((element,i)=> {
//    if(typeof element === 'string'){
//       res += 2.4
//    }else{
//       res += 1.5
//       if (typeof element[i + 1] === 'number') {
//          i ++
//       }
//    }
// });

// for(let i = 0; i < journey.length; i++){
//    if(typeof journey[i] === 'string'){
//       res += 2.4
//    }else{
//       res += 1.5
//       if(typeof journey[i + 1] === 'number'){
//          i++
//       }
//    }
// }

// return '£' + res.toFixed(2)

//* не проходит проверку
// let busArr = []
// const metroStation = []

// journey.forEach(el => Number(el) ? busArr.push(1.50) : metroStation.push(2.40));

//  busArr = busArr.map((e,i) => {
//    if(i % 2 == 1) return 0
//     else return 1.50
// })

// return `£${[...busArr, ...metroStation].reduce((x, y) => x + y, 0).toFixed(2)}`

// console.log(busArr);
// return journey.map((x) => !Number(x) ? busArr.push(x) : x).filter(e => e >=1 ? e : 2.40)

//* это тоже
//    const metroStation = []
//    let busArr = []

//    journey.forEach(el => Number(el) ? busArr.push(el) : metroStation.push(2.40));
//    busArr = busArr.map((x) => busArr.length > 3 && busArr.length % 2 == 0 ? 0.75:1.50)

//   return `£${[...busArr, ...metroStation].reduce((x, y) => x + y, 0).toFixed(2)}`

//* это тоже

//       journey.sort()
//       .map((e,i) => {
// if(!Number(e)) return 2.40
// if(journey.indexOf(Number(e)) >= 2) return 0.75;
// else{1.50}
// })

// busArr = busArr.map((x) => busArr.length % 2 == 0 ? 0.75 : busArr.length % 2 == 1 ? 1.50 : 0.75 )

//   if (journey.indexOf(Number(e)) !== -1 && journey.lastIndexOf(Number(e)) !== -1) return 0.75

// .reduce((x,y) => x + y).toFixed(2)
// 1.50 : 2.40
//  }
// console.log(londonCityHacker([12, 'Central', 'Circle', 21])); //7.80
// console.log(londonCityHacker(['Piccadilly', 56]));// 3.90
// console.log(londonCityHacker(['Northern', 'Central', 'Circle']));//7.20
// console.log(londonCityHacker([13,15,16,17]));//3.00
// console.log(londonCityHacker(['Piccadilly', 93, 243,243])); //5.40
// console.log(londonCityHacker([]));

// let res = 0

// while( n > 0) {
//    res += n
//    n--
// }
// return res

//! cумма углов треугольника
// function sumTriangularNumbers(n) {
//  return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;

//  }

// const sumTriangularNumbers = n => n > 0 ? Array.from(Array(n), (_, i) => (i + 1) * (i + 2) / 2).reduce((s, e) => s + e) : 0;

// function sumTriangularNumbers(n) {
//    let tri = 0,
//        sum = 0;
//    if(n < 0) {
//    return 0;
//    } else {
//      for (let i = 1; i <= n; i++) {
//         tri += i;
//         sum += tri;
//      }
//      return sum;
//    }
//  }

//  console.log(sumTriangularNumbers(6));//56

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

// var isSquare = function(arr){
//*
//  const trueArr = [];
//  arr.map((e)=> Math.sqrt(e) % 1 === 0 ? trueArr.push(true) : false)

//  return arr.length > 1 ? trueArr.length === arr.length : undefined

//! nice code
// return arr.filter((e) => Math.sqrt(e) % 1 !== 0).length ? true : false

//! nice code
// return arr.every((e) => Math.sqrt(e) % 1 === 0)

// }
//  console.log(isSquare([1, 4, 9, 16, 25, 36]));
//  console.log(isSquare([1, 2, 3, 4, 5, 6]));
//  console.log(isSquare([]));

//? возвести умножить нам на себя и склеить число
// function squareDigits(num){
//    return Array.from(String(num), Number).map((e) => e * e).join('')*1
//  }
//  console.log(squareDigits(3212));//9414

//возвести в ближайщую степень
// function findNextPower(val, pow_) {
//    if (val === 1){
//       return 2 ** pow_
//    }
//    for(let i = 0; i <= val; i++){
//      if(i ** pow_ > val){
//         return i ** pow_
//      }
//    }

// }

// console.log(findNextPower(8, 3));
// console.log(findNextPower(12385, 3));
// console.log(findNextPower(1245678, 5));

// function modifyMultiply (str,loc,num) {
//    // const res = str.split(' ').filter((_,i) => i === loc ).join('') + "-"
//    // return res.repeat(num).slice(0,-1)

//    // return Array(num).fill(str.split(' ')[loc]).join('-')
//    }

//    console.log(modifyMultiply ("This is a string",3,5));//string-string//-string
//    console.log(modifyMultiply("Creativity is the process of having original ideas that have value. It is a process; it's not random.",8 ,10));

//? перенос строки инт раз
// function generateShape(int){
// return Array(int).fill('+').join('').concat('\n').repeat(int).slice(0,-1)

// return ('+'.repeat(int)+'\n').repeat(int).trim()

// return [...Array(int)].map(_ => '+'.repeat(int)).join('\n')

// return Array(int).fill(Array(int + 1).join('+')).join('\n')

//   let acc = '';
//   for (let i = 0; i < int; i++){
//     for (let j = 0; j < int; j++){
//       acc += '+'
//     }
//     acc += '\n'
//   }

// }
// console.log(generateShape(8));
// console.log(generateShape(3));

// console.log('++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++');

//? посчитать количество haHa
// var kookaCounter = function(laughing) {

//    //  let arr = laughing.split('a'),
//    //  res = 0;
//    // for(let i = 1; i < arr.length; i++){
//    //   if(arr[i] != arr[i - 1]){
//    //      res++
//    //   }
//    // }
//    // return res

// }
//  console.log(kookaCounter('hahahaHaHaHa'));// 2

//  console.log(kookaCounter('hahaha')); //1

//  console.log(kookaCounter('hahahaHaHahaha')); //3

// function shorter_reverse_longer(a,b){

// return a.length >= b.length ? b + [...a].reverse().join('') + b : a + [...b].reverse().join('') + a

// return [[...b], [...a].reverse()].sort((a, b) => a.length - b.length).reduce((acc, el) => (el >= acc) ? el + (acc + el) : acc + (acc + el), []).split('').filter((e) => !e.includes(',')).join('')

//! решение в ретурне
// let x;
// return (x = [a, b].sort((a, b)=> b.length - a.length))[1] + x[0].split('').reverse().join('')+ x[1]
//  }

//  console.log(shorter_reverse_longer("first", "abcde"));
//  console.log(shorter_reverse_longer("hello", "baudddd"));

// function getSumOfDigits(i) {
// var sum = null;
// var digits =  Math.floor(integer).toString();
// for(var ix = 1; ix < digits.length; ix = sum + 1) {
//   sum =+ digits[ix + 1];
// }
// return sum;

// return Array.from(String(i), Number).reduce((a,b) => a+b)
//  }

//  console.log(getSumOfDigits(123));
//  console.log(getSumOfDigits(124));

// function XO(str) {

// *
//    let letterLower = str.toLowerCase();
//    let letterX = [];
//    let letterO = [];
//    [...letterLower].forEach((e) => {
//           if(e === 'x'){
//           letterX.push(e)
//          };
//          if(e === 'o'){
//          letterO.push(e)
//          }else false
//    })

//    if(!letterLower.includes('x') && !letterLower.includes('o')) {
//       return true;
//     }
//    if (letterLower.includes('x') && letterLower.includes('o'))  {
//       return letterX.length === letterO.length
//    }

//       return false

//    ! filter
//     str = str.toLowerCase().split('')

//    return str.filter(x => x === 'x').length === str.filter((x => x === 'o')).length

//    ! nice code
//    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length

// }

//* две функции
// const XO = str => {
// let letterLower = str.toLowerCase()

// if(!letterLower.includes('x') && !letterLower.includes('o'))  return true;
// else  return isLeter(letterLower)

// }

// const isLeter = (letterLower) => letterLower.split('').filter(e => e ==='x').length === letterLower.split('').filter(e => e ==='o').length

// console.log(XO('xxoO'), 'true');//,true
// // console.log(XO('xoOx'), 'true');//,true
// console.log(XO('xoxoO'));//false
// // console.log(XO('xoOx'), 'true');//,true
// console.log(XO('Om'));//,false
// console.log(XO('Zp') , 'true');//,true
// console.log(XO('XxmOo') , 'true');//,true

//   [...letterLower].forEach(e => e === 'x' && e==='o' ? letterX.push(e) : letterO.push(e)) : false

// for(let i = 0; i <= letterLower.length; i++){
//  if(letterLower[i] === 'x') {
//     letterX.push(letterLower[i])
//   ;}
//  if(letterLower[i] === 'o')  {
//    letterO.push(letterLower[i]);
//  }
//  console.log(letterX, letterO);
// }

//     return !letterLower.includes('x') && !letterLower.includes('o') ? true :  letterLower.includes('xo') ?
// input.flat().indexOf('x')

// const xMarksTheSpot = (input) => {
// let res = []

// для понимания как работает
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
//  ]));

//  console.log(xMarksTheSpot
//    ([
//       ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//       ['x', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//     ]));

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

// console.log(reverse("String"));

//?реверс массива
// function esrever( str ){
//*
//    return str.length > 0 ? Array.from(str).slice(0,-1).reduce((a,b) => [b,...a]).join('') + str.slice(-1) : '';
//  }

//*map
//const esrever = (str, l=str.length-2) => [...str].map((e,i,a) => (i <= l) ? a[l-i]: e).join('');

//без методов перебора массивов
//const esrever = str => `${[...str].slice(0,-1).reverse().join('')}${str.charAt(str.length-1)}`;

// console.log(esrever('an Easy one?')); // 'eno ysaE na?'
// console.log(esrever('a small lOan OF 1,000,000 $!')); //'$ 000,000,1 FO naOl llams a!'
// console.log(esrever('')); //'$ 000,000,1 FO naOl llams a!'

// const reverse = arg => Array.from(arg).reduce((a,b) => [b, ...a]).join('')

// console.log(reverse('string'));

// function Revers(arg){
//    this.arg = function (){
//       Array.from(arg).reduce((a,b) => [b, ...a]).join('')
//    }
// }

// function GetRevers() {
//    this.reverse = function (){
//             Array.from().reduce((a,b) => [b, ...a]).join('')
//          }
// }
// const revers = new GetRevers()

// console.log("str".reverse());

// function multi(arr) {
//    return arr.reduce((a, b) => a * b);
//  }
//  function add(arr) {
//    return arr.reduce((a,b) => a + b);
//  }
//  function reverse(str) {
//    return str.reduce((a, b) =>[b, ...a], [])
//  }

// const multi = arr => arr.reduce((a, b) => a * b);

//  const add = arr =>arr.reduce((a,b) => a + b);

// //  const reverse = str => str.reduce((a,b) => [b, ...a], [])
// const reverse = str => str.reverse().join(',')

//  console.log(multi([5,1,5]));
//  console.log(add([9,8,5]));
//  console.log(reverse([9,8,5]));
//  console.log(reverse(["hello", 'hi']));
//  console.log(reverse(['h', 'e', 'l', 'l', 'o']));

// function isItANum(str) {
//*
// const numArray = [...str].map(e => e.replace(' ', 'b')).map(Number).filter(e=> e >= 0)

// return numArray.length === 11 ? numArray.reduce((a,b,_,arr) => arr[0] === 0 ? a + b : "Not a phone number", "")
// : "Not a phone number"

//* сверху оптимизированый код
// return str != '' ? [...str].map((e) => e.replace(' ', '_'))
//  .filter((e) => e >= 0 ? e : false)
//  .map((e, _, arr) => arr.length === 11 ? Number(e) : String(e))
//  .reduce((a,b,_,arr) => arr[0] === 0 ? [...a, b] : "no", [])
// .reduce((a,b,_,arr) => arr[0] === 0 ? a + b : "no", "")
// : "not a number"

//

//! nice solution
//   let num = [...str].filter(el => "0123456789".includes(el))
//   return (num.length === 11 && num[0] === "0") ? num.join('') : 'No'

//*
// return str.length >= 11 ? [...str]
//  .map(x => x.replace(' ', '_'))
//  .filter((e) => Number(e) >= 0)
//  .map((e, _, arr) => arr.length === 11 ? Number(e) : String(e))
//  .reduce((a,b,_,arr) => arr[0] === 0 ? a + b : "no", "") : "not a number"

//  .forEach((e, _, arr) => {

// })

//*
// return [...str].map(x => x.replace(' ', '-')).filter((e) => e >= 0)
// .reduce((a, b, _, arr) => {
//    if(arr[0] != "0") return "Not a phone number";
//    if(arr.length === 11) return a + b
//    return "Not a phone number";
// })

// return arr
// }
//     console.log(isItANum("S:)0207ERGQREG88349F82!efRF)"));//"02078834982"
//     console.log(isItANum("0192387415456"));//"not a number"
//     console.log(isItANum("sjfniebienvr12312312312ehfWh"));//"not a number"
//     console.log(isItANum( "v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"));//  number
//     console.log(isItANum(""));// not
//    console.log(isItANum(", , , , , , , , , , , , "));// not

// function nthSmallest(arr, pos){
//   return arr.sort((a,b) => a - b)[pos - 1]
//  }

// //  console.log(nthSmallest([3,1,2], 2));
// //  console.log(nthSmallest([15,20,7,10,4,3], 3));
//  console.log(nthSmallest([2,169,13,-5,0,-1], 4)); //2
//  console.log(nthSmallest([2,1,3,3,1,2], 3));//2

// function minSum(arr) {
//     const resBig = [];
// const resS = [];
//  let maxNum = 0;
//  let minNum = 0;

//    // if(elem === Math.max(elem)) return res.push(Math.min(elem) * elem[i --])
//   for(let i = 0; i <= arr.length; i++){
//    if(arr[i] > maxNum) {
//       maxNum = arr[i]
//    }
// }
//    return minNum

//   arr.forEach(element => {
//        resBig.push(Math.max.apply(null, arr) * Math.min.apply(null, arr))

//  })
//   arr.reduce((a,b) => {
//     if(b > a){
//        b = Math.max.apply(null, arr) * Math.min.apply(null, arr)
//        return resBig.push(b)
//     } else return a
//  })
//  return resBig

// return

// }

// ? умножить элемент больше на менше
//todo метод поп удаляем последний элемент после умножения
// function minSum(arr) {
//   return arr.sort((a,b) => a-b).reduce((a,b) => a + b * (arr.pop()), 0)

// return arr.sort((a,b) => a-b).slice(0, arr.length/2).reduce((a,b,i) => a +=b * arr[arr.length - i -1], 0)

// return arr.sort((a, b) => a - b)
//    .map((e, i, array) => e * array[array.length -1 - i])
//    .filter((e, i, array) => i < array.length / 2)
//    .reduce((a,b) => a + b)

//*
// let sum = 0
// let array = arr.sort((a,b) => a - b)

// while(array.length) sum += array.pop() * array.shift()

// return sum
// }
//  console.log(minSum([5,4,2,3]));//22
//   console.log(minSum([12,6,10,26,3,24]));//342
//  console.log(minSum([9,2,8,7,5,4,0,6]));//74

//  function toNumberArray(stringarray){
//     return stringarray.map(Number)
// }

// console.log(toNumberArray(["1.1","2.2","3.3"]));

// function hasUniqueChars(str){
//    return [...str].filter((e) => str.indexOf(e) === str.lastIndexOf(e)).length === str.length
//  }

//  console.log(hasUniqueChars("  nAa"));
//  console.log(hasUniqueChars("abcdef"));
//  console.log(hasUniqueChars("aA"));
//  console.log(hasUniqueChars("++-"));

// function sumEvenNumbers(input) {
//* все четные числа просумировать
//   return input.filter(x => x%2==0).reduce((a,b)=> a+b, 0)

// return input.reduce((a,b) => a + (b % 2 ? 0 : b), 0)
// }

// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //30

// ? умножить size раз самые большие числа
// function maxProduct(numbers, size){
//   return numbers.sort((a,b) => b-a).slice(0, size).reduce((a, b) => a * b)

//  }

//  console.log(maxProduct([4,3,5],2));
//  console.log(maxProduct([10,10,10,1,1,5], 3));

// function maxGap (n){

//  }

//  console.log(maxGap([13,10,2,9,5]));//4

// const comparator = (arr) => {
//    // Your code here
//    const arrFirstSecondStr = [...arr.slice(0, 1), ...arr.slice(-1)]
//    const arrReversNumStr = arr.slice(1, +-1).reverse()
//    const finalArray = [...arrFirstSecondStr, ...arrReversNumStr]
//    return finalArray
//  }

//  console.log(comparator([
//    "On the 12th day of Christmas my true love gave to me",
//    "12 drummers drumming,",
//    "11 pipers piping,",
//    "10 lords a leaping,",
//    "9 ladies dancing,",
//    "8 maids a milking,",
//    "7 swans a swimming,",
//    "6 geese a laying,",
//    "5 golden rings,",
//    "4 calling birds,",
//    "3 French hens,",
//    "2 turtle doves and",
//    "a partridge in a pear tree."
// ]));

// function scheme(cmd) {
//    //*
//    const cmdArray = cmd.split(' ')
//    const numArr = cmdArray.map(Number).filter(Number)
//    // let res = 0

// if(cmdArray[0] ==='*') res = numArr.reduce((a,b) => a*b,1)
// if(cmdArray[0] ==='+') res = numArr.reduce((a,b) => a+b,0)
// if(cmdArray[0] ==='/') res = numArr.reduce((a,b) => a/b,0)
// if(cmdArray[0] ==='-') res = numArr.reduce((a,b) => a-b,0)

//  return res
//*
//  const cmdArray = cmd.split(' ')
//  const numArr = cmdArray.map(Number).filter(Number)

//  if(cmdArray[0] ==='*') return numArr.reduce((a,b) => a*b,1)
//  if(cmdArray[0] ==='+') return numArr.reduce((a,b) => a+b,0)
//  if(cmdArray[0] ==='/') return numArr.reduce((a,b) => a/b,0)
//  if(cmdArray[0] ==='-') return numArr.reduce((a,b) => a-b,0)

// return cmdArray.length === 1 && cmdArray[0] === '*' ? 1 :
//        cmdArray.length === 1 && cmdArray[0] === '+' ? 0 :
//        cmdArray.length === 1 && cmdArray[0] === '-' ? 0 :
//        cmdArray.length === 1 && cmdArray[0] === '/' ? 0 :
//       numArr.reduce((a,b) => {
//     if(cmdArray[0] === '/') a = a / b;
//     if(cmdArray[0] === '*') a = a * b;
//    // if(cmdArray[0] ==='*') a = a*b;
//     if(cmdArray[0] ==='+') a = a+b;
//     if(cmdArray[0] ==='/') a = a/b;
//     if(cmdArray[0] ==='-') a = a-b;
//    return a

//*
// const cmdArray = cmd.split(' ')
// const numArr = cmdArray.map(Number).filter(Number)

//   return cmdArray.length === 1 && cmdArray[0] === '*' ? 1 : numArr.reduce((a,b) => {
//   if(cmdArray[0] ==='*') a*=b
//   if(cmdArray[0] ==='+') a+=b
//   if(cmdArray[0] ==='/') a/=b
//   if(cmdArray[0] ==='-') a-=b
//   return a
// },0)
// })

// function scheme(cmd) {
//    const cmdArray = cmd.split(' ')
//    console.log(object);
//    const numArr = cmdArray.map(Number).filter(Number)

//   return cmdArray.length === 1 && cmdArray[0] === '*' ? 1 :
//          cmdArray.length === 1 && cmdArray[0] === '+' ? 0 :
//          cmdArray.length === 1 && cmdArray[0] === '-' ? 0 :
//          cmdArray.length === 1 && cmdArray[0] === '/' ? 0 :
//          numArr.reduce((a,b) => {
//                if(cmdArray[0] === '/') a = a / b;
//                if(cmdArray[0] === '*') a = a * b;
//                if(cmdArray[0] ==='+') a = a+b;
//                if(cmdArray[0] ==='-') a = a-b;
//            return a
//         })
//   }

// function scheme(cmd) {
//    const cmdArray = [...cmd].slice(1, +-1).join('').split(' ')
//    const numArr = cmdArray.map(Number).filter(Number)

//    return cmdArray.length === 1 && cmdArray[0] === '*' ? 1 :
//          cmdArray.length === 1 && cmdArray[0] === '+' ? 0 :
//          cmdArray.length === 1 && cmdArray[0] === '-' ? 0 :
//          cmdArray.length === 1 && cmdArray[0] === '/' ? 0 :
//          numArr.reduce((a,b) => {
//                if(cmdArray[0] === '/') a = a / b;
//                if(cmdArray[0] === '*') a = a * b;
//                if(cmdArray[0] ==='+') a = a+b;
//                if(cmdArray[0] ==='-') a = a-b;
//            return a
//         })

// }

//   console.log(scheme('(+ 4 4 -4)')); //4
//   console.log(scheme('(* 4 4)')); //16
//    console.log(scheme('(+ 4 4)')); //8
//    console.log(scheme('(- 4 3)')); //1
//    console.log(scheme('(/ 3 4)')); //0,75
//    console.log(scheme('(*)')); //1
//    console.log(scheme('(+)')); //
//    console.log(scheme('(* 3 4)'));
//   console.log(scheme('(/)'));

// const complete = str =>{
//    let strRev = [...str].reverse().join('');
//    if(str.length === 1) return str+str;

//    console.log(str, strRev, 'два слова');
//    console.log(str[0] === strRev[strRev.length-1], 'сравнение 1 и -1');
//    console.log(str === strRev, 'cравнение полной строки');

//    if (str[str.length-1] === strRev[0].toUpperCase() && str[str.length-2] === strRev[1].toUpperCase()) return str + strRev.slice(-2);

//    if (str === strRev && str[0] === strRev[strRev.length-1]) return str + strRev.slice(1);

//    if (str[0] === strRev[strRev.length-1].toUpperCase()) return str + strRev[strRev.length-1];

// if (str[0] === strRev[strRev.length-1] && str[1] === strRev[strRev.length-2]) return str + strRev.slice(1);

// if(str[0] === str[0].toUpperCase()) return str+str[0]
// else return str+ [...str].reverse().slice(1).join('')
// }

//  console.log(complete("xyzx")); //(baba) => aab + aa => aabaa
//  console.log(complete("aaBB")); //(aab) => aab + aa => aabaa

// console.log(complete("AaaaA")); //(aab) => aab + aa => aabaa

// if (str[str.length-1] === strRev[0].toUpperCase() && str[str.length-2] === strRev[1]) return str + strRev.slice(-2);

//* cложный палиндром
// const complete = str => {
//   if(str.length === 1) return str+str
//   if(str === [...str].reverse().join('')) return str+str.slice(1)
// //   if(str.slice(0, -1) === [...str].reverse().slice(1).reverse().join(''))

// //   return str + [...str].reverse().slice(1).join('')
// // else {

//   let res = [];
//   let finalArr = [];

//   [...str].forEach((el,i) => {
//     if(el !== str[str.length -1 -i]) {
//        res.push(el)
//     };
//   })
//    res = res.slice(0,1)

//  let final = [...str, ...res]
//  final.forEach((el,i) => {
//    if(el !== final[final.length -1 -i]) {
//       finalArr.push(el)
//    };
//  })
//  finalArr = finalArr.slice(0,1)

//  const array = [...final, ...finalArr].join('')

// return array === [...array].reverse().join('') ? array : str + [...str].reverse().slice(1).join('')

// }

// const complete = str => {
// *
// let s = ''

// for(let i = 0; i < str.length; i++) {
//   s += str[i];

//   let x = str+s.split('').reverse().join('')

//   if (x === x.split('').reverse().join('')) return x
// }

//*
// const strStart = str.split('')
// const strEnd = [strStart[0]]

// const isPalindrome = result => {
//     for (let i = 0; i < result.length / 2; i++) {
//         if (result[i] !== result[result.length - 1 - i])
//             return false
//     }
//     return true
// }

// let current = 1

// while (!isPalindrome([...strStart, ...strEnd].join(''))) {
//     strEnd.unshift(strStart[current])
//     current++
// }

// return [...strStart, ...strEnd].join('')

//*
//   let base = str.split("");
//   let arr = [...base, str.charAt(0)];
//   let i = 2;
//   while (arr.join("") !== [...arr].reverse().join("")) {
//     arr = [...base, ...arr.slice(0, i).reverse()];
//     ++i;
//   }
//   return arr.join("");

// }
// console.log(complete("aab")); //aabaa
// console.log(complete("aba"));//*ababa
// console.log(complete("Baa")); //"BaaB"
// console.log(complete("aaB")); //"aaBaa"
// console.log(complete("x")); //*xx
// console.log(complete("aaBB")); // ['a', 'a', 'B', 'B', 'a', 'a']
// console.log(complete("aOOa")); //*aOOaOOa
// console.log(complete("xyz")); //"xyzyx
//  console.log(complete("AaaaA")); //*"AaaaAaaaA"
//   console.log(complete("abab")); //ababa

// let res = ""

// for(let i = 0; i <= str.length-1; i++){
//    // console.log(str[i],str[str.length -1 -i]);
//    if(str[i] !== str[i],str[str.length -1]){
//       res += str[i]
//       console.log(res);
//    }

// }
// return res
// (a) => a + a => aa
// (GG) => GG + G => GGG
// (Ab) => Ab + A => AbA

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
// }

//! вариант с деструктуризацией
// const explode = ({0:a, 1:b, 0:{0:x}, 1:{0:y}}) => x && y ? 'Void!' : Array((+a | 0) + (+b | 0)).fill([a,b])

// console.log(explode(['a', 3]));// [['a', 3], ['a', 3], ['a', 3]]
// console.log(explode([9, 3]));// [[9, 3], [9, 3]...9]
// console.log(explode(['a', 'b']));//'Void'
// console.log(explode(['a', 0]));//[]

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

//? если цифры не дублируются превратить их в 1 а дубли в колличество повторов и дойти пока не останется два числа их просуммировать
// lb//! while простой пока не будет равен =1
//! редюс считает дубли
// let arr = input

// while(arr.length !== 1) {
//    arr = arr.reduce((sum, el, i) =>{
//       console.log(sum);
//      if(arr[i - 1] === el){
//      sum[sum.length-1] += 1;
//       }else{
//          sum.push(1)
//       }
//       return sum
//    }, [])
// }

// return arr[0]

//* через фор 2й вариант

// if(input.length === 1) return input[0]

// const arr = []
// let cur = 0

// for(let i = 0; i <= input.length; i++){
//    cur += 1;
//    console.log(input[i],input[i+1]);
//    if(input[i] !== input[i+1]){
//       arr.push(cur)
//       cur = 0
//    }
// }
// return setReducer(arr)
// }

//  console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7]));
//2
//[0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1]
//   => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

//?
// function trim(str, size) {
//*
//   if (str.length <= size) return str;
//   if (str.length <= 3) str.slice(0, size).concat("...");
//   str = [...str].filter((_, i) => i < size);
//   if (str.length <= 3) return `${str.join("")}...`;
//   else {
//     return `${str.filter((_, i) => i < size - 3).join("")}...`;
//   }

//*
//   return str.length > size ? `${str.slice(0, str.length < 3 ?
//                                           size : size -3)}...` : str

//*
// return str.length > size ? str.substring(0, (size > 3 ? size-3 : size))+'...' : str

// }
// console.log(trim("Creating kata is fun", 14)); //"Creating ka...";
// console.log(trim("hen", 1))//"h...";
// console.log(trim("xzcxzcxvbvn fsdgdhfg", 50))//"xzcxzcxvbvn fsdgdhfg";
// console.log(trim("st TZ fBQ", 3)); //"st...";

//  .slice(0, size).concat('...')

// function pooRoulette(p) {
////////////////////////////////////////////////////////////

//    let sortObjInElem = [];
//    let verticalLine = [];
//    let horizontLine = [];

//    p.forEach((el, idx) => {
//      let findEl = el
//        .map((e, i) => (e === "~" || e === "B" ? ++i : 0))
//        .filter((e) => e);

//      findEl.forEach((e, i) => {
//        if (e > 0) return sortObjInElem.push({ e, idx });
//      });
//    });

//    sortObjInElem.forEach((item) => {
//      verticalLine.push(item.idx);
//      horizontLine.push(item.e);
//    });

//    const sequenceEl = (array) =>
//      array
//        .map((_, mapI, mapArr) => mapArr[mapI] - mapArr[mapI - 1])
//        .filter((e) => e === 1);

//    horizontLine = sequenceEl(horizontLine).length;
//    verticalLine = sequenceEl(verticalLine).length;

//    if (horizontLine === 3) return "You disgust me!";
//    if (verticalLine === 3) return "Get the wipes!";
//    else return "Calm before the storm";

//////////////////////////////
//   let finalResault = ""
//   let filterArrWithTilda = []
//   let findArrWithB = p.filter((e,i,arr) =>
//                      e.find((b, i) => b.includes('B') ?  e : 0))
//                       .flat()

//     findArrWithB = findArrWithB.forEach((e,i) => e === "B" || e === "~" ? filterArrWithTilda.push(i) : 0)
//     filterArrWithTilda.some((e,i) => e === i ? finalResault = "You disgust me!": false)

//     return finalResault
// }

// function pooRoulette(p) {
//*
//    for (let i=0;i<p.length;i++)
//    {
//    if (p[i].includes('B'))
//      {
//        if (p[i][p[i].indexOf('B')+1]==='~'&&
//            p[i][p[i].indexOf('B')+2]==='~'&&
//            p[i][p[i].indexOf('B')+3]==='~'
//        ){ return "You disgust me!"}
//        if (p[i][p[i].indexOf('B')-1]==='~'&&
//            p[i][p[i].indexOf('B')-2]==='~'&&
//            p[i][p[i].indexOf('B')-3]==='~'
//        ){ return "You disgust me!"}
//        if (p[i-1]&&p[i-2]&&p[i-3]){
//        if (p[i-1][p[i].indexOf('B')]==='~'&&
//            p[i-2][p[i].indexOf('B')]==='~'&&
//            p[i-3][p[i].indexOf('B')]==='~'
//        ){ return "Get the wipes!"}}
//      }
//    }
//  return "Calm before the storm"

// Horizontal Check
//   for (let i = 0; i < p.length; i++) {
//    for (let j = 0; j < p[i].length - 3; j++) {
//      let cells = p[i].slice(j, j + 4).join("")
//      if (cells === "B~~~" || cells === "~~~B") { return "You disgust me!"}
//    }
//  }

//  // Vertical Check
//  for (let i = 0; i < p[0].length; i++) {
//    for (let j = 0; j < p.length - 3; j++) {
//      let cells = p[j][i] + p[j+1][i] + p[j+2][i] + p[j+3][i];
//      if (cells === "B~~~" || cells === "~~~B") { return "Get the wipes!"}
//    }
//  }

//  return "Calm before the storm"

//////////////////////////////
//   let verticalArr = [];
//    p.forEach((elem, inx) => {
//       elem.forEach((item, i) =>{

//        if(item.indexOf("B") !== item.indexOf("~")) verticalArr.push(i)
//       })

//    });
//    return verticalArr // map((e,i,a) => a[i] - a[i - 1])
// .map((e,i,a) => e === a[a.length -1 -i]).every(e => e)
// }

// console.log(
//   pooRoulette([
//     ["o", "o", "o", "o", "o", "o", "o"],
//     ["o", "o", "o", "o", "o", "o", "o"],
//     ["o", "o", "o", "~", "o", "o", "o"],
//     ["o", "o", "o", "~", "o", "o", "o"],
//     ["o", "o", "o", "~", "o", "o", "o"],
//     ["o", "o", "o", "o", "o", "o", "o"],
//     ["o", "o", "o", "B", "o", "o", "o"],
//   ])
// ); //"Get the wipes!"

// console.log(
//   pooRoulette([
//     ["o", "o", "o", "B", "o", "o", "~"],
//     ["o", "o", "o", "~", "o", "o", "o"],
//     ["o", "o", "~", "o", "o", "o", "o"],
//     ["o", "o", "o", "~", "o", "o", "o"],
//     ["o", "o", "~", "o", "o", "o", "o"],
//     ["o", "o", "o", "~", "o", "o", "o"],
//     ["o", "o", "o", "o", "o", "o", "o"],
//   ])
// ); //"You disgust me!");

// console.log(
//   pooRoulette([
//    [ 'B', '~', '~', '~', 'o', 'o', 'o'],
//    [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
//    [ '~', 'o', 'o', 'o', 'o', 'o', 'o'],
//    [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
//    [ 'o', 'B', 'o', 'o', 'o', 'o', 'o'],
//    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o']
//    ])
// );

// console.log(
//   pooRoulette([
//     ["o", "o", "o", "o", "o", "o", "o"],
//     ["o", "o", "o", "B", "o", "o", "o"],
//     ["o", "~", "o", "~", "o", "o", "o"],
//     ["o", "o", "~", "o", "o", "o", "o"],
//     ["o", "o", "~", "o", "o", "o", "o"],
//     ["o", "o", "o", "~", "o", "o", "~"],
//     ["o", "o", "o", "o", "o", "o", "o"],
//   ])
// );

// let arr = [1,2,3,4,5]

// const arrP = (array) => {
//       return array.map((e,i,ar) => console.log(e - ar[i - 1]))
// }

// console.log(arrP(arr));

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

//*
// [...str].map(el => dict[el.toUpperCase()]).join(' ')

//  };

//  console.log(makeBackronym("codewars")); //'confident oscillating disturbing eager weird awesome rant stylish'

// function truncateString(str, num) {
// Clear out that junk in your trunk
// return str.length > num ? `${str.substring(0, num > 3 ? num -3 : num)}...` : str

// return str.length > num ? str.slice(0,num>3 ? num-3 : num)+"..." : str

// str.length > num ? str.slice(0, num - (num > 3) * 3) + `...` : str;
//  }

//  console.log(truncateString('chingel', 8));//'chingel'
//  console.log(truncateString('chingel', 6));//'chi...''pippi', 3, 'pip...'
//  console.log(truncateString('pippi', 3));// 'pip...'
//  console.log(truncateString('chingel', 2));//'ch...'
//  console.log(truncateString('A-tisket a-tasket A green and yellow basket', 11))// 'A-tisket...'

// function sumCubes(n){
//    let sumInCube = 0
//    for(let i = 1; i <= n; i++){
//       sumInCube += i**3
//    }
//    return sumInCube
//  }

//  console.log(sumCubes(2));
//  console.log(sumCubes(3));

//*
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

// function quotable(name, quote){
//   return `${name} said: "${quote}"`
//  }

//  console.log(quotable('Grae', 'Practice makes perfect'));//'Grae said: "Practice makes perfect"'
//  console.log(quotable('Darrell', 'What the heck is this thing?'));//'Grae said: "Practice makes perfect"'

//  var getQuote = function(quotes, hero){
//    let numOfhero = [...hero].map(Number).filter(e => e | e === 0)[0];
//    if(hero.includes("Rob")) hero = "Robin:"
//    if(hero.includes("Bat")) hero = "Batman:"
//    if(hero.includes("Jok")) hero = "Joker:"

//  return`${hero} ${quotes[numOfhero]}`

//  }
//  console.log(getQuote(["WHERE IS SHE?!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"]
//  , "Rob1n"));
//  console.log(getQuote(["WHERE IS SHE?!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"]
//  , "Batm0n"));

//? посчитать согласные
// function consonantCount(str) {
//    let vow  = "aeiou"

//    return [...str].filter(e => !vow.includes(e) & e.toUpperCase() !== e.toLowerCase()).length
//  }

// console.log(consonantCount('Bbbbb'));//5
// console.log(consonantCount('XaeiouX'));//2
// console.log(consonantCount('012345_Cb'));//2
// console.log(consonantCount('h^$&^#$&^1elLo world'));//7

//? подсчет уникальных согласных
// function countConsonants(str) {
//* set
//    const vow  = "aeiou"

//   return [...new Set(str.toLowerCase())].filter(e => !vow.includes(e) & e.toUpperCase() !== e.toLowerCase()).length

//*set
// return new Set(
//    str
//      .toLowerCase()
//      .split("")
//      .filter((a) => "bcdfghjklmnpqrstvwxyz".includes(a))
//  ).size;

//* reduce
//   const isChar = c => c.toLowerCase() !== c.toUpperCase()
//   const v = 'aeiouAEIOU'
//   const count = {}

//   return [...str.toLowerCase()].reduce((a,c) => {

//     if(isChar(c) && !v.includes(c)){
//       if(!count[c]) (++a, count[c] = 1)
//     }
//     return a
//   },0)

//* indexOF
// return str
// .toLowerCase()
// .split("")
// .filter((element, index, array) => array.indexOf(element) === index)
// .filter(
//   (leter) =>
//     leter !== "a" &&
//     leter !== "e" &&
//     leter !== "i" &&
//     leter !== "o" &&
//     leter !== "u" &&
//     leter !== "!" &&
//     isNaN(leter)
// ).length;

// }
// console.log(countConsonants("Ssillystring"));//7
// console.log(countConsonants('abcdefghijklmnopqrstuvwxyz'));//21
// console.log(countConsonants("Count my unique consonants!!1"));


//? вытянуть цифры из слов и подсчитать сумму
// function sumOfIntegersInString(s) {
   //* forEach

   // let str = '';
   // let sum = 0;
   // [...s].forEach(element => {
   //     if(Number(element) || +element === 0){
   //         str += element;
   //     }else{
   //         str += ' ';
   //     }
   // });

   // let array = str.split(' ');
   // let newArray = array.filter(element => element !== '');
   // newArray.forEach(element => {
   //     sum += +element;
   // });
   // return sum;


   //*regular
  //  return s.replace(/\D/g, " ").split(' ').reduce((a,b) => a + +b,0)

  //*for
//   let result = 0,
//       temp = "";
//       s += "a";
//   console.log(s);
  
//   for (let i = 0; i < s.length; i++) {
//     if (!isNaN(s[i])) {
//       temp += s[i];
//     }
//     if (isNaN(s[i]) && !isNaN(s[i - 1])) {
//       result += Number(temp);
//       temp = "";
//     }
//   }
//   return result;


//*
// let res = 0;
// let chunk = [];

// for (let i = 0; i < s.length; i++) {
//     chunk = [];
//     while(!isNaN(parseInt(s[i]))) {
//         chunk.push(s[i]);
//         i++;
//     }

//     if (chunk.length !== 0) {
//         res += parseInt(chunk.join(''));
//     }
// }

// return res;

  // Array.from(s).map(Number).filter(e => !isNaN(e))
// }

// console.log(
//   sumOfIntegersInString("The Great Depression lasted from 1929 to 1939.")
// );
// // 3868
// console.log(sumOfIntegersInString("C4t5 are 4m4z1ng"));
// //18
// console.log(
//   sumOfIntegersInString(
//     "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
//   )
// ); //3635


// const arrCheck = value =>{
//   return value
// }

// console.log(arrCheck([]));
// console.log(arrCheck([['string']]));//tr
// console.log(arrCheck([[[],{}]]));//fals
// console.log(arrCheck([[1],[2],[3]]));//true
// console.log(arrCheck(['A', 'R', 'R', 'A', 'Y']));//false


//? сумма юникода букв
// function theVar(theVariables) {
   // let letterD = theVariables.slice(0,1) 
   // letterD = 5;
   // let letterG = theVariables.slice(-1)
   // letterG = 6
   // return letterD + letterG

   //*
   // return '0abcdefghijklmnopqrstuvwxyz'.indexOf(theVariables[0])+'0abcdefghijklmnopqrstuvwxyz'.indexOf(theVariables[2])

   //*
   // return theVariables.charCodeAt(0) + theVariables.charCodeAt(2) - 2 * 96;
//  }

//  console.log(theVar('d+g'));//11

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

  //*
  // let res = 0
  // for(let i = start; i <= end; i++){
  //   if(!/5/.test(i)){
  //     res++
  //   }
  // }
  // return res

  //*
  // let count = 0;

  // for (let i = start; i <= end; ++i)
  //     if (!i.toString().includes("5"))
  //         count++;
  //         return count
// }

// console.log(dontGiveMeFive(1,9));//8
// console.log(dontGiveMeFive(4,17));//12