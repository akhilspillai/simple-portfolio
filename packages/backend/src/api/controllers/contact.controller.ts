import express from "express";

import * as contactService from "../../services/contact.service";
import logger from "../../util/logger";
import { validate } from "../../util/util";

export async function contact(
  req: express.Request,
  res: express.Response
): Promise<void> {
  if (!validate(req.body)) {
    res.status(400).json({ error: "Invalid request" });
    return;
  }
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
