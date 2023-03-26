let fs = require('fs/promises');


// createfile 

async function createfile (filename) {
try{
  await fs.writeFile(filename , "hello")

}

catch(error){
console.log(error);
}

}

createfile("anotehs.js")


// readFile

async  function read () {
  try{
    let data =await fs.readFile(__filename ,"utf-8")
    console.log(data);
  }

  catch(error) {
    console.log(error);
  }
} 


 read()

// update file 

async function updatefile () {
  try{
    await fs.appendFile(__filename ,"\nconsole.log('hello')")
  }
  catch(error) {
    console.log(error);
  }
}


 updatefile();

console.log('hello')
console.log('hello')
console.log('hello')



// delete file 

async function deletefile  () {
  try{
    await fs.unlink("./file.txt")
    console.log("file deleted sucessfully");
  }

  catch(error) {
    console.log(error);
  }
}


deletefile()


