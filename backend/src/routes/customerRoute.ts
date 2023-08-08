import express from "express";
import { Client } from "../models/client";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, phone, address } = req.body;
  const newClient = {
    name,
    phone,
    address,
  };

  const client = new Client({
    ...newClient,
  });
  const result = await client.save();
  res.status(201).json(result).end();
});

export default router;
