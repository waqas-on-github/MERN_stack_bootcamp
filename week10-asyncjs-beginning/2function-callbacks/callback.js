//add  numbers and then multply by two  


function  addnumbers (x,y,multplyby2){
    let result = x+y;
   return multplyby2(result)
    
};


function multplyby2(res) {
    return (res*2);
}
;

let resultednums=addnumbers(2,4,multplyby2)
console.log(resultednums);

