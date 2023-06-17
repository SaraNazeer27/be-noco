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

router.get("/:id", async (req, res) => {
  try {
    const apiUser = await api.find({ _id: req.params.id });
    console.log(apiUser);
    // res.send(apiApplication);
    res.json(apiUser[0]);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedApi = await api.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedApi) {
      return res.status(404).json({ message: "API not found" });
    }

    res.json(updatedApi);
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ message: "Error updating data" });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);

  const {
    fname,
    selectedOption,
    webURI,
    tries,
    description,
    webServices,
    type,
    basicAuthentication,
    nameSpace,

    selectedOptionSoapType,
    webServiceName,
    responseTime,
    messageSoap,
    action,
    selectedOptionContentType,
    selectedOptionRestType,
    methodAddress,
    webServiceDescription,

    parameterName,
    parameterType,
    elementPath,
    dataType,

    responseParameterName,
    responseParameterType,
    responseElementPath,
    dataTypeResponse,
    codeResponse,

    selectedAuthentication,
    username,
    password,
    showBasic,
  } = req.body;

  const newApi = new api({
    fname,
    selectedOption,
    webURI,
    tries,
    description,
    webServices,
    type,
    basicAuthentication,
    nameSpace,

    selectedOptionSoapType,
    webServiceName,
    responseTime,
    messageSoap,
    action,
    selectedOptionContentType,
    selectedOptionRestType,
    methodAddress,
    webServiceDescription,

    parameterName,
    parameterType,
    elementPath,
    dataType,

    responseParameterName,
    responseParameterType,
    responseElementPath,
    dataTypeResponse,
    codeResponse,

    selectedAuthentication,
    username,
    password,
    showBasic,
  });

  await newApi.save();
  console.log(newApi);
  res.send("created");
});

module.exports = router;
