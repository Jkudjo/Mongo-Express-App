var express = require("express");
var router = express.Router();
const mongoose = require('mongoose');

var ProductModel = require("../models/product.model");


/*G Product Listing*/
router.get("/",function(req,res,next){
  res.send("This is a product")
})


//  cRUD POST METHOD -- add to database
router.post('/add', function(req, res, next) {

  let newProduct = new ProductModel({

    produtName: "Cocoa",
    sellingPrice: 23,
    costPrice: 20,
    total:1,
    profit:13.1,
  
    
 
  })

  newProduct.save(function(err, newProduct){
    if (err)
    res.send(err);
    else
    res.send({status: 200, message: " product added Successfully", productObj:newProduct})
    
  });
  

  
});

// End of Get Method 


/*Fetches data from Mongo Db Collection*/
router.get('/list', function(req, res, next) {
  
  ProductModel.find(function(err, response){
    if (err)
    res.send(err);
    else
    res.send({status: 200, students:response});
    
  });
  

  
})


module.exports = router;