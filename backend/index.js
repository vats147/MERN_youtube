const express=require('express');
const app=express();

app.get('/',(req,res)=>{
       res.send("App is working");
});

app.listen(3000);