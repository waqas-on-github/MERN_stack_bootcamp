// An object is a collection of related data and/or functionality. These usually consist of 
//  several variables and functions (which are called properties and methods when they are inside
// objects). Let's work through an example to understand what they look like.


const person = {};   //empty object     
console.log(typeof(person))

// create

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };

// read 
  // get property values of the object:
console.log( user.name ); // John
console.log( user.age ); // 30

// another way to acess 
console.log(user["name"])

// The value can be of any type. Let’s add a boolean one:
// update 
user.isAdmin = true;


console.log(user)

// To remove a property, we can use the delete operator:1
// delete
delete user.age;
console.log(user)


// we can also add functions is our object and the will be calld "methods"

user.details= function ()
 {
  console.log(`your name is ${this.name} and age ${this.age}`)
 }

// console.log(user)
console.log(user.details())





