let mongoose = require('mongoose');

let dburl = `mongodb://127.0.0.1/`;

mongoose.connect(dburl,{dbName:'products', useUnifiedTopology: true, useNewUrlParser: true});

let productSchema = new mongoose.Schema({},{strict:false});

let productModel = mongoose.model('products',productSchema,'products');

module.exports = productModel
