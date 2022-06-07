const validator = require('./index')
const _ = require('lodash')
const Joi = require('@hapi/joi').extend(require('@joi/date'));
const joiSchemaRepo  = require('../schema')
const {CATEGORY_SEARCH_QUERY_PARAM} = require('../enum/category.enum')

 const validateCategoryQueryParameter = async (filterCriteria) => {
    /**
     * Validate Allowed category query parameters
     */
    const allowedCategoryQueryParmeters = Object.values(CATEGORY_SEARCH_QUERY_PARAM);
    for (key in filterCriteria) {
        validator.badRequest(!allowedCategoryQueryParmeters.includes(key), `${key} is invalid query parameter`)
    }
    
    /**
     * validate Query schema
     */
    const schemaValidationResult = joiSchemaRepo.categoryQuerySchema.validate(filterCriteria);
    validator.badRequest(schemaValidationResult && schemaValidationResult.error, _.get(schemaValidationResult.error, 'message'))
    return true
  }

  module.exports = {
    validateCategoryQueryParameter
  }