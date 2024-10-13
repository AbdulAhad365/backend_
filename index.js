//envirement for deployment
require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT || 3000 ;
app.get('/',(req,res)=>{
    res.send("hello wordld")
})
app.get('/twitter',(req,res)=>{
    res.send("hello twitter")
})
app.get('/facebook',(req,res)=>{
    res.send("hello facebook")
})
app.get('/login',(req,res)=>{
    res.send("<h1>Login here</h1>")
})
app.listen(port,()=>{
    console.log(`example app listing on port ${process.env.PORT}`);
    // console.log(`example app listing on port ${process.env.PORT}`);

})