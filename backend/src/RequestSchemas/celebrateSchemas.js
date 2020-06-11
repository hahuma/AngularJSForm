const { Segments, Joi, celebrate } = require('celebrate')

const registerCelebrateConfig = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        phoneNumber: Joi.string().required().min(13).max(14).regex(/\(\d{2}\)\d{4,5}\-\d{4}/),
        age: Joi.number().integer().required().min(18).max(100)
    })
})

module.exports = {
    registerCelebrateConfig,
}