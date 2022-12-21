// concatination 

let arr1=[1,2,3,4]
let arr2=["jen" ,"feb" ,"march"]




// 1 Array.prototype.concat()


let arr3 =arr1.concat(arr2)  /// method 1    // do not mutate orignal array 
arr4 =[...arr3 ,"hello"]         // es6 method   // do not mutate orignal array
console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)

// 2 Array.prototype.at()
// we wanna acess last element of array without knowing length of array

console.log(arr1[arr1.length-1])    // do not mutate orignal array
// with Array.at short hand 

console.log(arr1.at(-1))



// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length ; i++) {
//   console.log(arr[i]);
// }



const isBelowThreshold = (currentValue) => currentValue < 40;
const above =  function (value) {
    return value>10;
}

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(above));








