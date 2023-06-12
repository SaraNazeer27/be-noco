const express = require("express");
const router = express.Router();
const workflow_list = require("../models/workflowList");

router.get("/", async (req, res) => {
  try {
    const users = await workflow_list.find({});
    console.log(users);
    res.send(users);
    // res.json(users);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

module.exports = router;

//WOrkflow
