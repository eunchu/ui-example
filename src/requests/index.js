import { factory as libraryAPIFactory } from "./library";

import { log, processResponse$ } from "./utils";

const dependencies = {
  baseUrl: "http://192.168.0.92:9082/ba",
  log,
  processResponse$,
};

const library = libraryAPIFactory(dependencies);

export { library };
