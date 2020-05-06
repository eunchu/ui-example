export const LOG_LEVEL = {
  DEBUG: 0,
  LOG: 0,
  WARN: 1,
  ERROR: 2,
  SILENT: Infinity,
  0: "LOG",
  1: "WARN",
  2: "ERROR",
  [Infinity]: "SILENT"
}

export const LOG_FUNCS = {
  DEBUG: console.log,
  LOG: console.log,
  WARN: console.warn,
  ERROR: console.error
}