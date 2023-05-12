const mongoose = require('mongoose')


const connectdb = async() => {
    // console.log(process.env.MONGO_URI)
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true})
        console.log(`Mongodb connected ay ${connect.connection.host}`.green.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

module.exports = {
    connectdb
}