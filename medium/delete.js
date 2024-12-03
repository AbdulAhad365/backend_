const fs=require('fs')
if (fs.existsSync('./medium/deleteme.js')){
    // console.log('ok');
    fs.unlink('./medium/deleteme.js',(err)=>{
        if (err){
            console.log('error is there',err);
        }
        console.log('file deleted');
    })
}
else{
    console.log('ww');
}
//https://github.com/AbdulAhad365/backend_.git