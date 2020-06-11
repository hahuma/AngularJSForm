const express = require('express')
const DBInformationController = require('./Controllers/DBInformationController')
const RegisterController = require('./Controllers/RegisterController')

const { registerCelebrateConfig } = require('./RequestSchemas/celebrateSchemas')

const dbInformationController = new DBInformationController()
const registerController = new RegisterController()

const routes = express.Router()



routes.post('/cadastro', registerCelebrateConfig, registerController.create)

routes.get('/listarDados', dbInformationController.index)

module.exports = routes;