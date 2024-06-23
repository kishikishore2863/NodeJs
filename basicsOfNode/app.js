const fs = require ('fs')
const http = require('http');
function rqListiner(req,res){
   
}
const server = http.createServer((req,res)=>{
    const url =req.url;
    const method = req.method; 
    if(url === "/"){
        res.setHeader('Content-Type','text/html');
        res.write('<html><head>My first Page </head><body><form action="/message" method="POST"><input type="text" name="message"/> <button>search</button> </form></body></html>')
        return res.end();
    }
    if(url === '/message' && method == 'POST'){
        const body =[];
        req.on('data',(chunk)=>{
            console.log(chunk);
         body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt',message)
        })
     fs.writeFileSync('message.txt','DUMMY');
     res.statusCode=302;
     res.setHeader('location','/');
     return res.end();
    }
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html><head>My first Page </head><body>hello from my Node js</body></html>')
    res.end();
});

server.listen(3000);

