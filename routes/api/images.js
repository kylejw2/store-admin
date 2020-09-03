var express = require('express');
var router = express.Router();
// var jwt = require('jsonwebtoken');

const {
  uploadImage,
  getImages,
  getProductsImages,
  addProductId
} = require('../../data/images');

const {
  createProduct
} = require('../../data/products');

// POST an image with product
router.post('/', async (req, res) => {
  const body = req.body;
  const img = body.images;
  const response = await uploadImage(img);
  body.images = [response._id];
  const data = await createProduct(body);
  res.send(data);
});

// PATCH an image with the product's id
router.patch('/:id', async (req, res) => {
  const productId = req.params.id;
  const images = req.body;
  for (let i = 0; i < images.length; i++) {
    await addProductId(productId, images[i]);
  }
  res.send();
})

// GET the images
router.get('/', async (req, res) => {
  const response = await getImages();
  res.send(response);
})

router.get('/:id', async (req, res) => {
  const productId = req.params.id;
  const response = await getProductsImages(productId);
  res.send(response);
})

module.exports = router;