const http = require('http')

const server=  http.createServer((req, res) => {
    console.log(req.method); // its logging twice cuz on every http req http    
    //  logs in two parts header and body so in fir time on headers then headers+body 
   
    if(req.url === '/hello')
    {
        res.setHeader('content-Type' , 'text/html')
        res.write('<Html> ')
        res.write('<body> <h1> hexllo </h1>  </body>')
        res.write('<Html> ')
        res.end()
    }
})

server.listen(8000)
