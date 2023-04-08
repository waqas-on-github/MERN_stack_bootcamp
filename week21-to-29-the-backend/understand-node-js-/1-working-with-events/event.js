
// getting event module 
const eventemmiter = require("events")

// creating our instance 
const myevent = new eventemmiter()
// listnint or observing for event
myevent.on("newsale" , (name) => {
    console.log("helllo " , name);

    throw new Error("something went wrong ")
   
})




myevent.on ("error" , (err) => {
    console.log('error caught '  ,err);
})



try {
    myevent.emit("newsale",'waqas');
  } catch (err) {
    console.log("Error caught:");
  }