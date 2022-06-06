const {ProductDAL}  = require('../../dal')
// Get all products
const getProducts = async(filterCriteria) => {
    const result = await ProductDAL.getAllProducts();
    console.log("Product service called");
    return result;
}


// exports
module.exports = {
    getProducts
}