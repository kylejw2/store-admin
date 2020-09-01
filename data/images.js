// Import Mongo connection packages
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const {ObjectId} = require('mongodb');

// Setup database object
const url = process.env.DB_URL
const db_name = process.env.DB_NAME;
const col_name = process.env.COL_NAME;
// const col2_name = process.env.COL2_NAME;
const options = {
    useUnifiedTopology: true
}

// Setup encryption process
const bcrypt = require('bcrypt');

// Upload an image
const uploadImage = (img) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.insertOne(img, (err, result) => {
                assert.equal(err, null);
                resolve(result);
                client.close();
            });
        });
    });
    return iou;
}

// Get the images
const getImages = () => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.find({}).toArray((err, docs) => {
                assert.equal(err, null);
                resolve(docs);
                client.close();
            });
        });
    });
    return iou;
}

module.exports = {
    uploadImage,
    getImages
}