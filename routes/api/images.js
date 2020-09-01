var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

const {
  uploadImage
} = require('../../data/images');

// POST an image
router.post('/', async (req, res) => {
    const body = req.body;
    const response = uploadImage(body);
    res.send(response);
});

module.exports = router;