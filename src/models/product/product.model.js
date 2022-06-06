class Product{
    constructor(product_id,name,price,category_id,image_url){
        this.product_id = product_id;
        this.name = name;
        this.price = price;
        this.category_id = category_id;
        this.images=[];
        this.status_code = 'DRAFT';
        if(image_url){
            addImage(image_url);
        }
    }

    /* add image to product */
    addImage(image_url){
        this.images.push(image_url);
    }
}

module.exports = {
    Product
}
