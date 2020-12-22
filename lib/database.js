const mongoose = require('mongoose');
require('dotenv').config();

exports.init = function () {
    return new Promise((resolve, reject) => {
      mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
        });
    
        mongoose.connection.on('connected',()=>{
            console.log('MongoDb is connecting!')
            resolve();
        })
        
        mongoose.connection.on('error',(err)=>{
            console.log('MongoDb connection error!',err)
            reject(err);
        })
    });
};