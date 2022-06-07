const {CategoryService}  = require('../../services')
const logger = require('../../config/logger')
/**
 * route: category/
 * target: to get all categories based on given Query Parameters
 */
 const getCategories = async(req, res, next) => {
    try {
        logger.info("Get Categories Called ");
        const filterCriteria = req.query;
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