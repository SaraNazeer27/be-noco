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
    completeAddress,
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

  // let { type } = req.body;

  // if (!type) {
  //   type = "REST"; // Set type to "REST" if it is empty
  // }

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
    completeAddress,
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

router.put("/:id", async (req, res) => {
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
    completeAddress,
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

  try {
    const updatedApi = await api.findOneAndUpdate(
      { _id: req.params.id }, // Find the document by ID
      {
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
        completeAddress,
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
      },
      { new: true } // Return the updated document
    );

    res.json(updatedApi);
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ message: "Error updating data" });
  }
});

module.exports = router;
