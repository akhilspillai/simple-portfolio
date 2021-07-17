import nodemailer from "nodemailer";
import logger from "../util/logger";

export async function sendEmail(
  name: string,
  email: string,
  message: string
): Promise<void> {
  const mailConfig = getMailConfig();
  const transporter = nodemailer.createTransport(mailConfig);

  const mailOptions = {
    to: process.env.EMAIL_RECEIVER,
    subject: `Message from ${name} (${email})`,
    text: message,
  };
  const info = await transporter.sendMail(mailOptions);
  if (process.env.NODE_ENV != "production") {
    logger.debug("Preview url: " + nodemailer.getTestMessageUrl(info));
  } else {
    logger.debug("Email sent: " + info.response);
  }
}

function getMailConfig() {
  if (process.env.NODE_ENV != "production") {
    return {
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    };
  }
  return {
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  };
}
