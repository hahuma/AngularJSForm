const mongoose = require('mongoose')

const CadastroSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    age: Number,
})

const Cadastro = mongoose.model('Cadastro', CadastroSchema)

module.exports = Cadastro;