import { Logger } from "./Classes/logger";

const main = (): void => {
  const logger = Logger.getInstance();
  logger.info("Application started.");
  logger.error("An error occurred.");
  logger.debug("Debugging information.");

  const anotherLogger = Logger.getInstance();
  console.log(logger === anotherLogger);
};

main();
