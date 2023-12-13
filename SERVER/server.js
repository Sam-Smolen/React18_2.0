// Building a server with node js

const http = require('http');
const fs = require('fs');

const names = ['francis','james','rob'];
const cars = {
    name:"Ford",
    model:"Fiesta"
}

const server = http.createServer(function(req,res){

    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        const HTML = fs.readFileSync(`${__dirname}/index.html`);
        res.end(HTML)
    } else if(req.url === '/api/users') {
        res.writeHead(200,{'Content-Type':'application/json'});
        const json = JSON.stringify({
                names,
                cars
            });
            res.end(json)
    } else if(req.url === '/api/text') {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Welcome to my Node js server');
    } else {
        res.writeHead(404);
        res.end();
    }
    
});

server.listen(8181,'127.0.0.1');
console.log('Server is running on port 8181');