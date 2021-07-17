import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import apiIndexRouter from "./api/routes";
import logger from "./util/logger";
import { HttpError } from "http-errors";

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static("public"));
app.use("/api/v1/", apiIndexRouter);

// Capture 500 errors
app.use((err: HttpError, req: Request, res: Response) => {
  res.status(err.status || 500).json({ error: "Oops! Something went wrong." });
  logger.error(
    `${err.status || 500} - ${res.statusMessage} - ${err.message} - ${
      req.originalUrl
    } - ${req.method} - ${req.ip}`
  );
});

// Capture 404 erors
app.use((req, res) => {
  res.status(404).send("PAGE NOT FOUND");
  logger.error(
    `404 - ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
  );
});

export default app;
