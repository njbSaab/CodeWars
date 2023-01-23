
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
      
      