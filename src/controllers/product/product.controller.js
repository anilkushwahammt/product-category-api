const productService  = require('../../services/product')
/**
 * route: product/
 * target: to get all categories based on given Query Parameters
 */
 const getProducts = async(req, res, next) => {
    try {
        const filterCriteria = req.query;
        const productList = await productService.getProducts(filterCriteria);
        res.send(productList);
    } catch (err) {
        next(err);
    }
}

// exports
module.exports = {
    getProducts
 }