var express = require('express');
var router = express.Router();
const mongoose =require("mongoose");
const StudentModel = require('../models/student.model');


/* GET students listing. */
router.get('/', function(req, res, next) {
  res.send('Students data here');
  
});

/*cRUD GET METHOD

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
  

  
}); */

//CRUD -POST METHOD - dynamic

router.post('/add', function(req, res, next) {

  console.log(req.body)

  let newStudent = new StudentModel({
    
      // studentId: req.data.firstname,
      firstName: req.data.firstName,
      lastName: req.data.lastName,
      age:req.data.age,
      dob:req.data.dob,
      department: req.data.department

  })

  newStudent.save(function(err, newStudent){
    if (err)
    res.send(err);
    else
    res.send({status: 200, message: " User added Successfully", studentObj:newStudent})
    
  });
  

  
});



module.exports = router;
