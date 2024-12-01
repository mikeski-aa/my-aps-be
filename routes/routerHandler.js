import { Router } from "express";
import {
  handleAddApp,
  handleDeleteApp,
  handleGetApps,
} from "../controllers/apiController.js";

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  res.send("Test");
});

apiRouter.get("/allapps", handleGetApps);

apiRouter.post("/newApp", handleAddApp);

apiRouter.delete("/deleteapp/:id", handleDeleteApp);

export { apiRouter };
