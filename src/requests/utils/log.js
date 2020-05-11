import { logger } from "../../loggers";

export const log = (prefix, url, body, headers) =>
  logger.log(prefix, "url:", url, "body:", body, "headers:", headers);
