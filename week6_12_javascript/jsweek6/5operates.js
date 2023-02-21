// Arithmetic operators: +, -, *, /, %
// Assignment operators: =, +=, -=, *=, /=
// Comparison operators: ==, ===, !=, !==, >, <, >=, <=
// Logical operators: &&, ||, !
// Bitwise operators: &, |, ^, ~, <<, >>, >>>


// advance operaters 


// Conditional (ternary) operator: (condition) ? (if true) : (if false)
// Delete operator: delete
// Typeof operator: typeof
// Void operator: void
// In operator: in
// Instanceof operator: instanceof


// Arithmetic operators: +, -, *, /, %
console.log('operators code starts here ')
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(10%3)

// Assignment operators: =, +=, -=, *=, /=
let x=10;
console.log(x)
x+=1
console.log(x)
x-=1
console.log(x)
x*=10
console.log(x)
x/=10
console.log(x)


// Comparison operators: ==, ===, !=, !==, >, <, >=, <=


console.log(2==2)
console.log('2'==2)
console.log(2===2)
console.log(2==='2')
console.log(2!=2)
console.log(2!='2')
console.log(2!==2)
console.log(2!=='2')
console.log(3>2)
console.log(3<2)
console.log(2>=3)
console.log(3<=4)


// Logical operators: &&, ||, !
let age =25
let name ='waqas'
let cancode =true

if(age===25&&name==="waqas"){
    console.log("can devoope web apps ")
}
if(cancode||name==="waqas")
{
    console.log("can devoope web apps ")

}


if(!cancode||name!=="waqas")
{
    console.log("can not devoope web apps ")

}



// TRYTHY VS FALSY 


// In JavaScript, a truthy value is a value that is considered true when evaluated in a boolean context. This means that if a truthy value is used in a condition, the condition will evaluate to true. Some examples of truthy values in JavaScript are:

// Any non-zero number (e.g. 1, -1, 3.14)
// Any non-empty string (e.g. "hello", "123")
// The boolean value true
// An array with at least one element
// An object with at least one property
// On the other hand, a falsy value is a value that is considered false when evaluated in a boolean context. Some examples of falsy values in JavaScript are:

// The boolean value false
// The number 0
// The empty string ""
// The special value null
// The special value undefined
// It's important to note that not all values in JavaScript can be classified as either truthy or falsy. For example, the string "false" is not a falsy value, even though it contains the word "false". This is because the string "false" is a non-empty string, which is considered a truthy value.
// advance operaters wil be coverd later 



















console.log('operators code ends  here ')
