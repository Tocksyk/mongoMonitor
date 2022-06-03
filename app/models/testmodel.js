let mongoose = require('mongoose');

let dburl = `mongodb://127.0.0.1/`;

mongoose.connect(dburl,{dbName:'orders', useUnifiedTopology: true, useNewUrlParser: true});

let testSchema = new mongoose.Schema({},{strict:false});

let testModel = mongoose.model('orders',testSchema,'orders');

testModel.find({}).limit(2).then(data=>{
  console.log(data);
})

// testModel.findOneAndUpdate({'orderId':28475},{source:'Apple'}).preferred('secondary').project()