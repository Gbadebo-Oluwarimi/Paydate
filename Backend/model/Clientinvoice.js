const mongoose = require('mongoose')

const ClientinvoiceSchema = new mongoose.Schema({
    invoice_description:{
        type:String,
    },
     exp_date:{
        type:Date,
        required:true,
        unique:true
    },
    start_date:{
        type:Date,
        unique:true
    },
    status:{
        type: String,
        enum: ['Paid', 'Pending'],
        default: 'Pending',
    },
    updated:{
        type:String,
        enum:['No', 'Yes'],
        default:'No'
    },
    Clientname:{
        type:String,
        
    },
    UserClient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Userclient',
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }
})

module.exports = mongoose.model('Clientinvoice', ClientinvoiceSchema);