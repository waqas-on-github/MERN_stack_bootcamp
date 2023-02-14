
let chainedpromise =new Promise((resolve ,reject ) => {

  let val=1;
  if(val===10) {
    resolve(val)
  }
  else{
    reject("error")
  }

})

chainedpromise.then((value) => {
    console.log(value);
    return value+100
}).then((addedval) => {
    console.log(addedval);
}).catch((err) => {
    console.log(err);
})