const express= require('express');
require('dotenv').config();
//when the server loads its reading .env file -> grabbing the key -> putting it to html
const renderIndex=require('./index.js')

const app=express();
app.use(express.static('public'));

//serve index.html
app.get('/',function(req,res){
    res.send(renderIndex(process.env.MY_KEY))
});

app.listen(3000,function(){
    console.log('listening')
});
