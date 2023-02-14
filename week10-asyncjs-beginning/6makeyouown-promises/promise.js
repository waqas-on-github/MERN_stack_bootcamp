

// .then  always return promise  we can chain mutiple thens 

let mypromise=new Promise((resolve ,reject) => {

playerName ="waqas"
if(playerName ==="waqas"){
    resolve("success  " + playerName   +  "can play game ")
}
else {
    reject(" rejected :player is not eligible ")
}

})

mypromise.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
})
