const mongoose = require("mongoose");

var productSchema = mongoose.Schema({

  
  produtName: String,
  sellingPrice: Number,
  costPrice: Number,
  total:Number,
  profit:Number,
  

});


var ProductModel = mongoose.model("Product",productSchema);
  

module.exports = ProductModel;
