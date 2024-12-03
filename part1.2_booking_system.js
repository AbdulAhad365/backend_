const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    // console.log(req);
    console.log('LIBRARY BOOKING SYSTEM');
    console.log(req.url);
    let path='/home/abdul/Music/node/part1/HTML FILES 2/'
    switch(req.url){
        case '/':
            path+='index.html'
            break;
        case '/reserver':
            path+='reserve.html'
            break;
        case '/return':
            path+='return.html'
            break;
        case '/get-book':
            path+='getbook.html'
            break;
        case '/getbook':
            path+='getbook.html'
            break;
        // default:
        //     path='/home/abdul/Music/node/part1/HTML FILES/404.html'
        //     break
    }
    //now read the html
    res.setHeader('Content-Type','text/html')
    fs.readFile(path,(err,dat)=>{
        if (err){
            // print(err)
            console.log(err);
            res.end()
        }
        else{
            // print(dat)
            
            res.end(dat)
        }
    })
    

})
// listen
server.listen(5000,'localhost',()=>{
    console.log('THE SERVER WILL OPEN AT THE PORT NUMBER 4000');
})

