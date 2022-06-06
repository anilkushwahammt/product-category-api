const {productStore} = require('../../db');
const getAllProducts = async() => {
    return productStore;
}
const updateProductStatus = async(productId,newStatus) => {
    for(index in productStore){
        if(productId == productStore[index].product_id){
            productStore[index].status_code = newStatus;
            break;
        }
    } 
}

module.exports = {
    getAllProducts,
    updateProductStatus
}