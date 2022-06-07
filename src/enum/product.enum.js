const PRODUCT_ACTION = Object.freeze({
    LISTING_STARTED: 'listing_started',
    RE_PUBLISH_ITEM: 're_publish_item',
    LISTING_SUCCESSFUL: 'listing_successful',
    LISTING_DELETED: 'listing_deleted',
    FAIL_PAYMENT: 'fail_payment',
    PROCEED_PAYMENT: 'proceed_payment',
    DELETE: 'delete',
    EXCEEDED_DURATION: 'exceeded_duration',
    RENEW_LISTING: 'renew_listing',
    PAYMENT_SUCCESSFUL: 'payment_successful',
    DISPUTE_ACCEPT: 'dispute_accept',
    INACTIVE: 'inactive'
})

const PRODUCT_SEARCH_QUERY_PARAM = Object.freeze({
    PRODUCT_ID: 'product_id',
    NAME: 'name',
    PRICE: 'price',
    CATEGORY_ID: 'category_id',
    STATUS_CODE: 'status_code'
})

const PRODUCT_TRANSFER_PARAM = Object.freeze({
    PRODUCT_ID: 'product_id',
    ACTION: 'action'
})
module.exports = {
    PRODUCT_ACTION,
    PRODUCT_SEARCH_QUERY_PARAM,
    PRODUCT_TRANSFER_PARAM
}
  