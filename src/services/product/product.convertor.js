const {ProductDTO} = require('../../dto/product/product.dto')
const transformProducts = async(products) => {
    const transformedProducts = products.map(product => {
        return new ProductDTO(product);
     });
    return transformedProducts;
}
// exports
module.exports = {
    transformProducts
}
