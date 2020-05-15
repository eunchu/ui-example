import { listLibraries$ as _listLibraries$ } from "./list-libraries";
import { readLibrary$ as _readLibrary$ } from "./read-library";

export const factory = ({ baseUrl, log, processResponse$ }) => {
  const dependencies = {
    baseUrl: "http://192.168.0.92:9082/ba/lib",
    log,
    processResponse$,
  };

  const listLibraries$ = _listLibraries$(dependencies);
  const readLibrary$ = _readLibrary$(dependencies);

  return {
    listLibraries$,
    readLibrary$,
  };
};
