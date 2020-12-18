const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const districtSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  state : {
      type : String,
      required : true
  }
},
{
    versionKey: false
});

module.exports = mongoose.model("District", districtSchema);