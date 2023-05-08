
import MongoStore from "connect-mongo";

function read (req, res ) {
    console.log(req.session);
    console.log(req.sessionID);
    console.log(req.session.id);

    
}


function destroy (req, res) {
    req.session.destroy(() => {
        console.log(" session destroyed ");
        try {
            console.log("Session destroyed");
            console.log(req.session.id);
          } catch (err) {
            console.error("Error accessing session ID:", err.message);
          }
          
    })
     res.send('session destroyed ')

}


function regenrate (req, res ) {
    req.session.regenerate(() => {
        console.log(" session regenrated  ");
        console.log(req.session.id);
    })
     res.send('session regenrated  ')

}




function countviews (req, res ) {
    
    if (!req.session.pageViewCount) {
        req.session.pageViewCount = 0;
      }
      req.session.pageViewCount++;
      console.log(`Page views: ${req.session.pageViewCount}`);
      res.send('Welcome to my website!');
    };
      
export {
    read,
    destroy, 
    regenrate, 
    countviews
}