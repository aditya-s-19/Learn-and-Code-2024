export abstract class Logger {
  public static error(message: string, ...optionalParams: any[]): void {
    console.error(`[ERROR] ${new Date().toISOString()}: ${message}`, ...optionalParams);
  }

  public static warn(message: string, ...optionalParams: any[]): void {
    console.warn(`[WARN] ${new Date().toISOString()}: ${message}`, ...optionalParams);
  }

  public static info(message: string, ...optionalParams: any[]): void {
    console.info(`[INFO] ${new Date().toISOString()}: ${message}`, ...optionalParams);
  }

  public static debug(message: string, ...optionalParams: any[]): void {
    console.log(`[DEBUG] ${new Date().toISOString()}: ${message}`, ...optionalParams);
  }

  public static log(message: string, ...optionalParams: any[]): void {
    this.info(message, ...optionalParams);
  }
}
