const mongoose = require('mongoose')
require('dotenv').config()

const connect = async () => {
    try {
         await mongoose.connect(process.env.MONGOBD_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log('Banco MongoDB conectado (:')
    } catch (error){ 
        console.log('Erro: ', error.message)
    }
}

module.exports = { connect }