const {categoryStore} = require('../../db');
const getAllCategories = async() => {
    return categoryStore;
}

module.exports = {
    getAllCategories
}