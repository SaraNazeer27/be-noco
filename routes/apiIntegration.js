const express = require("express");
const router = express.Router();
const api = require("../models/apiEnvironment");

router.get("/", async (req, res) => {
  try {
    const apiUser = await api.find({});
    console.log(apiUser);
    // res.send(apiApplication);
    res.json(apiUser);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);

  const {
    fname,
    selectedOption,
    webURI,
    code,
    quantity,
    description,
    type,
    pack,
    sname,
    nameSpaces,
  } = req.body;

  const newApi = new api({
    fname,
    selectedOption,
    webURI,
    code,
    quantity,
    description,
    type,
    pack,
    nameSpaces,
    sname,
  });

  await newApi.save();
  console.log(newApi);
  res.send("created");
});

module.exports = router;
