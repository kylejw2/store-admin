var express = require('express');
var router = express.Router();

// The create product function is in the images.js file of this folder
const {
  readProducts
} = require('../../data/products');

// GET the products
router.get('/', async (req, res) => {
    const response = await readProducts();
    res.send(response);
})

module.exports = router;