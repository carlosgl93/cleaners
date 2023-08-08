import config from "./utils/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import firstRouter from "./routes/firstRoute";
import emailRouter from "./routes/emailRoute";
import customersRouter from "./routes/customerRoute";

import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = config.PORT;

mongoose.set("strictQuery", false);
console.log(`connecting to ${config.MONGODB_URI}`);

mongoose
  .connect(config.MONGODB_URI!)
  .then(() => {
    console.log("Connected to db successfully");
  })
  .catch((error) => {
    console.log(`error connecting to db: ${error.message}`);
    return;
  });

app.get("/", (_req, res) => {
  console.log("working");
  res.send("working");
});

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});
app.use("/api/email", emailRouter);
app.use("/api/customers", customersRouter);
app.use("/api/firstService", firstRouter);

app.listen(PORT, () => {
  console.log(`SERVER LISTENNING ON PORT ${PORT}`);
});
