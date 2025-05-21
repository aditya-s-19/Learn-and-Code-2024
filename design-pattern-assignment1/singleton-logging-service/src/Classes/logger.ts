import { LogLevel } from "../Utils/Enums/log-level.enum";
import { LoggerConfig } from "../Interfaces/logger-config";
import * as dotenv from "dotenv";

dotenv.config();

export class Logger {
  private static instance: Logger | null = null;
  private readonly config: LoggerConfig;

  private constructor(config: LoggerConfig) {
    this.config = config;
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      const enableDebug = process.env.ENABLE_DEBUG === "true";
      Logger.instance = new Logger({ enableDebug });
    }
    return Logger.instance;
  }

  protected static resetInstance(): void {
    Logger.instance = null;
  }

  public info(message: string): void {
    this.logMessage(LogLevel.INFO, message);
  }

  public error(message: string): void {
    this.logMessage(LogLevel.ERROR, message);
  }

  public debug(message: string): void {
    if (this.config.enableDebug) {
      this.logMessage(LogLevel.DEBUG, message);
    }
  }

  private logMessage(level: LogLevel, message: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[${level} - ${timestamp}]: ${message}`);
  }
}
