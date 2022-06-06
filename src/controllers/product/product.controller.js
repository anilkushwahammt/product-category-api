const {ProductService}  = require('../../services')
/**
 * route: product/
 * target: to get all categories based on given Query Parameters
 */
 const getProducts = async(req, res, next) => {
    try {
        const filterCriteria = req.query;
        const productList = await ProductService.getProducts(filterCriteria);
        res.send(productList);
    } catch (err) {
        next(err);
    }
}

const transferProductState = async(req, res, next) => {
    try {
        const productId = req.body.productId;
        const action = req.body.action;
        await ProductService.transferProductState(productId,action);
        res.send('Product updated successfully');
    } catch (err) {
        next(err);
    }
}

// exports
module.exports = {
    getProducts,
    transferProductState
 }