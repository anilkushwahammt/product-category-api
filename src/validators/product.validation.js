const validator = require('./index')
const _ = require('lodash')
const Joi = require('@hapi/joi').extend(require('@joi/date'));
const joiSchemaRepo  = require('../schema')
const {PRODUCT_SEARCH_QUERY_PARAM,PRODUCT_TRANSFER_PARAM,PRODUCT_ACTION} = require('../enum/product.enum')

 const validateProductQueryParameter = async (filterCriteria) => {
    /**
     * Validate Allowed product query parameters
     */
    const allowedProductQueryParmeters = 
    Object.values(PRODUCT_SEARCH_QUERY_PARAM);
    for (key in filterCriteria) {
        validator.badRequest(!allowedProductQueryParmeters.includes(key), `${key} is invalid query parameter`)
    }
    
    /**
     * validate Query schema
     */
    const schemaValidationResult = joiSchemaRepo.productQuerySchema.validate(filterCriteria);
    validator.badRequest(schemaValidationResult && schemaValidationResult.error, _.get(schemaValidationResult.error, 'message'))
    return true
  }


  const validateProductTransferParameter = async (productTransfer) => {
    /**
     * Validate Allowed product transfer parameters
     */
    const allowedProductTransferParmeters = Object.values(PRODUCT_TRANSFER_PARAM);
    for (key in productTransfer) {
        validator.badRequest(!allowedProductTransferParmeters.includes(key), `${key} is invalid query parameter`)
        if(key == PRODUCT_TRANSFER_PARAM.ACTION){
            const allowedProductActions = Object.values(PRODUCT_ACTION);
            validator.badRequest(!allowedProductActions.includes(productTransfer[key]), `${productTransfer[key]}  ACTION is invalid`)
        }
    }
    
    /**
     * validate transfer schema
     */
    const schemaValidationResult = joiSchemaRepo.productTransferSchema.validate(productTransfer);
    validator.badRequest(schemaValidationResult && schemaValidationResult.error, _.get(schemaValidationResult.error, 'message'))


    return true
  }


  module.exports = {
    validateProductQueryParameter,
    validateProductTransferParameter
  }