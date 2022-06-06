const {CategoryDAL}  = require('../../dal')
const categoryFilterService  = require('./category.filter')
const _ = require('lodash')

// Get all categories
const getCategories = async(filterCriteria) => {
    const categoryList =  await CategoryDAL.getAllCategories();
    console.log("Category service called");
    if(!_.isEmpty(filterCriteria)){
        return categoryFilterService.filteredCategoryList(categoryList,filterCriteria)
    }
    return categoryList;
}


// exports
module.exports = {
    getCategories
}