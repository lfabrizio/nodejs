const Joi = require('joi');
module.exports = function() {
    Joi.objectId = require('joi-objectedid')(Joi);
}