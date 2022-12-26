//? Удалить буквы
//! nice code
// function removeExclamationMarks(s) {
//    return s.split('!').join('');
//  }

//! filter
// function removeExclamationMarks(s) {
//    return s.split('')
//           .filter((e) => e.replace('!', ''))
//           .join('')
   
//  }

//! regular
// function removeExclamationMarks(s) {
//    return s.replace(/!/g, '');
//  }

//   console.log(removeExclamationMarks("Hello World!!!"));

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


//! целочисленный квадратный корен sqrt - проверка на квадрат Number.isInteger
// const squareOrSquareRoot = array => array.map((x) => Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x ** 2)
 

//  console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]));



//? средние число сравнить с таблицой баллов абс
//! nice code
//getGrade=(...a)=>(x=a.reduce((p,c)=>p+c,0)/a.length,['A','B','C','D','F'][x<60?4:x<70?3:x<80?2:x<90?1:0])

// console.log
// (getGrade (95,90,93),
//  getGrade(100,85,96))



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


//? отрезать последний символ если есть знак восклицание в конеце
// function remove (string) {
//    // .lastIndexOf('!') ? string.slice(0, -1) : string
//    //.includes("!") ? string.slice(0, -1) : string

//  return string.endsWith('!') ? string.slice(0, -1) : string;

// return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
//  }
//  console.log(remove("Hi!"));// "Hi"
//  console.log(remove("Hi!!!"));// "Hi"
//  console.log(remove("Hi! Hi!"));// "Hi"
//  console.log(remove("Hi! Hi"));// "Hi"



//? Кейс 
// function getPlanetName(id){  
//    switch(id){
//      case 1:
//        return "Mercury";
//      case 2:
//        return "Venus";
//      case 3:
//        return "Earth";
//      case 4:
//        return "Mars";
//      case 5:
//        return "Jupiter";
//      case 6:
//        return "Saturn";
//      case 7:
//        return "Uranus";
//      case 8:
//        return "Neptune";
//      default:
//        return "invalid planet id in function getPlanetName()";
//    }
//  }

//! Альтернатіва кейса 
// function getPlanetName(id){
//    return {
//      1: 'Mercury',
//      2: 'Venus',
//      3: 'Earth',
//      4: 'Mars',
//      5: 'Jupiter',
//      6: 'Saturn',
//      7: 'Uranus',
//      8: 'Neptune'
//    }[id]
//  }


// console.log(getPlanetName(2));
// console.log(getPlanetName(3));
// console.log(getPlanetName(5));


//? вернуть проитерированый массив где а -начало б -конец 
// function between(a, b) {
   //*
   // let res = []
   // for(let i = a; i <= b; i++){
   //    res.push(i)
   // }
   // return res


//! nice code
   // return [...Array(b - a + 1)].map((e,i) => console.log(i + a))

  
//  }

//! nice code
// const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);

//  console.log(between(1, 4));
//  console.log(between(-2, 2));



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
   
//! keys
//    return [...Array(n + 1).keys()].slice(1).map((x) => x % 15 === 0 ?
//    'FizzBuzz':
//    x%3===0?'Fizz':
//    x%5===0?'Buzz':
//    x)
  
// }
 
// console.log(fizzbuzz(10));



//! переобразовать число в массив 
// const digitize = n => n.toString()
//                       .split``
//                       .reverse()
//                       .map(Number)


//  function digitize(n) {
// return String(n).split('').map(Number).reverse()
// }
                     
//  console.log(digitize(35231));//[1,3,2,5,3]

//! решение через Аrray.from переоброзовать число в массив
// function digitize(n) {
   // return Array.from(String(n), Number).reverse();
   
//  }
                     
//  console.log(digitize(35231));//[1,3,2,5,3]



//? проверить совподают ли последний символ body с tail
// function correctTail(body, tail){
   
//*
//  return body.substr(-1) === tail

//* 
//  return body.endsWith(tail)

   // }
   //   console.log(correctTail("Fox", "x"))// true);
   //   console.log(correctTail("Rhino", "o"))// true);




