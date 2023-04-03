// Objective parsing request Object

const http = require('http')




function dosomething (req ,res) {
    const tweets =["weclcome" ,"to" ," twitcsdter " ,'by' ,'waqas']
    console.log(req);
    const tweetneeded= tweets[2]
    res.end(tweetneeded)
    console.log(res);

}

function onerror (error){
    console.log(error);
}


const server = http.createServer() 
server.listen(5173)

server.on('request' , dosomething)
server.on('clientError' , onerror)



