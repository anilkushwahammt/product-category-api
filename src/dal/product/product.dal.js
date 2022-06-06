const {productStore} = require('../../db');
const getAllProducts = async() => {
    return productStore;
}

module.exports = {
    getAllProducts
}