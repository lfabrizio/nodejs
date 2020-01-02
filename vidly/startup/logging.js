module.exports =  function () {
    Joi.objectId = require('joi-objectedid')(Joi);
}