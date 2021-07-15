import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import apiIndexRouter from "./api/routes";

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "../public/build")));
app.use("/api/v1/", apiIndexRouter);
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname + "/public/build/index.html"));
});

export default app;
