const {CategoryDAL}  = require('../../dal')

// Get all categories
const getCategories = async(filterCriteria) => {
    const result =  await CategoryDAL.getAllCategories();
    console.log("Category service called");
    return result;
}


// exports
module.exports = {
    getCategories
}