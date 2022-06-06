const {Product} = require('../models')
/* all products stored inside an array */
const productStore=[
    new Product(1,'Classmate Spiral',250,1),
    new Product(2,'Think Like a Monk',473,2,),
    new Product(3,'HP Envy Core i5 10th Gen',60000,3),
    new Product(4,'IPhone 11 Pro Max',110000,4),
    new Product(5,'OnePlus 6T',35000,4),
    new Product(6,"Allen Solly Men's Polo",1020,5),
    new Product(7,"Levi's Men Slim Fit Stretchable Jeans",3399,5)
];

module.exports = {
    productStore
}