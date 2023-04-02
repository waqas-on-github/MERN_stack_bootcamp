// Objective parsing request Object

const http = require('http')




function dosomething (req ,res) {
    const tweets =["weclcome" ,"to" ," twitcsdter " ,'by' ,'waqas']
    console.log(req);
    const tweetneeded= tweets[2]
    if(req.url==='/hello') {
        res.end(tweets[0])
    }
    
    res.end(tweetneeded)
    console.log(res);
}


const server = http.createServer(dosomething) 
server.listen(80)


