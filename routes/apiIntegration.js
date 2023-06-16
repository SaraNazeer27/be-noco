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
    type,
    quantity,
    description,
    selectedOptionRestType,
    fnameRest,
    webURIRestMethod,
    webURIRestComplete,
    quantityRest,
    descriptionRest,
    name,
    parameterType,
    elementPath,
    number,
    dataType,
    lname,
    selectedType,
    codeAddress,
    showBasic,
    username,
    password,
    selectedAuthentication,
    webServices,
    basicAuthenticationRest,

    selectedOptionSoapType,
    snameSoap,
    quantitySoap,
    messageSoap,
    action,
    requestParametersSoap,
    responseParametersSoap,

    sname,
    swebURI,
    squantity,
    sdescription,
    webServicesSoap,
    stype,
    basicAuthenticationSoap,

    nameSoap,
    sparameterTypeSoap,
    selementPathSoap,
    sdataTypeSoap,

    lnameSoap,
    parameterTypeSoap,
    elementPathSoap,
    dataTypeSoap,

    showSBasic,
    susername,
    spassword,

    selectedAuthenticationSoap,
    usernameSoap,
    passwordSoap,
  } = req.body;

  // let { type } = req.body;

  // if (!type) {
  //   type = "REST"; // Set type to "REST" if it is empty
  // }

  const newApi = new api({
    fname,
    type,
    selectedOption,
    webURI,
    quantity,
    description,
    selectedOptionRestType,
    fnameRest,
    webURIRestMethod,
    webURIRestComplete,
    quantityRest,
    descriptionRest,
    name,
    parameterType,
    elementPath,
    number,
    dataType,
    lname,
    selectedType,
    codeAddress,
    showBasic,
    username,
    password,
    selectedAuthentication,
    webServices,
    basicAuthenticationRest,

    selectedOptionSoapType,
    snameSoap,
    quantitySoap,
    messageSoap,
    action,
    requestParametersSoap,
    responseParametersSoap,

    sname,
    swebURI,
    squantity,
    sdescription,
    webServicesSoap,
    stype,
    basicAuthenticationSoap,

    lnameSoap,
    parameterTypeSoap,
    elementPathSoap,
    dataTypeSoap,

    showSBasic,
    susername,
    spassword,

    selectedAuthenticationSoap,
    usernameSoap,
    passwordSoap,

    nameSoap,
    sparameterTypeSoap,
    selementPathSoap,
    sdataTypeSoap,
  });

  await newApi.save();
  console.log(newApi);
  res.send("created");
});

module.exports = router;
