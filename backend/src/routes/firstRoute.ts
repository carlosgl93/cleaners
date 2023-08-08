import express from "express";
import firstService from "../services/firstService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(firstService.getEntries());
});

router.post("/", (_req, res) => {
  res.send(200);
});

export default router;
