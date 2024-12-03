const http=require('http');
const server=http.createServer((req,res) => {
    // console.log(req);
    // process.exit();
    res.setHeader('content-Type','text/html');
    res.write('<html>')
    // res.write('<html>')
    res.write('<head><title>This is HTML,well it is interesting</title></head>')
    res.write('<body><h1>Hope you are doing great</h1></body>')
    res.write('</html>')
})
// sudo lsof -i :3000
// sudo kill -9 <PID>

server.listen(4000,'localhost',()=>{
    console.log('listing at port 4000');
})