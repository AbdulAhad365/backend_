const http=require('http');
const fs=require('fs');
const _=require('lodash')
// CREATE THE SERVER
const server=http.createServer((req,res)=>{
    console.log('request is recieved');
    console.log(req.url,req.method);
    console.log(_.random(0,20));

    // now the response
    // res.setHeader('Content-Type','text/html')
    // res.write('<html>');
    // res.write('<head><title>Hello from node</title></head>');
    // res.write('<body><div><p>Hey there hope u are doing great</p></div></body>')
    // res.write('</html>');
    // res.end();

    // SET THE PATH
    let path='/home/abdul/Music/node/part1/HTML FILES/'
    switch(req.url){
        case '/':
            path +='index.html'
            res.statusCode=200;
            break
        case '/about':
            path+='about.html'
            res.statusCode=200;
            break
        case '/about-me':
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end()
            break
        default:
            path+='404.html'
            res.statusCode=404;
            break
    }
    res.setHeader('Content-Type','text/html')
    // BY READING THE HTML 
    fs.readFile(path,(err,data)=>{
        if (err){
            print(err)
            res.end()
        }
        else{
            res.write(data)
            res.end()
        }
    })


});
// LISTEN THE SERVER
server.listen(4001
    ,'localhost',()=>{
    console.log('listing the request at the port number 6021');
});


