import { createLogger, format, transports } from "winston";

const { Console } = transports;

const logger = createLogger({
  level: process.env.NODE_ENV == "production" ? "info" : "debug", // TODO: change this to error for production
});

const errorStackFormat = format((info) => {
  if (info.stack) {
    console.log("Error", info.stack);
    return false;
  }
  return info;
});

const consoleTransport = new Console({
  format: format.combine(
    format.colorize(),
    format.simple(),
    errorStackFormat()
  ),
});
logger.add(consoleTransport);

export default logger;
