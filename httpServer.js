const {Console} = require('console');
const http  = require('http')
const port  = process.env.PORT || 3000 // HERE PORT || 3000 refers that if the port is already defined then it would consider PORT automatically otherwise
// Port 3000 will be considered

const server = http.createServer((req,res) =>{
    console.log(req.url)
    //Output we got 
    //server is listening on port ${port}
    //favicon.ico
    //shashankisAssociateSoftwareengineer
    res.statusCode = 200; // response code
    res.setHeader('content-Type', 'text/html') // by setting the header, the request willl be served in the form of html
    res.end('<h1> this is a node js tutorial')
})

server.listen(port, () =>{
    console.log('server is listening on port ${port}');
})