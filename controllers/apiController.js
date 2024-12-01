import { addApp, getApps } from "../services/appServices.js";

async function handleGetApps(req, res, next) {
  const data = await getApps();

  return res.json(data);
}

async function handleAddApp(req, res, next) {
  const response = await addApp(req.body.companyName, req.body.location);

  return res.json(response);
}

export { handleGetApps, handleAddApp };
