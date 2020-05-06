import { makeLogger } from './make-logger';
import { LOG_LEVEL, LOG_FUNCS } from './consts';

const logger = makeLogger({ LOG_LEVEL, LOG_FUNCS });
process.env.NODE_ENV === 'development'
  ? logger.setLevel(LOG_LEVEL.DEBUG)
  : logger.setLevel(LOG_LEVEL.SILENT);

let loggerName = 'logger';
while (true) {
  if (!window[loggerName]) {
    window.logger = logger;
    break;
  }

  loggerName = `_${loggerName}_`
}

export { logger };