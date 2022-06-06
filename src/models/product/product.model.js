const productStates = require('./product.states');
class Product{
    constructor(product_id,name,price,category_id,image_url){
        this.product_id = product_id;
        this.name = name;
        this.price = price;
        this.category_id = category_id;
        this.images=[];
        this.state = new productStates.InactiveState(this);
        if(image_url){
            addImage(image_url);
        }
    }

    /* add image to product */
    addImage(image_url){
        this.images.push(image_url);
    }

    setState(state){
        this.state = state;
    }

    apply(action) {
        this.state.apply(action);
    }

    getInactiveState() {
        return new productStates.InactiveState(this);
    }

    getDraftState() {
        return new productStates.DraftState(this);
    }

    getReservedState() {
        return new productStates.ReservedState(this);
    }

    getAvailableState() {
        return new productStates.AvailableState(this);
    }

    getDeletedState() {
        return new productStates.DeletedState(this);
    }
    getDraftState() {
        return new productStates.DraftState(this);
    }
    getExpiredState() {
        return new productStates.ExpiredState(this);
    }
    getSoldState() {
        return new productStates.SoldState(this);
    }
    getReturnedState() {
        return new productStates.ReturnedState(this);
    }
}

module.exports = {
    Product
}