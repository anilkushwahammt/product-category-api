const Joi = require('@hapi/joi')

const productQuerySchema = Joi.object().keys({ 
    product_id: Joi.number().integer().min(1),
    name: Joi.string(),
    category_id: Joi.number().integer().min(1),
    price: Joi.number().integer().min(1),
    status_code: Joi.string()
  }); 

const productTransferSchema = Joi.object().keys({ 
    product_id: Joi.number().integer().min(1).required(),
    action: Joi.string().required()
}); 

module.exports = {
    productQuerySchema,
    productTransferSchema
}