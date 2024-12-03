const fs=require('fs');
const { dlopen } = require('process');
const { CLIENT_RENEG_LIMIT } = require('tls');
// reading a file
fs.readFile('/home/abdul/Music/node/part1/medium/read_file.txt',(err,data)=>{
    if (err){
       console.log(err); 
    }
    else{
        console.log(data.toString());
    }
})

console.log('hi i am executing on 2nd');