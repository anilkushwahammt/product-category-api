const {CategoryService}  = require('../../services')
const logger = require('../../config/logger')
const {validateCategoryQueryParameter} = require('../../validators/category.validation')

/**
 * route: category/
 * target: to get all categories based on given Query Parameters
 */
 const getCategories = async(req, res, next) => {
    try {
        logger.info("Get Categories Called ");
        const filterCriteria = req.query;
        await validateCategoryQueryParameter(filterCriteria);
        const categoryList = await CategoryService.getCategories(filterCriteria);
        res.send(categoryList);
    } catch (err) {
        logger.error("Get Categories Failed ",err);
        next(err);
    }
}

// exports
module.exports = {
    getCategories
 }