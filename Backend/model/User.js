const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        default:null
    },
    encrypted_password:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    token:{
        type:String
    }

})

module.exports = mongoose.model('User', UserSchema);