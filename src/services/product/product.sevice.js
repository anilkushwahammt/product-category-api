const {ProductDAL}  = require('../../dal')
const _ = require('lodash')
const productFilterService  = require('./product.filter')
const productConvertor  = require('./product.convertor')
// Get all products
const getProducts = async(filterCriteria) => {
    const products = await ProductDAL.getAllProducts();
    console.log("Product service called");
    if(!_.isEmpty(filterCriteria)){
        return productConvertor.transformProducts(productFilterService.filteredProducts(products,filterCriteria));
    }
    return productConvertor.transformProducts(products);
}

const transferProductState = async(productId,action) => {
    await ProductDAL.updateProductStatus(productId,action);
}


// exports
module.exports = {
    getProducts,
    transferProductState
}