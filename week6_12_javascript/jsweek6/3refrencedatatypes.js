
// When you create a new object or array in JavaScript, the data structure is stored on the heap and a reference to it is stored on the stack. This means that when you access the object or array, you are actually accessing the reference on the stack, which points to the data on the heap.
console.log( 'ref daatatypes code starts here' )

let arr =[1,2,3,4,5]



// The "arr" array  is stored on the heap
  // A reference to the "arr" array  is stored on the stack
  

let person = {
    name: "John Doe",
    age: 35
  };
  
  // The "person" object is stored on the heap
  // A reference to the "person" object is stored on the stack
  

//   **But What Happen When We Mutate Array or Object**

// When you mutate an array or object in JavaScript, the data on the heap is updated to reflect the changes, but the reference on the stack remains the same. This means that when you access the array or object after mutating it, you are still using the same reference on the stack to find the updated data on the heap.


// Create a new array
let numbers = [1, 2, 3];

// The "numbers" array is stored on the heap
// A reference to the "numbers" array is stored on the stack

// Mutate the array
numbers.push(4);

// The data on the heap is updated to [1, 2, 3, 4]
// The reference on the stack remains the same

// Access the array
let lastNumber = numbers[3];

// The reference on the stack is used to find the updated data on the heap

console.log( 'ref daatatypes code end here' )
