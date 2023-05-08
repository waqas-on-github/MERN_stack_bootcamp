const http = require('http')
const fs = require('fs/promises')


const server = http.createServer((req ,res) => {
    if(req.url ==='/') {
        res.setHeader('content-Type' , 'text/html')
        res.write('<Html> ')
        res.write('<body> <form action="/message" method="POST">  <input type="text" name="message">    <button type="submit"> send  </button>  </form>  </body>')
        res.write('<Html> ')
        return res.end()
    }
    // after getting input routing based on input data (url )
    if(req.url==='/message' && req.method === 'POST') {
        console.log('hello');
        // rest of the code to handle POST request goes here
         fs.writeFile("./hello.text"  ,'dummy') 
        
        res.setHeader('location' ,'/')
        res.write('<Html> ')
        res.write('<body> <h1> hexllo </h1>  </body>')
        res.write('<Html> ')

        res.statusCode=302
       return res.end()
    }
})


server.listen(8000)
