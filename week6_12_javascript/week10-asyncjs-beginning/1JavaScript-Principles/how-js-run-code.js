// whats execuation context 
//  excution context is envoirment where thred of excution and store of data (memory)
// thred of excution ----> ability to go line by line of code 


const num =3;    // -----------> step 1   globle excution context created 

function multplybytwo(num){   // --------> step 2 but just label it with f and got to next line 
    const result =num *num ;  //  ----------->  step 4  new excution context created for multply by  2 function  then code run 
    return result;
}

const output= multplybytwo(num)   // --------->  step 3 when multpluy called then function multplybytwo excuted 
