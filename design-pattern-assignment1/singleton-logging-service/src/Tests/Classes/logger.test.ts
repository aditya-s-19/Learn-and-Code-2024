const { Logger } = require("../../Classes/logger");
const { LogLevel } = require("../../Enums/log-level.enum");

class TestLogger extends Logger {
  public static resetInstance(): void {
    super.resetInstance();
  }
}

describe("Logger Singleton", () => {
  let testLogger;

  beforeEach(() => {
    process.env.ENABLE_DEBUG = "true";
    TestLogger.resetInstance();
    testLogger = TestLogger.getInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should log a debug message when debug is enabled", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    testLogger.debug("Test debug message");

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(`[${LogLevel.DEBUG}`));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Test debug message"));
  });

  it("should not log a debug message when debug is disabled", () => {
    process.env.ENABLE_DEBUG = "false";
    TestLogger.resetInstance();
    const loggerWithDebugDisabled = TestLogger.getInstance();
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    loggerWithDebugDisabled.debug("This should not be logged");
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it("should log an info message", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    testLogger.info("Test info message");

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(`[${LogLevel.INFO}`));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Test info message"));
  });

  it("should log an error message", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    testLogger.error("Test error message");

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(`[${LogLevel.ERROR}`));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Test error message"));
  });

  it("should return the same instance of Logger", () => {
    const logger = Logger.getInstance();
    const anotherLogger = Logger.getInstance();
    expect(logger).toBe(anotherLogger);
  });
});
