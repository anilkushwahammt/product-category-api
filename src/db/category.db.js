const {Category} = require('../models')
/* all products stored inside an array */

const categoryStore=[
    new Category(1,'root',-1),
    new Category(2,'stationery',1),
    new Category(3,'mobile',1),
    new Category(4,'iphone',3),
    new Category(5,'oneplus',3)
];

module.exports = {
    categoryStore
}