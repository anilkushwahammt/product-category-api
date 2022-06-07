const {ProductService}  = require('../../services')
const logger = require('../../config/logger')
const {validateProductQueryParameter,validateProductTransferParameter} = require('../../validators/product.validation')
/**
 * route: product/
 * target: to get all categories based on given Query Parameters
 */
 const getProducts = async(req, res, next) => {
    try {
        logger.info("Get Product Called ");
        const filterCriteria = req.query;
        await validateProductQueryParameter(filterCriteria);
        const productList = await ProductService.getProducts(filterCriteria);
        res.send(productList);
    } catch (err) {
        logger.error("Get Product Failed ",err);
        next(err);
    }
}

const transferProductState = async(req, res, next) => {
    try {
        const productId = req.body.product_id;
        const action = req.body.action;
        logger.info(`Transfer Product State Called ${productId}`);
        await validateProductTransferParameter(req.body);
        const message = await ProductService.transferProductState(productId,action);
        res.send(message);
    } catch (err) {
        logger.error("Transfer Product state Failed ",err);
        next(err);
    }
}

// exports
module.exports = {
    getProducts,
    transferProductState
 }