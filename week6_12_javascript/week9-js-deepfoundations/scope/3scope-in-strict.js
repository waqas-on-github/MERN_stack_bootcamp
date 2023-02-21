
"use strict"

var teacher ="kyle"


function  otherclass () {
     teacher="suzy"    // -------- teacher varaiable in function scope  but it wiil be reassigned cuz we have not declared 
     topic ='react'    // ------> we did not  declare it so itll be auto declared when look up process hapen globally 
    console.log(teacher);
}


otherclass()
console.log(teacher);  // suzy
console.log(topic);   // refrence error 