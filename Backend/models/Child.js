const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dob : {
      type : String,
      required :  true
  },
  sex : {
      type : String,
      required : true
  },
  father : {
      type : String,
      required : true
  },
  mother : {
      type : String,
      required : true
  },
  state : {
      type : String,
      required : true
  },
  district : {
      type : String,
      required : true
  },
  avatar : {
      type : String
  }
},{
    versionKey: false
});

module.exports = mongoose.model("Child", childSchema);