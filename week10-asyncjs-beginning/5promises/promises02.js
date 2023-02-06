
function dispaly(data) {
    console.log(data);   
  }
  
  
  let futuredata=fetch('https://jsonplaceholder.typicode.com/todos/1')
  futuredata.then(dispaly)
  
  
  console.log("me first")
  
  setTimeout(() => {
    console.log("im calllback so ill go in callback qeue")
  },2000)


// discription of program

// step 1 -----> define a function  dispaly() in globle  excution context 
// step 2  ---->  declare a variable futuredata and assign its value  promise object returned by  fetch "facad" function 
// call of fetch function will be added to microtask qeue 
//.............................................what fatch wiil do..................................................... 

//  frtch is basically call web api for networking   fetch will instently retrun promice object whic contain few properties 
// like value ..... and onfulfilled array functions [ fun() ,fun()] when fetch will get data itll be place in value placeholder 
//  callback function in onfillfiled array of function will be triggerd automatically whichis provided by .then() method 

//  step3 ---> log "me first"
// step 4 ---> stetimeout wiil be add to callback qeue


// step 4 ---->  when fetch will return data then dispaly function will be triggerd and log data into console 

  //  who will eb excute  

  // oreder of excution 
  // 1  globle javascript native code 
  // 2 promise based function will be added into microtask qeue and then into callstack then executed 
  // 3 old callback function to callback qeue to call stack 

  


  