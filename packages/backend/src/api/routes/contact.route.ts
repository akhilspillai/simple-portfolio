import express from "express";

import * as contactController from "../controllers/contact.controller";

const router = express.Router();

router.post("/", contactController.contact);

export default router;
