import { Injectable } from '@nestjs/common';
import { LogConfig } from 'src/interfaces/LogConfig';
import { Logger } from 'tslog';

@Injectable()
export class AppLogger {
  private logger: Logger<LogConfig>;

  constructor() {
    this.logger = new Logger({ name: 'AppLogger' } as LogConfig);
  }

  log(...args: unknown[]) {
    this.logger.info(...args);
  }

  warn(...args: unknown[]) {
    this.logger.warn(...args);
  }

  error(...args: unknown[]) {
    this.logger.error(...args);
  }

  debug(...args: unknown[]) {
    this.logger.debug(...args);
  }
}
