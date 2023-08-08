import express from "express";
import emailService from "../services/emailService";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, phone, address } = req.body;
  console.log(req.body);
  try {
    console.log("sending email");
    const email = await emailService.sendEmail(name, phone, address);
    console.log(email);
    res.sendStatus(200);
  } catch (error) {
    console.log(`error sending email ${error}`);
    res.sendStatus(500);
  }
});

export default router;
