const mongoose = require("mongoose");

// Connection to MongoDB
const connectToDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://login:Ulfath+123@cluster0.dhuj3ry.mongodb.net/noco?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    )
    .then(() => {
      console.log("connection successful");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err.message);
      process.exit(1);
    });
};

module.exports = connectToDatabase;
