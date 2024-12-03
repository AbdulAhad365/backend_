const http=require('http');
const server=http.createServer((req,res) => {
    const url=req.url;
    if (url==='/ok'){
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/messsage" methord="post"><input type="text" name="message"><button type="submit">send</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    else if (url==='/message'){
        res.setHeader('content-Type','text/html');
        res.write('<html>')
    
        res.write('<html>')
        res.write('<head><title>This is HTML,well it is interesting</title></head>')
        res.write('<body><h1>Hopfrfjjjjjjjjjjjoooooooooooooooe you are doing great,ok</h1></body>')
        res.write('</html>')
        return res.end()
    }
    // console.log(req);
    // // process.exit();
    // res.setHeader('content-Type','text/html');
    // res.write('<html>')
    // // 
    // res.write('<html>')
    // res.write('<head><title>This is HTML,well it is interesting</title></head>')
    // res.write('<body><h1>Hopfrfjjjjjjjjjjjoooooooooooooooe you are doing great,ok</h1></body>')
    // res.write('</html>')
})
// sudo lsof -i :3000
// sudo kill -9 <PID>

server.listen(5018)