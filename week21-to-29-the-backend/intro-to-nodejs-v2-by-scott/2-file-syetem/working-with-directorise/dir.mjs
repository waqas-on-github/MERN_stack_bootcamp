import * as fs from 'fs/promises'
//  create direcorty 
 try{
     await fs.mkdir('./helloxs' )
 

     console.log("dir created sucessfuly (:");

 }
 catch(error) {
     console.log(error)
 }

// delete directory 

 try{
     await fs.rmdir("./hellox2")
     console.log('director deleted sucessfully');
 }
 catch(error) {
     console.log(error)
 }



// reading  directory 


try{
    let files =await fs.readdir('./helloxs') 
    console.log(files)
}
catch(err) {
    console.log(err);
}