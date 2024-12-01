import {
  addApp,
  deleteApp,
  getApps,
  resetAppDate,
  updateAppDate,
  updateAppStatusOnly,
} from "../services/appServices.js";

async function handleGetApps(req, res, next) {
  const data = await getApps();

  return res.json(data);
}

async function handleAddApp(req, res, next) {
  const response = await addApp(req.body.companyName, req.body.location);

  return res.json(response);
}

async function handleDeleteApp(req, res, next) {
  const response = await deleteApp(req.params.id);

  return res.json(response);
}

async function handleUpdateApp(req, res, next) {
  if (req.body.date === null) {
    const response = await updateAppDate(req.params.id, req.body.status);
    return res.json(response);
  } else if (req.body.status === "Applied") {
    const response = await resetAppDate(req.params.id);
    return res.json(response);
  } else {
    const response = await updateAppStatusOnly(req.params.id, req.body.status);
    return res.json(response);
  }
}

export { handleGetApps, handleAddApp, handleDeleteApp, handleUpdateApp };
