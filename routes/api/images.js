var express = require('express');
var router = express.Router();
// var jwt = require('jsonwebtoken');

const {
  uploadImage,
  getImages
} = require('../../data/images');

// POST an image
router.post('/', async (req, res) => {
    const body = req.body;
    const response = await uploadImage(body);
    res.send(response);
});

// GET the images
router.get('/', async (req, res) => {
    const response = await getImages();
    res.send(response);
})

module.exports = router;