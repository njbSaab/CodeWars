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



