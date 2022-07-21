var express = require('express');
var router = express.Router();
const mongoose =require("mongoose");
const StudentModel = require('../models/student.model');


/* GET students listing. */
router.get('/', function(req, res, next) {
  res.send('Students data here');
  
});

/* cRUD GET METHOD
router.get('/add', function(req, res, next) {

  let newStudent = new StudentModel({
    
      studentId: 100,
      firstName: "philip",
      LastName: "kumah",
      age:28,
      dob:"29-april",
      department: "Dev-ops"

  })

  newStudent.save(function(err, newStudent){
    if (err)
    res.send(err);
    else
    res.send({status: 200, message: " User added Successfully", studentObj:newStudent})
    
  });
  

  
}); End of Get Method*/ 


// =>> CRUD -POST METHOD - dynamic
router.post('/add', function(req, res, next) {

  

  let newStudent = new StudentModel({
    
    /*'req.body' because its sent in 
      the body raw format in JSON*/

     studentId: req.body.firstname,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age:req.body.age,
      dob:req.body.dob,
      

  })

  newStudent.save(function(err, newStudent){
    if (err)
    res.send(err);
    else
    res.send({status: 200, message: " User added Successfully", studentObj:newStudent})
    
  });
  


}); 


/*Fetches data from Mongo Db Collection*/
router.get('/list', function(req, res, next) {
  
  StudentModel.find(function(err, response){
    if (err)
    res.send(err);
    else
    res.send({status: 200, students:response});
    
  });
  

  
})




module.exports = router;
