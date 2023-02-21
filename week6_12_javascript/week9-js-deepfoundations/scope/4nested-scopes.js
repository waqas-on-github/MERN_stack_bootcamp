

var teacher ="kyle"   // ------> teacgher varaable in globle sope 


function  otherclass () {
    var teacher="suzy"    // -------- teacher varaiable in function scope  
    console.log(teacher);

    function ask () {   // one more level deep in scop
        var question  ="why?"
        console.log(question);
        console.log(teacher)
    }

    ask()
    
}
console.log(teacher)



otherclass()
 ask()  //refrence error 