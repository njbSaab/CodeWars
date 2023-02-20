//? cложный палиндром
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


//? выкинуть из строки цифры и вернуть в обратном порядке
// function reverseLetter(str) {
//*
   // return [...str].filter(e => isNaN(e)).filter(e => e === e.toLowerCase() && e !== e.toUpperCase()).reverse().join('')

//*
   // return str.split('').filter(x => x.charCodeAt() > 96 && x.charCodeAt() < 123).reverse().join('');  


//  }
//  console.log(reverseLetter("ultr53o?n"));//nortlu
//  console.log(reverseLetter("ab23c"));//cba

//?
// function solution(str, ending){
   //str.slice(-ending.length).includes(ending)

   //return str.endsWith(ending)

//   }
 
//   console.log(solution('sanurai', 'rai'))// true);
//   console.log(solution('abcde', 'abc'))// false);



//? str должна быть равна size если длина str > 3 место символов вставляем три точки и напротив три точки плюсуем к str если длина <3 
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


//? палиндром стр
// function palindrome(str) {
   //*
   // return str.toLowerCase()
   // .split('')
   // .filter(e => e.toLowerCase() !== e.toUpperCase() ?
   //                                 e : Number(e)? e : e === "0" ?
   //                                 e : false)
   // .every((e,i,arr) => e === arr[arr.length-1-i])

   //*
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


//? вытянуть из массива quotes номер строки который в аргументе hero
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
//  , "Batm0n"));//"Batman: WHERE IS SHE?!"


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

   //* map
   // return s.split('').map(item => isFinite(+item) ? item : ' ').join('').split(' ').filter(item => item !== '').reduce((a, b) => a + +b, 0)

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


//? сделать из строки CamelCase
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

//* array from
// const wave = str => Array.from({length:str.length}, (_,i) => str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1)).filter(x => x!=str);


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