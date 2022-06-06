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
        const newStatus = req.body.statusCode;
        const productId = req.body.productId;
        await ProductService.transferProductState(productId,newStatus);
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