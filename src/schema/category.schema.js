const Joi = require('@hapi/joi')

const categoryQuerySchema = Joi.object().keys({ 
    category_id: Joi.number().integer().min(1),
    category_name: Joi.string(),
    parent_id: Joi.number().integer().min(1)
  }); 

module.exports = {
    categoryQuerySchema
}