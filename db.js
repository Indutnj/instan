const mongoose = require("mongoose");
require('dotenv').config();

//process.env.MONGO_URI
//console.log(process.env.MONGO_URI);
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI , {useUnifiedTopology: true , useNewUrlParser: true});
//mongodb+srv://root:<password>@cluster0.dwtynnw.mongodb.net/
//mongodb+srv://sathya:sathyapr@cluster0.dkuc0.mongodb.net/sheygram
const connection = mongoose.connection

connection.on('connected' , ()=>{
   console.log('Mongo db connection successfull')
})

connection.on('error' , ()=>{
    //console.log('Mongo db connection error')
})

module.exports = mongoose