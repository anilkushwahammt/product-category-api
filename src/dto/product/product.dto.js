class ProductDTO{
    constructor(product){
        this.product_id = product.product_id;
        this.name = product.name;
        this.price = product.price;
        this.category_id = product.category_id;
        this.images = product.images;
        this.status_code = product.state.getStatusCode();
    }
}

module.exports = {
    ProductDTO
}