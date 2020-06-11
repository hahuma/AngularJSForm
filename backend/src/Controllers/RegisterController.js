const Cadastro = require('../Models/Cadastro')

class RegisterDataInfo {
    async create(req, res){
        const { name, phoneNumber, age } = req.body;

        const user = await Cadastro
                    .findOne()
                    .where('phoneNumber', phoneNumber)

        if(user){

            return res.status(400).json({error:"Usúario já cadastrado com esse número!"})

        }

        const response = await Cadastro.create({
            name,
            phoneNumber,
            age
        })
        return res.json(response)
    }
}

module.exports = RegisterDataInfo;