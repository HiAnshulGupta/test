const express=require('express');
const app=express();


app.get("/",function(req,resp){
    resp.sendFile("/public/login.html",{root:__dirname});
})

app.get("/submit",function(req,resp){
    resp.sendFile("/public/Signup.html",{root:__dirname})
})

app.listen(6969);
console.log("server running on 4000");

