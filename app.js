const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html')
    fs.readFile('./views/index.html',(err,data)=>{
        if(err){
            console.log('Error fetching data')
        }
        else{
            res.end(data)
        }
    })
})

server.listen(3000,()=>{console.log('Listening on port : 3000')})