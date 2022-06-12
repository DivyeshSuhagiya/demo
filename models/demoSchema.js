
var mongoose = require("mongoose");

var demoSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: "",
      trim: true,
    },
    lastName: {
      type: String,
      default: "",
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

var demo = mongoose.model("demoSchema", demoSchema);
module.exports = demo;
