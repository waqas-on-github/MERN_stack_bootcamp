// DOT NOTION VS BRECKET NOTATION 


const animal = {
    type: "dog",
    name: "Fido",
    age: 3,
  };
  
  const propertyName = "name";
  
  console.log(animal.propertyName);  // logs undefined
  console.log(animal[propertyName]);  // logs "Fido"
  
//   in this example, animal is an object with three properties: type, name, and age. propertyName is a variable
//  that holds the string "name".


// When you use the dot notation to access the propertyName property of the animal object (e.g. animal.propertyName), 
// the interpreter looks for a property named "propertyName" on the animal object, which does not exist. Therefore, 
// the expression evaluates to undefined.


// On the other hand, when you use the bracket notation (e.g. animal[propertyName]), the interpreter uses the value of
//  the propertyName variable (i.e. "name") as the name of the property to access. In this case, the expression evaluates
//  to the value of the name property, which is "Fido"


// for genrating dynamic members in object use of bracket notation 

// Yes, dynamic data refers to data that can change over time in response to events or user interactions.
//  Here is an example of how you can use objects and arrays to store and manipulate dynamic data in a 
//  JavaScript application:


// Set up an object to store the data
let data = {
  users: [
    {name: 'John', age: 30},
    {name: 'Jane', age: 25},
    {name: 'Bob', age: 35}
  ],
  selectedUser: null
};

// Set up a function to update the selected user
function selectUser(index) {
  data.selectedUser = d       
}
// Set up a function to update the age of the selected user
function updateAge(age) {
  data.selectedUser.age = age;
}

// Select the first user
selectUser(0);

// Update the age of the selected user
updateAge(31);

console.log(data.selectedUser.age); // outputs 31
// In this example, the data object stores a list of users and a reference to the currently selected user.
//  The selectUser function updates the selectedUser property of the data object to the user at the specified index.
//  The updateAge function updates the age property of the selected user.

// When the selectUser and updateAge functions are called, the data in the data object is updated dynamically, 
// based on the events or user interactions that triggered the functions.

// This is just a simple example, but you can use similar techniques to store and manipulate dynamic data 
// in more complex applications. You can use objects and arrays to store the data, and use functions to update 
// the data in response to events or user interactions.



// Regenerate response
