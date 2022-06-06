const {ProductDAL}  = require('../../dal')
const _ = require('lodash')
const productFilterService  = require('./product.filter')
// Get all products
const getProducts = async(filterCriteria) => {
    const products = await ProductDAL.getAllProducts();
    console.log("Product service called");
    if(!_.isEmpty(filterCriteria)){
        return productFilterService.filteredProducts(products,filterCriteria)
    }
    return products;
}

const transferProductState = async(productId,newStatus) => {
    await ProductDAL.updateProductStatus(productId,newStatus);
}


// exports
module.exports = {
    getProducts,
    transferProductState
}