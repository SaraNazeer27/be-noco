const mongoose = require("mongoose");

const eventConfigurationSchema = new mongoose.Schema({
  type: { type: String },
});

module.exports = mongoose.model(
  "event_configuration",
  eventConfigurationSchema
);
