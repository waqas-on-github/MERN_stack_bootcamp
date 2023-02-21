try{
  hello()

  // any code line after exception in try block will be skipped so becarefull 
}
catch(e){
   console.log(e.message);
   console.log(e.name);
   console.log(e.stack);


}

finally{
    console.log("ill run in both condition ");
}