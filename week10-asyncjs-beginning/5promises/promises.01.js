function dispaly(data) {
  console.log(data);   
}


let futuredata=fetch('https://jsonplaceholder.typicode.com/todos/1')
futuredata.then(dispaly)


console.log("me first")


