const express = require("express");
const cors = require("cors");
const eventtypes = require("./routes/eventTypes");
const eventconfigure = require("./routes/eventConfigure");
const connectToDatabase = require("./utils/database");

const app = express();
const PORT = process.env.PORT || 3001;

connectToDatabase(); // Establish MongoDB connection

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Working API");
});

app.use("/api/eventtypes", eventtypes);
app.use("/api/eventconfigure", eventconfigure);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
