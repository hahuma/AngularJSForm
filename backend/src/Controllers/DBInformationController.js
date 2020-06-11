const Cadastro = require('../Models/Cadastro')

class ListDBInformation {
    async index(req, res) {
        const data = await Cadastro.find()

        res.json(data)
    }
}

module.exports = ListDBInformation;