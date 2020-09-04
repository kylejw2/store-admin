// Import Mongo connection packages
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const {ObjectId} = require('mongodb');

// Setup database object
const url = process.env.DB_URL
const db_name = process.env.DB_NAME;
const col_name = process.env.COL2_NAME;
const options = {
    useUnifiedTopology: true
}

// Create a product
const createProduct = (product) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.insertOne(product, (err, result) => {
                assert.equal(err, null);
                resolve(result.ops[0]);
                client.close();
            })
        })
    });
    return iou;
} 

// Read products
const readProducts = () => {
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

// Change status
const changeStatus = (id, bool) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.findOneAndUpdate(
                {_id: new ObjectId(id)},
                {$set: {status: bool.bool}},
                (err, result) => {
                    assert.equal(err, null);
                    resolve(result.value);
                    client.close();
                }
            );
        });
    });
    return iou;
}

// Update product
const replaceProduct = (id, product) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.findOneAndReplace(
                {_id: new ObjectId(id)},
                product,
                (err, result) => {
                    assert.equal(err, null);
                    resolve(result.value);
                    client.close();
                }
            );
        });
    });
    return iou;
}

// Delete product
const deleteProduct = (id) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.findOneAndDelete({_id: new ObjectId(id)}, (err, result) => {
                assert.equal(err, null);
                resolve(result.value);
                client.close();
            });
        });
    });
    return iou;
}

module.exports = {
    createProduct,
    readProducts,
    changeStatus,
    replaceProduct,
    deleteProduct
}