
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
