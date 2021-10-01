/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


*/

var moveZeros = function (arr) {
    let zeroCount = 0;
    for(i=0; i<arr.length; i+=1) {
      if (arr[i] === 0) {
        zeroCount++
      }
    }
    newArr = arr.filter(e => e !== 0);
    for(i=0; i<zeroCount; i++) {
      newArr.push(0);
    }
    return newArr;
  }