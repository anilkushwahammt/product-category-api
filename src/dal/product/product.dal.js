const {productStore} = require('../../db');
const getAllProducts = async() => {
    return productStore;
}
const updateProductStatus = async(productId,action) => {
    for(index in productStore){
        if(productId == productStore[index].product_id){
            productStore[index].apply(action);
            break;
        }
    } 
}

module.exports = {
    getAllProducts,
    updateProductStatus
}