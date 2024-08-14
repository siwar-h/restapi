const mongoose = require('mongoose')

const Schema = mongoose.Schema ;

const userSchema = new Schema({
    firstname:  String, 
    lastname:  String, 
    age : Number,
    email:  String
})


const User = mongoose.model('users',userSchema)

module.exports = User