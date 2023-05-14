const express = require('express');
const app = express();
const port = 5173;

app.listen(port, ()=>{
    console.log("Server is running on port: " + port);
})

app.get('/project', (req,res)=>{
    //Your Logic goes here for Calculating BPM and it will send to browser when request will come from the browser 
    res.send("Meet Bro Your Logic will appear here");
})

