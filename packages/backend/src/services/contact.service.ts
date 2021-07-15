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
    from: "stellarengineindia@gmail.com",
    to: "akhilspillai@gmail.com",
    subject: `Message from ${name} (${email})`,
    text: message,
  };
  const info = await transporter.sendMail(mailOptions);
  if (process.env.NODE_ENV != "prod") {
    logger.debug("Preview url:", nodemailer.getTestMessageUrl(info));
  } else {
    logger.debug("Email sent: " + info.response);
  }
}

function getMailConfig() {
  if (process.env.NODE_ENV != "prod") {
    return {
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "nathanial29@ethereal.email",
        pass: "tq7dTzuudbfvYHCwfN",
      },
    };
  }
  return {
    service: "gmail",
    auth: {
      user: "stellarengineindia@gmail.com",
      pass: "fkxjbzosnmoazqpo",
    },
  };
}
