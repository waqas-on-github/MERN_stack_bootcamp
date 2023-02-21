

var teacher ="kyle"   // ------> teacgher varaable in globle sope 


function  otherclass () {
    var teacher="suzy"    // -------- teacher varaiable in function scope  
    console.log(teacher);
}


function ask () {
    var question  ="why?"
    console.log(question);
}


otherclass()
ask()