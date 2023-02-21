function addnumbers(x,y)
{
    if(typeof(x)!=="number" || typeof(x)!=="number"){
        throw "provide number for sucessfull excution"
    }
}


try{
    addnumbers("h" ,33)
}
catch(e) {
    console.log(e);
}
