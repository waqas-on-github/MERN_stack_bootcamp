// An object is a collection of related data and/or functionality. These usually consist of 
//  several variables and functions (which are called properties and methods when they are inside
// objects). Let's work through an example to understand what they look like.


const person = {};   //empty object     
console.log(typeof(person))



let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };


  // get property values of the object:
console.log( user.name ); // John
console.log( user.age ); // 30

// another way to acess 

console.log(user["name"])

// The value can be of any type. Let’s add a boolean one:

user.isAdmin = true;


console.log(user)

// To remove a property, we can use the delete operator:1

delete user.age;
console.log(user)


