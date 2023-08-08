const nodemailer = require("nodemailer");
import * as aws from "@aws-sdk/client-ses";
import config from "../utils/config";

const ses = new aws.SES({
  apiVersion: "2010-12-01",
  region: "ap-southeast-2",
  credentials: {
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY!,
    accessKeyId: config.AWS_ACCESS_KEY!,
  },
});

const sendEmail = async (name: string, phone: string, address: string) => {
  const transporter = nodemailer.createTransport({
    SES: { ses, aws },
  });

  const mailOptions = {
    from: "lautuscleaningperth@gmail.com",
    to: "lautuscleaningperth@gmail.com",
    subject: "New cleaning customer to contact!",
    text: `Call ${name} at ${phone}, he/she lives at ${address}`,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(`${error} sending the email`);
  }
};

export default {
  sendEmail,
};
