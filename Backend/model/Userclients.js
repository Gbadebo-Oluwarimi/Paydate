const mongoose = require('mongoose')

const UserclientsSchema = new mongoose.Schema({
    Clientusername:{
        type:String,
        default:null
    },
     Clientemail:{
        type:String,
        required:true,
        unique:true
    },
    Clientmobile:{
        type:String,
        unique:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }
})

module.exports = mongoose.model('Userclients', UserclientsSchema);