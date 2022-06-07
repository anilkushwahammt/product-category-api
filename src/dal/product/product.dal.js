const {productStore} = require('../../db');
const getAllProducts = async() => {
    return productStore;
}
const updateProductStatus = async(productId,action) => {
    let message = "";
    for(index in productStore){
        if(productId == productStore[index].product_id){
            productStore[index].apply(action);
            message = `product with id : ${productId} : moved to status  -> ${productStore[index].state.getStatusCode()}`;
            break;
        }
    } 
    return message;
}

module.exports = {
    getAllProducts,
    updateProductStatus
}