import { Router } from "express";

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  res.send("Test");
});

export { apiRouter };
