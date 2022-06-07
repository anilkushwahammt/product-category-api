const logger = require('../../config/logger')
const {PRODUCT_SEARCH_QUERY_PARAM} = require('../../enum/product.enum')

const filteredProducts = async(products,filterCriteria) => {
    const filteredProduct = products.filter(product => {
    try{
        let isValid = true;
        for (key in filterCriteria) {
            if(key == PRODUCT_SEARCH_QUERY_PARAM.STATUS_CODE){
                isValid = isValid && product.state.getStatusCode() == filterCriteria[key];
            }else{
                isValid = isValid && product[key] == filterCriteria[key];
            }
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
