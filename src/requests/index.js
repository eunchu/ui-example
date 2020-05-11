import { BASE_API_URL } from "../consts";

import { factory as libraryAPIFactory } from "./library";

import { log, processResponse$ } from "./utils";

const dependencies = {
  baseUrl: BASE_API_URL,
  log,
  processResponse$,
};

const library = libraryAPIFactory(dependencies);

export { library };
