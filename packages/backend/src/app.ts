import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import apiIndexRouter from "./api/routes";

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(cors());
app.use(logger(process.env.NODE_ENV == "production" ? "")); // TODO: remove this logger
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static("public"));
app.use("/api/v1/", apiIndexRouter);
app.get("*", (_, res) => {
  res.sendFile("public/index.html");
});

export default app;
