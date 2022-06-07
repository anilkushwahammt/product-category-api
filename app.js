// imports
const express = require('express');
const categoryRouter = require('./src/routes/category.route');
const productRouter = require('./src/routes/product.route');
const bodyParser = require('body-parser')


// constants
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// routes
app.get('/', (req, res) => {
    res.send('product category  api is up and running...');
});

app.use('/product', productRouter);
app.use('/category', categoryRouter);



// handle errors
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message || 'Internal server error'
        }
    });
});

// start the server
app.listen(8000, () => {
    console.log(`server running at port 8000...`);
});

module.exports = { app }