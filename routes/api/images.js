var express = require('express');
var router = express.Router();
// var jwt = require('jsonwebtoken');

const {
  uploadImage,
  getImages,
  getProductsImages,
  addProductId,
  deleteImages
} = require('../../data/images');

const {
  createProduct
} = require('../../data/products');
const { response } = require('express');

// POST an image with product
router.post('/', async (req, res) => {
  const body = req.body;
  const imgs = body.images;
  const responses = [];
  for (let i = 0; i < imgs.length; i++) {
    const response = await uploadImage(imgs[i]);
    await responses.push(response);
  }
  const ids = responses.map(res => res._id);
  body.images = [...ids];
  const data = await createProduct(body);
  res.send(data);
});

// PATCH an image with the product's id
router.patch('/:id', async (req, res) => {
  const productId = req.params.id;
  const images = req.body;
  const responses = [];
  for (let i = 0; i < images.length; i++) {
    const data = await addProductId(productId, images[i]);
    responses.push(data);
  }
  res.send(responses);
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

router.delete('/', async (req, res) => {
  const body = req.body;
  const responses = [];
  for (let i = 0; i < body.length; i++) {
    const response = await deleteImages(body[i]);
    responses.push(response);
  }
  res.send(responses);
})

router.post('/:id', async (req, res) => {
  const body = req.body;
  const responses = [];
  for (let i = 0; i < body.length; i++) {
    const response = await uploadImage(body[i]);
    await responses.push(response._id);
  }
  res.send(responses);
})

module.exports = router;