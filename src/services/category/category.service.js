const {CategoryDAL}  = require('../../dal')
const categoryFilterService  = require('./category.filter')
const _ = require('lodash')
const logger = require('../../config/logger')

// Get all categories
const getCategories = async(filterCriteria) => {
    const categoryList =  await CategoryDAL.getAllCategories();
    if(!_.isEmpty(filterCriteria)){
        logger.info(" apply filter on category List");
        return categoryFilterService.filteredCategoryList(categoryList,filterCriteria)
    }
    return categoryList;
}


// exports
module.exports = {
    getCategories
}