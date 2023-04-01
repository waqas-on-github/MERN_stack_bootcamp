
const http = require('http')  //  requiring node module 

const server = http.createServer(dosomething)   // a buitlin lable in node internel feature which intrect with computer internals with help of libuv 
// when we use hhtp.createserver() method it imaidatioly returns object{} full of functions(methods) to lhf variable so then we can use it for more funcations 
server.listen(80)   //  there are 64k + ports in computer so we are  listning for requests on port 80 

// we pass dosomething function to http.createserver() as argument which will save in and automatically
// run when request comes 
function dosomething (incomingdata , functiontorunon) {  
    console.log(functiontorunon);
    functiontorunon.end("welcome");
};


// so when we pass "dosomething()" to createserver() method provided by node http module 
// when any event emits on server itll imaiditoly  and automatically return two objects 
// 1st --->  will have data about incoming REQUEST like objct have bunch of properties on it {}
// 2nd --> is also objct but  for sending RESPONCE  which will have a bunch of callback  functions(methods)
// when we call them with data we provide they will send back that data as a responce to clint mechine 