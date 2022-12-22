
function log(x){
    return console.log(x)
}


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


  


// 2array.prototype.every 

const isBelowThreshold = (currentValue) => currentValue < 40;
const above =  function (value) {
    return value>10;
}

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(above));
                

// 3Array.prototype.fill()

// The fill() method changes all elements in an array to a static value, 
// from a start index (default 0) to an end index (default array.length). It returns the modified array

// syntex =fill(value, start, end)


array1.fill("hello" , 2,4)

console.log(array1)

// Array.prototype.filter()

// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given 
// array that pass the test implemented by the provided function.


 function checknum (num) {
    return num >10;
 }

let checked =array1.filter((checknum))


console.log(checked)


// another exapmle   
// check occerence of element in array 

let exapmle2 =['waqas', 'imran' ,  'usnma' ,'waqas']

function occered (item) {

    return item==="waqas"
}

let checkoccr =exapmle2.filter(occered)
log(checkoccr.length)



// Array.prototype.find
// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
let nums =[10 ,20,20,30]

let firstocc=nums.find((item)=> item >19 )
log(firstocc)


// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// Array.prototype.findIndex()
let firsindex=nums.findIndex((item)=> item >19 )
log(firsindex)



// Array.prototype.forEach()

// The forEach() method executes a provided function once for each array element.

nums.forEach((item) => console.log(item*10)) 











    
