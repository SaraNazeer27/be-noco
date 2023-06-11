const mongoose = require("mongoose");

const workflowListSchema = new mongoose.Schema({
  type: { type: String },
});

module.exports = mongoose.model("workflow_list", workflowListSchema);
