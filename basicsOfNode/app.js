const http = require('http');
function rqListiner(req,res){
   
}
const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html><head>My first Page </head></html>')
    res.end();
});

server.listen(3000);
