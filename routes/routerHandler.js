import { Router } from "express";
import { handleAddApp, handleGetApps } from "../controllers/apiController.js";

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  res.send("Test");
});

apiRouter.get("/allapps", handleGetApps);

apiRouter.post("/newApp", handleAddApp);

export { apiRouter };
