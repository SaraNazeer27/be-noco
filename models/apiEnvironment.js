// const mongoose = require("mongoose");

// const apiSchema = new mongoose.Schema({
//   type: { type: String },
// });

// module.exports = mongoose.model("api", apiSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: String,
  selectedOption: String,
  webURI: String,
  code: Number,
  quantity: Number,
  description: String,
  type: String,
  pack: String,
});

module.exports = mongoose.model("api", userSchema);
