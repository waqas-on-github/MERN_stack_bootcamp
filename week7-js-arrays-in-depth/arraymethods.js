// concatination 

let arr1=[1,2,3,4]
let arr2=["jen" ,"feb" ,"march"]

let arr3 =arr1.concat(arr2)  /// method 1    // do not mutate orignal array 
arr4 =[...arr3 ,"hello"]         // es6 method   // do not mutate orignal array
console.log(arr1)
console.log(arr2)
console.log(arr3)

console.log(arr4)

