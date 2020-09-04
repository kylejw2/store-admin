var express = require('express');
var router = express.Router();

// The create product function is in the images.js file of this folder
const {
  readProducts,
  changeStatus,
  replaceProduct
} = require('../../data/products');

// GET the products
router.get('/', async (req, res) => {
    const response = await readProducts();
    res.send(response);
})

// PATCH a product, changes the status
router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const response = await changeStatus(id, body);
  res.send(response);
}) 

// UPDATE (PUT) an existing product
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const response = await replaceProduct(id, body);
  res.send(response);
})

module.exports = router;