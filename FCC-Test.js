"use strict";

// function findElement(arr, func) {
//     let array = [];
//     for (let i = 0; i < arr.length; i++) {
//        let resultOfLoop = func(arr[i]);
//         array.push(resultOfLoop)
//     }
    
//     const isTrue = array.includes(true);
//     if (isTrue) {
//         return true;
//     } else {
//         return undefined;
//     }
// };


// findElement([1, 2, 3, 4], num => num % 2 === 0);

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      console.log(arr[i]);
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);