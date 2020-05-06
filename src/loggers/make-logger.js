import {
  LOG_LEVEL,
  LOG_FUNCS
} from './consts';

const makeLoggerFunction = (state, level, f) => (...args) => {
  if (state.level > level) return;
  return f(...args);
}

const checkIsNumvericLevel = level =>
  Number.isInteger(level) || level === Infinity;

const defaultDependencies = {
  LOG_LEVEL,
  LOG_FUNCS
};

export function makeLogger({
  LOG_LEVEL,
  LOG_FUNCS
} = defaultDependencies) {
  const state = {
    level: LOG_LEVEL.SILENT
  };

  const setLevel = level => {
    if (!checkIsNumvericLevel(level)) level = LOG_LEVEL[level];
    state.level = level;
    return level;
  };
  const getLevel = () => LOG_LEVEL[state.level];

  const debug = makeLoggerFunction(state, LOG_LEVEL.DEBUG, LOG_FUNCS.DEBUG);
  const log = makeLoggerFunction(state, LOG_LEVEL.LOG, LOG_FUNCS.LOG);
  const warn = makeLoggerFunction(state, LOG_LEVEL.WARN, LOG_FUNCS.WARN);
  const error = makeLoggerFunction(state, LOG_LEVEL.ERROR, LOG_FUNCS.ERROR);

  return {
    LOG_LEVEL,
    setLevel,
    getLevel,
    debug,
    log,
    warn,
    error
  }
}