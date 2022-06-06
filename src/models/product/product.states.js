const {PRODUCT_ACTION:ACT} = require('../../enum/product.action')

class State {
    apply(action) {
      throw new Error("This method must be overwritten!");
    }

    getStatusCode() {
        throw new Error("This method must be overwritten!");
    }
}

class InactiveState extends State {
    constructor(product) {
      super();
      this._product = product;
    }

    apply(action) {
        switch (action) {
            case ACT.LISTING_STARTED:
                this._product.setState(this._product.getDraftState());
                break;
            default:
                throw new Error(`Action -> ${action} not allowed for status code -> ${this._product.state.getStatusCode()}`);
        }
    }

    getStatusCode() {
        return "INACTIVE";
    }
}

class DraftState extends State {
    constructor(product) {
      super();
      this._product = product;
    }

    apply(action) {
        switch (action) {
            case ACT.LISTING_SUCCESSFUL:
                this._product.setState(this._product.getAvailableState());
                break;
            case ACT.LISTING_DELETED:
                this._product.setState(this._product.getDeletedDraft());
                break;
            default:
                throw new Error(`Action -> ${action} not allowed for status code -> ${this._product.state.getStatusCode()}`);
        }
    }

    getStatusCode() {
        return "DRAFT";
    }
}

class DeletedDraftState extends State {
    constructor(product) {
      super();
      this._product = product;
    }

    apply(action) {
        switch (action) {
            case ACT.INACTIVE:
                this._product.setState(this._product.getInactiveState);
                break;
            default:
                throw new Error(`Action -> ${action} not allowed for status code -> ${this._product.state.getStatusCode()}`);
        }
    }

    getStatusCode() {
        return "DELETED_DRAFT";
    }
}

class AvailableState extends State {
    constructor(product) {
      super();
      this._product = product;
    }

    apply(action) {
        switch (action) {
            case ACT.PROCEED_PAYMENT:
                this._product.setState(this._product.getReservedState());
                break;
            case ACT.DELETE:
                this._product.setState(this._product.getDeletedState());
                break;
            case ACT.EXCEEDED_DURATION:
                this._product.setState(this._product.getExpiredState());
                break;
            default:
                throw new Error(`Action -> ${action} not allowed for status code -> ${this._product.state.getStatusCode()}`);
        }
    }

    getStatusCode() {
        return "AVAILABLE";
    }
}

class ReturnedState extends State {
    constructor(product) {
      super();
      this._product = product;
    }

    apply(action) {
        switch (action) {
            case ACT.RE_PUBLISH_ITEM:
                this._product.setState(this._product.getDraftState());
                break;
            case ACT.DELETE:
                this._product.setState(this._product.getDeletedState());
                break;
            default:
                throw new Error(`Action -> ${action} not allowed for status code -> ${this._product.state.getStatusCode()}`);
        }
    }

    getStatusCode() {
        return "RETURNED";
    }
}

class ReservedState extends State {
    constructor(product) {
      super();
      this._product = product;
    }

    apply(action) {
        switch (action) {
            case ACT.FAIL_PAYMENT:
                this._product.setState(this._product.getAvailableState());
                break;
            case ACT.PAYMENT_SUCCESSFUL:
                this._product.setState(this._product.getSoldState());
                break;
            default:
                throw new Error(`Action -> ${action} not allowed for status code -> ${this._product.state.getStatusCode()}`);
        }
    }

    getStatusCode() {
        return "RESERVED";
    }
}

class DeletedState extends State {
    constructor(product) {
      super();
      this._product = product;
    }

    apply(action) {
        switch (action) {
            case ACT.INACTIVE:
                this._product.setState(this._product.getInactiveState);
                break;
            default:
                throw new Error(`Action -> ${action} not allowed for status code -> ${this._product.state.getStatusCode()}`);
        }
    }

    getStatusCode() {
        return "DELETED";
    }
}

class ExpiredState extends State {
    constructor(product) {
      super();
      this._product = product;
    }

    apply(action) {
        switch (action) {
            case ACT.RENEW_LISTING:
                this._product.setState(this._product.getAvailableState());
                break;
            case ACT.INACTIVE:
                this._product.setState(this._product.getInactiveState);
                break;
            default:
                throw new Error(`Action -> ${action} not allowed for status code -> ${this._product.state.getStatusCode()}`);
        }
    }

    getStatusCode() {
        return "EXPIRED";
    }
}

class SoldState extends State {
    constructor(product) {
      super();
      this._product = product;
    }

    apply(action) {
        switch (action) {
            case ACT.DISPUTE_ACCEPT:
                this._product.setState(this._product.getReturnedState());
                break;
            case ACT.INACTIVE:
                this._product.setState(this._product.getInactiveState());
                break;
            default:
                throw new Error(`Action -> ${action} not allowed for status code -> ${this._product.state.getStatusCode()}`);
        }
    }

    getStatusCode() {
        return "SOLD";
    }
}

module.exports = {
    InactiveState,
    DraftState,
    ReturnedState,
    AvailableState,
    DeletedDraftState,
    ReservedState,
    DeletedState,
    ExpiredState,
    SoldState
}