//? альтернатива if
     // function greet(name){
      // if(name === "Johnny") return "Hello, my love!";
      // return  "Hello, " + name + "!";


   //    return "Hello, " + (name === "Johnny" ? "my love" : name) + "!"
   //  }
   //  console.log(greet("Johnny"));

   
   //* следущие число палиндро 
 // function nextPal(val){

    // for(let i = val + 1; true; i++){
   //    if([...String(i)].reverse().join('') == i)
      //    return i
      // }    
   // }

   //* альтернатива
   // while (++val != [...`${val}`].reverse().join(``)) ;
   // return val;


   //! best 
   // function nextPal(val) {
   //    do {
   //      val++;
   //    } while(!isPalindrome(val))
   //    return val;
   //  }
    
   //  function isPalindrome(num) {
   //    return num === reverseNum(num);
   //  }
    
   //  function reverseNum(num) {
   //    return parseInt(num.toString().split('').reverse().join(''));
   //  }

   
   // console.log(nextPal(11));// 22
   // console.log(nextPal(188));// 191


//? найти по value и вернуть многомерный массив
//! kyes
// function sortDict(dict) {
//   return Object.entries(dict).map(([keys, values])=> parseInt(keys) || parseInt(keys)  ? [+keys, values] : [keys, values])
//   .sort(([, valuesA],[, valuesB]) => valuesB - valuesA)
//  }

// console.log(sortDict({1:3,2:2,3:1})) //[[3:1], [2:2], [1:3]]
//  console.log(sortDict({'a':3,'b':2,'c':1}));


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

//! while
// function unscrambleEggs(word){
//    let resylt = word;
//    while(resylt.indexOf('egg') === -1){
//      resylt.replace('egg', '')
//    }
//    return resylt
// }
//   console.log(unscrambleEggs("Beggegeggineggneggeregg"))//beginer




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


//? заменить первые буквы в словах 
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



//? посчитать количество haHa
// var kookaCounter = function(laughing) {

   //  let arr = laughing.split('a'),
   //  res = 0;
   // for(let i = 1; i < arr.length; i++){
   //   if(arr[i] != arr[i - 1]){
   //      res++
   //   }
   // }
   // return res

   
   // return laughing.split('a').filter((e, i) => e===laughing.split('a')[i + 1] ? false : true ).filter((h => h !== '' ? h:null)).length

 
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


//!   через reduce
   // const [l, s] = a.length >= b.length ? [a,b] : [b,a];
   // return s + [...l].reduce((a, e) => e + a, '') + s
//  }

//  console.log(shorter_reverse_longer("first", "abcde"));
//  console.log(shorter_reverse_longer("hello", "baudddd"));



//? сравнить количество ч и о если одинаково вернуть тру
// function XO(str) {

//*
   // let letterLower = str.toLowerCase();
   // let letterX = [];
   // let letterO = [];
   // [...letterLower].forEach((e) => {
   //        if(e === 'x'){
   //        letterX.push(e)
   //       };
   //       if(e === 'o'){
   //       letterO.push(e)
   //       }else false
   // })      

   // if(!letterLower.includes('x') && !letterLower.includes('o')) {
   //    return true;
   //  }
   // if (letterLower.includes('x') && letterLower.includes('o'))  {
   //    return letterX.length === letterO.length
   // }

   //    return false


   //! filter
   //  str = str.toLowerCase().split('')

   // return str.filter(x => x === 'x').length === str.filter((x => x === 'o')).length

   //! nice code
   // return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length
   
// }

//! reduce
// const XO = str => str
// .toLowerCase()
// .split('')
// .reduce((acc, char) => (acc + ({x: 1, o: -1}[char] || 0)), 0) === 0


//* две функции
// const XO = str => {
// let letterLower = str.toLowerCase()

// if(!letterLower.includes('x') && !letterLower.includes('o'))  return true;
// else  return isLeter(letterLower)

// }

//  const isLeter = (letterLower) =>
// letterLower.split('').filter(e => e ==='x').length
//                       ===
// letterLower.split('').filter(e => e ==='o').length

   

// console.log(XO('xxoO'), 'true');//,true
// console.log(XO('xoOx'), 'true');//,true
// console.log(XO('xoxoO'));//false
// console.log(XO('xoOx'), 'true');//,true
// console.log(XO('Om'));//,false
// console.log(XO('Zp') , 'true');//,true
// console.log(XO('XxmOo') , 'true');//,true



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