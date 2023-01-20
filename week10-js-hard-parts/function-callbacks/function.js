
function square  (num) {
    return num *num 
}

square(10)




function multplyby2(array){
    const result =[]
    for(let i=0 ; i<array.length;i++) {
        result.push( array[i] *2 );
    }
    return result
}


console.log(multplyby2([1,2,3]))


function divideby2(array){
    const result =[]
    for(let i=0 ; i<array.length;i++) {
        result.push( array[i] /2 );
    }
    return result
}


console.log(divideby2([1,2,3]))

function addby3(array){
    const result =[]
    for(let i=0 ; i<array.length;i++) {
        result.push( array[i] + 3 );
    }
    return result
}


console.log(addby3([1,2,3]))



// whats  we are doin wrong .......... DONT REPEAT YOUR SELF (DRY)