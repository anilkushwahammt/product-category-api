const { categoryQuerySchema } = require('./category.schema')
const { productQuerySchema,productTransferSchema } = require('./product.schema')

// All book service related method that you want to be available. It help us in autoimport
module.exports = {
    categoryQuerySchema,
    productQuerySchema,
    productTransferSchema
} 