import express from "express";

import * as contactService from "../../services/contact.service";
import logger from "../../util/logger";

export async function contact(
  req: express.Request,
  res: express.Response
): Promise<void> {
  const { name, email, message } = req.body;
  try {
    contactService.sendEmail(name, email, message);
    res.status(200).json({});
  } catch (err) {
    logger.error("Error sending email", err);
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.sendStatus(500);
  }
}
