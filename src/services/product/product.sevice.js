const {ProductDAL}  = require('../../dal')
const _ = require('lodash')
const productFilterService  = require('./product.filter')
const productConvertor  = require('./product.convertor')
const logger = require('../../config/logger')

// Get all products
const getProducts = async(filterCriteria) => {
    let products = await ProductDAL.getAllProducts();
    if(!_.isEmpty(filterCriteria)){
        logger.info(" apply filter on product");
        products = await productFilterService.filteredProducts(products,filterCriteria);
    }
    return productConvertor.transformProducts(products);
}

const transferProductState = async(productId,action) => {
    return await ProductDAL.updateProductStatus(productId,action);
}


// exports
module.exports = {
    getProducts,
    transferProductState
}