const express=require('express');
const app=express();
// now listen the server
app.listen(5020);
//now make the server
app.get('/',(req,res)=>{
    res.send('<p>home page here</p>')
})
app.get('/user',(req,res)=>{
    res.send('<p>this is the user login page</p>')
})