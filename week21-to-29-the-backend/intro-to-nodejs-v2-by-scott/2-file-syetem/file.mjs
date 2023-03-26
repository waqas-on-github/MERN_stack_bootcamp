import * as fs from 'node:fs/promises';

// in modular js we can use await keyword without async function 
   fs.writeFile("./hello.html" ,"hello")
 let output = await fs.readFile('./file.txt')
 console.log(output);
