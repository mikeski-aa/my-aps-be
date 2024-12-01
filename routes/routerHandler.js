import { Router } from "express";
import { getApps } from "../services/appServices";

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  res.send("Test");
});

apiRouter.get("/allapps", async (req, res) => {
  const data = await getApps();

  return res.json(data);
});

export { apiRouter };
