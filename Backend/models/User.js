const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type :  String,
    required : true
  },
  name : {
    type :  String,
    required : true
  },
  organization : {
    type :  String,
    required : true
  },
  designation : {
    type : String,
    required : true
  },
  states : {
    type : Array
  },
  districts : {
    type : Array
  },
  children : {
    type : Array
  }
},
{
  versionKey : false
});

module.exports = mongoose.model("User", userSchema);