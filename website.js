const fs  =require('fs');
const http  = require('http')
const port  = process.env.PORT || 3000 // HERE PORT || 3000 refers that if the port is already defined then it would consider PORT automatically otherwise
// Port 3000 will be considered

const server = http.createServer((req,res) =>{
    res.statusCode = 200; // response code
    res.setHeader('content-Type', 'text/html') // by setting the header, the request willl be served in the form of html
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')

        res.end(data.toString());
    }
    else if(req.url == '/about'){
        res.end('<h1> About Shashank- Shashank is an Associate Software engineer at XenonStack, earning around 8.5 LPA')
    }
    else if(req.url == '/hello'){
        res.end('<h1>Hii this website is in making')

    }
    else{
        res.statusCode  =404;
        res.end('<h1>This page was not found on the server')

    }
    
    
})

server.listen(port, () =>{
    console.log('server is listening on port ${port}');
})