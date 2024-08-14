const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();
app.use(express.json())


const PORT = process.env.PORT  ;
mongoose.connect(process.env.DB_URI)
.then(()=>  console.log('DataBase connected !!'))
.catch((err)=> console.log('err', err))


app.use('/user',require('./Routes/user.routes'))



app.listen(PORT,(err)=>{
    err ? console.log('err', err) : console.log(`server is running on port : ${PORT}`)
})