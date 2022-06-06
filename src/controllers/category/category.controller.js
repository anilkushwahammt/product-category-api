const categoryService  = require('../../services/category')
/**
 * route: category/
 * target: to get all categories based on given Query Parameters
 */
 const getCategories = async(req, res, next) => {
    try {
        const filterCriteria = req.query;
        const categoryList = await categoryService.getCategories(filterCriteria);
        res.send(categoryList);
    } catch (err) {
        next(err);
    }
}

// exports
module.exports = {
    getCategories
 }