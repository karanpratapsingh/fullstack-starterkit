import winston, { Logger, Logform } from 'winston';
import { join } from 'path';
import Config from '@backend/config';

const { logPath } = Config;

class LoggerUtils {
  private static instance: Logger;

  private constructor() {
    const logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.json()
      ),
      transports: [
        new winston.transports.File({ filename: join(logPath, 'combined.log') }),
        new winston.transports.File({ filename: join(logPath, 'error.log'), level: 'error' })
      ]
    });

    if (process.env.NODE_ENV !== 'production') {
      logger.add(
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.errors({ stack: true }),
            winston.format.timestamp(),
            winston.format.colorize(),
            winston.format.printf(this.logTransform)
          )
        })
      );
    }

    LoggerUtils.instance = logger;
  }

  static getInstance(): Logger {
    if (!LoggerUtils.instance) {
      new LoggerUtils();
    }

    return LoggerUtils.instance;
  }

  private logTransform = (info: Logform.TransformableInfo): string => {
    const { level, message } = info;
    return `${level} ${message}`;
  };
}

const logger = LoggerUtils.getInstance();

export { Logger, logger };
