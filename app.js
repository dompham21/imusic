const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express()


//Init mongodb

mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

mongoose.connection.on('connected',()=>{
    console.log('MongoDb is connecting!')
})

mongoose.connection.on('error',(err)=>{
    console.log('MongoDb connection error!',err)
})

//Config bodyParser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}...`);
})