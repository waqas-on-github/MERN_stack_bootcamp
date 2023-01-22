let teacher="keyle"

function outerclass() {  //outerclass can assess  globle scope varaables  and its own 
    let  teacher ="suzy" 
    function ask(question ){   //ask can acess outer calss  and globle scope variable and its own 
        console.log(teacher ,question)
        
    }
    ask("what ")
}


outerclass()

