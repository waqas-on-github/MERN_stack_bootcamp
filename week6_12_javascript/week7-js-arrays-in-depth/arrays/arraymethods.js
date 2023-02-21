
function log(x){
    return console.log(x)
}


// concatination 

let arr1=[1,2,3,4]
let arr2=["jen" ,"feb" ,"march"]


// 1 Array.prototype.concat()
// syntex = concat(item1+item2 + ....  item-N)

let arr3 =arr1.concat(arr2)  /// method 1    // do not mutate orignal array 
arr4 =[...arr3 ,"hello"]         // es6 method   // do not mutate orignal array
console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)

// 2 Array.prototype.at()
// syntex = at(index)
// we wanna acess last element of array without knowing length of array

console.log(arr1[arr1.length-1])    // do not mutate orignal array
// with Array.at short hand 

console.log(arr1.at(-1))


// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length ; i++) {
//   console.log(arr[i]);
// }


// 2array.prototype.every 
   //every(function (element, index, array) { /* … */ }) 
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
// syntex  filter((element, index, array) => { /* … */ })

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
// find((element, index, array) => { /* … */ })

// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
let nums =[10 ,20,20,30]

let firstocc=nums.find((item)=> item >19 )
log(firstocc)


// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// Array.prototype.findIndex()
let firsindex=nums.findIndex((item)=> item >19 )
log(firsindex)



// Array.prototype.forEach()

// The forEach() method executes a provided function once for each array element.it always return undefined and dont mutate orignal but callback funcation inside array can mutate array 

nums.forEach((item) => console.log(item*10)) 



// mutate array with foreach 

const array = [1, 2, 3, 4, 5];

// Double the value of each element in the array using forEach()
array.forEach((x, i) => array[i] *= 2);
console.log(array);

// above  code snippet is mutating orignal array more examples later 


// Array.prototype.map()
// The map() method creates a new array populated with the results of calling a provided function 
// on every element in the calling array.

let array2 = [1, 2, 3, 4, 5];
let doubled =array2.forEach((item) => item*2)
console.log(doubled)
log(array2)

// Array.prototype.pop()
// The pop() method removes the last element from an array and returns\
//  that element. This method changes the length of the array.

array2 = [1, 2, 3, 4, 5];
array2.pop()  
log(array2)    

// Array.prototype.push()
// The push() method adds one or more elements to the end of an array and returns the new length of the array.


array2.push(5)

log(array2)    



// Array.prototype.shift()
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

array2.shift()     //  this method wiil mutate array 

log(array2)

// Array.prototype.unshift()

// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

array2.unshift("mydog")
log(array2)


// Array.prototype.reverse()
//   reverce simple all element in array it also mutate array 

let x=[22,33,55]
x.reverse()
log(x)


// slice method 
// In JavaScript, the slice() method is used to extract a section of an array and return a new array. It can be used on any array-like object, such as a string or a typed array.
let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

log(fruits.slice(0))   // it will slice nothing 
log(fruits.slice(1))   // it will slice 1 item  from index 0
log(fruits.slice(2))   // it will slice 2 item   starting from from index 0

 fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

log(fruits.slice(2 ,4))   // it will slice items    starting from from index 2  to 4 




// Array.prototype.splice()
log('===============  splice here  ====================')
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().  ///
// splice mutate orignal array 
fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
fruits.splice(0)   // if we suplly single argument to spice it will start removing items form that index 
log(fruits)
fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
fruits.splice(1)
log(fruits)

fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

fruits.splice(0 ,3)    // if we supply 2 arguments it will take first as index and seond as number of items  will be removed 

log(fruits)
 

// splice with more then two args 
fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

fruits.splice(1 ,1 , "cat" )
log(fruits)


fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
fruits.splice(1 ,2 , "cat" ,"dog")
log(fruits)



fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
fruits.splice(1 ,2 , ...["cat" ,"dog"])
log(fruits)


// sort method 
// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, but we can change by giving arguments 
// sort((a, b) => { /* … */ } )

let sorted= [9,4,1] 
sorted.sort()
log(sorted)



let names =[ 'x','m','o','t']
names.sort((a,b) => (a.localeCompare(b)))
log(names)

 names =[ 'x','m','o','t']

names.sort((a,b) => (b.localeCompare(a)))
log(names )


// Array.prototype.fill()
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
// syntex =* fill(value, start, end)

array2 = [1, 2, 3, 4];
array2.fill("cat" ,0,2)
console.log(array2)








// Array.from()
// Array.prototype.reduce()



    
