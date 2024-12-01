import express from "express";
import { createServer } from "node:http";
import { apiRouter } from "./routes/routerHandler.js";

const app = express();
const server = createServer(app);

// parsing json bodies
app.use(express.json());

app.use("/", apiRouter);

// SETTING PORT
const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server running on port 3000");
});
