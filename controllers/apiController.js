import {
  addApp,
  addAppRecruiting,
  deleteApp,
  getApps,
  resetAppDate,
  updateAppDate,
  updateAppStatusOnly,
} from "../services/appServices.js";

// get coding applications
async function handleGetCodingApps(req, res, next) {
  const data = await getApps("coding");

  return res.json(data);
}

// get recruiting apps
async function handleGetRecApps(req, res, next) {
  const data = await getApps("recruiting");

  return res.json(data);
}

// add coding job
async function handleAddApp(req, res, next) {
  const response = await addApp(req.body.companyName, req.body.location);

  return res.json(response);
}

// add recruiting job
async function handleAddRecJob(req, res, next) {
  const response = await addAppRecruiting(
    req.body.companyName,
    req.body.location
  );

  return res.json(response);
}

async function handleDeleteApp(req, res, next) {
  const response = await deleteApp(req.params.id);

  return res.json(response);
}

async function handleUpdateApp(req, res, next) {
  console.log(req.body.stage);
  console.log(req.body.date);
  if (req.body.date == null || req.body.date == "1999-12-31T23:00:00.000Z") {
    const response = await updateAppDate(req.params.id, req.body.stage);
    return res.json(response);
  } else if (req.body.stage === "Applied") {
    console.log("I should go here");
    const response = await resetAppDate(req.params.id);
    return res.json(response);
  } else {
    const response = await updateAppStatusOnly(req.params.id, req.body.stage);
    return res.json(response);
  }
}

export {
  handleGetCodingApps,
  handleAddApp,
  handleDeleteApp,
  handleUpdateApp,
  handleAddRecJob,
};
