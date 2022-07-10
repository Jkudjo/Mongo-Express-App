const mongoose = require("mongoose");

var studentSchema = mongoose.Schema(
  {
    studentId: Number,
    firstName: String,
    LastName: String,
    age:Number,
    dob:String,
    department: String
  }
  );
  
  var StudentModel = mongoose.model("Student",studentSchema);

  module.exports = StudentModel;