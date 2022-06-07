const logger = require('../../config/logger')
const filteredProducts = async(products,filterCriteria) => {
    const filteredProduct = products.filter(product => {
    try{
        let isValid = true;
        for (key in filterCriteria) {
            isValid = isValid && product[key] == filterCriteria[key];
        }
        return isValid;
    }catch{
        logger.error(`Error occured while product ${product.product_id}`, err);
    }
  });
  return filteredProduct;
}
// exports
module.exports = {
    filteredProducts
}
