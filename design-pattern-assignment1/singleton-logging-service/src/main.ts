import { Logger } from "./Classes/logger";

const logger = Logger.getInstance();
logger.info("Application started.");
logger.error("An error occurred.");
logger.debug("Debugging information.");

const anotherLogger = Logger.getInstance();
console.log(logger === anotherLogger);
